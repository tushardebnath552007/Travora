import React from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { Map, ArrowRight } from 'lucide-react';

export const MapTeaser: React.FC = () => {
  const { setActiveTab } = useTravora();

  const openMap = () => {
    setActiveTab('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl sm:rounded-[40px] overflow-hidden border-2 border-cyan-400/40 bg-slate-950/90 backdrop-blur-2xl p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

        <div className="space-y-4 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-400 uppercase font-mono">
            <Map className="w-4 h-4" />
            <span>Cartographic Navigator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
            Explore on Interactive Map
          </h2>
          <p className="text-base text-neutral-300 font-light leading-relaxed">
            Pin-point popular destinations across Jammu & Kashmir, Rajasthan deserts, Sikkim highlands, Kolkata heritage, Goa coastlines, and Kerala backwaters.
          </p>

          <div className="pt-2">
            <button
              onClick={openMap}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] cursor-pointer flex items-center gap-2 transform hover:scale-105"
            >
              <span>Launch Full Screen Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Map Visual Mockup matching user prompt */}
        <div
          onClick={openMap}
          className="w-full lg:w-[480px] h-76 rounded-3xl border-2 border-cyan-500/30 bg-slate-900/90 p-6 relative overflow-hidden cursor-pointer hover:border-cyan-400 transition-all duration-300 group hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transform hover:scale-105"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Visual Pin Markers matching prompt */}
          <div className="absolute top-8 left-16 flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-black text-cyan-300 font-mono">Kashmir ●</span>
          </div>

          <div className="absolute top-24 left-10 flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="text-xs font-black text-amber-300 font-mono">Rajasthan ●</span>
          </div>

          <div className="absolute top-20 right-14 flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-xs font-black text-emerald-300 font-mono">● Sikkim</span>
          </div>

          <div className="absolute top-36 right-24 flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="text-xs font-black text-rose-300 font-mono">● Kolkata</span>
          </div>

          <div className="absolute bottom-16 left-14 flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="w-3.5 h-3.5 rounded-full bg-teal-400" />
            <span className="text-xs font-black text-teal-300 font-mono">Goa ●</span>
          </div>

          <div className="absolute bottom-6 left-32 flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-xs font-black text-green-300 font-mono">Kerala ●</span>
          </div>

          <div className="absolute bottom-4 right-4 text-[10px] text-cyan-300/80 font-mono bg-black/60 px-3 py-1 rounded-full border border-white/10">
            Click to Open Full Interactive Coordinates Map
          </div>
        </div>

      </div>
    </section>
  );
};
