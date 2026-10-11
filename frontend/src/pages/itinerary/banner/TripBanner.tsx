import React from 'react';
import { Users } from 'lucide-react';
import { GeneratedItinerary } from '../../../types/travel';

interface TripBannerProps {
  itinerary: GeneratedItinerary;
  completedCount: number;
  onViewDestination: (id: string) => void;
}

export const TripBanner: React.FC<TripBannerProps> = ({ itinerary, completedCount, onViewDestination }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 p-6 sm:p-10 shadow-2xl space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Curated Travel Blueprint
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            {itinerary.destinationName} — {itinerary.durationDays} DAYS
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
            {itinerary.notes}
          </p>
        </div>

        <button
          onClick={() => onViewDestination(itinerary.destinationId)}
          className="px-4 py-2.5 rounded-xl border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 text-xs font-semibold transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
        >
          View Destination Guide
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div className="space-y-1">
          <div className="text-neutral-400 uppercase tracking-wider text-[10px]">Trip Type</div>
          <div className="text-sm font-bold text-white flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>{itinerary.travelType}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-neutral-400 uppercase tracking-wider text-[10px]">Allocated Budget</div>
          <div className="text-sm font-bold text-amber-300 font-mono">
            ₹{itinerary.totalBudget.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-neutral-400 uppercase tracking-wider text-[10px]">Pacing</div>
          <div className="text-sm font-semibold text-white">
            {itinerary.durationDays} Days / {itinerary.durationDays - 1} Nights
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-neutral-400 uppercase tracking-wider text-[10px]">Progress</div>
          <div className="text-sm font-semibold text-emerald-400">
            {completedCount} Activities Completed
          </div>
        </div>
      </div>

      {/* Interests Badges */}
      <div className="flex items-center gap-2 flex-wrap pt-2">
        <span className="text-[11px] text-neutral-400 font-medium">Focus:</span>
        {itinerary.interests.map(int => (
          <span
            key={int}
            className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-neutral-300"
          >
            {int}
          </span>
        ))}
      </div>
    </div>
  );
};
