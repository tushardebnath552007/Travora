import React, { useState } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TravelTipsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { CurrencySwitcher } from './currency/CurrencySwitcher';
import { TargetBudget } from './target/TargetBudget';
import { CategoryBreakdown } from './categories/CategoryBreakdown';
import { SyncBanner } from './sync/SyncBanner';
import { 
  Wallet, 
  Plane, 
  Hotel, 
  Utensils, 
  Compass, 
  ShoppingBag, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  TrendingDown,
  RotateCcw
} from 'lucide-react';
import { BudgetBreakdown } from '../../types/travel';

export const BudgetPlannerView: React.FC = () => {
  const { budget, updateBudgetField, setFullBudget, showToast, setActiveTab } = useTravora();
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');

  // Conversion rates relative to INR
  const rates = {
    INR: { symbol: '₹', factor: 1 },
    USD: { symbol: '$', factor: 0.012 },
    EUR: { symbol: '€', factor: 0.011 }
  };

  const currentRate = rates[currency];

  const formatCost = (valInInr: number) => {
    const converted = Math.round(valInInr * currentRate.factor);
    return `${currentRate.symbol}${converted.toLocaleString()}`;
  };

  const totalEstimatedCost = 
    budget.transportation + 
    budget.hotel + 
    budget.food + 
    budget.activities + 
    budget.shopping;

  const remaining = budget.userBudget - totalEstimatedCost;
  const isOverBudget = remaining < 0;
  const percentageUsed = Math.min(100, Math.round((totalEstimatedCost / (budget.userBudget || 1)) * 100));

  // Presets
  const applyPreset = (type: 'Backpacker' | 'Balanced' | 'Luxury') => {
    let preset: BudgetBreakdown;
    if (type === 'Backpacker') {
      preset = {
        userBudget: 12000,
        transportation: 3000,
        hotel: 3500,
        food: 2000,
        activities: 1500,
        shopping: 800
      };
    } else if (type === 'Luxury') {
      preset = {
        userBudget: 60000,
        transportation: 15000,
        hotel: 25000,
        food: 10000,
        activities: 6000,
        shopping: 4000
      };
    } else {
      preset = {
        userBudget: 25000,
        transportation: 6500,
        hotel: 9500,
        food: 4500,
        activities: 2500,
        shopping: 2000
      };
    }
    setFullBudget(preset);
    showToast(`✓ Applied ${type} travel budget template!`, 'info');
  };

  const categories = [
    { key: 'transportation' as const, label: 'Transportation', icon: <Plane className="w-4 h-4 text-sky-400" />, tip: 'Trains, flights, local taxis & cabs' },
    { key: 'hotel' as const, label: 'Hotel & Stays', icon: <Hotel className="w-4 h-4 text-purple-400" />, tip: 'Resorts, cedar houseboats & boutique homestays' },
    { key: 'food' as const, label: 'Food & Dining', icon: <Utensils className="w-4 h-4 text-amber-400" />, tip: 'Local eateries, traditional feasts & cafe treats' },
    { key: 'activities' as const, label: 'Activities & Tours', icon: <Compass className="w-4 h-4 text-emerald-400" />, tip: 'Cable cars, safaris, guided heritage tours & entry fees' },
    { key: 'shopping' as const, label: 'Shopping & Souvenirs', icon: <ShoppingBag className="w-4 h-4 text-rose-400" />, tip: 'Pashmina shawls, tea leaves, local spices & handicrafts' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-28">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <Wallet className="w-4 h-4 text-amber-400" />
            <span>Financial Precision</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Travel Budget Planner
          </h1>
          <p className="text-sm sm:text-base text-neutral-400">
            Calculate accurate trip expenses and balance costs to prevent surprises on the road.
          </p>
        </div>

        {/* Currency Switcher */}
        <CurrencySwitcher currency={currency} onChange={setCurrency} />
      </div>

      {/* Target Budget Input & Presets */}
      <TargetBudget
        budget={budget}
        formatCost={formatCost}
        rate={currentRate}
        onUpdateField={updateBudgetField}
        onApplyPreset={applyPreset}
      />

      {/* Expense Categories Breakdown Table (matching prompt format:
           Transportation   ₹4,000
           Hotel            ₹5,000
           Food             ₹2,500
           Activities       ₹1,500
           Shopping         ₹1,000
           ────────────────────────
           Total            ₹14,000
      ) */}
      <CategoryBreakdown budget={budget} formatCost={formatCost} onUpdateField={updateBudgetField} />

      {/* Pro Travel Tips & Next Action */}
      <SyncBanner onSync={() => setActiveTab('planner')} />

      <PhotoJournal title="Budget-Smart Photo Journal" subtitle="Maximum wonder per rupee — frames from our most value-packed routes." count={8} />
      <TravelTipsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
