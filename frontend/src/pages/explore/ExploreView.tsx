import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TravelTipsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { CategoryType, Destination } from '../../types/travel';
import { FilterToolbar, SortOption } from './filters/FilterToolbar';
import { DestinationCatalog, CatalogItem } from './catalog/DestinationCatalog';
import { 
  Search, 
  Star, 
  Heart, 
  ArrowRight, 
  ArrowUpDown, 
  Filter, 
  X, 
  Sparkles, 
  Compass, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

const CATEGORIES: CategoryType[] = [
  'All',
  'Mountains',
  'Beaches',
  'Heritage',
  'Nature',
  'Adventure',
  'Spiritual',
  'Wildlife'
];

export const ExploreView: React.FC = () => {
  const { 
    destinations, 
    viewDestination, 
    toggleWishlist, 
    isWishlisted,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useTravora();

  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');
  const [subcontinentFilter, setSubcontinentFilter] = useState<'All' | 'India' | 'Global'>('All');
  const [maxPrice, setMaxPrice] = useState<number>(100000);

  // Infinite scroll feed state
  const [displayCount, setDisplayCount] = useState<number>(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Filter & Sort Logic
  const filteredDestinations = useMemo(() => {
    return destinations
      .filter((dest) => {
        // Search
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery = 
          !query || 
          dest.name.toLowerCase().includes(query) ||
          dest.region.toLowerCase().includes(query) ||
          dest.country.toLowerCase().includes(query) ||
          dest.about.toLowerCase().includes(query) ||
          dest.category.toLowerCase().includes(query);

        // Category
        const matchesCategory = 
          selectedCategory === 'All' || dest.category === selectedCategory;

        // Subcontinent
        const matchesSubcontinent = 
          subcontinentFilter === 'All' || dest.subcontinent === subcontinentFilter;

        // Price
        const matchesPrice = dest.startingPrice <= maxPrice;

        return matchesQuery && matchesCategory && matchesSubcontinent && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'rating-desc') return b.rating - a.rating;
        if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [destinations, searchQuery, selectedCategory, subcontinentFilter, maxPrice, sortBy]);

  // Infinite scrolling observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore && displayCount < 30) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setDisplayCount((prev) => prev + 6);
            setIsLoadingMore(false);
          }, 600);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [displayCount, isLoadingMore]);

  // Repeated items for seamless infinite scroll presentation
  const visibleDestinations = useMemo(() => {
    if (filteredDestinations.length === 0) return [];
    const list: CatalogItem[] = [];
    let cycle = 0;
    while (list.length < displayCount && cycle < 5) {
      filteredDestinations.forEach((d, idx) => {
        if (list.length < displayCount) {
          list.push({
            ...d,
            uniqueKey: `${d.id}-${cycle}-${idx}`
          });
        }
      });
      cycle++;
    }
    return list;
  }, [filteredDestinations, displayCount]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-28">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold tracking-widest text-cyan-400 uppercase font-mono">
          <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>Curated Horizons</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Explore Destinations
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-light">
          Search over 500+ handpicked mountains, beaches, cultural kingdoms, and remote wonders across India and beyond.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <FilterToolbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        subcontinent={subcontinentFilter}
        onSubcontinent={setSubcontinentFilter}
        sortBy={sortBy}
        onSort={setSortBy}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        resultCount={filteredDestinations.length}
        showReset={!!searchQuery || selectedCategory !== 'All' || subcontinentFilter !== 'All'}
        onReset={() => {
          setSearchQuery('');
          setSelectedCategory('All');
          setSubcontinentFilter('All');
        }}
      />

      {/* Destination Cards Grid */}
      <DestinationCatalog
        items={visibleDestinations}
        isWishlisted={isWishlisted}
        onView={viewDestination}
        onToggle={toggleWishlist}
        onResetAll={() => {
          setSearchQuery('');
          setSelectedCategory('All');
          setSubcontinentFilter('All');
        }}
      />

      {/* Infinite Scroll Trigger */}
      <div ref={loadMoreRef} className="py-8 flex flex-col items-center justify-center gap-2">
        {isLoadingMore ? (
          <div className="flex items-center gap-3 text-xs text-cyan-400 font-mono font-bold">
            <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span>Streaming more destinations...</span>
          </div>
        ) : (
          <div className="text-xs text-neutral-400 flex items-center gap-2 font-mono">
            <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>Endless exploration active · Scroll for more</span>
          </div>
        )}
      </div>

      <PhotoJournal title="Explorer Photo Journal" subtitle="Postcards from the atlas — every frame links back to a scouted destination." count={8} />
      <TravelTipsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
