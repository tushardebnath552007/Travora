import React from 'react';
import { MapPin, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { MapPinData } from '../data/pins';

interface MapCanvasProps {
  pins: MapPinData[];
  selectedId: string;
  onSelect: (pin: MapPinData) => void;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
}

export const MapCanvas: React.FC<MapCanvasProps> = ({
  pins, selectedId, onSelect, zoom, onZoomIn, onZoomOut, onZoomReset
}) => {
  return (
    <div className="lg:col-span-8 bg-neutral-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden min-h-[520px] flex flex-col justify-between">

      {/* Map Grid Background Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#amber_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Subtle stylized topographic contour rings in background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,100 Q200,50 350,150 T650,200 T900,100" fill="none" stroke="#fff" strokeWidth="1.5" />
        <path d="M30,300 Q180,220 320,340 T600,380 T850,280" fill="none" stroke="#fff" strokeWidth="1.5" />
        <path d="M80,480 Q250,420 400,500 T700,520 T950,450" fill="none" stroke="#fff" strokeWidth="1.5" />
      </svg>

      {/* Map Top Bar Controls */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{pins.length} Geocoded Destinations</span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 bg-neutral-950/80 backdrop-blur-md p-1 rounded-xl border border-white/10">
          <button
            onClick={onZoomIn}
            className="p-1.5 text-neutral-300 hover:text-white rounded-lg hover:bg-white/10"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={onZoomOut}
            className="p-1.5 text-neutral-300 hover:text-white rounded-lg hover:bg-white/10"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={onZoomReset}
            className="p-1.5 text-neutral-300 hover:text-white rounded-lg hover:bg-white/10"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Geographic Canvas with Pin Placements */}
      <div
        className="relative w-full h-[400px] my-6 transition-transform duration-300 origin-center select-none"
        style={{ transform: `scale(${zoom})` }}
      >
        {/* Outline stylization of subcontinent area */}
        <div className="absolute inset-x-12 inset-y-4 rounded-3xl border border-dashed border-white/10 pointer-events-none" />

        {pins.map((pin) => {
          const isSelected = selectedId === pin.id;

          return (
            <div
              key={pin.id}
              onClick={() => onSelect(pin)}
              className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 group transition-transform z-20"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              {/* Pulse ring for active pin */}
              {isSelected && (
                <div className="absolute -inset-3 rounded-full bg-amber-400/30 animate-ping pointer-events-none" />
              )}

              {/* Marker Pin Icon */}
              <div className={`p-2 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
                isSelected
                  ? 'bg-amber-400 text-neutral-950 scale-125 ring-4 ring-amber-400/30 font-bold'
                  : 'bg-neutral-950 border border-white/20 text-neutral-300 hover:text-white hover:border-amber-400/60 hover:scale-110'
              }`}>
                <MapPin className="w-4 h-4" />
              </div>

              {/* Pin Text Label */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[11px] font-bold whitespace-nowrap transition-all shadow-md ${
                isSelected
                  ? 'bg-amber-400 text-neutral-950 font-display'
                  : 'bg-black/80 text-white border border-white/10 group-hover:bg-amber-400 group-hover:text-neutral-950'
              }`}>
                {pin.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Footer status */}
      <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-white/10">
        <span>Click any glowing marker to inspect destination itinerary</span>
        <span className="text-amber-300 font-mono text-[11px]">TRAVORA GEO-ENGINE</span>
      </div>

    </div>
  );
};
