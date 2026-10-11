import React, { useState, useMemo } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TestimonialsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { FilterBar } from './search/FilterBar';
import { AttractionGrid } from './gallery/AttractionGrid';
import { AttractionModal } from './detail/AttractionModal';
import { AttractionItem, CategoryType } from '../../types/travel';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Ticket, 
  Heart, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Calendar,
  X,
  Volume2
} from 'lucide-react';

export const AttractionsView: React.FC = () => {
  const { 
    attractions, 
    viewDestination, 
    toggleWishlist, 
    isWishlisted, 
    openLightbox,
    showToast 
  } = useTravora();

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [selectedAttractionModal, setSelectedAttractionModal] = useState<AttractionItem | null>(null);

  const filteredAttractions = useMemo(() => {
    return attractions.filter((item) => {
      const q = search.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.state.toLowerCase().includes(q) ||
        item.destinationName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      const matchesCat = selectedCat === 'All' || item.category === selectedCat;

      return matchesSearch && matchesCat;
    });
  }, [attractions, search, selectedCat]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-28">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold tracking-widest text-cyan-400 uppercase font-mono">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>Wonders & Monuments</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Tourist Attractions
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-light">
          Discover individual UNESCO monuments, natural cascades, high-altitude cable cars, and architectural marvels.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <FilterBar
        search={search}
        onSearch={setSearch}
        categories={['All', 'Heritage', 'Nature', 'Adventure']}
        selected={selectedCat}
        onSelect={setSelectedCat}
        resultCount={filteredAttractions.length}
      />

      {/* Attractions Grid */}
      <AttractionGrid
        items={filteredAttractions}
        isWishlisted={isWishlisted}
        onOpen={setSelectedAttractionModal}
        onToggle={toggleWishlist}
        onViewDestination={viewDestination}
      />

      {/* Detailed Modal for Attraction */}
      <AttractionModal
        attraction={selectedAttractionModal}
        isWishlisted={isWishlisted}
        onClose={() => setSelectedAttractionModal(null)}
        onToggle={toggleWishlist}
        onPlan={viewDestination}
      />

      <PhotoJournal title="Monument Photo Journal" subtitle="Forts, falls, and sanctuaries in golden light — plan your lens route." count={8} />
      <TestimonialsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
