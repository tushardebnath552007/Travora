import React, { useState } from 'react';
import { useTravora, NavTab } from '../context/TravoraContext';
import { SocialMediaBar } from './SocialMediaBar';
import { 
  Compass, 
  Heart, 
  MapPin, 
  ShieldCheck, 
  Mail, 
  ArrowUp, 
  Plane, 
  Sparkles, 
  Send, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, viewDestination, destinations, showToast } = useTravora();
  const [emailInput, setEmailInput] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) {
      showToast('Please enter a valid email address', 'info');
      return;
    }
    showToast('✓ Welcome to TRAVORA Dispatches! ✉️', 'success');
    setEmailInput('');
  };

  const galleryTeasers = [
    { id: 'kashmir', name: 'Kashmir', region: 'Paradise on Earth', img: '/assets/images/dest_kashmir_paradise_1791217715653.jpg' },
    { id: 'patagonia', name: 'Patagonia', region: 'Glacial Spires', img: '/assets/images/dest_patagonia_torres_1791217704007.jpg' },
    { id: 'iceland', name: 'Iceland', region: 'Northern Lights', img: '/assets/images/dest_iceland_aurora_1791217726046.jpg' },
    { id: 'darjeeling', name: 'Darjeeling', region: 'Queen of Hills', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80' },
    { id: 'goa', name: 'Goa', region: 'Tropical Bliss', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80' },
    { id: 'manali', name: 'Manali', region: 'Valley of Gods', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <footer className="w-full relative z-20 border-t border-cyan-500/20 bg-slate-950/90 backdrop-blur-2xl text-neutral-400 text-xs mt-12">
      
      {/* 1. Pre-Footer Action Banner: "Start Your Next Journey" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          
          {/* Subtle glowing animated background beam */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-700" />

          <div className="space-y-2 text-center lg:text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-cyan-300 uppercase bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
              <span>Begin Your Next Odyssey</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight">
              Ready to craft your custom travel itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Explore 500+ handpicked mountains, beaches, and cultural marvels. Calculate estimated trip budgets and generate day-by-day plans in seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            <button
              onClick={() => setActiveTab('planner')}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300 hover:from-cyan-300 hover:via-teal-300 hover:to-amber-200 text-slate-950 font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95"
            >
              <Plane className="w-4 h-4 -rotate-45" />
              <span>Launch Trip Planner</span>
            </button>

            <button
              onClick={() => setActiveTab('explore')}
              className="px-6 py-3.5 rounded-full border border-cyan-500/30 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/60 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Explore Destinations
            </button>
          </div>

        </div>
      </div>

      {/* 2. Visual Destination Showcase Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-2 text-cyan-300 font-bold uppercase tracking-wider font-mono">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>Scenic Visual Dispatches:</span>
          </div>
          <button 
            onClick={() => setActiveTab('explore')}
            className="text-amber-300 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
          >
            <span>View All Curated Spots</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryTeasers.map((g) => (
            <div
              key={g.id}
              onClick={() => viewDestination(g.id)}
              className="group relative h-28 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/70 cursor-pointer shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(6,182,212,0.3)]"
            >
              <img
                src={g.img}
                alt={g.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-2 inset-x-2 text-center">
                <span className="text-xs font-bold text-white font-display truncate block group-hover:text-cyan-300 transition-colors">
                  {g.name}
                </span>
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest block font-mono">
                  {g.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Social Media Community Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-y border-white/10">
        <SocialMediaBar />
      </div>

      {/* 4. Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Newsletter Column (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-300 to-amber-300 p-[1.5px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-cyan-400">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>
              <div>
                <span className="font-display tracking-[0.25em] text-xl font-black text-white uppercase block bg-gradient-to-r from-white via-cyan-100 to-amber-300 bg-clip-text text-transparent">
                  TRAVORA
                </span>
                <span className="text-[10px] tracking-widest text-cyan-300 uppercase -mt-0.5 block font-mono font-bold">
                  EXPLORE MORE · TRAVEL BETTER
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm text-xs">
              TRAVORA is a modern luxury travel platform empowering explorers to discover tourist destinations, estimate trip expenses, architect automatic itineraries, and manage their travel bucket list.
            </p>

            {/* Newsletter Input Form */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                Subscribe to Weekly Travel Journal
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 shadow-md shadow-cyan-500/20 transform hover:scale-105 active:scale-95"
                >
                  Join
                </button>
              </form>
              <span className="text-[10px] text-neutral-500">
                Curated travel dispatches every Sunday. No spam, ever.
              </span>
            </div>
          </div>

          {/* Column 2: Top Destinations */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-display border-b border-cyan-500/20 pb-2">
              Trending Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'kashmir', label: 'Kashmir (Heaven on Earth)' },
                { id: 'darjeeling', label: 'Darjeeling (Queen of Hills)' },
                { id: 'goa', label: 'Goa (Tropical Coast)' },
                { id: 'manali', label: 'Manali (Valley of Gods)' },
                { id: 'kerala', label: 'Kerala (God’s Own Country)' },
                { id: 'sikkim', label: 'Sikkim (Mystical Shangri-La)' },
                { id: 'patagonia', label: 'Patagonia (Glaciers & Spires)' },
                { id: 'iceland', label: 'Iceland (Aurora & Lagoons)' },
              ].map(dest => (
                <li key={dest.id}>
                  <button 
                    onClick={() => viewDestination(dest.id)} 
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                  >
                    {dest.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tourist Attractions */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-display border-b border-cyan-500/20 pb-2">
              Iconic Monuments
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Taj Mahal (Agra)',
                'Victoria Memorial (Kolkata)',
                'Howrah Bridge (Kolkata)',
                'Gateway of India (Mumbai)',
                'Amer Fort (Jaipur)',
                'Dudhsagar Falls (Goa)',
                'Darjeeling Toy Train',
                'Valley of Flowers (Uttarakhand)',
              ].map((att, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setActiveTab('attractions')} 
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                  >
                    {att}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Platform & Travel Hub */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-display border-b border-cyan-500/20 pb-2">
              Travel Planning Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('planner')} className="hover:text-cyan-300 transition-colors cursor-pointer hover:translate-x-1 duration-200 inline-block">
                  🧳 Personal Trip Planner
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('itinerary')} className="hover:text-cyan-300 transition-colors cursor-pointer hover:translate-x-1 duration-200 inline-block">
                  📅 Automatic Itinerary Engine
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('budget')} className="hover:text-cyan-300 transition-colors cursor-pointer hover:translate-x-1 duration-200 inline-block">
                  💰 Travel Budget Calculator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('map')} className="hover:text-cyan-300 transition-colors cursor-pointer hover:translate-x-1 duration-200 inline-block">
                  🗺️ Interactive Geo Map
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('wishlist')} className="hover:text-cyan-300 transition-colors cursor-pointer hover:translate-x-1 duration-200 inline-block">
                  ❤️ My Travel Wishlist
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('profile')} className="hover:text-cyan-300 transition-colors cursor-pointer hover:translate-x-1 duration-200 inline-block">
                  👤 Traveler Profile & Bucket List
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* 5. Bottom Legal, Trust & Back to Top Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px]">
              © {new Date().getFullYear()} TRAVORA Inc. All rights reserved. Explore More. Travel Better.
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button onClick={() => setActiveTab('explore')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Destinations
            </button>
            <button onClick={() => setActiveTab('planner')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Trip Engine
            </button>
            <button onClick={() => setActiveTab('wishlist')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Wishlist
            </button>
            
            {/* Scroll to Top Action with Glowing Hover */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-cyan-500/30 bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-amber-300 hover:text-slate-950 text-neutral-300 transition-all duration-300 cursor-pointer flex items-center gap-1.5 transform hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Top</span>
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};
