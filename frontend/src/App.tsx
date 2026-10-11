import React, { useState } from 'react';
import { TravoraProvider, useTravora } from './context/TravoraContext';
import { Navbar } from './components/Navbar';
import { HomeView } from './pages/home/HomeView';
import { ExploreView } from './pages/explore/ExploreView';
import { DestinationDetailView } from './pages/destination/DestinationDetailView';
import { AttractionsView } from './pages/attractions/AttractionsView';
import { TripPlannerView } from './pages/planner/TripPlannerView';
import { ItineraryView } from './pages/itinerary/ItineraryView';
import { BudgetPlannerView } from './pages/budget/BudgetPlannerView';
import { WishlistView } from './pages/wishlist/WishlistView';
import { ProfileView } from './pages/profile/ProfileView';
import { AuthView } from './pages/auth/AuthView';
import { InteractiveMapView } from './pages/map/InteractiveMapView';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';
import { ImageLightbox } from './components/ImageLightbox';
import { Image, ChevronDown, Check } from 'lucide-react';

const BACKGROUND_OPTIONS = [
  {
    id: 'matterhorn',
    name: 'Swiss Alps Golden Matterhorn',
    location: 'Zermatt, Switzerland',
    url: '/assets/images/grand_matterhorn_alps_1791222654485.jpg'
  },
  {
    id: 'kashmir',
    name: 'Kashmir Paradise & Dal Lake',
    location: 'Jammu & Kashmir, India',
    url: '/assets/images/dest_kashmir_paradise_1791217715653.jpg'
  },
  {
    id: 'patagonia',
    name: 'Patagonia Torres del Paine Spires',
    location: 'Chilean Patagonia',
    url: '/assets/images/dest_patagonia_torres_1791217704007.jpg'
  },
  {
    id: 'iceland',
    name: 'Iceland Northern Lights Aurora',
    location: 'Jökulsárlón Glacial Lagoon',
    url: '/assets/images/dest_iceland_aurora_1791217726046.jpg'
  },
  {
    id: 'lagoon',
    name: 'Tropical Ocean Island Sandbar',
    location: 'Emerald Island Lagoon',
    url: '/assets/images/hero_cinematic_travora_1791217691024.jpg'
  },
  {
    id: 'sahara',
    name: 'Sahara Golden Sunset Dunes',
    location: 'Erg Chebbi, Morocco',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85'
  }
];

const AppContent: React.FC = () => {
  const { activeTab, showToast } = useTravora();
  const [selectedBg, setSelectedBg] = useState(BACKGROUND_OPTIONS[0]);
  const [showBgSelector, setShowBgSelector] = useState(false);
  const [backdropClarity, setBackdropClarity] = useState<'vivid' | 'balanced' | 'deep'>('vivid');

  const handleSelectBg = (bg: typeof BACKGROUND_OPTIONS[0]) => {
    setSelectedBg(bg);
    setShowBgSelector(false);
    showToast(`Background switched to ${bg.name} 🏔️`, 'info');
  };

  return (
    <div className="min-h-screen relative text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-neutral-950 overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 🌟 FULL PAGE CINEMATIC PICTURE BACKGROUND (IMMERSIVE & FIXED) 🌟 */}
      {/* ============================================================ */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          key={selectedBg.url}
          src={selectedBg.url}
          alt={selectedBg.name}
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 scale-100 transition-all duration-1000 animate-in fade-in"
        />
        
        {/* Crystal Clear Translucent Scrim letting the picture vibrantly shine through */}
        <div 
          className={`absolute inset-0 transition-colors duration-500 ${
            backdropClarity === 'vivid' 
              ? 'bg-slate-950/40 backdrop-blur-[0.5px]' 
              : backdropClarity === 'balanced'
              ? 'bg-slate-950/55 backdrop-blur-[1.5px]'
              : 'bg-slate-950/70 backdrop-blur-[2.5px]'
          }`} 
        />
        
        {/* Soft luxury ambient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(2,6,23,0.75)_100%)]" />
      </div>

      {/* Floating Picture Background Switcher Pill */}
      <div className="fixed bottom-5 right-5 z-40">
        <div className="relative">
          <button
            onClick={() => setShowBgSelector(!showBgSelector)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 border border-cyan-400/50 hover:border-cyan-300 text-white text-xs font-bold shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(6,182,212,0.35)] backdrop-blur-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            title="Change Full Page Background Picture"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden border border-cyan-400/70 shrink-0">
              <img src={selectedBg.url} alt="current" className="w-full h-full object-cover" />
            </div>
            <span className="font-mono text-xs text-cyan-300">
              Picture:
            </span>
            <span className="truncate max-w-[140px] text-xs text-neutral-100 font-semibold">
              {selectedBg.name}
            </span>
            <ChevronDown className={`w-4 h-4 text-cyan-300 transition-transform duration-300 ${showBgSelector ? 'rotate-180' : ''}`} />
          </button>

          {/* Background Selection Flyout */}
          {showBgSelector && (
            <div className="absolute bottom-14 right-0 w-84 bg-slate-950/95 backdrop-blur-2xl border border-cyan-400/40 rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(6,182,212,0.3)] space-y-3 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-black text-cyan-300 uppercase font-mono">
                  <Image className="w-4 h-4 text-cyan-400" />
                  <span>Choose Background Picture</span>
                </div>
                <div className="flex items-center gap-1">
                  {(['vivid', 'balanced', 'deep'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setBackdropClarity(mode)}
                      className={`text-[9px] px-2 py-0.5 rounded-full uppercase font-mono transition-colors ${
                        backdropClarity === mode
                          ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/60 font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                      title={`${mode} clarity`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                {BACKGROUND_OPTIONS.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => handleSelectBg(bg)}
                    className={`w-full flex items-center gap-3 p-2 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                      selectedBg.id === bg.id
                        ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        : 'bg-white/5 border-white/10 hover:border-cyan-500/40 hover:bg-white/10 text-neutral-300'
                    }`}
                  >
                    <div className="w-12 h-10 rounded-xl overflow-hidden shrink-0 border border-white/20">
                      <img src={bg.url} alt={bg.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold block truncate text-white">
                        {bg.name}
                      </span>
                      <span className="text-[10px] text-cyan-300/80 block truncate font-mono">
                        {bg.location}
                      </span>
                    </div>
                    {selectedBg.id === bg.id && (
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen lg:pl-[300px]">
        {/* Fixed Left-Side Navigation Bar */}
        <Navbar />

        {/* Main Content Area (no top padding needed — navbar is on the left) */}
        <main className="flex-1 w-full pt-16 lg:pt-6 px-4 sm:px-6">
          {activeTab === 'home' && <HomeView />}
          {activeTab === 'explore' && <ExploreView />}
          {activeTab === 'destination' && <DestinationDetailView />}
          {activeTab === 'attractions' && <AttractionsView />}
          {activeTab === 'planner' && <TripPlannerView />}
          {activeTab === 'itinerary' && <ItineraryView />}
          {activeTab === 'budget' && <BudgetPlannerView />}
          {activeTab === 'wishlist' && <WishlistView />}
          {activeTab === 'profile' && <ProfileView />}
          {activeTab === 'map' && <InteractiveMapView />}
          {activeTab === 'login' && <AuthView mode="login" />}
          {activeTab === 'signup' && <AuthView mode="signup" />}
        </main>

        {/* High-Impact Luxury Travel Footer */}
        <Footer />

        {/* Global Modals & Notifications */}
        <ToastNotification />
        <ImageLightbox />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <TravoraProvider>
      <AppContent />
    </TravoraProvider>
  );
}
