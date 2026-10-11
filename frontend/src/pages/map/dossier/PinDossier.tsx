import React from 'react';
import { Star, ArrowRight, Heart } from 'lucide-react';
import { MapPinData } from '../data/pins';

interface PinDossierProps {
  pin: MapPinData;
  wishlisted: boolean;
  onToggle: (id: string, name?: string) => void;
  onView: (id: string) => void;
  onPlan: () => void;
}

export const PinDossier: React.FC<PinDossierProps> = ({ pin, wishlisted, onToggle, onView, onPlan }) => {
  return (
    <div className="lg:col-span-4 bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl space-y-4">
      <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
        <img
          src={pin.image}
          alt={pin.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/20" />

        <button
          onClick={() => onToggle(pin.id, pin.name)}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md cursor-pointer hover:bg-black/90"
          title="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
          <span className="font-semibold text-amber-300 bg-black/60 px-2 py-0.5 rounded">
            {pin.category}
          </span>
          <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-white font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{pin.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 pt-1">
        <div>
          <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold">
            Selected Location
          </span>
          <h3 className="text-2xl font-bold text-white font-display">
            {pin.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">{pin.region}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/10 text-neutral-300">
          <div>
            <span className="text-neutral-500 uppercase text-[10px] block">Duration</span>
            <span className="font-semibold text-white">{pin.days}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase text-[10px] block">Est. Cost</span>
            <span className="font-semibold text-amber-300">{pin.price}</span>
          </div>
        </div>

        <div className="pt-2 space-y-2">
          <button
            onClick={() => onView(pin.id)}
            className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Complete Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onPlan}
            className="w-full py-2.5 rounded-xl border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Plan Itinerary Here
          </button>
        </div>
      </div>
    </div>
  );
};
