import React, { useState } from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

const DAYS: { id: string; num: string; theme: string; hoverBorder: string; hoverText: string; noteClass: string; tag: string; title: string; note: string; items: { id: string; label: string }[] }[] = [
  {
    id: 'day1', num: 'DAY 01', theme: 'text-cyan-300', hoverBorder: 'hover:border-cyan-400/70', hoverText: 'group-hover:text-cyan-300',
    noteClass: 'text-amber-300', tag: 'Heritage Arrival', title: 'Arrival & Mall Road',
    note: '“Chowrasta bench at dusk with hot roasted peanuts...”',
    items: [
      { id: 'd1-1', label: '📍 Darjeeling Mall & Promenade' },
      { id: 'd1-2', label: '📍 Chowrasta Heritage Square' },
      { id: 'd1-3', label: '📍 Mahakal Hilltop Temple' },
      { id: 'd1-4', label: '🌅 Sunset at Observatory Hill' },
    ]
  },
  {
    id: 'day2', num: 'DAY 02', theme: 'text-amber-300', hoverBorder: 'hover:border-amber-400/70', hoverText: 'group-hover:text-amber-300',
    noteClass: 'text-amber-300', tag: 'Himalayan Sunrise', title: 'Tiger Hill & Toy Train',
    note: '“Pack your woolen muffler; Tiger Hill dawn wind drops to 4°C!”',
    items: [
      { id: 'd2-1', label: '🌅 Tiger Hill Kanchenjunga Sunrise' },
      { id: 'd2-2', label: '🚂 Batasia Loop War Memorial' },
      { id: 'd2-3', label: '🏛️ Ghoom Ancient Monastery' },
      { id: 'd2-4', label: '🚂 Darjeeling Himalayan Railway' },
    ]
  },
  {
    id: 'day3', num: 'DAY 03', theme: 'text-emerald-300', hoverBorder: 'hover:border-emerald-400/70', hoverText: 'group-hover:text-emerald-300',
    noteClass: 'text-emerald-300', tag: 'Emerald Valleys', title: 'Tea Estates & Falls',
    note: '“Fresh brew fermentation smells of sweet muscatel grapes...”',
    items: [
      { id: 'd3-1', label: '🌲 Happy Valley Tea Estate' },
      { id: 'd3-2', label: '🌳 Chunnu Summer Waterfall' },
      { id: 'd3-3', label: '💧 Ganga Maya Rock Garden' },
      { id: 'd3-4', label: '📸 Mountain View Photography' },
    ]
  },
  {
    id: 'day4', num: 'DAY 04', theme: 'text-rose-300', hoverBorder: 'hover:border-rose-400/70', hoverText: 'group-hover:text-rose-300',
    noteClass: 'text-rose-300', tag: 'Souvenirs & Farewell', title: 'Tea Tasting & Departure',
    note: '“Buy roasted Churpi cheese & handmade Tibetan woolens!”',
    items: [
      { id: 'd4-1', label: '🛍️ Local Tibetan Bazaar Market' },
      { id: 'd4-2', label: '☕ Nathmulls Fine Tea Tasting' },
      { id: 'd4-3', label: '📸 Final Himalayan Sightseeing' },
      { id: 'd4-4', label: '✈️ Scenic Bagdogra Return' },
    ]
  }
];

const BORDER = ['border-cyan-500/25', 'border-amber-500/25', 'border-emerald-500/25', 'border-rose-500/25'];

export const ItineraryShowcase: React.FC = () => {
  const { setActiveTab } = useTravora();

  // Checked itinerary items for Darjeeling showcase
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'd1-1': true,
    'd1-2': true,
    'd2-1': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-cyan-300 uppercase mb-1 font-mono">
            <Calendar className="w-4 h-4" />
            <span>Perforated Route Sheets</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            DARJEELING — 4 DAYS
          </h2>
          <div className="flex items-center gap-3 text-xs font-mono-tag text-cyan-300/90 mt-1">
            <span>SECTOR: DEL ✈️ IXB (Bagdogra)</span>
            <span>·</span>
            <span>TRANSIT: STEAM TOY TRAIN № 779</span>
          </div>
        </div>

        <button
          onClick={() => {
            setActiveTab('itinerary');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-6 py-3 rounded-full border border-cyan-400/40 bg-white/5 hover:bg-cyan-500/15 text-cyan-300 font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer"
        >
          Open Full Itinerary View
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DAYS.map((day, di) => (
          <div key={day.id} className={`rounded-3xl bg-slate-950/85 backdrop-blur-2xl border-2 ${BORDER[di]} p-6 space-y-4 ${day.hoverBorder} transition-all hover:-translate-y-2 shadow-xl`}>
            <div className="flex items-center justify-between pb-3 border-b border-dashed border-white/20">
              <span className={`text-xs font-black uppercase font-mono tracking-widest ${day.theme}`}>
                {day.num}
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">{day.tag}</span>
            </div>
            <h3 className="text-lg font-black text-white font-display">{day.title}</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-200">
              {day.items.map(item => (
                <li key={item.id} onClick={() => toggleCheck(item.id)} className="flex items-center gap-2.5 cursor-pointer group">
                  {checkedItems[item.id] ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className={`w-4 h-4 text-neutral-500 ${day.hoverText} shrink-0`} />
                  )}
                  <span className={checkedItems[item.id] ? 'line-through text-neutral-400' : ''}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className={`pt-2 border-t border-white/10 font-handwriting text-base select-none ${day.noteClass}`}>
              {day.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
