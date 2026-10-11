import React from 'react';
import { Maximize2 } from 'lucide-react';
import { useTravora } from '../../../context/TravoraContext';
import { Destination } from '../../../types/travel';

interface EditorialColumnProps {
  destination: Destination;
}

export const EditorialColumn: React.FC<EditorialColumnProps> = ({ destination }) => {
  const { openLightbox } = useTravora();

  return (
    <>
      {/* About Section */}
      <section className="bg-slate-950/75 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl p-8 space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
          About {destination.name}
        </h2>
        <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
          {destination.about}
        </p>

        <div className="pt-4 border-t border-white/10">
          <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-2 font-mono">
            Culture & Heritage
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {destination.culture}
          </p>
        </div>
      </section>

      {/* Top Attractions Section with Hover Lift */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Top Attractions in {destination.name}
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Must-visit landmarks and natural wonders you cannot miss.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destination.topAttractions.map((attr) => (
            <div
              key={attr.name}
              onClick={() => openLightbox(attr.image, attr.name)}
              className="group bg-slate-950/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 rounded-3xl p-4 flex gap-4 items-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(6,182,212,0.25)]"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-950 relative">
                <img
                  src={attr.image}
                  alt={attr.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {attr.name}
                  </h4>
                  <span className="text-[10px] text-amber-300 font-bold font-mono">{attr.duration}</span>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {attr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
          Best Time to Visit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {destination.bestTimeToVisit.map((item) => (
            <div
              key={item.season}
              className="bg-slate-950/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-5 space-y-2 hover:border-cyan-400/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{item.season}</span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono ${
                  item.status === 'Excellent'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="text-sm font-bold text-cyan-300 font-mono">
                {item.temp}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.weather}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Destination Photo Gallery */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Destination Gallery
          </h2>
          <span className="text-xs text-cyan-400 font-mono">Click to view fullscreen</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {destination.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(img, `${destination.name} - View ${idx + 1}`)}
              className="group relative h-40 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <img
                src={img}
                alt={`${destination.name} gallery ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-5 h-5 text-white drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
