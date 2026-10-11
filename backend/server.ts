import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import express from 'express';
import { GoogleGenAI, Type } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables. Prefer .env.local (as documented in README),
// falling back to .env. dotenv never overwrites already-set values.
dotenv.config({ path: path.resolve(__dirname, '.env.local') });
dotenv.config({ path: path.resolve(__dirname, '.env') });

const PORT = Number(process.env.PORT ?? 3000);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';
const DIST_DIR = path.resolve(__dirname, 'dist');

// Lazily initialise the Gemini client. A placeholder key (the .env.example
// default) is treated as "not configured" so the server still boots and only
// fails when an AI endpoint is actually called.
const isKeyConfigured = Boolean(GEMINI_API_KEY) && GEMINI_API_KEY !== 'MY_GEMINI_API_KEY';
let ai: GoogleGenAI | null = null;
if (isKeyConfigured) {
  ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
}

const app = express();
app.use(express.json({ limit: '1mb' }));

// ---- Types (mirror src/types/travel.ts) ----------------------------------
type TravelType = 'Family' | 'Couple' | 'Solo' | 'Friends';

interface ItinerarySlot {
  time: 'Morning' | 'Afternoon' | 'Sunset' | 'Evening';
  title: string;
  location: string;
  activity: string;
  estimatedCost: number;
}
interface ItineraryDay {
  day: number;
  title: string;
  slots: ItinerarySlot[];
}
interface GeneratedItinerary {
  id: string;
  destinationId: string;
  destinationName: string;
  durationDays: number;
  totalBudget: number;
  travelType: TravelType;
  interests: string[];
  days: ItineraryDay[];
  createdAt: string;
  notes: string;
}

// ---- Health check ---------------------------------------------------------
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'travora-backend',
    geminiConfigured: isKeyConfigured,
    model: GEMINI_MODEL,
    time: new Date().toISOString(),
  });
});

// ---- Auth: Travora accounts (in-memory demo store) --------------------------
interface StoredUser {
  id: string;
  name: string;
  email: string;
  salt: string;
  hash: string;
  createdAt: string;
}

const usersByEmail = new Map<string, StoredUser>();
const tokensToEmail = new Map<string, string>();
const resetTokens = new Map<string, { email: string; expires: number }>();

const hashPassword = (password: string, salt: string) =>
  crypto.createHash('sha256').update(`${salt}:${password}`).digest('hex');

const publicUser = (u: StoredUser) => ({ id: u.id, name: u.name, email: u.email });

const getBearerEmail = (req: express.Request): string | null => {
  const header = req.headers.authorization ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  return token ? (tokensToEmail.get(token) ?? null) : null;
};

app.post('/api/auth/signup', (req, res) => {
  const { name = '', email = '', password = '' }: { name?: string; email?: string; password?: string } = req.body ?? {};
  const normEmail = email.trim().toLowerCase();
  if (!name.trim() || !normEmail || !password) {
    res.status(400).json({ error: 'Name, email, and password are all required.' });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normEmail)) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }
  if (password.length < 6) {
    res.status(400).json({ error: 'Password must be at least 6 characters.' });
    return;
  }
  if (usersByEmail.has(normEmail)) {
    res.status(409).json({ error: 'An account with this email already exists. Try logging in.' });
    return;
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const user: StoredUser = {
    id: `u-${Date.now()}`,
    name: name.trim(),
    email: normEmail,
    salt,
    hash: hashPassword(password, salt),
    createdAt: new Date().toISOString(),
  };
  usersByEmail.set(normEmail, user);
  const token = crypto.randomBytes(32).toString('hex');
  tokensToEmail.set(token, normEmail);
  res.status(201).json({ user: publicUser(user), token });
});

app.post('/api/auth/login', (req, res) => {
  const { email = '', password = '' }: { email?: string; password?: string } = req.body ?? {};
  const normEmail = email.trim().toLowerCase();
  const user = usersByEmail.get(normEmail);
  if (!user || user.hash !== hashPassword(password, user.salt)) {
    res.status(401).json({ error: 'Invalid email or password.' });
    return;
  }
  const token = crypto.randomBytes(32).toString('hex');
  tokensToEmail.set(token, normEmail);
  res.json({ user: publicUser(user), token });
});

