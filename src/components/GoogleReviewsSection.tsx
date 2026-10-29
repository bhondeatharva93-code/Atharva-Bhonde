import React from 'react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Star, ExternalLink, MapPin } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  const reviewsUrl =
    BUSINESS_INFO.googleReviewsUrl ||
    'https://www.google.com/maps/search/?api=1&query=COMPUTER+GALAXY+Iskon+Plaza+Sirohi+Rajasthan';

  return (
    <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
          Public Reputation
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
          WHAT CUSTOMERS SAY
        </h2>

        {/* Rating Hero Card */}
        <div className="rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl max-w-2xl mx-auto">
          {/* Google Icon & Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-6 shadow-xs">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google Business Profile Rating</span>
          </div>

          {/* Large Rating Digits */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight tabular-nums">
              {BUSINESS_INFO.googleRating}
            </span>
            <div className="text-left">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Out of {BUSINESS_INFO.googleRatingOutOf.toFixed(1)} Stars
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-7 leading-relaxed">
            Authentic customer rating recorded on our verified Google Business Profile in Sirohi, Rajasthan.
          </p>

          {/* Action Button */}
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md hover:shadow-lg shadow-blue-600/20 transition-all duration-150"
          >
            <span>READ OUR GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Location footnote */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Iskon Plaza, Main Bazar, Sirohi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
