import React, { useState, useEffect } from 'react';
import { useTravora, NavTab } from '../context/TravoraContext';
import {
  Compass,
  Search,
  Heart,
  Sun,
  Moon,
  Menu,
  X,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  LogIn,
  UserPlus,
  LogOut
} from 'lucide-react';

/* Distinct navigation identity per page — every page gets its own bar flavor */
const NAVBAR_IDENTITY: Record<NavTab, { eyebrow: string; headline: string; gradient: string; ctaLabel: string; ctaTab: NavTab; ctaIcon: string }> = {
  home: { eyebrow: '✦ Home Base Camp', headline: 'Start every odyssey here', gradient: 'from-cyan-400 via-teal-300 to-amber-300', ctaLabel: 'Explore Havens', ctaTab: 'explore', ctaIcon: '🌍' },
  explore: { eyebrow: '🌍 Destination Atlas', headline: '500+ scouted escapes', gradient: 'from-emerald-400 via-teal-300 to-cyan-400', ctaLabel: 'Plan This Trip', ctaTab: 'planner', ctaIcon: '🧳' },
  destination: { eyebrow: '📍 Field Guide Open', headline: 'Deep-dive destination intel', gradient: 'from-amber-400 via-orange-300 to-rose-400', ctaLabel: 'Build Itinerary', ctaTab: 'itinerary', ctaIcon: '🗺️' },
  attractions: { eyebrow: '🏛️ Monument Registry', headline: 'Forts, falls & sanctuaries', gradient: 'from-violet-400 via-purple-300 to-fuchsia-400', ctaLabel: 'View on Map', ctaTab: 'map', ctaIcon: '🗺️' },
  planner: { eyebrow: '🧳 Expedition Architect', headline: 'Design day-by-day routes', gradient: 'from-rose-400 via-pink-300 to-amber-300', ctaLabel: 'Check Budget', ctaTab: 'budget', ctaIcon: '💰' },
  itinerary: { eyebrow: '🗺️ Route Sheets', headline: 'Your hour-by-hour manifest', gradient: 'from-sky-400 via-cyan-300 to-emerald-300', ctaLabel: 'Estimate Costs', ctaTab: 'budget', ctaIcon: '💰' },
  budget: { eyebrow: '💰 Rupee Ledger', headline: 'Every rupee accounted', gradient: 'from-emerald-400 via-lime-300 to-amber-300', ctaLabel: 'Start Planning', ctaTab: 'planner', ctaIcon: '🧳' },
  wishlist: { eyebrow: '❤️ Saved Dreams', headline: 'Your handpicked havens', gradient: 'from-rose-400 via-red-300 to-orange-300', ctaLabel: 'Discover More', ctaTab: 'explore', ctaIcon: '✨' },
  profile: { eyebrow: '🧭 Traveler Dossier', headline: 'Stats, bucket list & trips', gradient: 'from-amber-400 via-yellow-300 to-cyan-300', ctaLabel: 'Plan New Trip', ctaTab: 'planner', ctaIcon: '✈️' },
  map: { eyebrow: '🛰️ Live Cartography', headline: 'Pins, routes & regions', gradient: 'from-cyan-400 via-sky-300 to-indigo-400', ctaLabel: 'Explore List', ctaTab: 'explore', ctaIcon: '🌍' },
  login: { eyebrow: '🔑 Members Gate', headline: 'Welcome back, explorer', gradient: 'from-teal-400 via-cyan-300 to-sky-400', ctaLabel: 'New Here? Sign Up', ctaTab: 'signup', ctaIcon: '✨' },
  signup: { eyebrow: '✨ Join the Club', headline: 'Free forever, no card needed', gradient: 'from-amber-400 via-rose-300 to-purple-400', ctaLabel: 'Have an Account? Log In', ctaTab: 'login', ctaIcon: '🔑' },
};

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    wishlist,
    theme,
    toggleTheme,
    userProfile,
    searchQuery,
    setSearchQuery,
    showToast,
    authUser,
    logout
  } = useTravora();
  const identity = NAVBAR_IDENTITY[activeTab] ?? NAVBAR_IDENTITY.home;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Discover', icon: '✨' },
    { id: 'explore', label: 'Destinations', icon: '🌍' },
    { id: 'attractions', label: 'Attractions', icon: '🏛️' },
    { id: 'planner', label: 'Trip Planner', icon: '🧳' },
    { id: 'budget', label: 'Budget', icon: '💰' },
    { id: 'map', label: 'Live Map', icon: '🗺️' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (platform: string) => {
    showToast(`Connecting to TRAVORA ${platform} 🌍`, 'info');
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 🌟 FIXED LEFT-SIDE VERTICAL NAVIGATION BAR 🌟 */}
      {/* ======================================================== */}
      {/* Mobile floating button to open left sidebar */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-3 text-cyan-300 rounded-full bg-slate-950/90 border border-cyan-400/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl cursor-pointer"
        aria-label="Toggle Navigation"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile backdrop when sidebar is open */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className={`fixed top-0 left-0 bottom-0 z-50 w-[300px] max-w-[85vw] flex flex-col transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-2xl border-r border-cyan-400/40 shadow-[12px_0_45px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.25)]'
          : 'bg-slate-950/85 backdrop-blur-xl border-r border-cyan-500/25 shadow-[10px_0_35px_rgba(0,0,0,0.7)]'
      }`}>
        <div className="flex flex-col h-full overflow-y-auto p-5 gap-5">
          
          {/* Brand Logo with Illuminated Compass and Enlarged Stylish Font */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none shrink-0"
            aria-label="Travora Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-300 to-amber-300 p-[1.5px] shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all duration-500">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Compass className="w-6 h-6 text-cyan-300 group-hover:rotate-180 transition-transform duration-700 ease-out" />
              </div>
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping pointer-events-none opacity-50" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display tracking-[0.22em] text-xl sm:text-2xl font-black uppercase block bg-gradient-to-r from-white via-cyan-100 to-amber-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-amber-200 transition-colors">
                  TRAVORA
                </span>
                <span className="font-handwriting text-amber-300 text-lg hidden xl:inline -rotate-2 select-none">
                  “handcrafted journeys”
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-cyan-300 uppercase -mt-0.5 block font-bold font-mono">
                EXPLORE MORE · TRAVEL BETTER
              </span>
            </div>
          </button>

          {/* Per-page identity banner — makes every page's bar distinct */}
          <div className={`rounded-2xl p-3.5 bg-gradient-to-br ${identity.gradient} bg-opacity-10 border border-white/15 space-y-1`}>
            <div className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-950/80 font-mono">{identity.eyebrow}</div>
            <div className="text-sm font-black text-slate-950 leading-snug">{identity.headline}</div>
          </div>

          {/* Clean Main Navigation Tabs (Vertical, left sidebar) */}
          <nav className="flex flex-col gap-2 p-2 rounded-2xl bg-slate-900/70 border border-cyan-500/25 backdrop-blur-md w-full">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center gap-2.5 w-full text-left transform hover:translate-x-1 active:scale-95 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/30 via-teal-500/25 to-amber-400/20 text-cyan-200 border border-cyan-400/70 shadow-[0_0_22px_rgba(34,211,238,0.45)] font-black' 
                      : 'text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/20 border border-transparent'
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  <span className="flex-1">{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Left Action Zone (stacked vertically): Quick Search, Social Icons, Wishlist, Plan Trip, Profile */}
          <div className="flex flex-col gap-3 w-full">
            
            {/* Quick Search Button */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-neutral-300 hover:text-cyan-300 bg-slate-900/80 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
              title="Search Destinations (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-cyan-300 shrink-0" />
              <span className="text-sm font-semibold">Search…</span>
              <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono">Ctrl K</kbd>
            </button>

            {/* Social Media Icons (Header Integration) */}
            <div className="flex items-center justify-center gap-1.5 py-2 border-y border-white/10 w-full">
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="p-2 rounded-full text-neutral-400 hover:text-pink-400 hover:bg-pink-500/15 hover:shadow-[0_0_15px_rgba(244,114,182,0.4)] hover:scale-125 transition-all duration-300 cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSocialClick('YouTube')}
                className="p-2 rounded-full text-neutral-400 hover:text-red-400 hover:bg-red-500/15 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:scale-125 transition-all duration-300 cursor-pointer"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSocialClick('X')}
                className="p-2 rounded-full text-neutral-400 hover:text-cyan-400 hover:bg-cyan-500/15 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:scale-125 transition-all duration-300 cursor-pointer"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="p-2 rounded-full text-neutral-400 hover:text-blue-400 hover:bg-blue-500/15 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] hover:scale-125 transition-all duration-300 cursor-pointer"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
            </div>

            {/* Wishlist Link with Glowing Counter Badge */}
            <button
              onClick={() => handleNavClick('wishlist')}
              className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl relative transition-all cursor-pointer border active:scale-95 ${
                activeTab === 'wishlist' 
                  ? 'bg-rose-500/25 text-rose-300 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.5)]' 
                  : 'bg-slate-900/80 border-white/10 text-neutral-300 hover:text-white hover:border-rose-400/50 hover:bg-rose-500/15'
              }`}
              title="My Travel Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 shrink-0 transition-transform active:scale-125 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500 animate-pulse' : ''}`} />
              <span className="text-sm font-semibold">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="ml-auto bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Per-page CTA — different destination action on every page */}
            <button
              onClick={() => handleNavClick(identity.ctaTab)}
              className={`w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${identity.gradient} text-slate-950 font-black text-sm tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(34,211,238,0.45)] cursor-pointer`}
            >
              <span>{identity.ctaIcon}</span>
              <span>{identity.ctaLabel}</span>
            </button>

            {/* Login / Signup / Account row */}
            {authUser ? (
              <div className="w-full flex items-center gap-2 p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/40">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-300 flex items-center justify-center text-xs font-black text-slate-950 shrink-0">
                  {authUser.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-white truncate">{authUser.name}</div>
                  <div className="text-[10px] text-neutral-400 truncate font-mono">{authUser.email}</div>
                </div>
                <button onClick={logout} title="Sign out" className="p-2 rounded-lg text-neutral-400 hover:text-rose-300 hover:bg-rose-500/15 cursor-pointer">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 w-full">
                <button
                  onClick={() => handleNavClick('login')}
                  className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${activeTab === 'login' ? 'bg-cyan-500/25 text-cyan-200 border-cyan-400/70' : 'bg-slate-900/80 border-white/10 text-neutral-200 hover:border-cyan-400/60 hover:text-white'}`}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Log In</span>
                </button>
                <button
                  onClick={() => handleNavClick('signup')}
                  className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${activeTab === 'signup' ? 'bg-amber-400 text-slate-950 border-amber-400' : 'bg-amber-400/15 border-amber-400/40 text-amber-200 hover:bg-amber-400 hover:text-slate-950'}`}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 w-full">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl text-neutral-300 hover:text-amber-300 bg-slate-900/80 hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 transition-all cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mood' : 'Switch to Dark Mood'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-cyan-200" />}
              <span className="text-xs font-bold uppercase">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            {/* Close sidebar on mobile */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-2.5 text-neutral-300 hover:text-cyan-300 rounded-xl bg-slate-900/80 border border-white/10 focus:outline-none cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
            </div>

            {/* Traveler Profile Pill */}
            <button
              onClick={() => handleNavClick('profile')}
              className={`mt-auto w-full flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'border-cyan-400 bg-cyan-500/25 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'border-white/15 bg-slate-900/80 text-neutral-200 hover:border-cyan-400/60 hover:bg-slate-900'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-300 to-amber-300 p-[1.5px] flex items-center justify-center shadow-sm shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-xs font-bold text-cyan-300">
                  {userProfile.name.charAt(0)}
                </div>
              </div>
              <span className="whitespace-nowrap font-medium text-neutral-100 truncate">
                {userProfile.name}
              </span>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-amber-400/25 text-amber-300 text-[10px] font-mono font-bold shrink-0">
                Explorer
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Quick Search Overlay for Instant Jumps (offset for left sidebar on desktop) */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-28 px-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(6,182,212,0.3)] space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3.5 flex-1">
                <Search className="w-6 h-6 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search destinations, cities, monuments (e.g. Kashmir, Darjeeling, Taj Mahal)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-neutral-400 text-base sm:text-lg focus:outline-none font-medium"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setShowSearchModal(false);
                      setActiveTab('explore');
                    }
                  }}
                />
              </div>
              <button 
                onClick={() => setShowSearchModal(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-sm text-neutral-400">
              <span className="text-cyan-400 font-mono font-bold">Popular Suggestions:</span>
              {['Kashmir', 'Darjeeling', 'Goa', 'Taj Mahal', 'Manali', 'Kerala', 'Sikkim', 'Patagonia', 'Iceland'].map(item => (
                <button
                  key={item}
                  onClick={() => {
                    setSearchQuery(item);
                    setShowSearchModal(false);
                    setActiveTab('explore');
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-neutral-300 transition-all cursor-pointer transform hover:scale-105 text-xs font-semibold"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="pt-2 flex justify-between items-center text-xs text-neutral-400 border-t border-white/5 font-mono">
              <span>Press <kbd className="bg-white/10 px-2 py-0.5 rounded text-cyan-300 font-bold">Enter</kbd> to explore all results</span>
              <button
                onClick={() => {
                  setShowSearchModal(false);
                  setActiveTab('explore');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 text-slate-950 text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                Explore Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
