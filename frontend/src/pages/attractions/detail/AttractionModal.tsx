import React from 'react';
import { MapPin, Clock, Ticket, Heart, X } from 'lucide-react';
import { AttractionItem } from '../../../types/travel';

interface AttractionModalProps {
  attraction: AttractionItem | null;
  isWishlisted: (id: string) => boolean;
  onClose: () => void;
  onToggle: (id: string, name?: string) => void;
  onPlan: (destinationId: string) => void;
}

export const AttractionModal: React.FC<AttractionModalProps> = ({
  attraction, isWishlisted, onClose, onToggle, onPlan
}) => {
  if (!attraction) return null;
  const saved = isWishlisted(attraction.id);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-slate-950 border border-cyan-500/30 rounded-3xl max-w-2xl w-full overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] space-y-5 max-h-[90vh] overflow-y-auto">

        {/* Modal Hero Image */}
        <div className="relative h-64 w-full bg-slate-950">
          <img
            src={attraction.image}
            alt={attraction.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider font-mono">
                {attraction.category} Landmark
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                {attraction.name}
              </h2>
            </div>

            <div className="flex items-center gap-1 bg-black/70 px-3 py-1 rounded-xl backdrop-blur-md text-amber-300 text-sm font-bold border border-white/10">
              ★ {attraction.rating}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 pt-0">

          <div className="flex items-center gap-4 text-xs text-neutral-300 border-b border-white/10 pb-4 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{attraction.destinationName}, {attraction.state}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Ticket className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 font-bold">{attraction.entryFee}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{attraction.timing}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white font-display">Historical & Cultural Context</h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {attraction.description}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-cyan-300 font-mono">Key Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              {attraction.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-white/5">
                  <span className="text-amber-400">✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={() => onToggle(attraction.id, attraction.name)}
              className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transform hover:scale-105"
            >
              <Heart className={`w-4 h-4 ${saved ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{saved ? 'In Wishlist' : 'Add to Wishlist'}</span>
            </button>

            <button
              onClick={() => {
                const destId = attraction.destinationId;
                onClose();
                onPlan(destId);
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 font-black text-xs uppercase tracking-wider transition-all cursor-pointer transform hover:scale-105 shadow-md shadow-cyan-500/20"
            >
              Plan Trip to {attraction.destinationName}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
