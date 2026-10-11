export interface MapPinData {
  id: string;
  name: string;
  region: string;
  category: string;
  rating: number;
  price: string;
  days: string;
  image: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

export const MAP_PINS: MapPinData[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    region: 'Jammu & Kashmir',
    category: 'Mountains',
    rating: 4.9,
    price: '₹18,000',
    days: '5–7 Days',
    image: '/assets/images/dest_kashmir_paradise_1791217715653.jpg',
    x: 28,
    y: 18
  },
  {
    id: 'manali',
    name: 'Manali',
    region: 'Himachal Pradesh',
    category: 'Adventure',
    rating: 4.82,
    price: '₹16,500',
    days: '4–6 Days',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    x: 34,
    y: 26
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    region: 'Eastern Himalayas',
    category: 'Spiritual',
    rating: 4.89,
    price: '₹20,000',
    days: '5–7 Days',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
    x: 74,
    y: 35
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    region: 'West Bengal',
    category: 'Mountains',
    rating: 4.85,
    price: '₹15,000',
    days: '4–5 Days',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
    x: 72,
    y: 42
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    region: 'Amer Fort & Jaipur',
    category: 'Heritage',
    rating: 4.9,
    price: '₹22,000',
    days: '5–7 Days',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    x: 26,
    y: 40
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    region: 'Victoria & Howrah',
    category: 'Heritage',
    rating: 4.8,
    price: '₹12,000',
    days: '3–4 Days',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80',
    x: 70,
    y: 52
  },
  {
    id: 'goa',
    name: 'Goa',
    region: 'Arabian Coast',
    category: 'Beaches',
    rating: 4.88,
    price: '₹16,000',
    days: '4–6 Days',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
    x: 30,
    y: 68
  },
  {
    id: 'kerala',
    name: 'Kerala',
    region: 'Backwaters & Munnar',
    category: 'Nature',
    rating: 4.9,
    price: '₹19,000',
    days: '5–7 Days',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
    x: 36,
    y: 86
  }
];
