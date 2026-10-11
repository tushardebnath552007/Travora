import React from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { CategoryType } from '../../../types/travel';
import { Compass } from 'lucide-react';

const experiences: { title: string; category: CategoryType; icon: string; count: string; image: string; handwrittenNote: string }[] = [
  {
    title: 'Mountain Adventures',
    category: 'Mountains',
    icon: '🏔️',
    count: '140+ Trails',
    image: '/assets/images/dest_kashmir_paradise_1791217715653.jpg',
    handwrittenNote: '“Sherpa-mapped high cols”'
  },
  {
    title: 'Beach Escapes',
    category: 'Beaches',
    icon: '🏖️',
    count: '95+ Coasts',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    handwrittenNote: '“Secret tidal coves”'
  },
  {
    title: 'Nature & Wildlife',
    category: 'Nature',
    icon: '🌲',
    count: '110+ Reserves',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    handwrittenNote: '“Canopy safari tracks”'
  },
  {
    title: 'Heritage & Culture',
    category: 'Heritage',
    icon: '🏛️',
    count: '80+ Monoliths',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    handwrittenNote: '“Centuries of dynastic stone”'
  },
  {
    title: 'Adrenaline Adventures',
    category: 'Adventure',
    icon: '🏕️',
    count: '60+ Expeditions',
    image: '/assets/images/dest_patagonia_torres_1791217704007.jpg',
    handwrittenNote: '“Glacial wind & sheer granite”'
  },
  {
    title: 'Spiritual Quests',
    category: 'Spiritual',
    icon: '🪔',
    count: '75+ Sanctuaries',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    handwrittenNote: '“Temple bells in dawn fog”'
  }
];

export const ExperienceGrid: React.FC = () => {
  const { setActiveTab, setSelectedCategory } = useTravora();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div>
        <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-400 uppercase mb-1 font-mono">
          <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>Field Notebook Collections</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Popular Experiences
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 mt-2 font-light">
          Match your journey to your passion—from snow-capped Himalayan summits to tranquil coastal shores.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            onClick={() => {
              setSelectedCategory(exp.category);
              setActiveTab('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative h-64 rounded-3xl overflow-hidden border-2 border-cyan-500/25 hover:border-cyan-400/80 cursor-pointer shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(6,182,212,0.3)]"
          >
            <img
              src={exp.image}
              alt={exp.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            <div className="absolute inset-0 p-5 flex flex-col justify-end text-left">
              <span className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300 inline-block">
                {exp.icon}
              </span>
              <h4 className="text-base font-black text-white tracking-wide font-display group-hover:text-cyan-300 transition-colors leading-tight">
                {exp.title}
              </h4>
              <span className="text-xs text-cyan-300 font-mono font-bold mt-0.5">
                {exp.count}
              </span>
              <span className="font-handwriting text-amber-300 text-sm mt-1 select-none block">
                {exp.handwrittenNote}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