app.get('/api/auth/me', (req, res) => {
  const authedEmail = getBearerEmail(req);
  const user = authedEmail ? usersByEmail.get(authedEmail) : undefined;
  if (!user) {
    res.status(401).json({ error: 'Not authenticated.' });
    return;
  }
  res.json({ user: publicUser(user) });
});

app.put('/api/auth/profile', (req, res) => {
  const authedEmail = getBearerEmail(req);
  const user = authedEmail ? usersByEmail.get(authedEmail) : undefined;
  if (!user) {
    res.status(401).json({ error: 'Not authenticated.' });
    return;
  }
  const { name = '', email = '' }: { name?: string; email?: string } = req.body ?? {};
  if (!name.trim()) {
    res.status(400).json({ error: 'Name cannot be empty.' });
    return;
  }
  const normEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normEmail)) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }
  if (normEmail !== user.email && usersByEmail.has(normEmail)) {
    res.status(409).json({ error: 'That email is already used by another account.' });
    return;
  }
  if (normEmail !== user.email) {
    usersByEmail.delete(user.email);
    for (const [t, em] of tokensToEmail) {
      if (em === user.email) tokensToEmail.set(t, normEmail);
    }
    user.email = normEmail;
    usersByEmail.set(normEmail, user);
  }
  user.name = name.trim();
  res.json({ user: publicUser(user) });
});

app.put('/api/auth/password', (req, res) => {
  const header = req.headers.authorization ?? '';
  const currentToken = header.startsWith('Bearer ') ? header.slice(7) : '';
  const authedEmail = getBearerEmail(req);
  const user = authedEmail ? usersByEmail.get(authedEmail) : undefined;
  if (!user) {
    res.status(401).json({ error: 'Not authenticated.' });
    return;
  }
  const { currentPassword = '', newPassword = '' }: { currentPassword?: string; newPassword?: string } = req.body ?? {};
  if (user.hash !== hashPassword(currentPassword, user.salt)) {
    res.status(401).json({ error: 'Current password is incorrect.' });
    return;
  }
  if (!newPassword || newPassword.length < 6) {
    res.status(400).json({ error: 'New password must be at least 6 characters.' });
    return;
  }
  user.salt = crypto.randomBytes(16).toString('hex');
  user.hash = hashPassword(newPassword, user.salt);
  // Keep this session, drop all others — like standard sites do.
  for (const [t, em] of tokensToEmail) {
    if (em === user.email && t !== currentToken) tokensToEmail.delete(t);
  }
  res.json({ ok: true });
});

app.post('/api/auth/logout', (req, res) => {
  const header = req.headers.authorization ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (token) tokensToEmail.delete(token);
  res.json({ ok: true });
});

app.post('/api/auth/forgot', (req, res) => {
  const { email = '' }: { email?: string } = req.body ?? {};
  const normEmail = email.trim().toLowerCase();
  const user = usersByEmail.get(normEmail);
  if (user) {
    const token = crypto.randomBytes(32).toString('hex');
    resetTokens.set(token, { email: normEmail, expires: Date.now() + 15 * 60 * 1000 });
    // Demo mode: the code is returned directly (a production site would email it).
    res.json({ ok: true, demoToken: token, demoHint: 'Demo mode: paste the code below (a live site would email it).' });
    return;
  }
  // Always respond ok so addresses can't be enumerated.
  res.json({ ok: true });
});

app.post('/api/auth/reset', (req, res) => {
  const { token = '', newPassword = '' }: { token?: string; newPassword?: string } = req.body ?? {};
  const rec = resetTokens.get(token);
  if (!rec || rec.expires < Date.now()) {
    res.status(400).json({ error: 'This reset code is invalid or expired. Request a new one.' });
    return;
  }
  if (!newPassword || newPassword.length < 6) {
    res.status(400).json({ error: 'New password must be at least 6 characters.' });
    return;
  }
  const user = usersByEmail.get(rec.email);
  if (!user) {
    res.status(400).json({ error: 'Account not found.' });
    return;
  }
  user.salt = crypto.randomBytes(16).toString('hex');
  user.hash = hashPassword(newPassword, user.salt);
  for (const [t, r] of resetTokens) {
    if (r.email === rec.email) resetTokens.delete(t);
  }
  // Sign out all sessions after a password change, like standard sites do.
  for (const [t, em] of tokensToEmail) {
    if (em === rec.email) tokensToEmail.delete(t);
  }
  res.json({ ok: true });
});

// ---- Contact inbox (in-memory demo store) -----------------------------------
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const contactInbox: ContactMessage[] = [];

