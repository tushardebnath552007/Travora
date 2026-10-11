import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Destination, 
  AttractionItem, 
  GeneratedItinerary, 
  BudgetBreakdown, 
  ReviewItem, 
  UserProfile, 
  CategoryType,
  TravelType 
} from '../types/travel';
import { 
  INITIAL_DESTINATIONS, 
  INITIAL_ATTRACTIONS, 
  INITIAL_REVIEWS, 
  INITIAL_USER_PROFILE, 
  SAMPLE_ITINERARIES 
} from '../data/travelData';

export type NavTab = 
  | 'home'
  | 'explore'
  | 'destination'
  | 'attractions'
  | 'planner'
  | 'itinerary'
  | 'budget'
  | 'wishlist'
  | 'profile'
  | 'map'
  | 'login'
  | 'signup';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'favorite';
}

interface TravoraContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  selectedDestinationId: string;
  setSelectedDestinationId: (id: string) => void;
  viewDestination: (id: string) => void;
  selectedAttractionId: string | null;
  setSelectedAttractionId: (id: string | null) => void;
  
  // Wishlist
  wishlist: string[];
  toggleWishlist: (id: string, name?: string) => void;
  isWishlisted: (id: string) => boolean;

  // Itinerary
  currentItinerary: GeneratedItinerary;
  setCurrentItinerary: (itinerary: GeneratedItinerary) => void;
  generateItinerary: (params: {
    destinationId: string;
    durationDays: number;
    budget: number;
    travelType: TravelType;
    interests: string[];
  }) => void;

  // Budget
  budget: BudgetBreakdown;
  updateBudgetField: (field: keyof BudgetBreakdown, value: number) => void;
  setFullBudget: (budget: BudgetBreakdown) => void;

  // Reviews
  reviews: ReviewItem[];
  addReview: (review: { author: string; destinationId: string; rating: number; comment: string; tripType: string }) => void;

  // Profile
  userProfile: UserProfile;
  toggleBucketItem: (id: string) => void;
  addBucketItem: (name: string, region?: string) => void;

  // Search & Filter
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;

  // Media & Modals
  lightboxImage: { url: string; title: string } | null;
  openLightbox: (url: string, title?: string) => void;
  closeLightbox: () => void;

  // Theme
  theme: 'dark' | 'light';
  toggleTheme: () => void;

  // Notifications
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'favorite') => void;
  removeToast: (id: string) => void;

  // Destinations & Attractions
  destinations: Destination[];
  attractions: AttractionItem[];

  // Auth (backend-first, localStorage fallback)
  authUser: AuthUser | null;
  authToken: string | null;
  authLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const TravoraContext = createContext<TravoraContextType | undefined>(undefined);

const detectInitialTab = (): NavTab => {
  try {
    const dataPage = document.body.getAttribute('data-page') as NavTab | null;
    if (dataPage) return dataPage;

    const path = window.location.pathname.toLowerCase();
    if (path.includes('explore')) return 'explore';
    if (path.includes('destination')) return 'destination';
    if (path.includes('attractions')) return 'attractions';
    if (path.includes('planner')) return 'planner';
    if (path.includes('itinerary')) return 'itinerary';
    if (path.includes('wishlist')) return 'wishlist';
    if (path.includes('budget')) return 'budget';
    if (path.includes('profile')) return 'profile';
    if (path.includes('map')) return 'map';
    if (path.includes('login')) return 'login';
    if (path.includes('signup') || path.includes('signin') || path.includes('register')) return 'signup';
  } catch {
    // fallback
  }
  return 'home';
};

