import React from 'react';
import { Search, Heart, Star, ArrowRight } from 'lucide-react';
import { Destination } from '../../../types/travel';

export type CatalogItem = Destination & { uniqueKey: string };

interface DestinationCatalogProps {
  items: CatalogItem[];
  isWishlisted: (id: string) => boolean;
  onView: (id: string) => void;
  onToggle: (id: string, name?: string) => void;
  onResetAll: () => void;
}

export const DestinationCatalog: React.FC<DestinationCatalogProps> = ({
  items, isWishlisted, onView, onToggle, onResetAll
}) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-950/80 border border-cyan-500/20 rounded-3xl p-8 space-y-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
          <Search className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white font-display">No destinations found</h3>
        <p className="text-xs text-neutral-400 max-w-sm mx-auto">
          We couldn't find any destinations matching your current search or filters. Try resetting your search.
        </p>
        <button
          onClick={onResetAll}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 text-xs font-black uppercase tracking-wider"
        >
          Clear All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((dest) => {
        const wishlisted = isWishlisted(dest.id);

        return (
          <div
            key={dest.uniqueKey}
            onClick={() => onView(dest.id)}
            className="group bg-slate-950/75 backdrop-blur-2xl border border-cyan-500/20 hover:border-cyan-400/70 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.3)] cursor-pointer flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-950">
              <img
                src={dest.heroImage}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />

              {/* Bookmark Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(dest.id, dest.name);
                }}
                className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 active:scale-90 z-10 cursor-pointer ${
                  wishlisted
                    ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)]'
                    : 'bg-black/50 text-white hover:bg-rose-500 hover:text-white'
                }`}
                title={wishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
              >
                <Heart className={`w-4 h-4 ${wishlisted ? 'fill-white' : ''}`} />
              </button>

              {/* Subcontinent badge */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider text-cyan-300 font-bold uppercase font-mono border border-white/10">
                {dest.subcontinent}
              </div>
            </div>

            {/* Card Content Section */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">

              {/* Title & Metadata */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-white tracking-wide font-display group-hover:text-cyan-300 transition-colors">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20 font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{dest.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="text-cyan-400 font-bold font-mono">{dest.category}</span>
                  <span>·</span>
                  <span className="font-mono">{dest.region}</span>
                </div>

                <div className="text-xs text-neutral-200 font-semibold pt-1 font-mono">
                  <span className="text-amber-300 font-extrabold text-sm">₹{dest.startingPrice.toLocaleString('en-IN')}</span>
                  <span className="text-neutral-400 font-normal"> · {dest.recommendedDays}</span>
                </div>
              </div>

              {/* Actions: [ Explore ] and Heart */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onView(dest.id);
                  }}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] flex items-center gap-1.5 cursor-pointer transform hover:scale-105 active:scale-95"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle(dest.id, dest.name);
                  }}
                  className={`text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer transform hover:scale-105 ${
                    wishlisted
                      ? 'border-rose-500/40 bg-rose-500/10 text-rose-400'
                      : 'border-white/10 hover:border-cyan-400/40 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{wishlisted ? 'Saved' : 'Save'}</span>
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};
