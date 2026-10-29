import React from 'react';
import { createWhatsAppUrl } from '../config/businessInfo';
import { Building2, MessageSquare, Layers, Truck, PhoneCall, CheckCircle } from 'lucide-react';

export const BulkOrdersSection: React.FC = () => {
  const wholesaleInquiryMsg = createWhatsAppUrl(
    'Hello Computer Galaxy, I would like to inquire about wholesale computer hardware availability, bulk pricing, and terms for our business/organization.'
  );

  const teamContactMsg = createWhatsAppUrl(
    'Hello Computer Galaxy, I would like to speak with your business sales team regarding computer hardware requirements.'
  );

  return (
    <section id="wholesale" className="py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle industrial architectural backdrop lines */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl relative z-10">
            {/* Header pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B & Institutional Supply</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              LOOKING FOR BULK COMPUTER HARDWARE?
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Computer Galaxy offers wholesale and retail computer hardware solutions. Contact us to
              discuss your product requirements and bulk order inquiries.
            </p>

            {/* Wholesale Strengths list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bulk Component Orders</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Office Lab & School Setups</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>All-India Delivery Available</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={wholesaleInquiryMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-150"
              >
                <MessageSquare className="w-4 h-4" />
                <span>INQUIRE ABOUT WHOLESALE</span>
              </a>

              <a
                href={teamContactMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-xl transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>CONTACT OUR TEAM</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
