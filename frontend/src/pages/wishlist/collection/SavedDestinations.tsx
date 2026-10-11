import React from 'react';
import { Star, Trash2 } from 'lucide-react';
import { Destination } from '../../../types/travel';

interface SavedDestinationsProps {
  items: Destination[];
  onView: (id: string) => void;
  onToggle: (id: string, name?: string) => void;
  onPlan: (dest: Destination) => void;
}

export const SavedDestinations: React.FC<SavedDestinationsProps> = ({ items, onView, onToggle, onPlan }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
        <span>Destinations</span>
        <span className="text-xs text-neutral-500 font-sans font-normal">({items.length})</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(dest => (
          <div
            key={dest.id}
            onClick={() => onView(dest.id)}
            className="group bg-neutral-900 border border-white/10 hover:border-amber-400/50 rounded-2xl overflow-hidden shadow-xl transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-52 w-full overflow-hidden bg-neutral-950">
              <img
                src={dest.heroImage}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/20" />

              {/* Remove button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(dest.id, dest.name);
                }}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-rose-400 hover:text-rose-300 hover:bg-black/90 backdrop-blur-md transition-colors"
                title="Remove from Wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-300">{dest.category}</span>
                <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-white font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{dest.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-neutral-400">{dest.region}, {dest.country}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-amber-300 font-bold">
                  From ₹{dest.startingPrice.toLocaleString('en-IN')}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlan(dest);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors"
                >
                  Plan Trip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
