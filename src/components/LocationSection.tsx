import React from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../config/businessInfo';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Building } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const visitWhatsAppMsg = createWhatsAppUrl(
    'Hello Computer Galaxy, I am planning to visit your store at Iskon Plaza, Sirohi, and would like to check current store availability.'
  );

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Storefront & Direction
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            VISIT COMPUTER GALAXY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Conveniently situated in Main Bazar, Sirohi, Rajasthan. Drop in or connect before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                <Building className="w-4 h-4" />
                <span>Physical Store Location</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                {BUSINESS_INFO.name}
              </h3>

              {/* Address Details */}
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80">
                <p className="font-semibold text-slate-900 dark:text-white">{BUSINESS_INFO.address.floorAndShop}</p>
                <p>{BUSINESS_INFO.address.bazar}, {BUSINESS_INFO.address.landmark}</p>
                <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}</p>
              </div>

              {/* Phone Line */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 mb-6">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Direct Telephone</p>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Opening Hours Notice */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 mb-8 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-300 mb-0.5">Operating Hours</p>
                  <p>{BUSINESS_INFO.openingHoursNotice}</p>
                </div>
              </div>
            </div>

            {/* Three Contact / Direction Buttons */}
            <div className="space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>CALL THE STORE</span>
                </a>

                <a
                  href={visitWhatsAppMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 rounded-xl border border-emerald-200 dark:border-emerald-800/60 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Embed Column (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl relative min-h-[360px] sm:min-h-[440px] flex flex-col">
            <iframe
              title="Computer Galaxy Store Location in Sirohi"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Pin Banner */}
            <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Iskon Plaza, Near Weblink Computer, Sirohi (307001)</span>
              </span>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold shrink-0"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
