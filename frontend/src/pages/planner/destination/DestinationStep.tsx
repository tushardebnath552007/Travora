import React from 'react';
import { MapPin } from 'lucide-react';
import { Destination } from '../../../types/travel';

interface DestinationStepProps {
  destinations: Destination[];
  value: string;
  preview: Destination;
  onSelect: (id: string) => void;
}

export const DestinationStep: React.FC<DestinationStepProps> = ({ destinations, value, preview, onSelect }) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-bold text-white flex items-center gap-2 font-display">
        <MapPin className="w-4 h-4 text-amber-400" />
        <span>Where do you want to go?</span>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          value={value}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full bg-neutral-950 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer font-medium"
        >
          {destinations.map(d => (
            <option key={d.id} value={d.id}>
              {d.name} ({d.region}, {d.country})
            </option>
          ))}
        </select>

        <div className="p-3 bg-neutral-950 border border-white/10 rounded-2xl flex items-center gap-3">
          <img
            src={preview.heroImage}
            alt={preview.name}
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-xl object-cover shrink-0"
          />
          <div className="text-xs">
            <div className="font-bold text-white">{preview.name}</div>
            <div className="text-neutral-400 text-[11px] truncate">{preview.subtitle}</div>
            <div className="text-amber-300 font-semibold mt-0.5">Starting ₹{preview.startingPrice.toLocaleString('en-IN')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
