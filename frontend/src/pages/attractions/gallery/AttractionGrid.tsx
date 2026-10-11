import React from 'react';
import { Star, MapPin, Heart, ArrowRight } from 'lucide-react';
import { AttractionItem } from '../../../types/travel';

interface AttractionGridProps {
  items: AttractionItem[];
  isWishlisted: (id: string) => boolean;
  onOpen: (item: AttractionItem) => void;
  onToggle: (id: string, name?: string) => void;
  onViewDestination: (destinationId: string) => void;
}

export const AttractionGrid: React.FC<AttractionGridProps> = ({
  items, isWishlisted, onOpen, onToggle, onViewDestination
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((attr) => {
        const wishlisted = isWishlisted(attr.id);

        return (
          <div
            key={attr.id}
            onClick={() => onOpen(attr)}
            className="group bg-slate-950/75 backdrop-blur-2xl border border-cyan-500/20 hover:border-cyan-400/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.3)] cursor-pointer flex flex-col"
          >
            {/* Photo */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-950">
              <img
                src={attr.image}
                alt={attr.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />

              {/* Bookmark Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(attr.id, attr.name);
                }}
                className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 active:scale-90 z-10 ${
                  wishlisted
                    ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)]'
                    : 'bg-black/50 text-white hover:bg-rose-500 hover:text-white'
                }`}
                title={wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-4 h-4 ${wishlisted ? 'fill-white' : ''}`} />
              </button>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-bold text-cyan-300 bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md font-mono border border-white/10 text-[10px] uppercase">
                  {attr.category}
                </span>
                <div className="flex items-center gap-1 bg-black/70 px-2.5 py-1 rounded-md text-amber-300 font-bold backdrop-blur-md border border-white/10 font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{attr.rating}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white font-display group-hover:text-cyan-300 transition-colors">
                      {attr.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-0.5 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{attr.destinationName}, {attr.state}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {attr.description}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-2 text-xs border-t border-white/10 text-neutral-300 font-mono">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-bold">Best Time</div>
                    <div className="font-medium text-white">{attr.bestTime}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-bold">Entry Fee</div>
                    <div className="font-bold text-amber-300 truncate">{attr.entryFee}</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 group-hover:text-amber-300 group-hover:underline flex items-center gap-1 transition-colors">
                  <span>View Details & Tips</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDestination(attr.destinationId);
                  }}
                  className="text-[11px] text-neutral-300 hover:text-white px-3 py-1 rounded-full bg-slate-900 border border-white/10 hover:border-cyan-400/40 transition-colors font-mono"
                >
                  View Destination
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};
