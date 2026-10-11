import React, { useState } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TravelTipsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { TripBanner } from './banner/TripBanner';
import { DayFlow } from './days/DayFlow';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Wallet, 
  Users, 
  Sparkles, 
  Printer, 
  Share2, 
  CheckCircle2, 
  Circle, 
  ArrowLeft, 
  Compass, 
  ArrowRight,
  BookmarkCheck,
  RotateCcw
} from 'lucide-react';

export const ItineraryView: React.FC = () => {
  const { currentItinerary, setActiveTab, showToast, viewDestination } = useTravora();
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  const toggleActivity = (slotKey: string, title: string) => {
    if (completedActivities.includes(slotKey)) {
      setCompletedActivities(prev => prev.filter(k => k !== slotKey));
    } else {
      setCompletedActivities(prev => [...prev, slotKey]);
      showToast(`✓ Completed "${title}"!`, 'success');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('✓ Itinerary link copied to clipboard!', 'info');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-28">
      
      {/* Top Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab('planner')}
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Modify Trip Parameters</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-white/10 hover:border-white/20 bg-neutral-900 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            title="Share Itinerary"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={handlePrint}
            className="p-2 rounded-xl border border-white/10 hover:border-white/20 bg-neutral-900 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            title="Print or Export PDF"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Itinerary Banner Card matching prompt:
          DARJEELING — 4 DAYS
      */}
      <TripBanner
        itinerary={currentItinerary}
        completedCount={completedActivities.length}
        onViewDestination={viewDestination}
      />

      {/* Day by Day Itinerary Flow (as in prompt: DAY 1, DAY 2, DAY 3, DAY 4) */}
      <DayFlow days={currentItinerary.days} completed={completedActivities} onToggle={toggleActivity} />

      {/* Bottom Actions */}
      <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white font-display">
            Next: Calculate Exact Travel Expenses
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Breakdown flights, stays, dining, and shopping in the Travel Budget Planner.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('budget')}
          className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
        >
          <span>Open Budget Planner</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <PhotoJournal title="Route Photo Journal" subtitle="Golden-hour frames from routes like this one." count={8} />
      <TravelTipsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
