import React from 'react';
import { Compass, Heart, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

const perks = [
  { icon: <Heart className="w-5 h-5 text-rose-400" />, title: 'Synced Wishlist', body: 'Save havens on your phone and find them waiting on your laptop.' },
  { icon: <MapPin className="w-5 h-5 text-cyan-300" />, title: 'Bucket List That Travels', body: 'Tick off Darjeeling, Kashmir, and Meghalaya from anywhere.' },
  { icon: <Compass className="w-5 h-5 text-amber-300" />, title: 'Itineraries in the Cloud', body: 'Every generated trip plan is stored against your account.' },
  { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, title: 'Private by Design', body: 'Passwords are hashed on the server. We never store plain text.' },
];

export const MembershipPerks: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-black tracking-widest text-amber-400 uppercase mb-1 font-mono"><Sparkles className="w-4 h-4" /><span>Membership Privileges</span></div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">Why Travelers Sign Up</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {perks.map((p) => (
          <div key={p.title} className="rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/50 p-6 space-y-2 transition-all hover:-translate-y-1">
            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">{p.icon}</div>
            <h4 className="text-base font-black text-white font-display">{p.title}</h4>
            <p className="text-sm text-neutral-300 font-light">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
