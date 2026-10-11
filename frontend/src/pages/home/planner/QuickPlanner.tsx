import React, { useState } from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { TravelType } from '../../../types/travel';
import { Plane, Sparkles, ArrowRight, Check } from 'lucide-react';

export const QuickPlanner: React.FC = () => {
  const { generateItinerary, setActiveTab } = useTravora();

  // Quick Trip Planner on Home page
  const [quickDest, setQuickDest] = useState('darjeeling');
  const [quickDays, setQuickDays] = useState(4);
  const [quickBudget, setQuickBudget] = useState(15000);
  const [quickType, setQuickType] = useState<TravelType>('Couple');
  const [quickInterests, setQuickInterests] = useState<string[]>(['Nature', 'Photography', 'Food']);

  const handleQuickTripCreate = () => {
    generateItinerary({
      destinationId: quickDest,
      durationDays: quickDays,
      budget: quickBudget,
      travelType: quickType,
      interests: quickInterests
    });
    setActiveTab('itinerary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleInterest = (interest: string) => {
    setQuickInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl sm:rounded-[40px] bg-slate-950/90 backdrop-blur-2xl border-2 border-cyan-400/40 p-8 sm:p-14 shadow-2xl relative overflow-hidden space-y-8">

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-black tracking-widest text-cyan-300 uppercase font-mono flex items-center gap-2">
              <Plane className="w-4 h-4 text-cyan-400 -rotate-45" />
              Artisanal Itinerary Architect
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Create Your Trip in Seconds
            </h2>
          </div>
          <div className="passport-stamp px-3 py-1 bg-amber-500/15 border-amber-400 text-amber-300 font-mono-tag text-xs font-bold">
            ★ BESPOKE EXPEDITION LOG ★
          </div>
        </div>

        <p className="text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
          Select your dream destination, trip duration, estimated budget, and interests. Our platform architects a complete day-by-day itinerary instantly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">

          {/* Step 1: Destination */}
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <label className="text-xs font-black text-cyan-300 uppercase font-mono block">
              ① Where do you want to go?
            </label>
            <select
              value={quickDest}
              onChange={(e) => setQuickDest(e.target.value)}
              className="w-full bg-slate-900 border border-cyan-500/25 rounded-xl p-3 text-sm font-bold text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="darjeeling">Darjeeling (West Bengal)</option>
              <option value="kashmir">Kashmir (Jammu & Kashmir)</option>
              <option value="goa">Goa (Tropical Coast)</option>
              <option value="manali">Manali (Himachal Pradesh)</option>
              <option value="kerala">Kerala (Backwaters & Coast)</option>
              <option value="sikkim">Sikkim (Eastern Himalayas)</option>
              <option value="patagonia">Patagonia (Glacial Peaks)</option>
              <option value="iceland">Iceland (Northern Lights)</option>
            </select>
          </div>

          {/* Step 2: Duration */}
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <label className="text-xs font-black text-amber-300 uppercase font-mono block">
              ② How many sunrises?
            </label>
            <select
              value={quickDays}
              onChange={(e) => setQuickDays(Number(e.target.value))}
              className="w-full bg-slate-900 border border-amber-500/25 rounded-xl p-3 text-sm font-bold text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value={3}>3 Days (Weekend Escape)</option>
              <option value={4}>4 Days (Recommended)</option>
              <option value={5}>5 Days (Explorer Tour)</option>
              <option value={7}>7 Days (Week Expedition)</option>
              <option value={10}>10 Days (Comprehensive)</option>
            </select>
          </div>

          {/* Step 3: Budget */}
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-emerald-300 uppercase font-mono block">
                ③ Spending Target
              </label>
              <span className="text-sm font-black text-emerald-300 font-mono">
                ₹{quickBudget.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={8000}
              max={50000}
              step={1000}
              value={quickBudget}
              onChange={(e) => setQuickBudget(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <span className="text-[11px] text-neutral-400 block font-mono">
              Covers transit, lodging & meals
            </span>
          </div>

          {/* Step 4: Travel Type */}
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <label className="text-xs font-black text-rose-300 uppercase font-mono block">
              ④ Travel Companions
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['Family', 'Couple', 'Solo', 'Friends'] as TravelType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setQuickType(t)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                    quickType === t
                      ? 'bg-rose-500 text-white font-black shadow-md'
                      : 'bg-slate-900 text-neutral-300 hover:bg-slate-800'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Interests Checkbox Row */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black text-neutral-300 uppercase font-mono block">
            ⑤ Select Your Key Interests:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {[
              'Nature',
              'Photography',
              'Adventure',
              'Food',
              'Culture',
              'Heritage',
              'Wildlife',
              'Relaxation'
            ].map((interest) => {
              const isSelected = quickInterests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/25 border-2 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-white/30'
                  }`}
                >
                  {isSelected ? <Check className="w-3.5 h-3.5 text-cyan-300" /> : <div className="w-3.5 h-3.5 border border-neutral-500 rounded" />}
                  <span>{interest}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Launch Planner Action CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="text-xs text-neutral-400 font-mono">
            Ready to generate <strong className="text-white">{quickDays}-Day</strong> custom itinerary for <strong className="text-cyan-300 capitalize">{quickDest}</strong>
          </div>

          <button
            onClick={handleQuickTripCreate}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 hover:from-cyan-300 hover:via-teal-200 hover:to-amber-200 text-slate-950 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] cursor-pointer flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>CREATE MY TRIP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
