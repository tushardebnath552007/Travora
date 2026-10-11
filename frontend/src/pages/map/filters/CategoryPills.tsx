import React from 'react';

interface CategoryPillsProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({ categories, active, onChange }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
            active === cat
              ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
              : 'bg-neutral-900 border-white/10 text-neutral-300 hover:text-white'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
