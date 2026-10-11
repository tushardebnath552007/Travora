import React from 'react';
import { Sparkles } from 'lucide-react';

interface SyncBannerProps {
  onSync: () => void;
}

export const SyncBanner: React.FC<SyncBannerProps> = ({ onSync }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-900 to-neutral-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Budget Optimization</span>
        </div>
        <p className="text-xs text-neutral-300 max-w-lg leading-relaxed">
          Booking toy train tickets, gondolas, and shikaras at least 2 weeks in advance saves up to 25% on peak-season surges.
        </p>
      </div>

      <button
        onClick={onSync}
        className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md shadow-amber-500/20"
      >
        Synchronize with Planner
      </button>
    </div>
  );
};
