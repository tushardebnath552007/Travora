import { Destination, AttractionItem, ReviewItem, UserProfile, GeneratedItinerary } from '../types/travel';

export const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    subtitle: 'Heaven on Earth',
    tagline: 'Snow-capped peaks, saffron valleys and tranquil Shikara waters',
    country: 'India',
    region: 'Jammu & Kashmir',
    subcontinent: 'India',
    category: 'Mountains',
    rating: 4.9,
    reviewsCount: 1280,
    startingPrice: 18000,
    recommendedDays: '5–7 Days',
    heroImage: '/assets/images/dest_kashmir_paradise_1791217715653.jpg',
    gallery: [
      '/assets/images/dest_kashmir_paradise_1791217715653.jpg',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Nestled between the Great Himalayan and Pir Panjal mountain ranges, Kashmir is world-renowned as paradise on Earth. Renowned for its mirror-like Dal Lake, ornate cedarwood houseboats, blooming saffron meadows of Pampore, and pine-scented mountain passes, it offers an ethereal blend of serenity and alpine grandeur.',
    culture: 'Rich blend of Sufi spirituality, exquisite Kashmiri Pashmina weaving, papier-mâché craftsmanship, Wazwan feasts of slow-cooked Rogan Josh and fragrant saffron Kahwa tea.',
    bestTimeToVisit: [
      { season: 'Summer (Apr–Jun)', status: 'Excellent', weather: 'Pleasant, lush blooming valleys & Dal Lake boating', temp: '15°C – 28°C' },
      { season: 'Winter (Nov–Feb)', status: 'Excellent', weather: 'Magical snowfall, Gulmarg skiing & frozen wonderland', temp: '-2°C – 10°C' },
      { season: 'Monsoon (Jul–Aug)', status: 'Good', weather: 'Mild rains, apple orchards & emerald green valleys', temp: '18°C – 26°C' }
    ],
    travelInfo: {
      averageBudget: '₹15,000 – ₹25,000',
      recommendedStay: '5–7 Days',
      bestFor: ['Nature', 'Couples', 'Adventure', 'Photography'],
      idealSeason: 'April – October & Dec – Feb'
    },
    currentWeather: {
      temp: 18,
      condition: 'Clear Alpine Sky',
      humidity: 58,
      windSpeed: 9,
      airQuality: 'Pristine (AQI 22)',
      forecast: [
        { day: 'Mon', temp: 18, icon: '☀️' },
        { day: 'Tue', temp: 19, icon: '⛅' },
        { day: 'Wed', temp: 17, icon: '☀️' },
        { day: 'Thu', temp: 16, icon: '🌦️' },
        { day: 'Fri', temp: 18, icon: '☀️' }
      ]
    },
    topAttractions: [
      { name: 'Gulmarg', desc: 'World’s highest cable car Gondola & powdery ski slopes', image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Pahalgam', desc: 'Lidder River valley, Betaab valley & pine forests', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80', duration: '1–2 Days' },
      { name: 'Dal Lake', desc: 'Iconic Shikara rides & historic cedar houseboats', image: '/assets/images/dest_kashmir_paradise_1791217715653.jpg', duration: 'Half Day' },
      { name: 'Sonamarg', desc: 'Meadow of Gold and gateway to Thajiwas Glacier', image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Srinagar Old City', desc: 'Historic wooden mosques, Jamia Masjid & Mughal Gardens', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80', duration: '1 Day' }
    ],
    coordinates: { x: 30, y: 16, regionName: 'North India' },
    featuredHero: true
  },
  {
    id: 'patagonia',
    name: 'Patagonia',
    subtitle: 'Edge of the Earth',
    tagline: 'Towering granite spires, electric blue glaciers, and wild winds',
    country: 'Chile & Argentina',
    region: 'South America',
    subcontinent: 'Global',
    category: 'Adventure',
    rating: 4.95,
    reviewsCount: 940,
    startingPrice: 95000,
    recommendedDays: '7–10 Days',
    heroImage: '/assets/images/dest_patagonia_torres_1791217704007.jpg',
    gallery: [
      '/assets/images/dest_patagonia_torres_1791217704007.jpg',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Patagonia spans the southern end of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing spine. The Argentine side features arid steppes and grasslands, while the Chilean portion features glacial fjords, rainforests, and the world-famous granite towers of Torres del Paine.',
    culture: 'Gaucho heritage of seasoned horsemen, traditional Asado lamb barbecues, mate tea ceremonies and mountain expedition camaraderie.',
    bestTimeToVisit: [
      { season: 'Spring/Summer (Nov–Mar)', status: 'Excellent', weather: 'Long daylight, open hiking circuits & active wildlife', temp: '8°C – 18°C' },
      { season: 'Autumn (Apr–May)', status: 'Good', weather: 'Dramatic golden foliage & fewer crowds', temp: '4°C – 12°C' },
      { season: 'Winter (Jun–Aug)', status: 'Fair', weather: 'Intense snowstorms & sub-zero conditions', temp: '-6°C – 4°C' }
    ],
    travelInfo: {
      averageBudget: '₹85,000 – ₹1,40,000',
      recommendedStay: '7–10 Days',
      bestFor: ['Trekking', 'Photography', 'Wildlife', 'Expeditions'],
      idealSeason: 'November – March'
    },
    currentWeather: {
      temp: 11,
      condition: 'Gusty Alpine Breeze',
      humidity: 52,
      windSpeed: 28,
      airQuality: 'Pure Oceanic (AQI 10)',
      forecast: [
        { day: 'Mon', temp: 11, icon: '💨' },
        { day: 'Tue', temp: 13, icon: '⛅' },
        { day: 'Wed', temp: 10, icon: '🌦️' },
        { day: 'Thu', temp: 12, icon: '☀️' },
        { day: 'Fri', temp: 9, icon: '🌧️' }
      ]
    },
    topAttractions: [
      { name: 'Torres del Paine', desc: 'The legendary three granite peaks over turquoise lakes', image: '/assets/images/dest_patagonia_torres_1791217704007.jpg', duration: '2–4 Days' },
      { name: 'Perito Moreno Glacier', desc: 'Thunderous calvings of cobalt-blue ice walls', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Mount Fitz Roy', desc: 'The iconic jagged summit of El Chaltén', image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80', duration: '1–2 Days' }
    ],
    coordinates: { x: 22, y: 78, regionName: 'Patagonia' },
    featuredHero: true
  },
  {
    id: 'iceland',
    name: 'Iceland',
    subtitle: 'Land of Fire & Ice',
    tagline: 'Vibrant Aurora Borealis dancing over glacier lagoons and black sands',
    country: 'Iceland',
    region: 'Europe',
    subcontinent: 'Global',
    category: 'Nature',
    rating: 4.92,
    reviewsCount: 1120,
    startingPrice: 78000,
    recommendedDays: '6–8 Days',
    heroImage: '/assets/images/dest_iceland_aurora_1791217726046.jpg',
    gallery: [
      '/assets/images/dest_iceland_aurora_1791217726046.jpg',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Iceland is a Nordic island country defined by its dramatic volcanic landscape of geysers, hot springs, waterfalls, glaciers, and black basalt beaches. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks, while the northern lights illuminate the Arctic sky.',
    culture: 'Norse mythology, warm geothermal swimming pool culture, rye bread baked underground in hot volcanic sand, and modern Scandinavian art.',
    bestTimeToVisit: [
      { season: 'Winter (Oct–Mar)', status: 'Excellent', weather: 'Northern Lights dancing, ice caves & snowy landscapes', temp: '-3°C – 3°C' },
      { season: 'Summer (Jun–Aug)', status: 'Excellent', weather: 'Midnight Sun, 24-hr daylight & road trips on Ring Road', temp: '10°C – 16°C' },
      { season: 'Autumn (Sep)', status: 'Good', weather: 'Crisp air, early Auroras & vibrant moss colors', temp: '4°C – 10°C' }
    ],
    travelInfo: {
      averageBudget: '₹75,000 – ₹1,20,000',
      recommendedStay: '6–8 Days',
      bestFor: ['Northern Lights', 'Geology', 'Road Trips', 'Photography'],
      idealSeason: 'September – March for Auroras'
    },
    currentWeather: {
      temp: 4,
      condition: 'Aurora Active · Crisp Air',
      humidity: 68,
      windSpeed: 14,
      airQuality: 'Arctic Pure (AQI 8)',
      forecast: [
        { day: 'Mon', temp: 4, icon: '🌌' },
        { day: 'Tue', temp: 3, icon: '❄️' },
        { day: 'Wed', temp: 5, icon: '⛅' },
        { day: 'Thu', temp: 2, icon: '🌌' },
        { day: 'Fri', temp: 4, icon: '🌧️' }
      ]
    },
    topAttractions: [
      { name: 'Jökulsárlón Glacier Lagoon', desc: 'Floating neon-blue icebergs meeting the Atlantic Ocean', image: '/assets/images/dest_iceland_aurora_1791217726046.jpg', duration: 'Half Day' },
      { name: 'Reynisfjara Black Beach', desc: 'Basalt sea stacks and towering roaring surf near Vik', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80', duration: 'Half Day' },
      { name: 'Blue Lagoon Geothermal Spa', desc: 'Silica-rich healing mineral hot waters amidst lava fields', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80', duration: 'Half Day' }
    ],
    coordinates: { x: 44, y: 18, regionName: 'Iceland' },
    featuredHero: true
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    subtitle: 'Queen of the Hills',
    tagline: 'Emerald tea gardens, heritage toy trains, and views of Mt. Kanchenjunga',
    country: 'India',
    region: 'West Bengal',
    subcontinent: 'India',
    category: 'Mountains',
    rating: 4.85,
    reviewsCount: 890,
    startingPrice: 15000,
    recommendedDays: '4–5 Days',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Perched high in the Lesser Himalayas at 2,042 meters, Darjeeling is crowned by the sweeping vista of Mount Kanchenjunga, the world’s third-highest peak. Famed for its fragrant orthodox tea, colonial architecture, and the UNESCO World Heritage Toy Train, it remains one of India’s most poetic mountain retreats.',
    culture: 'Cosmopolitan Gorkha, Tibetan, and Lepcha culture. Tibetan Buddhist monasteries, prayer wheels humming at Ghoom, steaming momos, thukpa, and tea estate connoisseurship.',
    bestTimeToVisit: [
      { season: 'Spring (Mar–May)', status: 'Excellent', weather: 'Rhododendrons in bloom, clear sky & mountain panoramas', temp: '11°C – 19°C' },
      { season: 'Autumn (Oct–Nov)', status: 'Excellent', weather: 'Crisp autumn weather, sparkling view of Kanchenjunga', temp: '8°C – 16°C' },
      { season: 'Monsoon (Jul–Aug)', status: 'Fair', weather: 'Heavy mountain mist, rainfall & lush tea bushes', temp: '15°C – 20°C' }
    ],
    travelInfo: {
      averageBudget: '₹14,000 – ₹20,000',
      recommendedStay: '4 Days',
      bestFor: ['Tea Connoisseurs', 'Families', 'Couples', 'Railfans'],
      idealSeason: 'March – May & October – December'
    },
    currentWeather: {
      temp: 16,
      condition: 'Cool Mountain Breeze',
      humidity: 62,
      windSpeed: 11,
      airQuality: 'Fresh Himalayan (AQI 18)',
      forecast: [
        { day: 'Mon', temp: 16, icon: '🌤️' },
        { day: 'Tue', temp: 17, icon: '☀️' },
        { day: 'Wed', temp: 15, icon: '⛅' },
        { day: 'Thu', temp: 16, icon: '☀️' },
        { day: 'Fri', temp: 14, icon: '🌦️' }
      ]
    },
    topAttractions: [
      { name: 'Tiger Hill', desc: 'World famous sunrise over Kanchenjunga & Mount Everest', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', duration: 'Early Morning' },
      { name: 'Batasia Loop & War Memorial', desc: 'Iconic spiral railway loop with panoramic Himalayan backdrop', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', duration: '2 Hours' },
      { name: 'Ghoom Monastery', desc: 'Ancient yellow-hat Tibetan Buddhist monastery founded in 1850', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', duration: '2 Hours' },
      { name: 'Happy Valley Tea Estate', desc: '150-year-old rolling tea estate producing world-class Darjeeling tea', image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80', duration: 'Half Day' },
      { name: 'Chowrasta & The Mall', desc: 'Lively pedestrian promenade filled with heritage cafes and bookshops', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80', duration: 'Evening' }
    ],
    coordinates: { x: 74, y: 38, regionName: 'East India' },
    featuredHero: true
  },
  {
    id: 'goa',
    name: 'Goa',
    subtitle: 'Sun, Sand & Heritage',
    tagline: 'Golden tropical beaches, Portuguese cathedrals, and coastal susegad',
    country: 'India',
    region: 'Goa',
    subcontinent: 'India',
    category: 'Beaches',
    rating: 4.88,
    reviewsCount: 1540,
    startingPrice: 16000,
    recommendedDays: '4–6 Days',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Goa on India’s southwest coast enchants visitors with its 100-kilometer palm-fringed Arabian Sea coastline, bohemian beach shacks, 16th-century Portuguese architecture, spice plantations, and laid-back ‘susegad’ philosophy of living.',
    culture: 'Indo-Portuguese architecture, Latin Quarter Fontainhas with colorful azulejo tiles, Konkani fish curry rice, bebinca desserts, and sunset fado & reggae music.',
    bestTimeToVisit: [
      { season: 'Winter (Nov–Feb)', status: 'Excellent', weather: 'Clear sunny days, breezy nights, parties & water sports', temp: '21°C – 31°C' },
      { season: 'Monsoon (Jun–Sep)', status: 'Good', weather: 'Spectacular lush green countryside & roaring Dudhsagar waterfalls', temp: '24°C – 29°C' },
      { season: 'Summer (Mar–May)', status: 'Fair', weather: 'Warm coastal sunshine, peaceful beaches & great discounts', temp: '26°C – 34°C' }
    ],
    travelInfo: {
      averageBudget: '₹16,000 – ₹30,000',
      recommendedStay: '4–6 Days',
      bestFor: ['Beaches', 'Nightlife', 'Seafood', 'Water Sports'],
      idealSeason: 'November – February'
    },
    currentWeather: {
      temp: 29,
      condition: 'Sunny Coastal Glow',
      humidity: 71,
      windSpeed: 14,
      airQuality: 'Good (AQI 35)',
      forecast: [
        { day: 'Mon', temp: 29, icon: '☀️' },
        { day: 'Tue', temp: 30, icon: '☀️' },
        { day: 'Wed', temp: 29, icon: '🌤️' },
        { day: 'Thu', temp: 28, icon: '☀️' },
        { day: 'Fri', temp: 29, icon: '☀️' }
      ]
    },
    topAttractions: [
      { name: 'Palolem Beach', desc: 'Idyllic crescent bay with calm waters and colorful wooden shacks', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Dudhsagar Waterfalls', desc: 'Cascading four-tiered sea of milk through the Western Ghats jungle', image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Basilica of Bom Jesus', desc: 'UNESCO baroque church holding mortal remains of St. Francis Xavier', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80', duration: '2 Hours' }
    ],
    coordinates: { x: 32, y: 64, regionName: 'West Coast India' },
    featuredHero: true
  },
  {
    id: 'manali',
    name: 'Manali',
    subtitle: 'Valley of the Gods',
    tagline: 'High Himalayan passes, roaring river rapids, and fragrant apple orchards',
    country: 'India',
    region: 'Himachal Pradesh',
    subcontinent: 'India',
    category: 'Adventure',
    rating: 4.82,
    reviewsCount: 1040,
    startingPrice: 16500,
    recommendedDays: '4–6 Days',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Situated at 2,050 meters along the banks of the Beas River, Manali is Himachal’s premiere adventure hub. Surrounded by towering pine forests and snow-crowned summits, it serves as the threshold to Solang Valley, Rohtang Pass, and the trans-Himalayan valleys of Lahaul and Spiti.',
    culture: 'Himachali wooden pagoda temples like Hadimba, Tibetan cedar cafes, woven Kullu shawls, and adventure backpacker culture.',
    bestTimeToVisit: [
      { season: 'Summer (Mar–Jun)', status: 'Excellent', weather: 'Pleasant temperatures, blooming orchards & rafting', temp: '10°C – 25°C' },
      { season: 'Winter (Oct–Feb)', status: 'Excellent', weather: 'Thick snowfall, Solang skiing & cozy fireplace stays', temp: '-5°C – 12°C' },
      { season: 'Monsoon (Jul–Aug)', status: 'Fair', weather: 'Lush greenery, mountain waterfalls & off-season quiet', temp: '15°C – 22°C' }
    ],
    travelInfo: {
      averageBudget: '₹14,000 – ₹24,000',
      recommendedStay: '4–6 Days',
      bestFor: ['Adventure', 'Couples', 'Skiing', 'Paragliding'],
      idealSeason: 'October – June'
    },
    currentWeather: {
      temp: 14,
      condition: 'Crisp Valley Sunshine',
      humidity: 55,
      windSpeed: 8,
      airQuality: 'Clean Mountain (AQI 24)',
      forecast: [
        { day: 'Mon', temp: 14, icon: '☀️' },
        { day: 'Tue', temp: 15, icon: '☀️' },
        { day: 'Wed', temp: 13, icon: '⛅' },
        { day: 'Thu', temp: 12, icon: '🌧️' },
        { day: 'Fri', temp: 14, icon: '☀️' }
      ]
    },
    topAttractions: [
      { name: 'Solang Valley', desc: 'Adventure hub for paragliding, zorbing, and winter snowmobiling', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Hadimba Temple', desc: 'Four-tiered 16th-century wooden pagoda temple amidst Dhungri pine woods', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80', duration: '2 Hours' },
      { name: 'Atal Tunnel & Sissu', desc: 'World’s longest highway tunnel above 10,000 ft leading to Lahaul waterfall', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' }
    ],
    coordinates: { x: 35, y: 22, regionName: 'Himachal' },
    featuredHero: false
  },
  {
    id: 'kerala',
    name: 'Kerala',
    subtitle: 'God’s Own Country',
    tagline: 'Tranquil backwater canals, misty Munnar spice hills, and Ayurvedic wellness',
    country: 'India',
    region: 'Kerala',
    subcontinent: 'India',
    category: 'Nature',
    rating: 4.9,
    reviewsCount: 1420,
    startingPrice: 19000,
    recommendedDays: '5–7 Days',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Flanked by the Arabian Sea in the west and the Western Ghats mountain range in the east, Kerala is a tropical tapestry of palm-fringed backwaters, wild elephant sanctuaries, rolling tea plantations in Munnar, and centuries-old spice trade ports like Fort Kochi.',
    culture: 'Kathakali classical dance drama, Kalaripayattu martial arts, Ayurvedic rejuvenating therapies, Sadya feast on plantain leaves, and snake boat races.',
    bestTimeToVisit: [
      { season: 'Winter (Sep–Mar)', status: 'Excellent', weather: 'Pleasant humidity, warm sunshine & tranquil houseboating', temp: '22°C – 32°C' },
      { season: 'Monsoon (Jun–Aug)', status: 'Good', weather: 'Prime time for traditional Ayurvedic treatments & lush greenery', temp: '23°C – 29°C' },
      { season: 'Summer (Apr–May)', status: 'Good', weather: 'Warm coastal weather, Munnar hill station remains cool', temp: '25°C – 34°C' }
    ],
    travelInfo: {
      averageBudget: '₹18,000 – ₹32,000',
      recommendedStay: '5–7 Days',
      bestFor: ['Backwaters', 'Wellness', 'Wildlife', 'Couples'],
      idealSeason: 'September – March'
    },
    currentWeather: {
      temp: 27,
      condition: 'Gentle Coastal Breeze',
      humidity: 78,
      windSpeed: 10,
      airQuality: 'Very Good (AQI 28)',
      forecast: [
        { day: 'Mon', temp: 27, icon: '⛅' },
        { day: 'Tue', temp: 28, icon: '☀️' },
        { day: 'Wed', temp: 27, icon: '🌦️' },
        { day: 'Thu', temp: 26, icon: '☀️' },
        { day: 'Fri', temp: 28, icon: '⛅' }
      ]
    },
    topAttractions: [
      { name: 'Alleppey Backwaters', desc: 'Overnight cruise on handcrafted traditional Kettuvallam houseboats', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80', duration: 'Overnight' },
      { name: 'Munnar Tea Hills', desc: 'Rolling carpet of emerald tea estates and Eravikulam National Park', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80', duration: '2 Days' },
      { name: 'Fort Kochi', desc: 'Chinese fishing nets, Jewish Synagogue, and Dutch Palace art precinct', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80', duration: '1 Day' }
    ],
    coordinates: { x: 38, y: 84, regionName: 'South India' },
    featuredHero: false
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    subtitle: 'The Mystical Shangri-La',
    tagline: 'High-altitude holy lakes, rhododendron valleys, and Tibetan monasteries',
    country: 'India',
    region: 'Sikkim',
    subcontinent: 'India',
    category: 'Spiritual',
    rating: 4.89,
    reviewsCount: 780,
    startingPrice: 20000,
    recommendedDays: '5–7 Days',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'India’s first 100% organic state, Sikkim is an enchanting mountain wonderland crowned by Mount Kanchenjunga. From sacred glacial lakes like Tsomgo to the Valley of Flowers in Yumthang and ancient monasteries like Rumtek, it offers unblemished natural harmony.',
    culture: 'Tibetan Buddhism, Lepcha and Bhutia folklore, monastic cham mask dances, butter tea, and organic Himalayan gastronomy.',
    bestTimeToVisit: [
      { season: 'Spring (Mar–May)', status: 'Excellent', weather: 'Massive rhododendron blooms in Yumthang valley', temp: '10°C – 18°C' },
      { season: 'Autumn (Oct–Dec)', status: 'Excellent', weather: 'Crystal clear views of snow-dusted Kanchenjunga', temp: '5°C – 15°C' },
      { season: 'Monsoon (Jul–Aug)', status: 'Fair', weather: 'Lush greenery, occasional mountain rains', temp: '14°C – 20°C' }
    ],
    travelInfo: {
      averageBudget: '₹18,000 – ₹28,000',
      recommendedStay: '5–7 Days',
      bestFor: ['Nature', 'Spirituality', 'Trekking', 'Serenity'],
      idealSeason: 'March – May & October – December'
    },
    currentWeather: {
      temp: 15,
      condition: 'Serene Alpine Mist',
      humidity: 64,
      windSpeed: 7,
      airQuality: 'Pure (AQI 14)',
      forecast: [
        { day: 'Mon', temp: 15, icon: '☀️' },
        { day: 'Tue', temp: 16, icon: '⛅' },
        { day: 'Wed', temp: 14, icon: '☀️' },
        { day: 'Thu', temp: 15, icon: '🌤️' },
        { day: 'Fri', temp: 13, icon: '🌦️' }
      ]
    },
    topAttractions: [
      { name: 'Tsomgo Lake', desc: 'Glacial alpine lake at 12,310 ft sacred to local Buddhists & Hindus', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', duration: 'Half Day' },
      { name: 'Yumthang Valley', desc: 'Sikkim’s Valley of Flowers with natural hot springs and yak pastures', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Rumtek Monastery', desc: 'Largest seat of Tibetan Kagyu lineage outside Tibet with gold stupa', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', duration: '3 Hours' }
    ],
    coordinates: { x: 76, y: 34, regionName: 'Sikkim' },
    featuredHero: false
  },
  {
    id: 'morocco',
    name: 'Morocco',
    subtitle: 'Sahara & Imperial Cities',
    tagline: 'Ochre medinas, starlit Sahara dunes, and fragrant spice bazaars',
    country: 'Morocco',
    region: 'North Africa',
    subcontinent: 'Global',
    category: 'Heritage',
    rating: 4.87,
    reviewsCount: 860,
    startingPrice: 62000,
    recommendedDays: '7–9 Days',
    heroImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80'
    ],
    about: 'Morocco bridges Africa and Europe across the Strait of Gibraltar. Ancient labyrinthine medinas of Fes and Marrakech, the blue alleyways of Chefchaouen, the snow-dusted Atlas Mountains, and the sweeping golden dunes of Erg Chebbi in the Sahara create an intoxicating sensory journey.',
    culture: 'Berber and Moorish heritage, intricate zellige ceramic tilework, mint tea hospitality, slow-cooked tagine stews, and souk carpet weaving.',
    bestTimeToVisit: [
      { season: 'Spring (Mar–May)', status: 'Excellent', weather: 'Pleasant temperatures, blooming almond blossoms & green valleys', temp: '16°C – 26°C' },
      { season: 'Autumn (Sep–Nov)', status: 'Excellent', weather: 'Mild warmth, ideal for Sahara desert camp expeditions', temp: '18°C – 28°C' },
      { season: 'Summer (Jun–Aug)', status: 'Fair', weather: 'High heat in the desert, coastal Essaouira remains breezy', temp: '26°C – 40°C' }
    ],
    travelInfo: {
      averageBudget: '₹60,000 – ₹95,000',
      recommendedStay: '7–9 Days',
      bestFor: ['Culture', 'Desert Glamping', 'Architecture', 'Shopping'],
      idealSeason: 'March – May & September – November'
    },
    currentWeather: {
      temp: 24,
      condition: 'Warm Golden Sunshine',
      humidity: 38,
      windSpeed: 12,
      airQuality: 'Good (AQI 32)',
      forecast: [
        { day: 'Mon', temp: 24, icon: '☀️' },
        { day: 'Tue', temp: 25, icon: '☀️' },
        { day: 'Wed', temp: 23, icon: '🌤️' },
        { day: 'Thu', temp: 24, icon: '☀️' },
        { day: 'Fri', temp: 26, icon: '☀️' }
      ]
    },
    topAttractions: [
      { name: 'Marrakech Medina & Jemaa el-Fnaa', desc: 'Vibrant UNESCO square with snake charmers, storytellers & spice stalls', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80', duration: 'Full Day' },
      { name: 'Erg Chebbi Sahara Dunes', desc: 'Camel trek and luxury desert camp beneath infinite Milky Way stars', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80', duration: '2 Days' },
      { name: 'Chefchaouen The Blue City', desc: 'Cobblestone mountain town painted in striking shades of blue', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80', duration: '1 Day' }
    ],
    coordinates: { x: 38, y: 32, regionName: 'North Africa' },
    featuredHero: true
  }
];

export const INITIAL_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    destinationId: 'agra',
    destinationName: 'Agra',
    state: 'Uttar Pradesh',
    rating: 4.95,
    category: 'Heritage',
    entryFee: '₹50 (Indian) / ₹1,100 (Foreigner)',
    bestTime: 'October – March',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    description: 'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by the Mughal emperor Shah Jahan in memory of his favourite wife Mumtaz Mahal. It is one of the universally admired masterpieces of the world’s heritage.',
    highlights: ['UNESCO World Heritage Site', 'Pietra dura floral inlay in marble', 'Symmetrical Charbagh Persian gardens', 'Sunrise and full-moon night viewing'],
    timing: 'Sunrise to Sunset (Closed on Fridays)'
  },
  {
    id: 'victoria-memorial',
    name: 'Victoria Memorial',
    destinationId: 'kolkata',
    destinationName: 'Kolkata',
    state: 'West Bengal',
    rating: 4.8,
    category: 'Heritage',
    entryFee: '₹30 (Gardens) / ₹500 (Foreigner)',
    bestTime: 'October – March',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    description: 'A magnificent white Makrana marble palace located on the Maidan in Kolkata, constructed between 1906 and 1921. It houses 25 galleries displaying rare Royal gallery paintings, colonial weapons, and rare stamps.',
    highlights: ['64-acre lush landscaped gardens', 'Angel of Victory rotating bronze statue', 'Nightly sound & light show', 'British Raj royal portraiture'],
    timing: '10:00 AM – 6:00 PM (Museum)'
  },
  {
    id: 'howrah-bridge',
    name: 'Howrah Bridge',
    destinationId: 'kolkata',
    destinationName: 'Kolkata',
    state: 'West Bengal',
    rating: 4.75,
    category: 'Heritage',
    entryFee: 'Free Public Access',
    bestTime: 'October – March',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    description: 'A historic balanced cantilever suspension bridge over the Hooghly River. Built without nuts or bolts by riveting the whole steel structure, it connects Kolkata and Howrah and carries over 100,000 vehicles and 150,000 pedestrians daily.',
    highlights: ['Engineering marvel of 1943', 'Sunset ferry rides across Hooghly river', 'Famous illuminated evening silhouette', 'Adjacent Mullick Ghat wholesale flower market'],
    timing: 'Open 24 Hours'
  },
  {
    id: 'gateway-of-india',
    name: 'Gateway of India',
    destinationId: 'mumbai',
    destinationName: 'Mumbai',
    state: 'Maharashtra',
    rating: 4.7,
    category: 'Heritage',
    entryFee: 'Free Public Access',
    bestTime: 'November – February',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    description: 'An arch-monument built in the Indo-Saracenic style in the 20th century in Mumbai to commemorate the landing of King George V and Queen Mary at Apollo Bunder. Overlooks the Arabian Sea and the iconic Taj Mahal Palace hotel.',
    highlights: ['Indo-Saracenic 26-meter basalt arch', 'Ferry rides to Elephanta Caves', 'Sea breeze promenade', 'Historic symbol of Mumbai'],
    timing: 'Open 24 Hours'
  },
  {
    id: 'amer-fort',
    name: 'Amer Fort',
    destinationId: 'jaipur',
    destinationName: 'Jaipur',
    state: 'Rajasthan',
    rating: 4.9,
    category: 'Heritage',
    entryFee: '₹100 (Indian) / ₹550 (Foreigner)',
    bestTime: 'October – March',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    description: 'High on a rugged hill in Amer, Rajasthan, this sandstone and marble fort overlooks Maota Lake. Famous for its artistic Hindu style elements, massive ramparts, series of gates, and the Sheesh Mahal (Mirror Palace).',
    highlights: ['Sheesh Mahal mirror hall that glitters with a single candle', 'Diwan-e-Aam public audience hall', 'Panoramic views of Maota Lake', 'Evening Sound & Light show'],
    timing: '8:00 AM – 5:30 PM & 6:30 PM – 9:15 PM'
  },
  {
    id: 'dudhsagar-falls',
    name: 'Dudhsagar Falls',
    destinationId: 'goa',
    destinationName: 'Goa',
    state: 'Goa',
    rating: 4.88,
    category: 'Nature',
    entryFee: '₹50 + Jeep Safari (₹500)',
    bestTime: 'October – May',
    image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80',
    description: 'A four-tiered waterfall located on the Mandovi River in Goa. With a height of 310 meters (1017 feet), it is among India’s tallest waterfalls. The falls form a spectacular milky illusion as water cascades over steep rocks.',
    highlights: ['Iconic railway bridge crossing right before the falls', 'Jeep safari through Bhagwan Mahaveer Wildlife Sanctuary', 'Natural swimming plunge pool at the base', 'Lush Western Ghats flora and fauna'],
    timing: '9:00 AM – 5:00 PM'
  },
  {
    id: 'darjeeling-himalayan-railway',
    name: 'Darjeeling Himalayan Railway',
    destinationId: 'darjeeling',
    destinationName: 'Darjeeling',
    state: 'West Bengal',
    rating: 4.85,
    category: 'Heritage',
    entryFee: '₹1,000 – ₹1,500 (Toy Train Joyride)',
    bestTime: 'March – May & October – December',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Opened in 1881, the UNESCO World Heritage "Toy Train" is a 2-foot narrow-gauge railway running from New Jalpaiguri to Darjeeling. It ascends over 2,000 meters using ingenious loops and zig-zags through mountain villages.',
    highlights: ['UNESCO World Heritage Site since 1999', 'Steam engine joyrides from Darjeeling to Ghoom', 'Batasia Loop 360-degree mountain loop', 'Chugging through vibrant mountain town streets'],
    timing: 'Daily schedules from 8:00 AM – 4:00 PM'
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers',
    destinationId: 'uttarakhand',
    destinationName: 'Chamoli',
    state: 'Uttarakhand',
    rating: 4.92,
    category: 'Nature',
    entryFee: '₹150 (Indian) / ₹600 (Foreigner)',
    bestTime: 'July – September',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'A high-altitude Himalayan valley nestled in the Western Himalayas, renowned for its meadows of endemic alpine flowers and rich biodiversity. Home to rare animals including Asiatic black bear, snow leopard, and blue sheep.',
    highlights: ['Over 500 varieties of wild alpine flowers including Blue Poppy', 'Breathtaking 14km trek from Govindghat', 'UNESCO Biosphere Reserve', 'Glacial streams and misty mountain backdrop'],
    timing: '7:00 AM – 5:00 PM (Seasonal June to October)'
  },
  {
    id: 'gulmarg-gondola',
    name: 'Gulmarg Gondola',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    state: 'Jammu & Kashmir',
    rating: 4.9,
    category: 'Adventure',
    entryFee: 'Phase 1: ₹800 / Phase 2: ₹1,000',
    bestTime: 'Throughout Year (Snow: Dec–Mar)',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    description: 'The second-highest operating cable car in the world, carrying passengers up to Apharwat Peak at 13,780 feet. Offers jaw-dropping views of Nanga Parbat and Pir Panjal mountain ranges.',
    highlights: ['Phase 1 to Kongdoori alpine bowl', 'Phase 2 to Apharwat Peak snow line', 'World-class deep powder snow skiing', 'Breathtaking 360-degree Himalayan panorama'],
    timing: '9:00 AM – 4:00 PM'
  },
  {
    id: 'dal-lake-shikara',
    name: 'Dal Lake Shikara',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    state: 'Jammu & Kashmir',
    rating: 4.92,
    category: 'Nature',
    entryFee: '₹700 – ₹1,200 per hour',
    bestTime: 'April – October',
    image: '/assets/images/dest_kashmir_paradise_1791217715653.jpg',
    description: 'Gliding along the calm waters of Dal Lake in an ornate Kashmiri wooden Shikara boat. Experience floating vegetable markets, lotus gardens, water lilies, and cedarwood houseboats against snow-capped peaks.',
    highlights: ['Sunrise floating vegetable market', 'Floating handicraft and saffron shops', 'Char Chinar four-island garden', 'Romantic sunset over Himalayan reflections'],
    timing: 'Sunrise to 8:00 PM'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    destinationId: 'kashmir',
    author: 'Rahul Sharma',
    rating: 5,
    date: '12 September 2026',
    comment: 'One of the most beautiful places I have ever visited in my entire life! The Shikara ride at sunrise in Dal Lake and the gondola ride to Phase 2 in Gulmarg felt like being inside a dream postcard.',
    tripType: 'Couple'
  },
  {
    id: 'rev-2',
    destinationId: 'kashmir',
    author: 'Ananya Sen',
    rating: 5,
    date: '28 August 2026',
    comment: 'Perfect destination for a family trip. The local hospitality, warm saffron Kahwa tea, and the breathtaking views in Pahalgam Betaab Valley were unforgettable. TRAVORA’s itinerary was spot on!',
    tripType: 'Family'
  },
  {
    id: 'rev-3',
    destinationId: 'darjeeling',
    author: 'Dev Mukherjee',
    rating: 5,
    date: '15 September 2026',
    comment: 'Seeing Mount Kanchenjunga turn from pink to blazing gold during sunrise at Tiger Hill is a spiritual experience. The toy train ride at Batasia Loop was nostalgic and thrilling.',
    tripType: 'Solo'
  },
  {
    id: 'rev-4',
    destinationId: 'patagonia',
    author: 'Elena Rostova',
    rating: 5,
    date: '02 October 2026',
    comment: 'The W-Trek in Torres del Paine tested our endurance, but gazing up at the granite towers with the glacier lagoon below made every step worth it. Majestic and wild.',
    tripType: 'Adventure'
  }
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Tushar',
  handle: '@tushar_travels',
  role: 'Explorer / Traveler',
  placesSaved: 12,
  tripsPlanned: 4,
  favorites: 18,
  bucketList: [
    { id: 'b1', name: 'Darjeeling', completed: true, region: 'West Bengal' },
    { id: 'b2', name: 'Kashmir', completed: false, region: 'Jammu & Kashmir' },
    { id: 'b3', name: 'Meghalaya', completed: false, region: 'North East' },
    { id: 'b4', name: 'Rajasthan', completed: false, region: 'North India' },
    { id: 'b5', name: 'Goa', completed: true, region: 'West Coast' },
    { id: 'b6', name: 'Sikkim', completed: false, region: 'Eastern Himalayas' }
  ],
  recentTrips: [
    {
      id: 'rt-1',
      name: 'Darjeeling Explorer',
      duration: '4 Days',
      date: 'Aug 2026',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      rating: 5
    },
    {
      id: 'rt-2',
      name: 'Goa Coastal Retreat',
      duration: '5 Days',
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
      rating: 5
    }
  ]
};

export const SAMPLE_ITINERARIES: Record<string, GeneratedItinerary> = {
  darjeeling: {
    id: 'darjeeling-4d',
    destinationId: 'darjeeling',
    destinationName: 'Darjeeling',
    durationDays: 4,
    totalBudget: 15000,
    travelType: 'Family',
    interests: ['Nature', 'Photography', 'Food'],
    createdAt: '2026-10-05',
    notes: 'Classic Himalayan tea and sunrise itinerary with moderate pacing and heritage train rides.',
    days: [
      {
        day: 1,
        title: 'Arrival & The Colonial Promenade',
        slots: [
          { time: 'Morning', title: 'Arrival & Hotel Check-in', location: 'Darjeeling Town', activity: 'Scenic drive up from Bagdogra/Siliguri through pine forests, hotel check-in and welcome Darjeeling tea.', estimatedCost: 1500 },
          { time: 'Afternoon', title: 'Darjeeling Mall & Chowrasta', location: 'Chowrasta', activity: 'Walk along the lively pedestrian promenade, browse Oxford Book Store, horse rides for kids.', estimatedCost: 800 },
          { time: 'Sunset', title: 'Sunset at Observatory Hill', location: 'Mahakal Temple', activity: 'Breathtaking 360-degree valley view as sun dips over Himalayan ranges, prayer flags flapping.', estimatedCost: 300 },
          { time: 'Evening', title: 'Glenary’s Bakery & Dinner', location: 'Nehru Road', activity: 'Savour fresh pastries, apple pies, and live acoustic music in Darjeeling’s iconic colonial cafe.', estimatedCost: 1400 }
        ]
      },
      {
        day: 2,
        title: 'Golden Sunrise & Heritage Toy Train',
        slots: [
          { time: 'Morning', title: 'Sunrise at Tiger Hill (4:00 AM)', location: 'Tiger Hill Summit', activity: 'Witness the surreal golden light illuminate Kanchenjunga and distant Everest peaks.', estimatedCost: 1200 },
          { time: 'Afternoon', title: 'Batasia Loop & Himalayan Railway', location: 'Batasia Loop', activity: 'Board the heritage DHR Toy Train joyride, curving through the spectacular spiral loop.', estimatedCost: 2000 },
          { time: 'Sunset', title: 'Ghoom Monastery', location: 'Ghoom', activity: 'Visit the 1850 Maitreya Buddha temple, spin Tibetan prayer wheels, and experience monastic serenity.', estimatedCost: 400 },
          { time: 'Evening', title: 'Tibetan Momo & Thukpa Feast', location: 'Kunga Restaurant', activity: 'Hot piping Tibetan steamed beef/pork/veg momos and spicy noodle broth on a chilly mountain night.', estimatedCost: 900 }
        ]
      },
      {
        day: 3,
        title: 'Tea Estate & Natural Cascades',
        slots: [
          { time: 'Morning', title: 'Happy Valley Tea Garden Tour', location: 'Happy Valley Estate', activity: 'Stroll among rolling tea bushes, watch tea leaf plucking, and sample first-flush muscatel tea.', estimatedCost: 800 },
          { time: 'Afternoon', title: 'Barbotey Rock Garden & Waterfalls', location: 'Chunnu Summer Falls', activity: 'Multi-level terraced garden cut into hillside with bubbling streams and wooden footbridges.', estimatedCost: 1100 },
          { time: 'Sunset', title: 'Ganga Maya Park & Photography', location: 'Valley Gorge', activity: 'Relax by crystal mountain streams, boating in small lake, capturing golden twilight colors.', estimatedCost: 600 },
          { time: 'Evening', title: 'Local Photography & Stargazing', location: 'Mall Road Viewpoint', activity: 'Clear mountain night sky photography with glittering valley lights below.', estimatedCost: 300 }
        ]
      },
      {
        day: 4,
        title: 'Artisans & Farewell Valley View',
        slots: [
          { time: 'Morning', title: 'Tibetan Refugee Self Help Centre', location: 'Lebong', activity: 'Watch master artisans weave woolen carpets, wood carvings, and traditional handicrafts.', estimatedCost: 1500 },
          { time: 'Afternoon', title: 'Local Market & Orthodox Tea Tasting', location: 'Lower Bazaar', activity: 'Sample and purchase authentic single-estate loose tea leaves to take home as gifts.', estimatedCost: 1800 },
          { time: 'Sunset', title: 'Final Sightseeing & Cable Car Ropeway', location: 'Singamari', activity: 'Gliding high over lush tea slopes down to the river valley on the Darjeeling Rangeet Ropeway.', estimatedCost: 900 },
          { time: 'Evening', title: 'Return Journey', location: 'Departure', activity: 'Scenic descent back towards Bagdogra airport or New Jalpaiguri railway station.', estimatedCost: 1500 }
        ]
      }
    ]
  },
  kashmir: {
    id: 'kashmir-5d',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    durationDays: 5,
    totalBudget: 22000,
    travelType: 'Couple',
    interests: ['Nature', 'Photography', 'Food'],
    createdAt: '2026-10-05',
    notes: 'Dreamy romantic Kashmir itinerary with Shikara boating, snow cable car, and Lidder river pine valleys.',
    days: [
      {
        day: 1,
        title: 'Srinagar Arrival & Dal Lake Shikara',
        slots: [
          { time: 'Morning', title: 'Arrival at Srinagar & Cedar Houseboat Check-in', location: 'Dal Lake', activity: 'Check into a traditional walnut-carved houseboat on tranquil waters with views of Zabarwan range.', estimatedCost: 2500 },
          { time: 'Afternoon', title: 'Mughal Gardens Tour', location: 'Nishat & Shalimar Bagh', activity: 'Walk along terraced Persian water fountains, century-old Chinar trees, and blooming roses.', estimatedCost: 600 },
          { time: 'Sunset', title: 'Sunset Shikara Boating', location: 'Dal Lake Waters', activity: 'Glide smoothly past floating water lily beds, Char Chinar island, and floating artisan shops.', estimatedCost: 1000 },
          { time: 'Evening', title: 'Kashmiri Wazwan Feast', location: 'Ahdoos Restaurant', activity: 'Tasting aromatic Rogan Josh, Gushtaba, Tabak Maaz, and Kashmiri Pulao on the Jhelum riverside.', estimatedCost: 1800 }
        ]
      },
      {
        day: 2,
        title: 'Gulmarg Meadow of Flowers & Gondola Ride',
        slots: [
          { time: 'Morning', title: 'Drive to Gulmarg & Phase 1 Gondola', location: 'Kongdoori Bowl', activity: 'Scenic drive through Tangmarg pine forests, boarding the cable car up to 10,000 feet.', estimatedCost: 2200 },
          { time: 'Afternoon', title: 'Phase 2 Apharwat Peak Summit', location: 'Apharwat 13,780 ft', activity: 'Step onto powdery high-altitude snowline, sledge rides, and views towards Nanga Parbat.', estimatedCost: 2500 },
          { time: 'Sunset', title: 'Highland Golf Course & St. Mary’s Church', location: 'Gulmarg Valley', activity: 'Walk across the undulating meadows and historic 1902 British stone church.', estimatedCost: 400 },
          { time: 'Evening', title: 'Saffron Kahwa by the Fireplace', location: 'Gulmarg Resort', activity: 'Warm cinnamon, cardamom, and almond-infused saffron tea beside crackling cedar fireplace.', estimatedCost: 600 }
        ]
      },
      {
        day: 3,
        title: 'Pahalgam Valley of Shepherds',
        slots: [
          { time: 'Morning', title: 'Drive to Pahalgam via Saffron Pampore', location: 'Pampore', activity: 'Stop at purple saffron fields and authentic walnut & cricket bat willow craft workshops.', estimatedCost: 1200 },
          { time: 'Afternoon', title: 'Betaab Valley & Aru Valley Tour', location: 'Betaab Valley', activity: 'Turquoise Lidder river flowing through meadow surrounded by dense deodar forests.', estimatedCost: 1500 },
          { time: 'Sunset', title: 'Riverside Pony Trekking', location: 'Baisaran Mini Switzerland', activity: 'Ride mountain ponies through pine trails opening onto the hilltop green meadow.', estimatedCost: 1200 },
          { time: 'Evening', title: 'River Trout Barbecue Dinner', location: 'Pahalgam Market', activity: 'Freshly grilled Himalayan trout seasoned with mountain herbs and saffron rice.', estimatedCost: 1600 }
        ]
      },
      {
        day: 4,
        title: 'Sonamarg & Thajiwas Glacier',
        slots: [
          { time: 'Morning', title: 'Scenic Drive along Sindh River', location: 'Sonamarg Gateway', activity: 'Dramatic transition to rugged snow-tipped mountain passes and swift mountain torrents.', estimatedCost: 1800 },
          { time: 'Afternoon', title: 'Thajiwas Glacier Hike', location: 'Thajiwas', activity: 'Walk or sledge right up to the base of the perennial turquoise glacial ice pack.', estimatedCost: 1400 },
          { time: 'Sunset', title: 'Golden Meadow Stroll', location: 'Sonamarg Meadows', activity: 'Golden hour sunlight illuminating snow crests as horse bells echo through the valley.', estimatedCost: 400 },
          { time: 'Evening', title: 'Return to Srinagar & Craft Shopping', location: 'Lal Chowk Bazaar', activity: 'Browsing fine Pashmina shawls, walnut jewelry boxes, and saffron spice boxes.', estimatedCost: 2000 }
        ]
      },
      {
        day: 5,
        title: 'Floating Market & Farewell Kashmir',
        slots: [
          { time: 'Morning', title: 'Sunrise Floating Vegetable Market (5:30 AM)', location: 'Dal Lake Interior', activity: 'Magical quiet scene of traditional vendors bartering fresh greens and water lilies from boats.', estimatedCost: 800 },
          { time: 'Afternoon', title: 'Hazratbal Shrine & Historic Walk', location: 'Hazratbal', activity: 'White marble shrine on Dal Lake shore reflecting in tranquil waters.', estimatedCost: 400 },
          { time: 'Sunset', title: 'Final Farewell Kahwa & Airport Transfer', location: 'Srinagar Airport', activity: 'Departing with memories, photos, and gifts of the Paradise on Earth.', estimatedCost: 1200 },
          { time: 'Evening', title: 'Safe Flight Home', location: 'Return Flight', activity: 'Reflect on a journey of a lifetime.', estimatedCost: 0 }
        ]
      }
    ]
  }
};
