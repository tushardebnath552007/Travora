import React from 'react';
import { HeroCarousel } from '../../components/HeroCarousel';
import { PhotoJournal, TestimonialsStrip, TravelTipsStrip, CtaBanner } from '../../components/PageExtras';
import { SearchHub } from './discovery/SearchHub';
import { TrendingGrid } from './showcase/TrendingGrid';
import { ExperienceGrid } from './experiences/ExperienceGrid';
import { AttractionShowcase } from './attractions/AttractionShowcase';
import { QuickPlanner } from './planner/QuickPlanner';
import { ItineraryShowcase } from './itinerary/ItineraryShowcase';
import { HomeBudget } from './budget/HomeBudget';
import { MapTeaser } from './map/MapTeaser';
import { ValuePillars } from './pillars/ValuePillars';
import { PostcardWall } from './testimonials/PostcardWall';
import { DispatchWall } from './gallery/DispatchWall';
import { HomeFaq } from './faq/HomeFaq';

export const HomeView: React.FC = () => {
  return (
    <div className="w-full space-y-28 pb-32">

      {/* ======================================================== */}
      {/* 1. CINEMATIC HERO SECTION                                */}
      {/* ======================================================== */}
      <HeroCarousel />

      {/* ======================================================== */}
      {/* 2. GRAND TRAVEL DISCOVERY & SEARCH HUB (BOARDING PASS)   */}
      {/* ======================================================== */}
      <SearchHub />

      {/* ======================================================== */}
      {/* 3. TRENDING DESTINATIONS (HANDCRAFTED POLAROID FEEL)     */}
      {/* ======================================================== */}
      <TrendingGrid />

      {/* ======================================================== */}
      {/* 4. POPULAR EXPERIENCES (FIELD NOTEBOOK CARDS)            */}
      {/* ======================================================== */}
      <ExperienceGrid />

      {/* ======================================================== */}
      {/* 5. FAMOUS TOURIST ATTRACTIONS (UNESCO MONUMENTS)         */}
      {/* ======================================================== */}
      <AttractionShowcase />

      {/* ======================================================== */}
      {/* 6. INTERACTIVE TRIP PLANNER (LOGBOOK AESTHETIC)          */}
      {/* ======================================================== */}
      <QuickPlanner />

      {/* ======================================================== */}
      {/* 7. AUTOMATIC ITINERARY (BOARDING PASS & MARGINALIA)      */}
      {/* ======================================================== */}
      <ItineraryShowcase />

      {/* ======================================================== */}
      {/* 8. TRAVEL BUDGET CALCULATOR (BRASS LEDGER AESTHETIC)     */}
      {/* ======================================================== */}
      <HomeBudget />

      {/* ======================================================== */}
      {/* 9. INTERACTIVE CARTOGRAPHIC MAP (HAND-DRAWN TOUCHES)     */}
      {/* ======================================================== */}
      <MapTeaser />

      {/* ======================================================== */}
      {/* 10. WHY TRAVORA? VALUE PILLARS                           */}
      {/* ======================================================== */}
      <ValuePillars />

      {/* ======================================================== */}
      {/* 11. TRAVELER TESTIMONIALS (AIRMAIL POSTCARDS)           */}
      {/* ======================================================== */}
      <PostcardWall />

      {/* ======================================================== */}
      {/* 12. CURATED VISUAL PHOTO DISPATCHES (POLAROID WALL)      */}
      {/* ======================================================== */}
      <DispatchWall />

      {/* ======================================================== */}
      {/* 13. FREQUENTLY ASKED TRAVEL QUESTIONS (FAQ ACCORDION)    */}
      {/* ======================================================== */}
      <HomeFaq />

      <PhotoJournal title="Traveler Photo Journal" subtitle="Twelve frames from the field — alpine dawns, lantern-lit coves, and citadel twilights." count={12} />
      <TestimonialsStrip />
      <TravelTipsStrip />
      <CtaBanner />

    </div>
  );
};
