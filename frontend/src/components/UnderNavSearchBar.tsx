import React, { useState, useRef, useEffect } from 'react';
import { useTravora } from '../context/TravoraContext';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Flame,
  X,
  Star,
  Clock,
  ChevronRight
} from 'lucide-react';
import { CategoryType } from '../types/travel';

export const UnderNavSearchBar: React.FC = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    setActiveTab, 
    destinations,
    attractions,
    viewDestination
  } = useTravora();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync when context changes
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    setShowDropdown(false);
    setActiveTab('explore');
  };

  const quickPicks = [
    { label: 'Kashmir', cat: 'Mountains' as CategoryType, icon: '🏔️' },
    { label: 'Goa', cat: 'Beaches' as CategoryType, icon: '🏖️' },
    { label: 'Darjeeling', cat: 'Mountains' as CategoryType, icon: '☕' },
    { label: 'Manali', cat: 'Adventure' as CategoryType, icon: '❄️' },
    { label: 'Taj Mahal', cat: 'Heritage' as CategoryType, icon: '🏛️' },
    { label: 'Kerala', cat: 'Nature' as CategoryType, icon: '🌴' },
    { label: 'Sikkim', cat: 'Spiritual' as CategoryType, icon: '🪔' },
    { label: 'Patagonia', cat: 'Adventure' as CategoryType, icon: '⛰️' },
    { label: 'Iceland', cat: 'Nature' as CategoryType, icon: '🌌' }
  ];

  // Filter matching destinations & attractions for live autocomplete dropdown
  const matchingDestinations = localSearch.trim()
    ? destinations.filter(d => 
        d.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        d.country.toLowerCase().includes(localSearch.toLowerCase()) ||
        d.category.toLowerCase().includes(localSearch.toLowerCase()) ||
        d.tagline.toLowerCase().includes(localSearch.toLowerCase())
      ).slice(0, 4)
    : [];

  const matchingAttractions = localSearch.trim()
    ? attractions.filter(a => 
        a.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        a.destinationName.toLowerCase().includes(localSearch.toLowerCase()) ||
        a.category.toLowerCase().includes(localSearch.toLowerCase())
      ).slice(0, 3)
    : [];

  return (
    <div className="w-full relative z-40 px-3 sm:px-6 lg:px-8 py-2">
      <div className="max-w-6xl mx-auto" ref={dropdownRef}>
        
        {/* Main Floating Glass Search Bar directly under Navigation Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative rounded-2xl sm:rounded-full bg-slate-950/80 backdrop-blur-2xl border border-cyan-500/35 hover:border-cyan-400/80 p-2 sm:p-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(6,182,212,0.22)] hover:shadow-[0_16px_55px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.35)] transition-all duration-300 flex flex-col md:flex-row items-center gap-2 group"
        >
          {/* Destination Search Input with Live Autocomplete */}
          <div className="flex items-center gap-3 px-3 py-1.5 flex-1 w-full border-b md:border-b-0 md:border-r border-white/10 group-hover:border-cyan-500/40 transition-colors">
            <div className="p-2 rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-400/20 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300 border border-cyan-400/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              <MapPin className="w-4 h-4 text-cyan-300" />
            </div>
            <div className="flex-1 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 block font-mono">
                  Where to explore?
                </span>
                <span className="text-[9px] text-amber-300/80 font-mono hidden sm:inline">
                  500+ Curated Spots
                </span>
              </div>
              <input
                type="text"
                placeholder="Search destination, city, monument (e.g. Kashmir, Darjeeling, Taj Mahal)..."
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="w-full bg-transparent text-sm font-semibold text-white placeholder-neutral-400 focus:outline-none"
              />
            </div>
            {localSearch && (
              <button
                type="button"
                onClick={() => {
                  setLocalSearch('');
                  setShowDropdown(false);
                }}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                title="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-3 px-3 py-1.5 w-full md:w-48 border-b md:border-b-0 md:border-r border-white/10 group-hover:border-cyan-500/40 transition-colors">
            <div className="p-2 rounded-full bg-amber-500/15 text-amber-400 group-hover:scale-110 transition-transform border border-amber-400/30">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 block font-mono">
                Category
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
                className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer appearance-none"
              >
                <option value="All" className="bg-slate-900 text-white">All Horizons (500+)</option>
                <option value="Mountains" className="bg-slate-900 text-white">🏔️ Mountains</option>
                <option value="Beaches" className="bg-slate-900 text-white">🏖️ Beaches</option>
                <option value="Heritage" className="bg-slate-900 text-white">🏛️ Heritage</option>
                <option value="Nature" className="bg-slate-900 text-white">🌲 Nature & Lakes</option>
                <option value="Adventure" className="bg-slate-900 text-white">🏕️ Adventure</option>
                <option value="Spiritual" className="bg-slate-900 text-white">🪔 Spiritual</option>
                <option value="Wildlife" className="bg-slate-900 text-white">🐅 Wildlife</option>
                <option value="Food" className="bg-slate-900 text-white">🍜 Culinary & Culture</option>
              </select>
            </div>
          </div>

          {/* Trip Duration Filter */}
          <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 w-full md:w-44 border-b md:border-b-0 border-white/10">
            <div className="p-2 rounded-full bg-rose-500/15 text-rose-400 group-hover:scale-110 transition-transform border border-rose-400/30">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300 block font-mono">
                Trip Length
              </span>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer appearance-none"
              >
                <option value="All" className="bg-slate-900 text-white">Any Duration</option>
                <option value="3-4" className="bg-slate-900 text-white">3–4 Days (Quick)</option>
                <option value="5-7" className="bg-slate-900 text-white">5–7 Days (Standard)</option>
                <option value="8+" className="bg-slate-900 text-white">8+ Days (Grand Tour)</option>
              </select>
            </div>
          </div>

          {/* Submit Search Action Button with Vibrant Glowing Hover */}
          <button
            type="submit"
            className="w-full md:w-auto px-7 py-3 rounded-xl sm:rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 hover:from-cyan-300 hover:via-teal-200 hover:to-amber-200 text-slate-950 font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95 shrink-0"
          >
            <Search className="w-4 h-4 text-slate-950 stroke-[3]" />
            <span>Search Places</span>
          </button>
        </form>

        {/* Live Search Autocomplete Dropdown */}
        {showDropdown && localSearch.trim().length > 0 && (
          <div className="absolute left-3 right-3 sm:left-6 sm:right-6 max-w-6xl mx-auto mt-2 bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(6,182,212,0.3)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Destinations match */}
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2 pb-1 border-b border-white/10">
                  <MapPin className="w-3 h-3 text-cyan-300" />
                  Matching Destinations ({matchingDestinations.length})
                </span>
                {matchingDestinations.length > 0 ? (
                  <div className="space-y-1.5">
                    {matchingDestinations.map(d => (
                      <div
                        key={d.id}
                        onClick={() => {
                          viewDestination(d.id);
                          setShowDropdown(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-2xl bg-white/5 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-400/40 cursor-pointer transition-all duration-200 group"
                      >
                        <img 
                          src={d.heroImage} 
                          alt={d.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-xl object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-xs truncate group-hover:text-cyan-300 font-display">
                              {d.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">
                              {d.category}
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-400 block truncate">
                            {d.tagline} · ₹{d.startingPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{d.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-neutral-500 italic py-2">No destinations matching "{localSearch}"</p>
                )}
              </div>

              {/* Attractions match */}
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2 pb-1 border-b border-white/10">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Tourist Attractions ({matchingAttractions.length})
                </span>
                {matchingAttractions.length > 0 ? (
                  <div className="space-y-1.5">
                    {matchingAttractions.map(att => (
                      <div
                        key={att.id}
                        onClick={() => {
                          setSearchQuery(att.name);
                          setShowDropdown(false);
                          setActiveTab('attractions');
                        }}
                        className="flex items-center gap-3 p-2 rounded-2xl bg-white/5 hover:bg-amber-500/15 border border-white/5 hover:border-amber-400/40 cursor-pointer transition-all duration-200 group"
                      >
                        <img 
                          src={att.image} 
                          alt={att.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-xl object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="flex-1 min-w-0">
                          <span className="font-bold text-white text-xs truncate block group-hover:text-amber-300">
                            {att.name}
                          </span>
                          <span className="text-[10px] text-neutral-400 block truncate">
                            📍 {att.destinationName} · {att.category}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-neutral-500 italic py-2">No individual attractions matching "{localSearch}"</p>
                )}
              </div>

            </div>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono">Enter</kbd> to view all search results
              </span>
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="text-xs font-bold text-cyan-300 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View Full Discovery Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Quick Suggestion Pills below search bar */}
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 px-2 no-scrollbar">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase shrink-0 font-mono">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>Trending:</span>
          </div>

          {quickPicks.map((pick) => (
            <button
              key={pick.label}
              onClick={() => {
                setSearchQuery(pick.label);
                setSelectedCategory(pick.cat);
                setActiveTab('explore');
              }}
              className="px-3.5 py-1.5 rounded-full bg-slate-950/75 hover:bg-gradient-to-r hover:from-cyan-500/25 hover:to-amber-500/25 border border-cyan-500/20 hover:border-cyan-400/60 text-[11px] font-semibold text-neutral-200 hover:text-cyan-200 transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-[0_4px_15px_rgba(6,182,212,0.25)] flex items-center gap-1.5"
            >
              <span>{pick.icon}</span>
              <span>{pick.label}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
