import React, { useState, useEffect } from 'react';
import { useTravora } from '../context/TravoraContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Star, 
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  Plane
} from 'lucide-react';

interface HeroSlide {
  id: string;
  name: string;
  subtitle: string;
  region: string;
  country: string;
  tagline: string;
  image: string;
  rating: number;
  price: string;
  duration: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'patagonia',
    name: 'PATAGONIA',
    subtitle: 'Torres del Paine',
    region: 'SOUTH AMERICA',
    country: 'Chile & Argentina',
    tagline: 'Curated and extraordinary travel experiences to the planet’s most unique destinations, blending luxury with authentic discovery.',
    image: '/assets/images/dest_patagonia_torres_1791217704007.jpg',
    rating: 4.95,
    price: '₹95,000',
    duration: '7–10 Days'
  },
  {
    id: 'kashmir',
    name: 'KASHMIR',
    subtitle: 'Heaven on Earth',
    region: 'INDIA',
    country: 'Jammu & Kashmir',
    tagline: 'Gaze upon emerald valleys, glide through Dal Lake in lotus blossoms, and ride the highest cable cars of Gulmarg.',
    image: '/assets/images/dest_kashmir_paradise_1791217715653.jpg',
    rating: 4.9,
    price: '₹18,000',
    duration: '5–7 Days'
  },
  {
    id: 'iceland',
    name: 'ICELAND',
    subtitle: 'Glacier Lagoons',
    region: 'EUROPE',
    country: 'Nordic Arctic',
    tagline: 'Witness dancing green Northern Lights over shimmering icebergs and volcanic black sand beaches.',
    image: '/assets/images/dest_iceland_aurora_1791217726046.jpg',
    rating: 4.92,
    price: '₹78,000',
    duration: '6–8 Days'
  },
  {
    id: 'morocco',
    name: 'MOROCCO',
    subtitle: 'Sahara Treasures',
    region: 'AFRICA',
    country: 'Marrakech & Dunes',
    tagline: 'Endless starlit desert dunes, fragrant saffron souks, and mystical ochre palaces of the imperial kingdoms.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1600&q=80',
    rating: 4.87,
    price: '₹62,000',
    duration: '7–9 Days'
  },
  {
    id: 'darjeeling',
    name: 'DARJEELING',
    subtitle: 'Queen of the Hills',
    region: 'INDIA',
    country: 'West Bengal',
    tagline: 'Wake to pink sunrise on Mount Kanchenjunga, heritage toy trains, and fragrant first-flush tea gardens.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    rating: 4.85,
    price: '₹15,000',
    duration: '4–5 Days'
  }
];

