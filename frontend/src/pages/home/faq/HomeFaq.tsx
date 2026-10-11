import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the TRAVORA Automatic Itinerary generator work?',
    a: 'Our engine pairs your preferred destination, travel party type (solo, couple, family, friends), and duration with hand-curated geographic sequences to optimize travel time, scenic lighting, and peak visiting hours.'
  },
  {
    q: 'Can I customize and save the calculated travel budgets?',
    a: 'Yes! The dynamic budget calculator allows you to adjust transportation, hotels, meals, and sightseeing sliders in real time. Your estimates are saved locally in your browser so you can return to them anytime.'
  },
  {
    q: 'What is the best time of year to visit Kashmir and Darjeeling?',
    a: 'Kashmir is idyllic from April to October for lush alpine meadows and shikara rides, and December to February for powdery snowfall in Gulmarg. Darjeeling is spectacular from March to May (spring rhododendrons) and October to December for crystal-clear Kanchenjunga views.'
  },
  {
    q: 'Do saved places stay in my Wishlist if I close the browser?',
    a: 'Yes, TRAVORA uses browser localStorage persistence. Your saved destinations, marked bucket list items, and generated itineraries remain intact across visits without requiring an account.'
  }
];

export const HomeFaq: React.FC = () => {
  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-black tracking-widest text-cyan-300 uppercase font-mono">
          Travel Knowledge Base
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/25 overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-cyan-300 cursor-pointer"
            >
              <span>{item.q}</span>
              <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
            </button>
            {openFaq === idx && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light border-t border-white/5">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
