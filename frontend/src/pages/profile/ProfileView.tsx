import React from 'react';
import { useTravora } from '../../context/TravoraContext';
import { PhotoJournal, TestimonialsStrip, FaqStrip, CtaBanner } from '../../components/PageExtras';
import { ProfileHeader } from './header/ProfileHeader';
import { BucketList } from './bucket/BucketList';
import { RecentTrips } from './trips/RecentTrips';

export const ProfileView: React.FC = () => {
  const {
    userProfile,
    toggleBucketItem,
    addBucketItem,
    wishlist,
    setActiveTab
  } = useTravora();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-28">

      {/* Header Profile Dashboard matching prompt format:
          Tushar
          Explorer / Traveler
          🌍 12 Places Saved
          🧳 4 Trips Planned
          ❤️ 18 Favorites
      */}
      <ProfileHeader
        profile={userProfile}
        wishlistCount={wishlist.length}
        onWishlist={() => setActiveTab('wishlist')}
        onPlanner={() => setActiveTab('planner')}
      />

      {/* My Travel Bucket List Section matching prompt:
          My Travel Bucket List
          ☑ Darjeeling
          ☐ Kashmir
          ☐ Meghalaya
          ☐ Rajasthan
      */}
      <BucketList
        items={userProfile.bucketList}
        onToggle={toggleBucketItem}
        onAdd={addBucketItem}
      />

      {/* Recent Trips Section matching prompt:
          Recent Trips
          Darjeeling • 4 Days
          Goa • 5 Days
      */}
      <RecentTrips
        trips={userProfile.recentTrips}
        onViewPlan={() => setActiveTab('itinerary')}
        onNewJourney={() => setActiveTab('planner')}
      />

      <PhotoJournal title="Traveler Photo Journal" subtitle="Frames from journeys like yours — fuel for the next bucket-list tick." count={8} />
      <TestimonialsStrip />
      <FaqStrip />
      <CtaBanner />

    </div>
  );
};
