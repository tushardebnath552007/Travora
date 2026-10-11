import React, { useState } from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TravelTipsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { MAP_PINS, MapPinData } from './data/pins';
import { CategoryPills } from './filters/CategoryPills';
import { MapCanvas } from './canvas/MapCanvas';
import { PinDossier } from './dossier/PinDossier';
import { 
  MapPin, 
  Star, 
  ArrowRight, 
  Compass, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Sparkles,
  Heart
} from 'lucide-react';

export const InteractiveMapView: React.FC = () => {
  const { viewDestination, toggleWishlist, isWishlisted, setActiveTab } = useTravora();
  const [selectedPin, setSelectedPin] = useState<MapPinData>(MAP_PINS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredPins = MAP_PINS.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-28">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Geographic Discovery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Explore on Interactive Map
          </h1>
          <p className="text-sm text-neutral-400">
            Pinpoint iconic mountain valleys, tropical coasts, and spiritual horizons.
          </p>
        </div>

        {/* Filter Pills */}
        <CategoryPills
          categories={['All', 'Mountains', 'Beaches', 'Heritage', 'Nature']}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {/* Main Map Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Interactive Map Box (8 cols) */}
        <MapCanvas
          pins={filteredPins}
          selectedId={selectedPin.id}
          onSelect={setSelectedPin}
          zoom={zoomLevel}
          onZoomIn={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}
          onZoomOut={() => setZoomLevel(prev => Math.max(0.8, prev - 0.1))}
          onZoomReset={() => setZoomLevel(1)}
        />

        {/* Selected Destination Preview Drawer (4 cols) */}
        <PinDossier
          pin={selectedPin}
          wishlisted={isWishlisted(selectedPin.id)}
          onToggle={toggleWishlist}
          onView={viewDestination}
          onPlan={() => setActiveTab('planner')}
        />

      </div>

      <PhotoJournal title="Cartography Photo Journal" subtitle="Every pin has a postcard — frames from across the map." count={8} />
      <TravelTipsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
