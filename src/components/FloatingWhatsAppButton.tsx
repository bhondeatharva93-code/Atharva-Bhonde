import React, { useState } from 'react';
import { createWhatsAppUrl } from '../config/businessInfo';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = createWhatsAppUrl(
    'Hello Computer Galaxy, I would like to inquire about computer hardware, components, and pricing.'
  );

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip on hover */}
      {showTooltip && (
        <div
          role="tooltip"
          className="hidden sm:block px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-semibold text-white border border-slate-700 shadow-xl shadow-black/40 whitespace-nowrap animate-fadeIn"
        >
          Chat with Computer Galaxy
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={defaultMsg}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/40 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Contact Computer Galaxy on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
      </a>
    </aside>
  );
};
