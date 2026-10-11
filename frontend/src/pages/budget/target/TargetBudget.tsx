import React from 'react';
import { BudgetBreakdown } from '../../../types/travel';

interface TargetBudgetProps {
  budget: BudgetBreakdown;
  formatCost: (valInInr: number) => string;
  rate: { symbol: string; factor: number };
  onUpdateField: (field: keyof BudgetBreakdown, value: number) => void;
  onApplyPreset: (type: 'Backpacker' | 'Balanced' | 'Luxury') => void;
}

export const TargetBudget: React.FC<TargetBudgetProps> = ({ budget, formatCost, rate, onUpdateField, onApplyPreset }) => {
  const totalEstimatedCost =
    budget.transportation +
    budget.hotel +
    budget.food +
    budget.activities +
    budget.shopping;

  const remaining = budget.userBudget - totalEstimatedCost;
  const isOverBudget = remaining < 0;
  const percentageUsed = Math.min(100, Math.round((totalEstimatedCost / (budget.userBudget || 1)) * 100));

  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
            Total Target Budget
          </label>
          <div className="text-3xl font-extrabold text-white font-mono flex items-center gap-2">
            <span>{rate.symbol}</span>
            <input
              type="number"
              step="500"
              value={Math.round(budget.userBudget * rate.factor)}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                onUpdateField('userBudget', Math.round(val / rate.factor));
              }}
              className="bg-neutral-950 border border-white/10 rounded-xl px-3 py-1 text-2xl font-mono text-amber-300 w-48 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Quick Archetype Presets */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-neutral-500 font-medium">Archetypes:</span>
          <button
            onClick={() => onApplyPreset('Backpacker')}
            className="px-3 py-1.5 rounded-xl border border-white/10 hover:border-white/20 bg-neutral-950 text-neutral-300 hover:text-white text-xs font-medium cursor-pointer"
          >
            🎒 Backpacker (₹12k)
          </button>
          <button
            onClick={() => onApplyPreset('Balanced')}
            className="px-3 py-1.5 rounded-xl border border-white/10 hover:border-white/20 bg-neutral-950 text-neutral-300 hover:text-white text-xs font-medium cursor-pointer"
          >
            🏖️ Balanced (₹25k)
          </button>
          <button
            onClick={() => onApplyPreset('Luxury')}
            className="px-3 py-1.5 rounded-xl border border-white/10 hover:border-white/20 bg-neutral-950 text-neutral-300 hover:text-white text-xs font-medium cursor-pointer"
          >
            💎 Luxury (₹60k)
          </button>
        </div>
      </div>

      {/* Budget Comparison Board matching prompt:
          Your Budget: ₹15,000
          Estimated Cost: ₹14,000
          Remaining: ₹1,000
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">

        <div className="bg-neutral-950 border border-white/10 rounded-2xl p-4 space-y-1">
          <span className="text-xs text-neutral-400 uppercase tracking-wider">Your Budget</span>
          <div className="text-2xl font-bold text-white font-mono">
            {formatCost(budget.userBudget)}
          </div>
        </div>

        <div className="bg-neutral-950 border border-white/10 rounded-2xl p-4 space-y-1">
          <span className="text-xs text-neutral-400 uppercase tracking-wider">Estimated Cost</span>
          <div className="text-2xl font-bold text-amber-300 font-mono">
            {formatCost(totalEstimatedCost)}
          </div>
        </div>

        <div className={`border rounded-2xl p-4 space-y-1 ${
          isOverBudget
            ? 'bg-rose-950/20 border-rose-500/40 text-rose-300'
            : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
        }`}>
          <span className="text-xs uppercase tracking-wider">
            {isOverBudget ? 'Over Budget' : 'Remaining Savings'}
          </span>
          <div className="text-2xl font-bold font-mono">
            {formatCost(Math.abs(remaining))}
          </div>
        </div>

      </div>

      {/* Budget Progress Meter */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span>Budget Utilisation: {percentageUsed}%</span>
          <span>{isOverBudget ? '⚠️ Target Exceeded' : '✅ Within Budget'}</span>
        </div>
        <div className="w-full h-2.5 bg-neutral-950 rounded-full overflow-hidden border border-white/5">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              isOverBudget ? 'bg-rose-500' : 'bg-gradient-to-r from-amber-400 to-emerald-400'
            }`}
            style={{ width: `${Math.min(100, percentageUsed)}%` }}
          />
        </div>
      </div>
    </div>
  );
};
