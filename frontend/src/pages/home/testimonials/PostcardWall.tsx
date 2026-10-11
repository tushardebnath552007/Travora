import React from 'react';
import { Award, Star } from 'lucide-react';

const POSTCARDS: { border: string; hoverBorder: string; postmark: string; postmarkClass: string; quote: string; sign: string; signClass: string; initial: string; avatarClass: string; name: string; trip: string; tripClass: string }[] = [
  {
    border: 'border-cyan-500/25', hoverBorder: 'hover:border-cyan-400',
    postmark: 'POSTMARK: SRINAGAR', postmarkClass: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/30',
    quote: '"The automatic 6-day Kashmir itinerary was flawless! The Dal Lake Shikara sunrise and Gulmarg cable car recommendations saved us hours of stress."',
    sign: '— With warmth from the shikara, Ananya & Rohan', signClass: 'text-amber-300',
    initial: 'R', avatarClass: 'from-cyan-400 to-amber-300',
    name: 'Rohan & Ananya', trip: 'Kashmir Couple Trip · 6 Days', tripClass: 'text-cyan-300'
  },
  {
    border: 'border-amber-500/25', hoverBorder: 'hover:border-amber-400',
    postmark: 'POSTMARK: GHOOM', postmarkClass: 'text-amber-300 bg-amber-500/10 border-amber-400/30',
    quote: '"The Travel Budget Calculator predicted our Darjeeling expenses down to 5% accuracy. Tiger Hill sunrise is something I will cherish for the rest of my life."',
    sign: '— Sipping muscatel second flush, Siddharth', signClass: 'text-amber-300',
    initial: 'S', avatarClass: 'from-amber-400 to-rose-400',
    name: 'Siddharth Sen', trip: 'Darjeeling Solo Trek · 4 Days', tripClass: 'text-amber-300'
  },
  {
    border: 'border-emerald-500/25', hoverBorder: 'hover:border-emerald-400',
    postmark: 'POSTMARK: PALOLEM', postmarkClass: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/30',
    quote: '"Found secret waterfalls in Goa and saved places to our wishlist before booking flights. The interface is stunning and feels like luxury magazine editorial."',
    sign: '— Sun-kissed by the Arabian Sea, Pooja & squad', signClass: 'text-emerald-300',
    initial: 'P', avatarClass: 'from-emerald-400 to-cyan-400',
    name: 'Pooja & Friends', trip: 'Goa Coast Escape · 5 Days', tripClass: 'text-emerald-300'
  }
];

export const PostcardWall: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div>
        <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-300 uppercase mb-1 font-mono">
          <Award className="w-4 h-4 text-amber-300" />
          <span>Field Dispatches & Postcards</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Stories from Fellow Travelers
        </h2>
        <p className="text-base text-neutral-300 mt-2 font-light">
          Authentic postmarked reflections from explorers who ventured forth with TRAVORA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTCARDS.map(card => (
          <div key={card.name} className={`p-8 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border-2 ${card.border} space-y-5 ${card.hoverBorder} transition-all hover:-translate-y-2 shadow-xl relative`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className={`font-mono-tag text-[10px] px-2 py-0.5 rounded border ${card.postmarkClass}`}>
                {card.postmark}
              </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
              {card.quote}
            </p>
            <div className={`pt-3 border-t border-white/10 font-handwriting text-lg select-none ${card.signClass}`}>
              {card.sign}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${card.avatarClass} flex items-center justify-center font-bold text-slate-950 text-xs`}>
                {card.initial}
              </div>
              <div>
                <span className="text-sm font-bold text-white block">{card.name}</span>
                <span className={`text-xs font-mono ${card.tripClass}`}>{card.trip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
