import React, { useEffect } from 'react';
import { useTravora } from '../context/TravoraContext';
import { X, Download, Share2 } from 'lucide-react';

export const ImageLightbox: React.FC = () => {
  const { lightboxImage, closeLightbox, showToast } = useTravora();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, closeLightbox]);

  if (!lightboxImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6"
      onClick={closeLightbox}
    >
      {/* Top Bar */}
      <div 
        className="w-full max-w-5xl flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm font-semibold text-white truncate font-display">
          {lightboxImage.title}
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              navigator.clipboard?.writeText(lightboxImage.url);
              showToast('✓ Photo URL copied to clipboard!', 'info');
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Share Photo"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={closeLightbox}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Frame */}
      <div 
        className="relative max-w-5xl max-h-[80vh] flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={lightboxImage.url}
          alt={lightboxImage.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10"
        />
      </div>

      {/* Bottom hint */}
      <div className="text-[11px] text-neutral-400 select-none pb-2">
        Press Esc or click anywhere outside to close
      </div>
    </div>
  );
};
