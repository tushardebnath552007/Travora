import React from 'react';

const PILLARS: { value: string; valueClass: string; hoverBorder: string; title: string; body: string }[] = [
  {
    value: '500+',
    valueClass: 'text-cyan-300',
    hoverBorder: 'hover:border-cyan-400/50',
    title: 'Curated Destinations',
    body: 'Hand-scouted tourist paradises, secret mountain viewpoints, and heritage kingdoms across India and the globe.'
  },
  {
    value: '100%',
    valueClass: 'text-amber-300',
    hoverBorder: 'hover:border-amber-400/50',
    title: 'Personalized Trips',
    body: 'Day-by-day smart itinerary generation tailored to your budget, travel group type, and personal interests.'
  },
  {
    value: 'Instant',
    valueClass: 'text-rose-400',
    hoverBorder: 'hover:border-rose-400/50',
    title: 'Save Your Favorites',
    body: 'Bookmark iconic places to your persistent wishlist and interactive personal bucket list with one touch.'
  },
  {
    value: 'Exact',
    valueClass: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-400/50',
    title: 'Budget Planning',
    body: 'Real-time rupee estimation across flights, stays, heritage meals, entry passes, and local souvenir shopping.'
  }
];

export const ValuePillars: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl sm:rounded-[40px] border-2 border-cyan-500/30 bg-slate-950/85 backdrop-blur-2xl p-8 sm:p-14 space-y-10 shadow-2xl">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-black tracking-widest text-cyan-400 uppercase font-mono">
            The Gold Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Why TRAVORA?
          </h2>
          <p className="text-base text-neutral-300 font-light leading-relaxed">
            We eliminate the stress of vacation research by combining high-definition visual storytelling with precision logistics and automated budgeting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          {PILLARS.map(p => (
            <div key={p.title} className={`p-6 rounded-2xl bg-white/5 border border-white/10 ${p.hoverBorder} transition-all hover:-translate-y-2 space-y-3`}>
              <div className={`text-4xl sm:text-5xl font-black font-display ${p.valueClass}`}>
                {p.value}
              </div>
              <h4 className="text-lg font-bold text-white">{p.title}</h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
