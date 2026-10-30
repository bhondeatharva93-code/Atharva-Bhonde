import React from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../config/businessInfo';
import { Cpu, ArrowRight, MessageSquare, Wrench, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onBuildPC: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onBuildPC,
}) => {
  const heroWhatsAppMsg = createWhatsAppUrl(
    'Hello Computer Galaxy, I would like to inquire about computer hardware components, laptops, and custom PC configurations.'
  );

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background radial ambient glow - deep navy and violet, restrained */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Store Location & Trust Line */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 px-3 py-1 rounded-md text-blue-700 dark:text-blue-300">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                Iskon Plaza, Sirohi, Rajasthan
              </span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-500">·</span>
              <span className="hidden sm:inline text-slate-600 dark:text-slate-400 normal-case">
                Wholesale & Retail Hardware Specialist
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-5 text-balance">
              POWER YOUR WORLD WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-purple-400">
                COMPUTER GALAXY
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-3">
              Your Trusted Computer Hardware Partner in Sirohi
            </p>

            {/* Additional Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              Explore computer components, laptops, printers, accessories, and custom PC solutions
              for gaming, video editing, business, and everyday computing.
            </p>

            {/* Three Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-10">
              {/* Button 1: EXPLORE PRODUCTS */}
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md hover:shadow-lg shadow-blue-600/20 transition-all duration-150 active:scale-[0.99] whitespace-nowrap cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Button 2: BUILD YOUR CUSTOM PC */}
              <button
                type="button"
                onClick={onBuildPC}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.99] whitespace-nowrap cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>BUILD YOUR CUSTOM PC</span>
              </button>

              {/* Button 3: CONTACT US ON WHATSAPP */}
              <a
                href={heroWhatsAppMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800/60 rounded-lg transition-all duration-150 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>CONTACT US ON WHATSAPP</span>
              </a>
            </div>

            {/* Verified Google Rating & Core Offerings */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold text-sm tabular-nums">★ {BUSINESS_INFO.googleRating} / 5</span>
                <span className="text-slate-300 dark:text-slate-500">·</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Google Business Profile Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Wholesale & Retail Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Intel & AMD Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl group">
              {/* Subtle top glare effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/10 pointer-events-none z-10" />

              <img
                src="/images/hero_galaxy_pc_rig_1793030232721.jpg"
                alt="High-performance custom computer build showcase at Computer Galaxy"
                className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3.4] object-cover transition-transform duration-700 group-hover:scale-102"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Subtle Overlay Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 z-20 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                    Custom PC Showroom
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Built & Assembled to Your Specifications
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onBuildPC}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-blue-600 hover:text-white rounded border border-slate-700 transition-colors"
                >
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
