import React from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { Sparkles, ArrowRight, MapPin, Star } from 'lucide-react';

export const AttractionShowcase: React.FC = () => {
  const { attractions, setActiveTab } = useTravora();
  const showcaseAttractions = attractions.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-amber-400 uppercase mb-1 font-mono">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Architectural Marvels & Sanctuaries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Famous Tourist Attractions
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mt-2 font-light">
            Explore individual monuments, ancient forts, pristine waterfalls, and royal palaces.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveTab('attractions');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-sm font-black text-amber-300 hover:text-cyan-300 tracking-wider uppercase group cursor-pointer transition-colors shrink-0"
        >
          <span>View All Attractions</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseAttractions.map((attr) => (
          <div
            key={attr.id}
            onClick={() => {
              setActiveTab('attractions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group bg-slate-950/80 backdrop-blur-2xl border-2 border-cyan-500/25 hover:border-amber-400/80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(251,191,36,0.3)] cursor-pointer flex flex-col"
          >
            <div className="relative h-64 w-full overflow-hidden bg-slate-950">
              <img
                src={attr.image}
                alt={attr.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />

              <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-400/30 font-mono">
                {attr.category}
              </span>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1 font-mono text-cyan-300">
                  <MapPin className="w-3.5 h-3.5" />
                  {attr.destinationName}, {attr.state}
                </span>
                <div className="flex items-center gap-1 text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{attr.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-black text-white font-display group-hover:text-amber-300 transition-colors">
                  {attr.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed font-light">
                  {attr.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block">Entry Fee</span>
                  <span className="text-white font-bold text-sm">{attr.entryFee}</span>
                </div>
                <div className="text-right">
                  <span className="text-neutral-400 text-[10px] uppercase block">Best Time</span>
                  <span className="text-cyan-300 font-bold">{attr.bestTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