export const HeroCarousel: React.FC = () => {
  const { setActiveTab, viewDestination, toggleWishlist, isWishlisted } = useTravora();
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeSlide = HERO_SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-[88vh] min-h-[640px] max-h-[920px] overflow-hidden select-none bg-slate-950">
      
      {/* Background Images with smooth fade transition */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Vertical counter badge on the left margin (as in reference image "02 / 03") */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
        <span className="text-[11px] font-mono tracking-widest text-cyan-300 rotate-90 my-2 font-bold">
          {String(currentIndex + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
        </span>
        <div className="w-[2px] h-16 bg-white/20 relative rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-cyan-400 to-amber-300 absolute transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            style={{ 
              height: `${(1 / HERO_SLIDES.length) * 100}%`,
              top: `${(currentIndex / HERO_SLIDES.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-12 md:py-16">
        
        {/* Top spacer */}
        <div />

        {/* Center Grid: Left Typography + Right Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Big Headline & CTA */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 pr-2">
            
            {/* Region / Category kicker with Expedition Coordinates */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-xs tracking-[0.25em] uppercase text-cyan-300 font-bold font-mono shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Compass className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                <span>{activeSlide.region} · {activeSlide.country}</span>
              </div>
              <span className="font-mono-tag text-[11px] text-cyan-300/80 tracking-widest hidden sm:inline px-2 py-0.5 rounded bg-black/40 border border-white/10">
                LOC: 34.08° N · 74.79° E
              </span>
              <div className="passport-stamp px-2.5 py-0.5 bg-amber-500/15 border-amber-400 text-amber-300 text-[10px] font-mono-tag tracking-wider uppercase font-bold hidden md:inline">
                ★ BESPOKE ROUTE ★
              </div>
            </div>

            {/* Wonders of the World Typography with Stylish Fonts */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-display leading-[0.95] drop-shadow-2xl">
                WONDERS
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury italic font-medium bg-gradient-to-r from-amber-200 via-amber-300 to-cyan-300 bg-clip-text text-transparent tracking-wide">
                of the WORLD
              </h2>
              <span className="font-handwriting text-2xl sm:text-3xl text-amber-300 block -rotate-1 drop-shadow-md pt-1 select-none">
                “Bespoke routes scouted on foot, crafted for true wanderers...”
              </span>
            </div>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-xl font-light leading-relaxed drop-shadow-md">
              {activeSlide.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex items-center gap-6 text-xs sm:text-sm text-neutral-200 pt-1">
              <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 backdrop-blur-md">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">{activeSlide.rating}</span>
                <span className="text-neutral-400">Rating</span>
              </div>
              <span className="text-neutral-500">·</span>
              <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span className="text-white font-medium">{activeSlide.duration}</span>
              </div>
              <span className="text-neutral-500">·</span>
              <div className="text-amber-300 font-bold text-sm bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 backdrop-blur-md">
                From {activeSlide.price}
              </div>
            </div>

            {/* Primary Action Buttons with Rich Hover States */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  viewDestination(activeSlide.id);
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300 hover:from-cyan-300 hover:via-teal-300 hover:to-amber-200 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] cursor-pointer flex items-center gap-2 group"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('explore')}
                className="px-6 py-3.5 rounded-full border border-cyan-500/40 hover:border-cyan-400 bg-slate-950/60 hover:bg-cyan-500/15 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md cursor-pointer transform hover:scale-105"
              >
                Explore Destinations
              </button>
            </div>
          </div>

          {/* Right Column: Floating Destination Cards Stack (matching reference image) */}
          <div className="lg:col-span-6 flex items-center justify-end overflow-visible pt-4 lg:pt-0">
            <div className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-4 pt-2 px-1 max-w-full no-scrollbar">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                const wishlisted = isWishlisted(slide.id);

                return (
                  <div
                    key={slide.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-44 sm:w-52 h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group ${
                      isActive 
                        ? 'ring-2 ring-cyan-400 scale-105 shadow-[0_0_35px_rgba(34,211,238,0.4)] z-20 -translate-y-2' 
                        : 'opacity-70 hover:opacity-100 hover:scale-100 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]'
                    }`}
                  >
                    {/* Background image inside card */}
                    <img
                      src={slide.image}
                      alt={slide.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />

                    {/* Top Bookmark Action */}
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(slide.id, slide.name);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 active:scale-90 cursor-pointer ${
                          wishlisted 
                            ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)]' 
                            : 'bg-black/50 text-white hover:bg-rose-500 hover:text-white'
                        }`}
                        title={wishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${wishlisted ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                      <div className="text-[10px] tracking-widest text-cyan-300 font-bold uppercase mb-0.5 font-mono">
                        {slide.region}
                      </div>
                      <div className="text-base sm:text-lg font-black text-white tracking-wide font-display group-hover:text-cyan-200 transition-colors">
                        {slide.name}
                      </div>
                      <div className="text-xs text-neutral-300 flex items-center justify-between mt-1">
                        <span className="truncate">{slide.subtitle}</span>
                        <span className="text-amber-300 font-bold ml-1">★ {slide.rating}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Slider Navigation Controls (matching reference image) */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          
          {/* Active destination quick tag */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium">Currently viewing:</span>
            <button
              onClick={() => viewDestination(activeSlide.id)}
              className="text-xs font-bold text-cyan-300 hover:text-amber-300 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{activeSlide.name} ({activeSlide.subtitle})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Slider controls: Previous / Next & Numbers */}
          <div className="flex items-center gap-4 ml-auto">
            
            {/* Arrows with Glowing Hover */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-cyan-500/30 bg-slate-950/70 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-amber-300 hover:text-slate-950 text-white flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                aria-label="Previous destination"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-cyan-500/30 bg-slate-950/70 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-amber-300 hover:text-slate-950 text-white flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                aria-label="Next destination"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Index "01 — 05" (as seen in bottom right of reference image) */}
            <div className="text-xs font-mono tracking-widest text-neutral-300 pl-2">
              <span className="text-cyan-300 font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-neutral-500 mx-2">—</span>
              <span className="text-neutral-400">{String(HERO_SLIDES.length).padStart(2, '0')}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
