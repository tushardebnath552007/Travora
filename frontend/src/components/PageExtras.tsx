import React, { useState } from 'react';
import { useTravora } from '../context/TravoraContext';
import { GALLERY_IMAGES, TESTIMONIALS, TRAVEL_FAQS, TRAVEL_TIPS } from '../data/gallery';
import { Camera, Star, ArrowRight, ChevronDown, ShieldCheck, Compass, Sparkles } from 'lucide-react';

/* Photo journal gallery strip with lightbox */
export const PhotoJournal: React.FC<{ title?: string; subtitle?: string; count?: number }> = ({
  title = 'Field Photo Journal',
  subtitle = 'Captured moments from our globetrotters across mountains, coasts, and citadels.',
  count = 8,
}) => {
  const { openLightbox, setActiveTab } = useTravora();
  const photos = GALLERY_IMAGES.slice(0, count);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-400 uppercase mb-1 font-mono">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Visual Dispatches</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">{title}</h2>
          <p className="text-base sm:text-lg text-neutral-300 mt-2 font-light max-w-2xl">{subtitle}</p>
        </div>
        <button
          onClick={() => { setActiveTab('explore'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 text-sm font-black text-cyan-300 hover:text-amber-300 tracking-wider uppercase group cursor-pointer transition-colors shrink-0"
        >
          <span>Visit These Places</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {photos.map((p) => (
          <div
            key={p.title}
            onClick={() => openLightbox(p.url, `${p.title} · ${p.location}`)}
            className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/70 cursor-pointer shadow-xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1"
          >
            <img src={p.url} alt={p.title} referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-300 border border-amber-400/30 font-mono uppercase">{p.tag}</span>
            <div className="absolute bottom-0 inset-x-0 p-4">
              <h4 className="text-sm sm:text-base font-black text-white font-display group-hover:text-cyan-300 transition-colors leading-tight">{p.title}</h4>
              <p className="text-[11px] text-neutral-300 font-mono mt-0.5">{p.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* Testimonials wall */
export const TestimonialsStrip: React.FC = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    <div>
      <div className="flex items-center gap-2 text-xs font-black tracking-widest text-amber-400 uppercase mb-1 font-mono">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <span>Voices of Voyagers</span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">What Explorers Say</h2>
      <p className="text-base sm:text-lg text-neutral-300 mt-2 font-light">Authentic experiences shared by discerning travelers who journeyed with us.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t) => (
        <div key={t.name} className="rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/20 hover:border-amber-400/60 p-7 flex flex-col justify-between gap-6 shadow-xl transition-all hover:-translate-y-1.5">
          <div>
            <div className="text-amber-400 tracking-widest mb-3">★★★★★</div>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">“{t.quote}”</p>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-300 flex items-center justify-center text-xs font-black text-slate-950">{t.initials}</div>
            <div>
              <div className="text-sm font-bold text-white">{t.name}</div>
              <div className="text-[11px] text-neutral-400 font-mono">{t.trip}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* FAQ accordion */
export const FaqStrip: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-cyan-300 uppercase mb-1 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Expert Guidance</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">Travel Wisdom & FAQ</h2>
        <p className="text-base text-neutral-300 mt-2 font-light">Essential answers on packing, booking flexibility, and concierge assistance.</p>
      </div>
      <div className="space-y-3">
        {TRAVEL_FAQS.map((f, i) => (
          <div key={f.q} className={`rounded-2xl border backdrop-blur-xl transition-all ${open === i ? 'border-cyan-400/60 bg-slate-950/90' : 'border-white/10 bg-slate-950/70 hover:border-white/25'}`}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer">
              <span className="text-sm sm:text-base font-bold text-white">{f.q}</span>
              <ChevronDown className={`w-5 h-5 text-cyan-300 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && <p className="px-5 pb-5 text-sm text-neutral-300 leading-relaxed font-light">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

/* Travel tips grid */
export const TravelTipsStrip: React.FC = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    <div>
      <div className="flex items-center gap-2 text-xs font-black tracking-widest text-emerald-300 uppercase mb-1 font-mono">
        <Compass className="w-4 h-4" />
        <span>Pro Field Manual</span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">Seasoned Traveler Tips</h2>
      <p className="text-base sm:text-lg text-neutral-300 mt-2 font-light">Hard-won wisdom from 18,500+ nomads across the subcontinent and beyond.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {TRAVEL_TIPS.map((t) => (
        <div key={t.title} className="rounded-2xl bg-slate-950/80 border border-white/10 hover:border-emerald-400/50 p-6 space-y-2 transition-all hover:-translate-y-1">
          <span className="text-3xl">{t.icon}</span>
          <h4 className="text-base font-black text-white font-display">{t.title}</h4>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">{t.body}</p>
        </div>
      ))}
    </div>
  </section>
);

/* Grand CTA banner */
export const CtaBanner: React.FC = () => {
  const { setActiveTab, showToast } = useTravora();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-slate-950/90 to-cyan-500/15 backdrop-blur-2xl p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(251,191,36,0.25) 1px, transparent 0)', backgroundSize: '26px 26px' }} />
        <div className="relative space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-amber-300 uppercase font-mono">
            <Sparkles className="w-4 h-4" />
            <span>Bespoke Concierge Awaits</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">READY FOR YOUR NEXT ODYSSEY?</h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light">Private chauffeurs, authentic royal retreats, and lifetime memories — curated around your budget and pace.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button onClick={() => { setActiveTab('planner'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider hover:from-cyan-300 hover:to-amber-200 transition-all shadow-lg cursor-pointer">Create Custom Itinerary →</button>
            <button onClick={() => showToast('Concierge notified — expect a call within 2 hours! 📞', 'info')} className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400/60 text-white text-sm font-bold uppercase tracking-wider transition-all cursor-pointer">Talk to Concierge</button>
          </div>
        </div>
      </div>
    </section>
  );
};
