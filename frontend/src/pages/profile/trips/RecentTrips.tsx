import React from 'react';

export interface RecentTrip {
  id: string;
  name: string;
  duration: string;
  date: string;
  image: string;
}

interface RecentTripsProps {
  trips: RecentTrip[];
  onViewPlan: () => void;
  onNewJourney: () => void;
}

export const RecentTrips: React.FC<RecentTripsProps> = ({ trips, onViewPlan, onNewJourney }) => {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-xl font-bold text-white font-display">
          Recent Trips
        </h2>
        <button
          onClick={onNewJourney}
          className="text-xs font-semibold text-amber-400 hover:underline"
        >
          Plan a New Journey
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-neutral-950 border border-white/10 hover:border-amber-400/40 rounded-2xl p-4 flex items-center justify-between gap-4 transition-all"
          >
            <div className="flex items-center gap-3.5">
              <img
                src={trip.image}
                alt={trip.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-xl object-cover shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  {trip.name}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {trip.duration} · {trip.date}
                </p>
              </div>
            </div>

            <button
              onClick={onViewPlan}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-neutral-950 text-neutral-200 text-xs font-medium transition-colors cursor-pointer shrink-0"
            >
              View Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