app.post('/api/contact', (req, res) => {
  const { name = '', email = '', subject = 'General enquiry', message = '' }: {
    name?: string; email?: string; subject?: string; message?: string;
  } = req.body ?? {};
  if (!name.trim() || !email.trim() || !message.trim()) {
    res.status(400).json({ error: 'Name, email, and message are all required.' });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }
  contactInbox.push({
    id: `msg-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: String(subject).slice(0, 120),
    message: message.trim().slice(0, 2000),
    createdAt: new Date().toISOString(),
  });
  res.status(201).json({ ok: true });
});

// ---- AI: generate an itinerary -------------------------------------------
interface GenerateItineraryBody {
  destinationName?: string;
  destinationId?: string;
  durationDays?: number;
  budget?: number;
  travelType?: TravelType;
  interests?: string[];
}

app.post('/api/generate-itinerary', async (req, res) => {
  if (!ai) {
    res.status(503).json({
      error: 'Gemini API is not configured. Set GEMINI_API_KEY in .env.local and restart the server.',
    });
    return;
  }

  const {
    destinationName = 'the destination',
    destinationId = 'custom',
    durationDays = 5,
    budget = 50000,
    travelType = 'Solo',
    interests = [],
  }: GenerateItineraryBody = req.body ?? {};

  const prompt = [
    `Create a detailed ${durationDays}-day travel itinerary for ${destinationName}.`,
    `Travel type: ${travelType}. Total budget: ${budget} (in INR).`,
    interests.length ? `Focus on these interests: ${interests.join(', ')}.` : '',
    'For each day provide four time slots: Morning, Afternoon, Sunset, and Evening.',
    'Distribute the total budget sensibly across all activity slots so the sum roughly equals the total budget.',
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        systemInstruction:
          'You are an expert travel planner. Always respond with valid JSON matching the provided schema. Keep descriptions vivid but concise.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  slots: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        time: {
                          type: Type.STRING,
                          enum: ['Morning', 'Afternoon', 'Sunset', 'Evening'],
                        },
                        title: { type: Type.STRING },
                        location: { type: Type.STRING },
                        activity: { type: Type.STRING },
                        estimatedCost: { type: Type.INTEGER },
                      },
                      required: ['time', 'title', 'location', 'activity', 'estimatedCost'],
                    },
                  },
                },
                required: ['day', 'title', 'slots'],
              },
            },
            notes: { type: Type.STRING },
          },
          required: ['days', 'notes'],
        },
      },
    });

    const raw = response.text;
    if (!raw) {
      res.status(502).json({ error: 'Gemini returned an empty response.' });
      return;
    }

    const parsed = JSON.parse(raw) as { days: ItineraryDay[]; notes: string };
    const itinerary: GeneratedItinerary = {
      id: `itin-${Date.now()}`,
      destinationId,
      destinationName,
      durationDays,
      totalBudget: budget,
      travelType,
      interests,
      days: parsed.days ?? [],
      createdAt: new Date().toISOString().split('T')[0],
      notes: parsed.notes ?? `Custom ${travelType} itinerary for ${destinationName}.`,
    };

    res.json(itinerary);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[generate-itinerary] error:', message);
    res.status(500).json({ error: 'Failed to generate itinerary.', detail: message });
  }
});

// ---- Serve the built frontend (if present) --------------------------------
app.use(express.static(DIST_DIR));

// Vanilla multi-page site assets (shared stylesheet + app script).
// Lets the backend serve index.html, destinations.html, experiences.html, etc.
app.use('/frontend', express.static(path.resolve(__dirname, 'frontend')));

// Retired page: the standalone gallery merged back into the home experience.
app.get('/gallery.html', (_req, res) => {
  res.redirect(301, '/destinations.html');
});

// Retired page: account management now lives on the login page when signed in.
app.get('/account.html', (_req, res) => {
  res.redirect(301, '/login.html');
});

// SPA-style fallback for client-side routes, only for non-API GET requests.
app.get(/^(?!\/api\/).*/, (_req, res, next) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`TRAVORA backend running on http://localhost:${PORT}`);
  console.log(`  - Health check: http://localhost:${PORT}/api/health`);
  console.log(`  - Gemini configured: ${isKeyConfigured ? 'yes' : 'no (set GEMINI_API_KEY in .env.local)'}`);
  console.log(`  - Serving static build from: ${DIST_DIR}`);
});
