export interface GalleryPhoto {
  url: string;
  title: string;
  location: string;
  tag: string;
}

export const GALLERY_IMAGES: GalleryPhoto[] = [
  { url: '/assets/images/grand_matterhorn_alps_1791222654485.jpg', title: 'Matterhorn Golden Hour', location: 'Zermatt, Switzerland', tag: 'Mountains' },
  { url: '/assets/images/dest_kashmir_paradise_1791217715653.jpg', title: 'Dal Lake Shikara Drift', location: 'Srinagar, Kashmir', tag: 'Lakes' },
  { url: '/assets/images/goa_sunset_palms_1791610909763.jpg', title: 'Palolem Lantern Twilight', location: 'South Goa', tag: 'Beaches' },
  { url: '/assets/images/rajasthan_fort_palace_1791610927685.jpg', title: 'Mehrangarh Fort Illumination', location: 'Jodhpur, Rajasthan', tag: 'Heritage' },
  { url: '/assets/images/dest_iceland_aurora_1791217726046.jpg', title: 'Emerald Aurora Storm', location: 'Reykjavik, Iceland', tag: 'Aurora' },
  { url: '/assets/images/dest_patagonia_torres_1791217704007.jpg', title: 'Torres Granite Spires', location: 'Patagonia, Chile', tag: 'Adventure' },
  { url: '/assets/images/hero_cinematic_travora_1791217691024.jpg', title: 'Emerald Island Sandbar', location: 'Tropical Lagoon', tag: 'Islands' },
  { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', title: 'Himalayan Prayer Flags', location: 'Darjeeling', tag: 'Mountains' },
  { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80', title: 'Taj Mahal Marble Dawn', location: 'Agra', tag: 'Heritage' },
  { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', title: 'Turquoise Cove', location: 'Andaman Islands', tag: 'Beaches' },
  { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80', title: 'Alpine Summit Ridge', location: 'Swiss Alps', tag: 'Adventure' },
  { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80', title: 'Misty Valley Sunrise', location: 'Munnar, Kerala', tag: 'Nature' },
];

export interface Testimonial {
  quote: string;
  name: string;
  trip: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'The Kashmir shikara sunrise and Gulmarg gondola itinerary was completely flawless. We woke up to snow spires every morning.', name: 'Aarav & Riya Sen', trip: 'Kashmir Odyssey · 6 Days', initials: 'AR' },
  { quote: 'South Goa hidden coves and the lantern shack dinner at Palolem was pure magic. The budget estimator kept us perfectly on target.', name: 'Siddharth Kapoor', trip: 'South Goa Explorer · 5 Days', initials: 'SK' },
  { quote: 'Seeing the Matterhorn at sunrise took our breath away. The day-by-day guides made preparing for the journey a joy.', name: 'Elena Rostova', trip: 'Swiss Alpine Trek · 7 Days', initials: 'EL' },
  { quote: 'Darjeeling toy train, Tiger Hill sunrise, endless tea gardens — the most meticulously planned 4 days of our lives.', name: 'Meera & Arjun Nair', trip: 'Darjeeling Classic · 4 Days', initials: 'MN' },
  { quote: 'Iceland aurora chase with hot springs between stops. Our photographer still talks about that emerald sky.', name: 'Daniel Okafor', trip: 'Iceland Aurora · 6 Days', initials: 'DO' },
  { quote: 'Royal Rajasthan felt like stepping into a living museum. Palace banquets, desert forts, and flawless transfers throughout.', name: 'Priya Sharma', trip: 'Royal Rajasthan · 8 Days', initials: 'PS' },
];

export interface Faq {
  q: string;
  a: string;
}

export const TRAVEL_FAQS: Faq[] = [
  { q: 'How do custom itineraries and concierge bookings work?', a: 'Choose your destinations or use the budget calculator and our concierge pairs you with a local specialist who coordinates boutique stays, private chauffeurs, permits, and guides tailored to your pace.' },
  { q: 'What is included in the estimated package price?', a: 'All packages include 4★/5★ heritage stays, gourmet breakfast and dining allowances, private air-conditioned transfers, entry passes, and 24/7 on-call trip support. Domestic flights can be bundled on request.' },
  { q: 'What is the best time to visit Kashmir and Goa?', a: 'Kashmir shines April–June for tulips and meadows, and December–February for skiing. Goa is best November–March when the coast is dry and balmy.' },
  { q: 'Can I edit my itinerary after it is generated?', a: 'Yes. Every itinerary day can be regenerated, reordered, or extended from the Itinerary page, and the budget planner syncs automatically.' },
  { q: 'Is my wishlist saved across devices?', a: 'Sign up for a free Travora account and your wishlist, bucket list, and planned trips sync everywhere you log in.' },
  { q: 'Do you support group and family departures?', a: 'Absolutely. The planner supports Family, Couple, Solo, and Friends travel types with per-person cost splitting built into the budget engine.' },
];

export interface TravelTip {
  title: string;
  body: string;
  icon: string;
}

export const TRAVEL_TIPS: TravelTip[] = [
  { title: 'Book permits 2 weeks early', body: 'Gondolas, toy-train seats, and shikara rides sell out in peak season. Early booking saves up to 25%.', icon: '🎫' },
  { title: 'Carry layered woolens', body: 'Himalayan dawns drop to 4°C even in May. A windproof shell over fleece beats one heavy jacket.', icon: '🧥' },
  { title: 'Respect local customs', body: 'Remove shoes at monasteries and temples, ask before photographing residents, and tip trek crews fairly.', icon: '🙏' },
  { title: 'Hydrate on high routes', body: 'Above 2,000m, drink twice your usual water and go easy on alcohol for the first 48 hours.', icon: '💧' },
  { title: 'Keep cash for bazaars', body: 'Mountain markets and floating vendors rarely accept cards. Small denominations unlock the best bargaining.', icon: '💵' },
  { title: 'Insure the expedition', body: 'Adventure sports and high-altitude treks deserve proper cover. Compare policies before you fly.', icon: '🛡️' },
];
