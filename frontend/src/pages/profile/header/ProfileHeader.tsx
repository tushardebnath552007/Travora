import React from 'react';
import { Compass, Award } from 'lucide-react';
import { UserProfile } from '../../../types/travel';

interface ProfileHeaderProps {
  profile: UserProfile;
  wishlistCount: number;
  onWishlist: () => void;
  onPlanner: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, wishlistCount, onWishlist, onPlanner }) => {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">

      {/* Profile Lockup */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

        {/* Avatar */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 p-[3px] shadow-xl">
            <div className="w-full h-full bg-neutral-950 rounded-[21px] flex items-center justify-center text-3xl font-extrabold text-amber-300 font-display">
              {profile.name.charAt(0)}
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-amber-400 text-neutral-950 p-1.5 rounded-full shadow-lg">
            <Compass className="w-4 h-4" />
          </div>
        </div>

        {/* User Bio */}
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {profile.name}
              </h1>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                {profile.role} · {profile.handle}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold self-center sm:self-start">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Wanderer</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 pt-1 max-w-lg">
            Passionate wanderlust explorer seeking high-altitude Himalayan summits, colonial tea hills, and tranquil coastal sunsets.
          </p>
        </div>

      </div>

      {/* 3 Metric Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">

        <div
          onClick={onWishlist}
          className="bg-neutral-950 border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🌍</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">View</span>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">
            {wishlistCount}
          </div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">
            Places Saved in Wishlist
          </div>
        </div>

        <div
          onClick={onPlanner}
          className="bg-neutral-950 border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🧳</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">View</span>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">
            {profile.tripsPlanned}
          </div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">
            Trips Planned
          </div>
        </div>

        <div
          onClick={onWishlist}
          className="bg-neutral-950 border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">❤️</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">View</span>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">
            {profile.favorites}
          </div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">
            Favorites Added
          </div>
        </div>

      </div>

    </div>
  );
};
