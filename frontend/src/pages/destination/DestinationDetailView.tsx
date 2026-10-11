import React from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TestimonialsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { ArrowLeft } from 'lucide-react';
import { DestinationHero } from './hero/DestinationHero';
import { EditorialColumn } from './editorial/EditorialColumn';
import { GuideSidebar } from './sidebar/GuideSidebar';
import { ReviewSection } from './reviews/ReviewSection';

export const DestinationDetailView: React.FC = () => {
  const {
    selectedDestinationId,
    destinations,
    setActiveTab
  } = useTravora();

  const destination = destinations.find(d => d.id === selectedDestinationId) || destinations[0];

  return (
    <div className="w-full space-y-16 pb-28">

      {/* Top Navigation Back Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => setActiveTab('explore')}
          className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-400 hover:text-amber-300 transition-colors cursor-pointer group font-mono"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          <span>Back to Explore Horizons</span>
        </button>
      </div>

      {/* Destination Hero Header */}
      <DestinationHero destination={destination} />

      {/* Main Grid: Left Detailed Editorial Content + Right Weather & Travel Specs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Left Column (8 cols): About, Top Attractions, Gallery, Reviews */}
        <div className="lg:col-span-8 space-y-12">
          <EditorialColumn destination={destination} />
          <ReviewSection destination={destination} />
        </div>

        {/* Right Column (4 cols): Sticky Sidebar with Live Weather & Travel Info */}
        <div className="lg:col-span-4 space-y-6">
          <GuideSidebar destination={destination} />
        </div>

      </div>

      <PhotoJournal title="Destination Photo Journal" subtitle="More frames from this region and its neighbours, shot by our field scouts." count={8} />
      <TestimonialsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
