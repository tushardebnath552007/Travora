import React from 'react';
import { Plane, Hotel, Utensils, Compass, ShoppingBag } from 'lucide-react';
import { BudgetBreakdown } from '../../../types/travel';

interface CategoryBreakdownProps {
  budget: BudgetBreakdown;
  formatCost: (valInInr: number) => string;
  onUpdateField: (field: keyof BudgetBreakdown, value: number) => void;
}

export const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ budget, formatCost, onUpdateField }) => {
  const categories = [
    { key: 'transportation' as const, label: 'Transportation', icon: <Plane className="w-4 h-4 text-sky-400" />, tip: 'Trains, flights, local taxis & cabs' },
    { key: 'hotel' as const, label: 'Hotel & Stays', icon: <Hotel className="w-4 h-4 text-purple-400" />, tip: 'Resorts, cedar houseboats & boutique homestays' },
    { key: 'food' as const, label: 'Food & Dining', icon: <Utensils className="w-4 h-4 text-amber-400" />, tip: 'Local eateries, traditional feasts & cafe treats' },
    { key: 'activities' as const, label: 'Activities & Tours', icon: <Compass className="w-4 h-4 text-emerald-400" />, tip: 'Cable cars, safaris, guided heritage tours & entry fees' },
    { key: 'shopping' as const, label: 'Shopping & Souvenirs', icon: <ShoppingBag className="w-4 h-4 text-rose-400" />, tip: 'Pashmina shawls, tea leaves, local spices & handicrafts' },
  ];

  const totalEstimatedCost =
    budget.transportation +
    budget.hotel +
    budget.food +
    budget.activities +
    budget.shopping;

  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
      <h3 className="text-lg font-bold text-white font-display border-b border-white/10 pb-4">
        Expense Breakdown by Category
      </h3>

      <div className="space-y-5">
        {categories.map((cat) => {
          const val = budget[cat.key];

          return (
            <div
              key={cat.key}
              className="bg-neutral-950 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{cat.label}</h4>
                    <p className="text-[11px] text-neutral-400">{cat.tip}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-bold text-amber-300 font-mono">
                    {formatCost(val)}
                  </span>
                </div>
              </div>

              {/* Slider + Stepper Input */}
              <div className="flex items-center gap-4 pt-1">
                <input
                  type="range"
                  min="0"
                  max={budget.userBudget > 0 ? budget.userBudget : 50000}
                  step="200"
                  value={val}
                  onChange={(e) => onUpdateField(cat.key, parseInt(e.target.value) || 0)}
                  className="flex-1 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <input
                  type="number"
                  step="100"
                  value={val}
                  onChange={(e) => onUpdateField(cat.key, parseInt(e.target.value) || 0)}
                  className="w-24 bg-neutral-900 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white font-mono text-right focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grand Total Summary Row */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-base font-bold">
        <span className="text-white font-display text-lg">Total Estimated Trip Cost</span>
        <span className="text-xl font-mono text-amber-400">
          {formatCost(totalEstimatedCost)}
        </span>
      </div>
    </div>
  );
};
