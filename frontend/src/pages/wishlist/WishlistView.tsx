import React, { useState } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TestimonialsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { SavedDestinations } from './collection/SavedDestinations';
import { SavedAttractions } from './collection/SavedAttractions';
import { 
  Heart, 
  MapPin, 
  Star, 
  Trash2, 
  ArrowRight, 
  Compass, 
  Sparkles,
  Calendar,
  Share2
} from 'lucide-react';

export const WishlistView: React.FC = () => {
  const { 
    wishlist, 
    destinations, 
    attractions, 
    toggleWishlist, 
    viewDestination, 
    setActiveTab, 
    generateItinerary,
    showToast 
  } = useTravora();

  const [activeFilter, setActiveFilter] = useState<'All' | 'Destinations' | 'Attractions'>('All');

  // Match wishlist IDs against destinations and attractions
  const savedDestinations = destinations.filter(d => wishlist.includes(d.id));
  const savedAttractions = attractions.filter(a => wishlist.includes(a.id));

  const totalSavedCount = savedDestinations.length + savedAttractions.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-28">
      
      {/* Header matching prompt:
          MY TRAVEL WISHLIST ❤️
      */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-rose-400 uppercase">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Saved Horizons · Persisted in Storage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight flex items-center gap-3">
            <span>MY TRAVEL WISHLIST</span>
            <span className="text-rose-500 text-3xl sm:text-4xl">❤️</span>
          </h1>
          <p className="text-sm text-neutral-400">
            {totalSavedCount} curated sanctuaries ready for your upcoming calendar.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 p-1 bg-neutral-900 border border-white/10 rounded-xl shrink-0 self-start sm:self-auto">
          {(['All', 'Destinations', 'Attractions'] as const).map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === f
                  ? 'bg-amber-400 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {totalSavedCount > 0 ? (
        <div className="space-y-12">
          
          {/* Saved Destinations Section */}
          {(activeFilter === 'All' || activeFilter === 'Destinations') && savedDestinations.length > 0 && (
            <SavedDestinations
              items={savedDestinations}
              onView={viewDestination}
              onToggle={toggleWishlist}
              onPlan={(dest) => generateItinerary({
                destinationId: dest.id,
                durationDays: parseInt(dest.recommendedDays) || 5,
                budget: dest.startingPrice,
                travelType: 'Couple',
                interests: dest.travelInfo.bestFor
              })}
            />
          )}

          {/* Saved Attractions Section */}
          {(activeFilter === 'All' || activeFilter === 'Attractions') && savedAttractions.length > 0 && (
            <SavedAttractions
              items={savedAttractions}
              onToggle={toggleWishlist}
              onExplore={viewDestination}
            />
          )}

        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-24 bg-neutral-900 border border-white/10 rounded-3xl p-8 space-y-5">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/20">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white font-display">Your Wishlist is Empty</h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
            Browse our curated destinations and tourist attractions, and click the heart icon on any card to save your dream spots.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('explore')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
            >
              Discover Destinations Now
            </button>
          </div>
        </div>
      )}

      <PhotoJournal title="Wishlist Photo Journal" subtitle="More dreams to save — fresh frames from across the atlas." count={8} />
      <TestimonialsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
