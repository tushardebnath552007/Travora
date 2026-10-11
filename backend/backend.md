# Travora Backend (FastAPI)

The API + static-site server. Organized **tab → feature → class files**, where each
tab mirrors a site page that needs server features.

```
backend/
├── main.py                  # app, tab routers, static site, SPA fallback, redirects
├── requirements.txt         # fastapi, uvicorn[standard], python-dotenv
├── server.ts                # legacy Express backend (superseded, kept for reference)
├── .env.local / .env.example
├── core/                    # shared: config · security · errors · store
├── system/health/           # router.py · service.py
├── auth/session/            # router.py · schemas.py · service.py
├── auth/recovery/           # router.py · schemas.py · service.py
├── auth/profile/            # router.py · schemas.py · service.py
├── planner/generation/      # router.py · schemas.py · service.py
└── contact/inbox/           # router.py · schemas.py · service.py
```

Static pages (destinations, experiences, budget, map, wisdom) need no API.

## Setup

```bash
py -m pip install -r backend/requirements.txt
```

## Configure (`backend/.env.local`)

| Var              | Default          | Purpose                              |
| ---------------- | ---------------- | ------------------------------------ |
| `PORT`           | `3000`           | HTTP port                            |
| `GEMINI_API_KEY` | `MY_GEMINI_API_KEY` | Enables AI itinerary generation   |
| `GEMINI_MODEL`   | `gemini-2.5-flash` | Gemini model for itineraries       |

## Run

```bash
# from project root
py -m uvicorn backend.main:app --host 0.0.0.0 --port 3000
```

Serves the built site from `frontend/dist/` + vanilla assets from `frontend/`.
Interactive API docs: `http://localhost:3000/docs`.

## Endpoints by tab

| Tab | Feature | Endpoint | Notes |
| --- | ------- | -------- | ----- |
| system | health | `GET /api/health` | status, gemini flag, model, time |
| auth | session | `POST /api/auth/signup` | 201, validates + duplicate check |
| auth | session | `POST /api/auth/login` | 401 on bad credentials |
| auth | session | `GET /api/auth/me` | Bearer token |
| auth | session | `POST /api/auth/logout` | revokes token |
| auth | recovery | `POST /api/auth/forgot` | always `ok` (no enumeration); demo returns token |
| auth | recovery | `POST /api/auth/reset` | 15-min expiring codes, wipes sessions |
| auth | profile | `PUT /api/auth/profile` | rename / change email (409 on conflict) |
| auth | profile | `PUT /api/auth/password` | verifies current, keeps current session |
| planner | generation | `POST /api/generate-itinerary` | 503 without key, Gemini JSON schema |
| contact | inbox | `POST /api/contact` | 201, validated message desk inbox |

Plus redirects: `/gallery.html` → `/destinations.html`, `/account.html` → `/login.html`.

## Notes

- Passwords: SHA-256 + per-user salt. Tokens: opaque random hex (Bearer).
- Storage is **in-memory** — users/sessions reset on restart (demo behavior).
- HTTP client is stdlib `urllib` (no extra dependency for Gemini calls).
