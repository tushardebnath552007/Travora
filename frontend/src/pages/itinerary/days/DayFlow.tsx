import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { ItineraryDay } from '../../../types/travel';

interface DayFlowProps {
  days: ItineraryDay[];
  completed: string[];
  onToggle: (slotKey: string, title: string) => void;
}

export const DayFlow: React.FC<DayFlowProps> = ({ days, completed, onToggle }) => {
  return (
    <div className="space-y-8">
      {days.map((day) => (
        <div
          key={day.day}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl"
        >
          {/* Day Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-amber-400 text-neutral-950 font-black text-sm flex items-center justify-center font-display">
                D{day.day}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  DAY {day.day}
                </h3>
                <span className="text-xs text-neutral-400">{day.title}</span>
              </div>
            </div>

            <div className="text-xs font-semibold text-amber-300">
              4 Key Experiences
            </div>
          </div>

          {/* Slots: Morning, Afternoon, Sunset, Evening */}
          <div className="grid grid-cols-1 gap-4">
            {day.slots.map((slot, sIdx) => {
              const slotKey = `d${day.day}-s${sIdx}`;
              const isDone = completed.includes(slotKey);

              return (
                <div
                  key={slotKey}
                  onClick={() => onToggle(slotKey, slot.title)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isDone
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-neutral-400'
                      : 'bg-neutral-950/70 border-white/10 hover:border-white/20 text-neutral-200'
                  }`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 text-neutral-500 hover:text-amber-400"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-neutral-500" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                          slot.time === 'Morning' ? 'bg-amber-400/20 text-amber-300' :
                          slot.time === 'Afternoon' ? 'bg-orange-400/20 text-orange-300' :
                          slot.time === 'Sunset' ? 'bg-rose-400/20 text-rose-300' :
                          'bg-indigo-400/20 text-indigo-300'
                        }`}>
                          {slot.time === 'Sunset' ? '🌅 Sunset' : slot.time}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">📍 {slot.location}</span>
                      </div>

                      <h4 className={`text-sm sm:text-base font-bold ${isDone ? 'line-through text-neutral-400' : 'text-white'}`}>
                        {slot.title}
                      </h4>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {slot.activity}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <span className="text-[10px] text-neutral-400 uppercase block">Est. Cost</span>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      ₹{slot.estimatedCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
