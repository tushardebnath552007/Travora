import React from 'react';
import { Search } from 'lucide-react';

interface FilterBarProps {
  search: string;
  onSearch: (value: string) => void;
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  search, onSearch, categories, selected, onSelect, resultCount
}) => {
  return (
    <div className="bg-slate-950/80 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl p-6 shadow-2xl space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">

        <div className="relative w-full sm:flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="text"
            placeholder="Search attractions (e.g. Taj Mahal, Dudhsagar Falls, Amer Fort)..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-2xl border transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 ${
                selected === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-amber-300 border-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'border-white/10 bg-slate-900 text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      <div className="flex items-center justify-between text-xs text-neutral-400 pt-1 font-mono">
        <span>Found <strong className="text-cyan-300">{resultCount}</strong> remarkable attractions</span>
        {search && (
          <button onClick={() => onSearch('')} className="text-cyan-400 hover:text-amber-300 hover:underline">
            Clear search
          </button>
        )}
      </div>
    </div>
  );
};
