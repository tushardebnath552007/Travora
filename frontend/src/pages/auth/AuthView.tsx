import React from 'react';
import { GALLERY_IMAGES } from '../../data/gallery';
import { PhotoJournal, TestimonialsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { SessionForm } from './session/SessionForm';
import { MembershipPerks } from './perks/MembershipPerks';

export const AuthView: React.FC<{ mode: 'login' | 'signup' }> = ({ mode }) => {
  const sidePhotos = GALLERY_IMAGES.slice(0, 4);

  return (
    <div className="w-full space-y-28 pb-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image collage panel */}
          <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/25 min-h-[420px] shadow-2xl">
            <img src={GALLERY_IMAGES[1].url} alt="Kashmir" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-5 left-5 passport-stamp px-3 py-1 bg-black/70 border-amber-400 text-amber-300 text-[10px] font-mono-tag font-bold">★ MEMBERS EXPEDITION CLUB ★</div>
            <div className="absolute bottom-0 inset-x-0 p-7 space-y-3">
              <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">Your Odyssey,<br />Beautifully Synced.</h1>
              <p className="text-sm sm:text-base text-neutral-200 font-light max-w-md">One free Travora account keeps your wishlist, bucket list, budgets, and itineraries together across every device.</p>
              <div className="grid grid-cols-4 gap-2 pt-2">
                {sidePhotos.map((p) => (
                  <img key={p.title} src={p.url} alt={p.title} referrerPolicy="no-referrer" className="h-16 sm:h-20 w-full object-cover rounded-xl border border-white/20" />
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-[28px] bg-slate-950/90 backdrop-blur-2xl border-2 border-cyan-400/40 p-7 sm:p-10 shadow-2xl space-y-6">
            <SessionForm initialMode={mode} />
          </div>
        </div>
      </section>

      {/* Perks */}
      <MembershipPerks />

      <PhotoJournal title="Members' Photo Journal" subtitle="A preview of the visual dispatches awaiting inside your account." count={8} />
      <TestimonialsStrip />
      <FaqStrip />
      <CtaBanner />
    </div>
  );
};
