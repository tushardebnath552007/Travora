import React, { useState } from 'react';
import { useTravora } from '../../../context/TravoraContext';

export const HomeBudget: React.FC = () => {
  const { setActiveTab, showToast } = useTravora();

  // Budget Calculator on Home page
  const [budgetInputs, setBudgetInputs] = useState({
    transport: 4000,
    hotel: 5000,
    food: 2500,
    activities: 1500,
    shopping: 1000,
    totalBudget: 15000
  });

  const totalCalculatedCost =
    budgetInputs.transport +
    budgetInputs.hotel +
    budgetInputs.food +
    budgetInputs.activities +
    budgetInputs.shopping;

  const budgetRemaining = budgetInputs.totalBudget - totalCalculatedCost;

  const sliders: { key: keyof typeof budgetInputs; label: string; valueClass: string; accent: string; min: number; max: number; step: number }[] = [
    { key: 'transport', label: '✈️ Transportation', valueClass: 'text-cyan-300', accent: 'accent-cyan-400', min: 1000, max: 25000, step: 500 },
    { key: 'hotel', label: '🏨 Hotel & Stays', valueClass: 'text-amber-300', accent: 'accent-amber-400', min: 2000, max: 35000, step: 500 },
    { key: 'food', label: '🍜 Food & Dining', valueClass: 'text-emerald-300', accent: 'accent-emerald-400', min: 1000, max: 15000, step: 250 },
    { key: 'activities', label: '🎟️ Sightseeing & Activities', valueClass: 'text-rose-300', accent: 'accent-rose-400', min: 500, max: 10000, step: 250 },
    { key: 'shopping', label: '🛍️ Shopping & Souvenirs', valueClass: 'text-purple-300', accent: 'accent-purple-400', min: 500, max: 15000, step: 250 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl sm:rounded-[40px] bg-slate-950/90 backdrop-blur-2xl border-2 border-emerald-400/40 p-8 sm:p-14 shadow-2xl space-y-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-emerald-300 uppercase font-mono flex items-center gap-2">
              💰 Live Travel Expense Ledger
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mt-1">
              Estimate Your Travel Budget
            </h2>
            <p className="text-base text-neutral-300 mt-2 font-light">
              Calculate real expenses across flights/trains, hotel stays, authentic food, sightseeing, and shopping.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('budget');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0"
          >
            Full Budget Breakdown
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">

          {/* Left 5 Expense Sliders */}
          <div className="lg:col-span-7 space-y-4">
            {sliders.map(s => (
              <div key={s.key} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-neutral-200">{s.label}</span>
                  <span className={`${s.valueClass} font-mono`}>₹{budgetInputs[s.key].toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={budgetInputs[s.key]}
                  onChange={(e) => setBudgetInputs(prev => ({ ...prev, [s.key]: Number(e.target.value) }))}
                  className={`w-full ${s.accent} cursor-pointer`}
                />
              </div>
            ))}

            {/* Handwritten Artisanal Savings Note */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <span className="font-handwriting text-xl text-emerald-300 select-none">
                “Homestay booking saves ~₹3,500 while giving you authentic homemade Thukpa!”
              </span>
            </div>

          </div>

          {/* Right Summary Card matching user's prompt */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/95 border-2 border-emerald-400/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-black tracking-widest text-emerald-300 uppercase font-mono block mb-1">
                Budget Ledger
              </span>
              <h3 className="text-2xl font-black text-white font-display">
                Trip Expense Breakdown
              </h3>
            </div>

            <div className="space-y-3 font-mono text-sm border-y border-dashed border-white/20 py-4">
              <div className="flex justify-between text-neutral-300">
                <span>Transportation</span>
                <span className="text-white font-bold">₹{budgetInputs.transport.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Hotel</span>
                <span className="text-white font-bold">₹{budgetInputs.hotel.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Food</span>
                <span className="text-white font-bold">₹{budgetInputs.food.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Activities</span>
                <span className="text-white font-bold">₹{budgetInputs.activities.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Shopping</span>
                <span className="text-white font-bold">₹{budgetInputs.shopping.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-base font-black text-cyan-300">
                <span>Total Estimated</span>
                <span>₹{totalCalculatedCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Your Budget</span>
                <span className="text-white font-bold">₹{budgetInputs.totalBudget.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Estimated Cost</span>
                <span className="text-cyan-300 font-bold">₹{totalCalculatedCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-black pt-1 border-t border-white/10">
                <span className={budgetRemaining >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                  {budgetRemaining >= 0 ? 'Remaining Surplus' : 'Over Budget'}
                </span>
                <span className={budgetRemaining >= 0 ? 'text-emerald-300 font-bold' : 'text-rose-400 font-bold'}>
                  ₹{Math.abs(budgetRemaining).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                showToast('✓ Budget plan synced with current itinerary!', 'success');
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer transform hover:scale-[1.02]"
            >
              Save Budget Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
