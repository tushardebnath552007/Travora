import React from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { Flame, ArrowRight, Heart, Star } from 'lucide-react';

// Handcrafted artisanal details for destinations
const HANDCRAFTED_DEST_DETAILS: Record<string, {
  coords: string;
  handwrittenTip: string;
  permitStamp: string;
  altitude: string;
}> = {
  kashmir: {
    coords: '34.0837° N · 74.7973° E',
    handwrittenTip: '“Early shikara at 05:45 AM before lake horns echo; Dal lotus mist is pure magic.”',
    permitStamp: 'ALPINE PERMIT · CERTIFIED',
    altitude: '1,585m ALT'
  },
  goa: {
    coords: '15.2993° N · 74.1240° E',
    handwrittenTip: '“Walk past Cola lagoon sandbar at low tide for private emerald rock pools.”',
    permitStamp: 'COASTAL SEAL · VERIFIED',
    altitude: '10m SEA LEVEL'
  },
  manali: {
    coords: '32.2432° N · 77.1892° E',
    handwrittenTip: '“Old Manali cedar lanes smell of woodsmoke and crisp autumn apple orchards.”',
    permitStamp: 'VALLEY PASS · GRADE A',
    altitude: '2,050m ALT'
  },
  darjeeling: {
    coords: '27.0410° N · 88.2663° E',
    handwrittenTip: '“Order Muscatel second flush at Nathmulls; watch clouds roll across Kanchenjunga.”',
    permitStamp: 'QUEEN OF HILLS · AUTHENTIC',
    altitude: '2,042m ALT'
  },
  kerala: {
    coords: '9.9312° N · 76.2673° E',
    handwrittenTip: '“Tell your boat captain to moor near Vembanad rice paddies for fresh Karimeen fry.”',
    permitStamp: 'BACKWATERS CHARTER',
    altitude: '2m SEA LEVEL'
  },
  sikkim: {
    coords: '27.3389° N · 88.6065° E',
    handwrittenTip: '“Chanted morning prayers at Rumtek give you goosebumps in the high mountain air.”',
    permitStamp: 'SHANGRI-LA PERMIT',
    altitude: '1,650m ALT'
  }
};

export const TrendingGrid: React.FC = () => {
  const {
    destinations,
    viewDestination,
    toggleWishlist,
    isWishlisted,
    setActiveTab
  } = useTravora();

  const trendingDestinations = destinations.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-400 uppercase mb-1 font-mono">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Hand-Scouted Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
            Trending Destinations
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mt-2 max-w-2xl font-light">
            Bespoke travel destinations mapped with local Sherpa notes, coordinates, and exact rupee expense guidelines.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveTab('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-sm font-black text-cyan-300 hover:text-amber-300 tracking-wider uppercase group cursor-pointer transition-colors shrink-0"
        >
          <span>View All 500+ Spots</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* 6 Destination Cards with Handcrafted Notes & Coordinates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingDestinations.map((dest) => {
          const wishlisted = isWishlisted(dest.id);
          const details = HANDCRAFTED_DEST_DETAILS[dest.id];

          return (
            <div
              key={dest.id}
              onClick={() => {
                viewDestination(dest.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative bg-slate-950/80 backdrop-blur-2xl border-2 border-cyan-500/25 hover:border-cyan-400/80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_25px_55px_rgba(0,0,0,0.9),0_0_35px_rgba(6,182,212,0.35)] cursor-pointer flex flex-col"
            >
              {/* Image Section with Polaroid Coordinates */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/30" />

                {/* Passport Stamp Badge */}
                {details && (
                  <div className="absolute top-4 left-4 passport-stamp px-2.5 py-0.5 bg-black/75 border-amber-400 text-amber-300 text-[9px] font-mono-tag tracking-wider uppercase font-bold shadow-md">
                    {details.permitStamp}
                  </div>
                )}

                {/* Bookmark Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(dest.id, dest.name);
                  }}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 active:scale-90 z-10 cursor-pointer ${
                    wishlisted
                      ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)]'
                      : 'bg-black/60 text-white hover:bg-rose-500 hover:text-white'
                  }`}
                  title={wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${wishlisted ? 'fill-white' : ''}`} />
                </button>

                {/* Category & Rating Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-extrabold text-cyan-300 font-mono text-xs bg-black/75 px-3 py-1 rounded-lg backdrop-blur-md border border-cyan-400/30 shadow-md">
                    {dest.category}
                  </span>
                  <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30 shadow-md">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-black text-white text-sm">{dest.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Content Details with Artisanal Handwritten Note */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Geographic Coordinates and Altitude */}
                  {details && (
                    <div className="flex items-center justify-between text-[11px] font-mono-tag text-cyan-300/80 mb-2">
                      <span>{details.coords}</span>
                      <span className="text-amber-300 font-bold">{details.altitude}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white tracking-wide font-display group-hover:text-cyan-300 transition-colors">
                      {dest.name}
                    </h3>
                    <span className="text-xs text-neutral-400 font-bold font-mono">
                      {dest.region}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed font-light">
                    {dest.tagline}
                  </p>

                  {/* Artisanal Handwritten Insider Note */}
                  {details && (
                    <div className="mt-3 p-3 rounded-2xl bg-amber-500/10 border border-amber-400/25 flex items-start gap-2 shadow-inner">
                      <span className="text-amber-300 text-xs">✍️</span>
                      <p className="font-handwriting text-lg text-amber-200 leading-snug select-none">
                        {details.handwrittenTip}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold font-mono">
                      Estimated Budget
                    </div>
                    <div className="text-amber-300 font-black text-lg font-mono">
                      ₹{dest.startingPrice.toLocaleString('en-IN')}{' '}
                      <span className="text-neutral-400 text-xs font-normal font-sans">
                        · {dest.recommendedDays}
                      </span>
                    </div>
                  </div>

                  <span className="px-5 py-2.5 rounded-full bg-cyan-500/15 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-amber-300 group-hover:text-slate-950 text-cyan-300 font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-sm group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
