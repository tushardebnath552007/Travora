import React, { useState } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TravelTipsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { DestinationStep } from './destination/DestinationStep';
import { ScheduleStep } from './schedule/ScheduleStep';
import { PartyStep } from './party/PartyStep';
import { TravelType } from '../../types/travel';
import { 
  Compass, 
  Calendar, 
  Wallet, 
  Users, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Sliders,
  Plane
} from 'lucide-react';

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

export const TripPlannerView: React.FC = () => {
  const { destinations, generateItinerary, selectedDestinationId } = useTravora();

  const [destinationId, setDestinationId] = useState(selectedDestinationId || 'darjeeling');
  const [durationDays, setDurationDays] = useState<number>(4);
  const [budget, setBudget] = useState<number>(15000);
  const [travelType, setTravelType] = useState<TravelType>('Family');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Nature',
    'Photography',
    'Food'
  ]);

  const toggleInterest = (item: string) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests(prev => prev.filter(i => i !== item));
    } else {
      setSelectedInterests(prev => [...prev, item]);
    }
  };

  const handleCreateTrip = (e: React.FormEvent) => {
    e.preventDefault();
    generateItinerary({
      destinationId,
      durationDays,
      budget,
      travelType,
      interests: selectedInterests
    });
  };

  const currentDestination = destinations.find(d => d.id === destinationId) || destinations[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-28">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-300 uppercase bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-400/30 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Artisanal Itinerary Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Personal Trip Planner
        </h1>
        <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 block -rotate-1 select-none">
          “Hand-scouted itineraries crafted specifically for your pace...”
        </span>
        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-light">
          Tell us your dream destination, travel crew, and passions. Our engine will dynamically architect your complete day-by-day travel blueprint.
        </p>
      </div>

      {/* Main Interactive Form Card */}
      <form onSubmit={handleCreateTrip} className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">

        {/* Step 1: Destination Selection */}
        <DestinationStep
          destinations={destinations}
          value={destinationId}
          preview={currentDestination}
          onSelect={(id) => {
            setDestinationId(id);
            const found = destinations.find(d => d.id === id);
            if (found) {
              setBudget(found.startingPrice);
            }
          }}
        />

        <ScheduleStep
          durationDays={durationDays}
          onDuration={setDurationDays}
          budget={budget}
          onBudget={setBudget}
        />

        <PartyStep
          travelType={travelType}
          onTravelType={setTravelType}
          interests={selectedInterests}
          onToggleInterest={toggleInterest}
        />

        {/* Submit Button */}
        <div className="pt-6 border-t border-white/10">
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-extrabold text-sm sm:text-base tracking-widest uppercase transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 cursor-pointer transform hover:scale-[1.01]"
          >
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span>CREATE MY TRIP</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </form>

      <TravelTipsStrip />
      <PhotoJournal title="Planner Photo Journal" subtitle="Dream fuel for your route sheet — pin the frames you love." count={8} />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
