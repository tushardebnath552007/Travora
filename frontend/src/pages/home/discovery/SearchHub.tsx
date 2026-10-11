import React, { useState } from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { CategoryType } from '../../../types/travel';
import { Search, MapPin, Compass, Calendar, Flame, Sparkles } from 'lucide-react';

const quickPicks = [
  { label: 'Kashmir', cat: 'Mountains' as CategoryType, icon: '🏔️' },
  { label: 'Goa', cat: 'Beaches' as CategoryType, icon: '🏖️' },
  { label: 'Darjeeling', cat: 'Mountains' as CategoryType, icon: '☕' },
  { label: 'Manali', cat: 'Adventure' as CategoryType, icon: '❄️' },
  { label: 'Taj Mahal', cat: 'Heritage' as CategoryType, icon: '🏛️' },
  { label: 'Kerala', cat: 'Nature' as CategoryType, icon: '🌴' },
  { label: 'Sikkim', cat: 'Spiritual' as CategoryType, icon: '🪔' },
  { label: 'Patagonia', cat: 'Adventure' as CategoryType, icon: '⛰️' },
  { label: 'Iceland', cat: 'Nature' as CategoryType, icon: '🌌' }
];

export const SearchHub: React.FC = () => {
  const { setActiveTab, setSelectedCategory, setSearchQuery } = useTravora();

  // Local Search state on Home page
  const [homeSearch, setHomeSearch] = useState('');
  const [homeCategory, setHomeCategory] = useState<CategoryType>('All');
  const [homeDuration, setHomeDuration] = useState('All');

  const handleHomeSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (homeSearch.trim()) setSearchQuery(homeSearch.trim());
    if (homeCategory !== 'All') setSelectedCategory(homeCategory);
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-30">
      <div className="rounded-3xl sm:rounded-[36px] bg-slate-950/90 backdrop-blur-2xl border-2 border-cyan-400/40 p-6 sm:p-10 shadow-[0_25px_65px_rgba(0,0,0,0.9),0_0_35px_rgba(6,182,212,0.3)] space-y-6">

        {/* Handcrafted Boarding Pass Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tag border-b border-dashed border-white/20 pb-3">
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>DISPATCH № TRV-2026 // FIELD EXPEDITION MANIFEST</span>
          </div>
          <span className="font-handwriting text-2xl text-amber-300 hidden md:inline -rotate-1 select-none">
            “Where does your heart long to wake up?”
          </span>
          <div className="passport-stamp px-2.5 py-0.5 bg-amber-500/15 border-amber-400 text-amber-300 font-bold text-[10px]">
            ★ OFFICIALLY PERMITTED ★
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
          <div>
            <span className="text-xs font-black tracking-widest text-cyan-300 uppercase font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              Handcrafted Discovery Engine
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-display mt-1">
              Find Your Perfect Destination
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-300">
            <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold">
              500+ Scouted Escapes
            </span>
            <span className="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 font-bold">
              Real-Time Rupee Ledger
            </span>
          </div>
        </div>

        <form onSubmit={handleHomeSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Input 1: Destination / Keyword */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/60 transition-colors">
            <label className="text-xs font-black text-cyan-300 uppercase tracking-wider block font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Where To?
            </label>
            <input
              type="text"
              placeholder="Search Kashmir, Goa, Taj Mahal..."
              value={homeSearch}
              onChange={(e) => setHomeSearch(e.target.value)}
              className="w-full bg-transparent text-sm sm:text-base font-semibold text-white placeholder-neutral-400 focus:outline-none"
            />
          </div>

          {/* Input 2: Category Vibe */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/60 transition-colors">
            <label className="text-xs font-black text-amber-300 uppercase tracking-wider block font-mono flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Experience Style
            </label>
            <select
              value={homeCategory}
              onChange={(e) => setHomeCategory(e.target.value as CategoryType)}
              className="w-full bg-transparent text-sm sm:text-base font-semibold text-white focus:outline-none cursor-pointer appearance-none"
            >
              <option value="All" className="bg-slate-900 text-white">All Horizons (500+)</option>
              <option value="Mountains" className="bg-slate-900 text-white">🏔️ Mountains & Treks</option>
              <option value="Beaches" className="bg-slate-900 text-white">🏖️ Beaches & Islands</option>
              <option value="Heritage" className="bg-slate-900 text-white">🏛️ Heritage & Forts</option>
              <option value="Nature" className="bg-slate-900 text-white">🌲 Nature & Lakes</option>
              <option value="Adventure" className="bg-slate-900 text-white">🏕️ Adventure Sports</option>
              <option value="Spiritual" className="bg-slate-900 text-white">🪔 Spiritual Sanctuaries</option>
              <option value="Wildlife" className="bg-slate-900 text-white">🐅 Wildlife Reserves</option>
            </select>
          </div>

          {/* Input 3: Trip Duration */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-400/60 transition-colors">
            <label className="text-xs font-black text-rose-300 uppercase tracking-wider block font-mono flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Duration
            </label>
            <select
              value={homeDuration}
              onChange={(e) => setHomeDuration(e.target.value)}
              className="w-full bg-transparent text-sm sm:text-base font-semibold text-white focus:outline-none cursor-pointer appearance-none"
            >
              <option value="All" className="bg-slate-900 text-white">Any Duration</option>
              <option value="3-4" className="bg-slate-900 text-white">3–4 Days (Quick Getaway)</option>
              <option value="5-7" className="bg-slate-900 text-white">5–7 Days (Classic Tour)</option>
              <option value="8+" className="bg-slate-900 text-white">8+ Days (Grand Expedition)</option>
            </select>
          </div>

          {/* Action Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 hover:from-cyan-300 hover:via-teal-200 hover:to-amber-200 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] cursor-pointer flex items-center justify-center gap-2 transform hover:scale-[1.03] active:scale-95"
            >
              <Search className="w-5 h-5 text-slate-950 stroke-[3]" />
              <span>Search Places</span>
            </button>
          </div>

        </form>

        {/* Quick Trending Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-black tracking-wider text-cyan-300 uppercase shrink-0 font-mono">
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Trending Now:</span>
          </div>
          {quickPicks.map((pick) => (
            <button
              key={pick.label}
              onClick={() => {
                setSearchQuery(pick.label);
                setSelectedCategory(pick.cat);
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-500/25 hover:to-amber-500/25 border border-cyan-500/20 hover:border-cyan-400/60 text-xs font-bold text-neutral-200 hover:text-cyan-200 transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 flex items-center gap-1.5"
            >
              <span>{pick.icon}</span>
              <span>{pick.label}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
