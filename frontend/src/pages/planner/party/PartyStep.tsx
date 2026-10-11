import React from 'react';
import { Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { TravelType } from '../../../types/travel';

const INTEREST_OPTIONS = [
  'Nature',
  'Photography',
  'Adventure',
  'Food',
  'Culture',
  'Heritage',
  'Tea Tasting',
  'Wellness',
  'Wildlife'
];

interface PartyStepProps {
  travelType: TravelType;
  onTravelType: (type: TravelType) => void;
  interests: string[];
  onToggleInterest: (item: string) => void;
}

export const PartyStep: React.FC<PartyStepProps> = ({ travelType, onTravelType, interests, onToggleInterest }) => {
  return (
    <>
      {/* Step 4: Travel Type */}
      <div className="space-y-3 pt-6 border-t border-white/10">
        <label className="text-sm font-bold text-white flex items-center gap-2 font-display">
          <Users className="w-4 h-4 text-amber-400" />
          <span>Travel Type</span>
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['Family', 'Couple', 'Solo', 'Friends'] as TravelType[]).map(type => (
            <button
              type="button"
              key={type}
              onClick={() => onTravelType(type)}
              className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                travelType === type
                  ? 'bg-amber-400/15 border-amber-400 text-white font-bold shadow-md shadow-amber-500/10'
                  : 'bg-neutral-950 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
              }`}
            >
              <div className="text-xl mb-1">
                {type === 'Family' && '👨‍👩‍👦'}
                {type === 'Couple' && '💑'}
                {type === 'Solo' && '🎒'}
                {type === 'Friends' && '🏕️'}
              </div>
              <div className="text-xs font-semibold">{type}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 5: Interests */}
      <div className="space-y-3 pt-6 border-t border-white/10">
        <label className="text-sm font-bold text-white flex items-center gap-2 font-display">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Interests & Experiences (Select Multiple)</span>
        </label>

        <div className="flex flex-wrap gap-2.5">
          {INTEREST_OPTIONS.map(item => {
            const selected = interests.includes(item);
            return (
              <button
                type="button"
                key={item}
                onClick={() => onToggleInterest(item)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-2 ${
                  selected
                    ? 'bg-amber-400 border-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/10'
                    : 'bg-neutral-950 border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${selected ? 'text-neutral-950' : 'text-neutral-600'}`} />
                <span>{item}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
