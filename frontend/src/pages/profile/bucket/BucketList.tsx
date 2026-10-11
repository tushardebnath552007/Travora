import React, { useState } from 'react';
import { CheckSquare, Square, Plus } from 'lucide-react';

export interface BucketItem {
  id: string;
  name: string;
  completed: boolean;
  region?: string;
}

interface BucketListProps {
  items: BucketItem[];
  onToggle: (id: string) => void;
  onAdd: (name: string, region?: string) => void;
}

export const BucketList: React.FC<BucketListProps> = ({ items, onToggle, onAdd }) => {
  const [newPlaceInput, setNewPlaceInput] = useState('');
  const [newRegionInput, setNewRegionInput] = useState('India');

  const completedCount = items.filter(b => b.completed).length;

  const handleAddBucket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlaceInput.trim()) return;
    onAdd(newPlaceInput.trim(), newRegionInput.trim());
    setNewPlaceInput('');
  };

  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white font-display">
            My Travel Bucket List
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {completedCount} of {items.length} milestones conquered
          </p>
        </div>

        {/* Add to bucket list form */}
        <form onSubmit={handleAddBucket} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Add destination (e.g. Spiti)..."
            value={newPlaceInput}
            onChange={(e) => setNewPlaceInput(e.target.value)}
            className="bg-neutral-950 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-amber-400 text-neutral-950 font-bold hover:bg-amber-300 transition-colors cursor-pointer"
            title="Add to Bucket List"
          >
            <Plus className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Interactive Checkbox List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onToggle(item.id)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              item.completed
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                : 'bg-neutral-950 border-white/10 hover:border-white/25 text-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="text-neutral-400"
              >
                {item.completed ? (
                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Square className="w-5 h-5 text-neutral-500" />
                )}
              </button>
              <div>
                <span className={`text-sm font-semibold ${item.completed ? 'line-through text-neutral-400' : 'text-white'}`}>
                  {item.name}
                </span>
                {item.region && (
                  <span className="text-[10px] text-neutral-400 block -mt-0.5">{item.region}</span>
                )}
              </div>
            </div>

            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
              item.completed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-neutral-400'
            }`}>
              {item.completed ? 'Visited' : 'Pending'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
