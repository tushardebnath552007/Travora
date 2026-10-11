import React from 'react';
import { Star, MapPin, Clock, Wallet, Heart, Plane, Share2 } from 'lucide-react';
import { useTravora } from '../../../context/TravoraContext';
import { Destination } from '../../../types/travel';

interface DestinationHeroProps {
  destination: Destination;
}

export const DestinationHero: React.FC<DestinationHeroProps> = ({ destination }) => {
  const { toggleWishlist, isWishlisted, generateItinerary, showToast } = useTravora();
  const wishlisted = isWishlisted(destination.id);

  const handlePlanMyTrip = () => {
    generateItinerary({
      destinationId: destination.id,
      durationDays: parseInt(destination.recommendedDays) || 5,
      budget: destination.startingPrice,
      travelType: 'Couple',
      interests: destination.travelInfo.bestFor
    });
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('✓ Link copied to clipboard!', 'info');
  };

  return (
    <div className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-slate-950">
      <img
        src={destination.heroImage}
        alt={destination.name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />

      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-16">
        <div className="space-y-4 max-w-3xl">

          {/* Country / Subtitle kicker with Coordinates and Stamp */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-xs tracking-widest text-cyan-300 font-bold uppercase font-mono shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <span>{destination.country}</span>
              <span>·</span>
              <span>{destination.region}</span>
            </div>
            <div className="passport-stamp px-2.5 py-0.5 bg-amber-500/15 border-amber-400 text-amber-300 text-[10px] font-mono-tag tracking-wider uppercase font-bold">
              ★ CERTIFIED HORIZON ★
            </div>
          </div>

          {/* Destination Name & Subtitle */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase font-display tracking-tight leading-none drop-shadow-2xl">
              {destination.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-serif-luxury italic text-amber-200 drop-shadow">
              {destination.subtitle}
            </p>
            <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 block -rotate-1 pt-1 drop-shadow select-none">
              “Hand-scouted itinerary routes verified on foot by local explorers...”
            </span>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-200 pt-2 font-mono">
            <div className="flex items-center gap-1.5 bg-slate-950/80 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-cyan-500/20">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{destination.rating}</span>
              <span className="text-neutral-400 font-sans">({destination.reviewsCount} reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950/80 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-cyan-500/20">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{destination.region}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950/80 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-cyan-500/20">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Recommended: {destination.recommendedDays}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950/80 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-cyan-500/20">
              <Wallet className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-amber-300">From ₹{destination.startingPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* CTAs with Rich Glowing Hover */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={handlePlanMyTrip}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] cursor-pointer transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Plane className="w-4 h-4 -rotate-45" />
              <span>Plan My Trip</span>
            </button>

            <button
              onClick={() => toggleWishlist(destination.id, destination.name)}
              className={`px-6 py-3.5 rounded-full border font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-md transform hover:scale-105 ${
                wishlisted
                  ? 'border-rose-500 bg-rose-500/20 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                  : 'border-white/20 bg-white/10 text-white hover:border-cyan-400/50 hover:bg-cyan-500/10'
              }`}
            >
              <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{wishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-3.5 rounded-full border border-white/20 bg-slate-900/80 hover:bg-cyan-500/20 hover:border-cyan-400 text-white transition-all cursor-pointer transform hover:scale-110"
              title="Share this destination"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