export const TravoraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTabState] = useState<NavTab>(detectInitialTab);
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('dest') || params.get('id');
      if (id && INITIAL_DESTINATIONS.some(d => d.id === id)) {
        return id;
      }
    } catch {
      // fallback
    }
    return 'kashmir';
  });
  const [selectedAttractionId, setSelectedAttractionId] = useState<string | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setActiveTabState(detectInitialTab());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('travora_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travora_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // storage unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Wishlist from localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('travora_wishlist');
      return saved ? JSON.parse(saved) : ['kashmir', 'sikkim', 'darjeeling', 'taj-mahal'];
    } catch {
      return ['kashmir', 'sikkim', 'darjeeling', 'taj-mahal'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travora_wishlist', JSON.stringify(wishlist));
    } catch {
      // storage unavailable
    }
  }, [wishlist]);

  // User Profile with Bucketlist
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('travora_profile');
      return saved ? JSON.parse(saved) : INITIAL_USER_PROFILE;
    } catch {
      return INITIAL_USER_PROFILE;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travora_profile', JSON.stringify(userProfile));
    } catch {
      // storage unavailable
    }
  }, [userProfile]);

  // Budget Calculator state
  const [budget, setBudget] = useState<BudgetBreakdown>(() => {
    try {
      const saved = localStorage.getItem('travora_budget');
      return saved ? JSON.parse(saved) : {
        transportation: 4000,
        hotel: 5000,
        food: 2500,
        activities: 1500,
        shopping: 1000,
        userBudget: 15000
      };
    } catch {
      return {
        transportation: 4000,
        hotel: 5000,
        food: 2500,
        activities: 1500,
        shopping: 1000,
        userBudget: 15000
      };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travora_budget', JSON.stringify(budget));
    } catch {
      // storage unavailable
    }
  }, [budget]);

  // Current Itinerary
  const [currentItinerary, setCurrentItinerary] = useState<GeneratedItinerary>(() => {
    try {
      const saved = localStorage.getItem('travora_current_itinerary');
      return saved ? JSON.parse(saved) : SAMPLE_ITINERARIES.darjeeling;
    } catch {
      return SAMPLE_ITINERARIES.darjeeling;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travora_current_itinerary', JSON.stringify(currentItinerary));
    } catch {
      // storage unavailable
    }
  }, [currentItinerary]);

  // Reviews
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('travora_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'favorite' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  // Lightbox
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const openLightbox = (url: string, title: string = 'Destination Gallery') => {
    setLightboxImage({ url, title });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const setActiveTab = (tab: NavTab) => {
    setActiveTabState(tab);
    try {
      const targetUrl = tab === 'home' ? '/' : `/${tab}.html`;
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ tab }, '', targetUrl);
      }
    } catch {
      // fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---- Auth (Travora accounts) -------------------------------------------
  const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('travora_auth_user');
      return saved ? (JSON.parse(saved) as AuthUser) : null;
    } catch {
      return null;
    }
  });
  const [authToken, setAuthToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem('travora_auth_token');
    } catch {
      return null;
    }
  });
  const [authLoading, setAuthLoading] = useState(false);

  const persistAuth = (user: AuthUser | null, token: string | null) => {
    setAuthUser(user);
    setAuthToken(token);
    try {
      if (user) localStorage.setItem('travora_auth_user', JSON.stringify(user));
      else localStorage.removeItem('travora_auth_user');
      if (token) localStorage.setItem('travora_auth_token', token);
      else localStorage.removeItem('travora_auth_token');
    } catch {
      // storage unavailable
    }
  };

  const localAuthFallback = (mode: 'login' | 'signup', name: string, email: string, password: string): AuthUser => {
    const key = 'travora_local_users';
    let users: { id: string; name: string; email: string; pass: string }[] = [];
    try {
      users = JSON.parse(localStorage.getItem(key) || '[]');
    } catch {
      users = [];
    }
    const norm = email.trim().toLowerCase();
    if (mode === 'signup') {
      if (users.some(u => u.email === norm)) throw new Error('An account with this email already exists. Try logging in.');
      const user = { id: 'u-' + Date.now(), name: name.trim() || 'Explorer', email: norm, pass: btoa(password) };
      users.push(user);
      try {
        localStorage.setItem(key, JSON.stringify(users));
      } catch {
        // ignore
      }
      return { id: user.id, name: user.name, email: user.email };
    }
    const found = users.find(u => u.email === norm && u.pass === btoa(password));
    if (!found) throw new Error('Invalid email or password.');
    return { id: found.id, name: found.name, email: found.email };
  };

  const signup = async (name: string, email: string, password: string) => {
    setAuthLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        persistAuth(data.user, data.token);
        showToast(`Welcome aboard, ${data.user.name}! ✈️`, 'success');
        setActiveTabState('home');
        return;
      }
      if (res.status === 404 || res.status === 405) throw new Error('backend-unavailable');
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Signup failed.');
    } catch (e) {
      if (e instanceof Error && e.message === 'backend-unavailable') {
        const user = localAuthFallback('signup', name, email, password);
        persistAuth(user, 'local-' + Date.now());
        showToast(`Welcome aboard, ${user.name}! ✈️ (offline account)`, 'success');
        setActiveTabState('home');
        return;
      }
      // Network failure — also fall back locally so signup never dead-ends
      if (e instanceof TypeError) {
        const user = localAuthFallback('signup', name, email, password);
        persistAuth(user, 'local-' + Date.now());
        showToast(`Welcome aboard, ${user.name}! ✈️ (offline account)`, 'success');
        setActiveTabState('home');
        return;
      }
      throw e;
    } finally {
      setAuthLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setAuthLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        persistAuth(data.user, data.token);
        showToast(`Welcome back, ${data.user.name}! 🌍`, 'success');
        setActiveTabState('home');
        return;
      }
      if (res.status === 404 || res.status === 405) throw new Error('backend-unavailable');
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Login failed.');
    } catch (e) {
      if ((e instanceof Error && e.message === 'backend-unavailable') || e instanceof TypeError) {
        const user = localAuthFallback('login', '', email, password);
        persistAuth(user, 'local-' + Date.now());
        showToast(`Welcome back, ${user.name}! 🌍 (offline session)`, 'success');
        setActiveTabState('home');
        return;
      }
      throw e;
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    persistAuth(null, null);
    showToast('Signed out. See you on the next odyssey! 👋', 'info');
    setActiveTabState('home');
  };

  const viewDestination = (id: string) => {
    setSelectedDestinationId(id);
    setActiveTabState('destination');
    try {
      const targetUrl = `/destination.html?dest=${encodeURIComponent(id)}`;
      window.history.pushState({ tab: 'destination', id }, '', targetUrl);
    } catch {
      // fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWishlisted = (id: string) => wishlist.includes(id);

  const toggleWishlist = (id: string, name?: string) => {
    if (wishlist.includes(id)) {
      setWishlist(prev => prev.filter(item => item !== id));
      showToast(`Removed ${name || 'item'} from your wishlist`, 'info');
      setUserProfile(prev => ({
        ...prev,
        favorites: Math.max(0, prev.favorites - 1),
        placesSaved: Math.max(0, prev.placesSaved - 1)
      }));
    } else {
      setWishlist(prev => [...prev, id]);
      showToast(`✓ ${name || 'Place'} added to your wishlist! ❤️`, 'favorite');
      setUserProfile(prev => ({
        ...prev,
        favorites: prev.favorites + 1,
        placesSaved: prev.placesSaved + 1
      }));
    }
  };

  const toggleBucketItem = (id: string) => {
    setUserProfile(prev => {
      const updated = prev.bucketList.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      const changed = updated.find(i => i.id === id);
      if (changed) {
        showToast(
          changed.completed 
            ? `🎉 Marked ${changed.name} as visited!` 
            : `Unchecked ${changed.name} in bucket list`,
          'success'
        );
      }
      return { ...prev, bucketList: updated };
    });
  };

  const addBucketItem = (name: string, region: string = 'India') => {
    if (!name.trim()) return;
    const newItem = {
      id: 'b-' + Date.now(),
      name: name.trim(),
      completed: false,
      region
    };
    setUserProfile(prev => ({
      ...prev,
      bucketList: [newItem, ...prev.bucketList]
    }));
    showToast(`✓ Added "${name.trim()}" to your bucket list!`, 'success');
  };

  const updateBudgetField = (field: keyof BudgetBreakdown, value: number) => {
    setBudget(prev => ({ ...prev, [field]: Math.max(0, value) }));
  };

  const setFullBudget = (newBudget: BudgetBreakdown) => {
    setBudget(newBudget);
  };

  const addReview = (newReview: { author: string; destinationId: string; rating: number; comment: string; tripType: string }) => {
    const review: ReviewItem = {
      id: 'rev-' + Date.now(),
      destinationId: newReview.destinationId,
      author: newReview.author || 'Anonymous Traveler',
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      comment: newReview.comment,
      tripType: newReview.tripType
    };
    const updated = [review, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('travora_reviews', JSON.stringify(updated));
    } catch {
      // storage unavailable
    }
    showToast('✓ Thank you for your review! ⭐', 'success');
  };

  // Generate dynamic Itinerary
  const generateItinerary = ({
    destinationId,
    durationDays,
    budget: userBudget,
    travelType,
    interests
  }: {
    destinationId: string;
    durationDays: number;
    budget: number;
    travelType: TravelType;
    interests: string[];
  }) => {
    const destination = INITIAL_DESTINATIONS.find(d => d.id === destinationId) || INITIAL_DESTINATIONS[0];
    const daysCount = Math.max(1, Math.min(14, durationDays));

    // Dynamic slot template generator
    const days: GeneratedItinerary['days'] = [];
    const attractions = destination.topAttractions;

    for (let i = 1; i <= daysCount; i++) {
      const mainAttr = attractions[(i - 1) % attractions.length];
      const secondAttr = attractions[i % attractions.length];
      
      const isDayOne = i === 1;
      const isLastDay = i === daysCount;

      let morningSlot = {
        time: 'Morning' as const,
        title: isDayOne ? `Arrival & Check-in at ${destination.name}` : `Morning Exploration of ${mainAttr.name}`,
        location: isDayOne ? `${destination.name} Central` : mainAttr.name,
        activity: isDayOne 
          ? `Arrive at destination, scenic transfer to hotel, and refreshing welcome drink with local pastries.`
          : `Visit ${mainAttr.name} early to avoid crowds. Enjoy ${mainAttr.desc}.`,
        estimatedCost: Math.round((userBudget * 0.08) / daysCount)
      };

      let afternoonSlot = {
        time: 'Afternoon' as const,
        title: `${secondAttr.name} & Culinary Discovery`,
        location: secondAttr.name,
        activity: `Explore ${secondAttr.desc}. Experience authentic local cuisine tasting based on ${interests.join(', ') || 'culture'}.`,
        estimatedCost: Math.round((userBudget * 0.12) / daysCount)
      };

      let sunsetSlot = {
        time: 'Sunset' as const,
        title: `Golden Hour at ${mainAttr.name} Viewpoint`,
        location: `${mainAttr.name} Overlook`,
        activity: `Capture golden hour photography, take in panoramic mountain and skyline views, and enjoy warm beverages.`,
        estimatedCost: Math.round((userBudget * 0.05) / daysCount)
      };

      let eveningSlot = {
        time: 'Evening' as const,
        title: isLastDay ? `Farewell Dinner & Departure Prep` : `Evening Stroll & Night Bazaar`,
        location: isLastDay ? `Fine Dining Promenade` : `Historic Old Town Quarter`,
        activity: isLastDay 
          ? `Celebrate with a memorable gourmet dinner and prepare for safe departure.`
          : `Walk through illuminated lantern-lit lanes, explore artisan handicraft stalls, and relax under the stars.`,
        estimatedCost: Math.round((userBudget * 0.09) / daysCount)
      };

      days.push({
        day: i,
        title: isDayOne 
          ? `Arrival & Gateway to ${destination.name}` 
          : isLastDay 
          ? `Farewell & Memorable Discoveries` 
          : `Scenic Highlights & Cultural Immersions`,
        slots: [morningSlot, afternoonSlot, sunsetSlot, eveningSlot]
      });
    }

    const newItinerary: GeneratedItinerary = {
      id: `itin-${Date.now()}`,
      destinationId: destination.id,
      destinationName: destination.name,
      durationDays: daysCount,
      totalBudget: userBudget,
      travelType,
      interests,
      days,
      createdAt: new Date().toISOString().split('T')[0],
      notes: `Custom ${travelType} itinerary crafted for ${destination.name} focusing on ${interests.join(', ') || 'scenic exploration'}.`
    };

    setCurrentItinerary(newItinerary);

    // Also update the budget planner automatically
    setBudget({
      transportation: Math.round(userBudget * 0.28),
      hotel: Math.round(userBudget * 0.35),
      food: Math.round(userBudget * 0.18),
      activities: Math.round(userBudget * 0.12),
      shopping: Math.round(userBudget * 0.07),
      userBudget
    });

    setUserProfile(prev => ({
      ...prev,
      tripsPlanned: prev.tripsPlanned + 1,
      recentTrips: [
        {
          id: 'rt-' + Date.now(),
          name: `${destination.name} Explorer`,
          duration: `${daysCount} Days`,
          date: 'Just now',
          image: destination.heroImage,
          rating: destination.rating
        },
        ...prev.recentTrips.slice(0, 4)
      ]
    }));

    showToast(`✓ Your ${daysCount}-day trip to ${destination.name} has been created! 🧳`, 'success');
    setActiveTab('itinerary');
  };

  return (
    <TravoraContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedDestinationId,
        setSelectedDestinationId,
        viewDestination,
        selectedAttractionId,
        setSelectedAttractionId,
        wishlist,
        toggleWishlist,
        isWishlisted,
        currentItinerary,
        setCurrentItinerary,
        generateItinerary,
        budget,
        updateBudgetField,
        setFullBudget,
        reviews,
        addReview,
        userProfile,
        toggleBucketItem,
        addBucketItem,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        lightboxImage,
        openLightbox,
        closeLightbox,
        theme,
        toggleTheme,
        toasts,
        showToast,
        removeToast,
        destinations: INITIAL_DESTINATIONS,
        attractions: INITIAL_ATTRACTIONS,
        authUser,
        authToken,
        authLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </TravoraContext.Provider>
  );
};

export const useTravora = () => {
  const context = useContext(TravoraContext);
  if (!context) {
    throw new Error('useTravora must be used within a TravoraProvider');
  }
  return context;
};
