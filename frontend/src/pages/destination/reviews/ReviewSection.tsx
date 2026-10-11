import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { useTravora } from '../../../context/TravoraContext';
import { Destination } from '../../../types/travel';

interface ReviewSectionProps {
  destination: Destination;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ destination }) => {
  const { reviews, addReview } = useTravora();

  // Review Form state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [tripType, setTripType] = useState('Couple');

  const destinationReviews = reviews.filter(r => r.destinationId === destination.id);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    addReview({
      destinationId: destination.id,
      author: authorName.trim() || 'Anonymous Explorer',
      rating: reviewRating,
      comment: reviewComment.trim(),
      tripType
    });
    setReviewComment('');
    setShowReviewModal(false);
  };

  return (
    <>
      {/* Reviews & Ratings Section */}
      <section className="space-y-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Traveler Reviews
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-amber-400 text-sm">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs text-neutral-400 font-mono">
                Based on {destination.reviewsCount} authenticated traveler experiences
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer transform hover:scale-105"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Leave a Review</span>
          </button>
        </div>

        <div className="space-y-4">
          {destinationReviews.length > 0 ? (
            destinationReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-950/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 rounded-3xl p-6 space-y-3 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-300 text-slate-950 font-black text-xs flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">{rev.author}</h4>
                      <span className="text-[10px] text-cyan-300/80 font-mono">{rev.tripType} Traveler · {rev.date}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-200 italic leading-relaxed font-light">
                  "{rev.comment}"
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-8 bg-slate-950/80 rounded-3xl border border-white/10 text-xs text-neutral-400">
              Be the first traveler to review {destination.name}!
            </div>
          )}
        </div>
      </section>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-950 border border-cyan-500/40 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-black text-white font-display">
                Review {destination.name}
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-neutral-300 font-bold">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-neutral-300 font-bold">Rating</label>
                <div className="flex gap-2 text-2xl cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setReviewRating(star)}
                      className={`transition-transform hover:scale-125 ${star <= reviewRating ? 'text-amber-400' : 'text-neutral-700'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-300 font-bold">Traveler Type</label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full bg-slate-900 border border-cyan-500/20 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="Couple">Couple</option>
                  <option value="Family">Family</option>
                  <option value="Solo">Solo Traveler</option>
                  <option value="Friends">Friends</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-300 font-bold">Your Experience</label>
                <textarea
                  rows={4}
                  placeholder="Tell other travelers about your favorite highlights, stays, and food..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  required
                  className="w-full bg-slate-900 border border-cyan-500/20 rounded-xl p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 rounded-full text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 font-black tracking-wide transition-all shadow-md shadow-cyan-500/20"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
