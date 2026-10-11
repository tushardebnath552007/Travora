import React from 'react';
import { Calendar, Wallet } from 'lucide-react';

interface ScheduleStepProps {
  durationDays: number;
  onDuration: (days: number) => void;
  budget: number;
  onBudget: (amount: number) => void;
}

export const ScheduleStep: React.FC<ScheduleStepProps> = ({ durationDays, onDuration, budget, onBudget }) => {
  return (
    <>
      {/* Step 2: Trip Duration */}
      <div className="space-y-3 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-white flex items-center gap-2 font-display">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Trip Duration</span>
          </label>
          <span className="text-base font-bold text-amber-300 font-mono">
            {durationDays} Days
          </span>
        </div>

        <div className="space-y-3">
          <input
            type="range"
            min="1"
            max="14"
            value={durationDays}
            onChange={(e) => onDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex items-center gap-2 flex-wrap">
            {[3, 4, 5, 7, 10, 14].map(days => (
              <button
                type="button"
                key={days}
                onClick={() => onDuration(days)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  durationDays === days
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                    : 'border-white/10 bg-neutral-950 text-neutral-300 hover:text-white'
                }`}
              >
                {days} Days
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step 3: Estimated Budget */}
      <div className="space-y-3 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-white flex items-center gap-2 font-display">
            <Wallet className="w-4 h-4 text-amber-400" />
            <span>Trip Budget (INR ₹)</span>
          </label>
          <span className="text-base font-bold text-amber-300 font-mono">
            ₹{budget.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="space-y-3">
          <input
            type="number"
            step="1000"
            min="5000"
            max="500000"
            value={budget}
            onChange={(e) => onBudget(Math.max(1000, parseInt(e.target.value) || 0))}
            className="w-full bg-neutral-950 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
          />

          <div className="flex items-center gap-2 flex-wrap">
            {[15000, 20000, 30000, 50000, 80000].map(val => (
              <button
                type="button"
                key={val}
                onClick={() => onBudget(val)}
                className={`px-3 py-1 rounded-lg text-xs border transition-colors cursor-pointer ${
                  budget === val
                    ? 'border-amber-400 bg-amber-400/20 text-amber-300 font-semibold'
                    : 'border-white/10 bg-neutral-950 text-neutral-400 hover:text-white'
                }`}
              >
                ₹{val.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
