import React from 'react';
import { Droplets, Wind } from 'lucide-react';
import { useTravora } from '../../../context/TravoraContext';
import { Destination } from '../../../types/travel';

interface GuideSidebarProps {
  destination: Destination;
}

export const GuideSidebar: React.FC<GuideSidebarProps> = ({ destination }) => {
  const { generateItinerary } = useTravora();

  const handlePlanMyTrip = () => {
    generateItinerary({
      destinationId: destination.id,
      durationDays: parseInt(destination.recommendedDays) || 5,
      budget: destination.startingPrice,
      travelType: 'Couple',
      interests: destination.travelInfo.bestFor
    });
  };

  return (
    <>
      {/* Weather Widget */}
      <div className="bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-6 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono">
            Current Weather
          </span>
          <span className="text-[10px] text-neutral-400 font-mono">Live Station</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-black text-white font-mono">
              {destination.currentWeather.temp}°C
            </div>
            <div className="text-xs text-cyan-200 mt-1 font-semibold">
              {destination.currentWeather.condition}
            </div>
          </div>
          <div className="text-4xl">☀️</div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2 text-neutral-300">
            <Droplets className="w-4 h-4 text-cyan-400" />
            <span>Humidity: {destination.currentWeather.humidity}%</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <Wind className="w-4 h-4 text-teal-400" />
            <span>Wind: {destination.currentWeather.windSpeed} km/h</span>
          </div>
        </div>

        {/* 5-day mini forecast */}
        <div className="pt-2 flex justify-between border-t border-white/10 text-center font-mono">
          {destination.currentWeather.forecast.map((fc) => (
            <div key={fc.day} className="space-y-1">
              <div className="text-[10px] text-neutral-400">{fc.day}</div>
              <div className="text-base">{fc.icon}</div>
              <div className="text-xs font-bold text-white">{fc.temp}°</div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Information Specification Card */}
      <div className="bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-6 space-y-5 shadow-2xl">
        <h3 className="text-base font-bold text-white font-display border-b border-white/10 pb-3">
          Travel Information
        </h3>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <div className="text-cyan-400 uppercase tracking-wider text-[10px] font-bold">Average Budget</div>
            <div className="text-sm font-extrabold text-amber-300 mt-0.5">
              {destination.travelInfo.averageBudget}
            </div>
          </div>

          <div>
            <div className="text-cyan-400 uppercase tracking-wider text-[10px] font-bold">Recommended Stay</div>
            <div className="text-sm font-bold text-white mt-0.5">
              {destination.travelInfo.recommendedStay}
            </div>
          </div>

          <div>
            <div className="text-cyan-400 uppercase tracking-wider text-[10px] font-bold">Ideal Season</div>
            <div className="text-sm font-bold text-white mt-0.5">
              {destination.travelInfo.idealSeason}
            </div>
          </div>

          <div>
            <div className="text-cyan-400 uppercase tracking-wider text-[10px] font-bold mb-1.5">Best For</div>
            <div className="flex flex-wrap gap-1.5 font-sans">
              {destination.travelInfo.bestFor.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-[11px] font-bold border border-cyan-500/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <button
            onClick={handlePlanMyTrip}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 font-black text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] cursor-pointer transform hover:scale-105 active:scale-95"
          >
            Create Personalized Itinerary
          </button>
        </div>
      </div>
    </>
  );
};
