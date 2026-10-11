export type CategoryType = 
  | 'All'
  | 'Mountains'
  | 'Beaches'
  | 'Heritage'
  | 'Nature'
  | 'Adventure'
  | 'Spiritual'
  | 'Wildlife'
  | 'Food';

export type TravelType = 'Family' | 'Couple' | 'Solo' | 'Friends';

export interface AttractionItem {
  id: string;
  name: string;
  destinationId: string;
  destinationName: string;
  state: string;
  rating: number;
  category: CategoryType;
  entryFee: string;
  bestTime: string;
  image: string;
  description: string;
  highlights: string[];
  timing: string;
}

export interface SeasonInfo {
  season: string;
  status: 'Excellent' | 'Good' | 'Fair';
  weather: string;
  temp: string;
}

export interface TopAttraction {
  name: string;
  desc: string;
  image: string;
  duration: string;
}

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  airQuality: string;
  forecast: {
    day: string;
    temp: number;
    icon: string;
  }[];
}

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  country: string;
  region: string;
  subcontinent: 'India' | 'Global';
  category: CategoryType;
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  recommendedDays: string;
  heroImage: string;
  gallery: string[];
  about: string;
  culture: string;
  bestTimeToVisit: SeasonInfo[];
  travelInfo: {
    averageBudget: string;
    recommendedStay: string;
    bestFor: string[];
    idealSeason: string;
  };
  currentWeather: WeatherData;
  topAttractions: TopAttraction[];
  coordinates: {
    x: number; // Percentage on visual map (0-100)
    y: number; // Percentage on visual map (0-100)
    regionName: string;
  };
  featuredHero?: boolean;
}

export interface ItinerarySlot {
  time: 'Morning' | 'Afternoon' | 'Sunset' | 'Evening';
  title: string;
  location: string;
  activity: string;
  estimatedCost: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  slots: ItinerarySlot[];
}

export interface GeneratedItinerary {
  id: string;
  destinationId: string;
  destinationName: string;
  durationDays: number;
  totalBudget: number;
  travelType: TravelType;
  interests: string[];
  days: ItineraryDay[];
  createdAt: string;
  notes: string;
}

export interface BudgetBreakdown {
  transportation: number;
  hotel: number;
  food: number;
  activities: number;
  shopping: number;
  userBudget: number;
}

export interface ReviewItem {
  id: string;
  destinationId: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
}

export interface BucketListItem {
  id: string;
  name: string;
  completed: boolean;
  region?: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  role: string;
  placesSaved: number;
  tripsPlanned: number;
  favorites: number;
  bucketList: BucketListItem[];
  recentTrips: {
    id: string;
    name: string;
    duration: string;
    date: string;
    image: string;
    rating: number;
  }[];
}
