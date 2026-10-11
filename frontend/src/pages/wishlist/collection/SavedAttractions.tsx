import React from 'react';
import { Star, Trash2, ArrowRight } from 'lucide-react';
import { AttractionItem } from '../../../types/travel';

interface SavedAttractionsProps {
  items: AttractionItem[];
  onToggle: (id: string, name?: string) => void;
  onExplore: (destinationId: string) => void;
}

export const SavedAttractions: React.FC<SavedAttractionsProps> = ({ items, onToggle, onExplore }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
        <span>Attractions & Landmarks</span>
        <span className="text-xs text-neutral-500 font-sans font-normal">({items.length})</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(attr => (
          <div
            key={attr.id}
            className="group bg-neutral-900 border border-white/10 hover:border-amber-400/40 rounded-2xl overflow-hidden shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
              <img
                src={attr.image}
                alt={attr.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/20" />

              <button
                onClick={() => onToggle(attr.id, attr.name)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-rose-400 hover:text-rose-300 hover:bg-black/90 backdrop-blur-md transition-colors cursor-pointer"
                title="Remove from Wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-300">{attr.category}</span>
                <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-white font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{attr.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {attr.name}
                </h3>
                <p className="text-xs text-neutral-400">{attr.destinationName}, {attr.state}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-medium">
                  {attr.entryFee}
                </span>

                <button
                  onClick={() => onExplore(attr.destinationId)}
                  className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Explore Area</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
