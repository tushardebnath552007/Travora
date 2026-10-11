import React from 'react';

export type Currency = 'INR' | 'USD' | 'EUR';

interface CurrencySwitcherProps {
  currency: Currency;
  onChange: (currency: Currency) => void;
}

export const CurrencySwitcher: React.FC<CurrencySwitcherProps> = ({ currency, onChange }) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-white/10 rounded-xl shrink-0 self-start sm:self-auto">
      {(['INR', 'USD', 'EUR'] as const).map(curr => (
        <button
          key={curr}
          onClick={() => onChange(curr)}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            currency === curr
              ? 'bg-amber-400 text-neutral-950 shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          {curr === 'INR' ? '₹ INR' : curr === 'USD' ? '$ USD' : '€ EUR'}
        </button>
      ))}
    </div>
  );
};
