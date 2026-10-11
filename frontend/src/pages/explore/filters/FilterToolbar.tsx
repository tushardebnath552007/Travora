import React from 'react';
import { Search, X, ArrowUpDown } from 'lucide-react';
import { CategoryType } from '../../../types/travel';

export type SortOption = 'rating-desc' | 'price-asc' | 'price-desc' | 'name-asc';

interface FilterToolbarProps {
  searchQuery: string;
  onSearch: (value: string) => void;
  subcontinent: 'All' | 'India' | 'Global';
  onSubcontinent: (value: 'All' | 'India' | 'Global') => void;
  sortBy: SortOption;
  onSort: (value: SortOption) => void;
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  resultCount: number;
  showReset: boolean;
  onReset: () => void;
}

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  searchQuery, onSearch, subcontinent, onSubcontinent, sortBy, onSort,
  categories, selectedCategory, onSelectCategory, resultCount, showReset, onReset
}) => {
  return (
    <div className="bg-slate-950/80 backdrop-blur-2xl border border-cyan-500/25 rounded-3xl p-6 shadow-2xl space-y-5">

      {/* Search Bar + Sort Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

        {/* Search Box */}
        <div className="relative w-full md:flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="text"
            placeholder="Search destinations, cities, or places (e.g. Kashmir, Darjeeling, Solang)..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 rounded-2xl pl-11 pr-10 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Region Tabs (All / India / Global) */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-white/10 rounded-2xl shrink-0 self-stretch md:self-auto justify-center">
          {(['All', 'India', 'Global'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => onSubcontinent(sub)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap transform hover:scale-105 ${
                subcontinent === sub
                  ? 'bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 shrink-0 self-stretch md:self-auto">
          <span className="text-xs text-cyan-300 flex items-center gap-1 font-bold whitespace-nowrap font-mono">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Sort:</span>
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSort(e.target.value as SortOption)}
            className="bg-slate-900 border border-cyan-500/20 rounded-2xl px-3 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="rating-desc" className="bg-slate-950">Highest Rated ⭐</option>
            <option value="price-asc" className="bg-slate-950">Price: Low to High 💰</option>
            <option value="price-desc" className="bg-slate-950">Price: High to Low 💎</option>
            <option value="name-asc" className="bg-slate-950">Alphabetical (A–Z)</option>
          </select>
        </div>
      </div>

      {/* Category Segmented Tabs with Glowing Hover */}
      <div className="pt-2 border-t border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer border transform hover:scale-105 hover:-translate-y-0.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-400 to-amber-300 border-cyan-400 text-slate-950 font-black shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'border-white/10 bg-slate-900/60 text-neutral-300 hover:border-cyan-400/50 hover:text-cyan-200'
                }`}
              >
                {cat === 'Mountains' && '🏔️ '}
                {cat === 'Beaches' && '🏖️ '}
                {cat === 'Heritage' && '🏛️ '}
                {cat === 'Nature' && '🌲 '}
                {cat === 'Adventure' && '🏕️ '}
                {cat === 'Spiritual' && '🪔 '}
                {cat === 'Wildlife' && '🐅 '}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter & Active Filters Summary */}
      <div className="flex items-center justify-between text-xs text-neutral-400 pt-1 font-mono">
        <div>
          Showing <span className="font-bold text-cyan-300">{resultCount}</span> destinations
          {searchQuery && <span> matching "<span className="text-amber-300">{searchQuery}</span>"</span>}
          {selectedCategory !== 'All' && <span> in <span className="text-cyan-300">{selectedCategory}</span></span>}
        </div>

        {showReset && (
          <button
            onClick={onReset}
            className="text-cyan-400 hover:text-amber-300 hover:underline cursor-pointer font-bold"
          >
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
};
