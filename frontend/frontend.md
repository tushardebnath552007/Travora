# Travora Frontend (React + static pages)

Everything user-facing lives in `frontend/`, organized **tab → feature → class files**,
where each tab mirrors a site page. Two experiences ship from here:

1. **React SPA** (`src/`, built by Vite) — tab shells (`explore.html`, `planner.html`, …)
2. **Vanilla multi-page site** (root `*.html` + `css/` + `js/`) — the main site served at `/`


frontend/
├── package.json / vite.config.ts / tsconfig.json / postcss.config.js
├── html/                    # vanilla content pages (built to dist/html/)
│   ├── index.html, destinations.html, experiences.html, budget-estimator.html,
│   ├── interactive-map.html, wisdom.html, contact.html, login.html, signup.html
├── explore.html, destination.html, attractions.html, planner.html,   # React shells
│   itinerary.html, wishlist.html, budget.html, profile.html, map.html
├── src/
│   ├── main.tsx / App.tsx / index.css
│   ├── components/      # shared: Navbar, Footer, HeroCarousel, PageExtras, …
│   ├── context/         # TravoraContext (tabs, wishlist, itinerary, auth, theme)
│   ├── data/            # travelData, gallery
│   ├── types/           # travel.ts
│   └── pages/<tab>/<feature>/<Class>.tsx
│       ├── home/discovery|showcase|experiences|attractions|planner|
│       │         itinerary|budget|map|pillars|testimonials|gallery|faq
│       ├── explore/filters|catalog
│       ├── destination/hero|editorial|sidebar|reviews
│       ├── attractions/search|gallery|detail
│       ├── planner/destination|schedule|party
│       ├── itinerary/banner|days
│       ├── budget/currency|target|categories|sync
│       ├── wishlist/collection
│       ├── profile/header|bucket|trips
│       ├── map/data|filters|canvas|dossier
│       └── auth/session|perks
├── public/assets/images/   # local photography (copied to dist)
├── css/style.css           # vanilla design system (themes, pages, responsive)
├── js/app.js               # vanilla engine (search, map explorer, auth, fx)
└── dist/                   # production build (served by the backend, gitignored)


## Scripts (run inside `frontend/`)

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | `tsc --noEmit` typecheck |

## Conventions

- **Tab names = page names.** A new page means a new `src/pages/<tab>/` folder
  (React) and/or a root `<tab>.html` + vite input entry (vanilla).
- Features own their state via `useTravora()`; composers (`<Tab>View.tsx`) only
  assemble features and pass callbacks.
- Page themes: `<body data-theme="…">` re-skins tags, nav, chips, map, buttons.
- Every vanilla page shares: left sidebar nav, search band, breadcrumb, footer,
  modal/toast containers, and `js/app.js` (guarded per-page initializers).
- Backend contract: same-origin `/api/*` (see `backend.md`); auth token in
  `localStorage` (remember me) or `sessionStorage`.
