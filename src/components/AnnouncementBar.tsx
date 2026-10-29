import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Phone, MapPin } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const announcements = BUSINESS_INFO.announcements;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Location & Contact on desktop */}
        <div className="hidden lg:flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Sirohi, Rajasthan</span>
          </span>
          <span className="text-slate-600">|</span>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Center Rotating Message with subtle fade */}
        <div className="flex-1 text-center font-medium text-slate-200 overflow-hidden h-4.5 flex items-center justify-center">
          <span
            key={currentIndex}
            className="inline-block transition-opacity duration-700 ease-in-out animate-fade"
          >
            {announcements[currentIndex]}
          </span>
        </div>

        {/* Right Wholesale & Retail badge / Quick status */}
        <div className="hidden sm:flex items-center gap-2 text-slate-400 shrink-0">
          <span className="text-slate-300 font-medium">Wholesale & Retail</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">All-India Delivery</span>
        </div>
      </div>
    </div>
  );
};
