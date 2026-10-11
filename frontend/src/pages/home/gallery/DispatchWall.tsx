import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { useTravora } from '../../../context/TravoraContext';

const PHOTOS = [
  { title: 'Dal Lake Shikara', place: 'Kashmir', img: '/assets/images/dest_kashmir_paradise_1791217715653.jpg', note: '“05:45 AM sunrise”' },
  { title: 'Granite Towers', place: 'Patagonia', img: '/assets/images/dest_patagonia_torres_1791217704007.jpg', note: '“Glacial wind”' },
  { title: 'Aurora Borealis', place: 'Iceland', img: '/assets/images/dest_iceland_aurora_1791217726046.jpg', note: '“Dancing green light”' },
  { title: 'Alpine Dawn', place: 'Swiss Alps', img: '/assets/images/grand_matterhorn_alps_1791222654485.jpg', note: '“Pure morning air”' },
  { title: 'Golden Dunes', place: 'Sahara', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', note: '“Sunset caravan”' },
  { title: 'Backwater Sunset', place: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80', note: '“Drifting at dusk”' },
];

export const DispatchWall: React.FC = () => {
  const { openLightbox } = useTravora();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-300 uppercase mb-1 font-mono">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span>Polaroid Snapshots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Curated Dispatches from Around the Earth
          </h2>
        </div>
        <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
          Click any photo for cinematic view
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {PHOTOS.map((photo, index) => (
          <div
            key={index}
            onClick={() => openLightbox(photo.img, `${photo.title} — ${photo.place}`)}
            className="group relative h-56 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-cyan-400/80 cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <img
              src={photo.img}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-xs font-black text-white block group-hover:text-cyan-300 transition-colors truncate font-display">
                {photo.title}
              </span>
              <span className="text-[10px] text-cyan-300 uppercase tracking-widest block font-mono">
                {photo.place}
              </span>
              <span className="font-handwriting text-amber-300 text-sm select-none block mt-0.5">
                {photo.note}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
