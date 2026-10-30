import React from 'react';
import { createWhatsAppUrl } from '../config/businessInfo';
import { Gamepad2, Video, Briefcase, Sliders, ArrowRight } from 'lucide-react';

interface FeaturedPCBuildsProps {
  onOpenCustomPCBuilder: (purpose?: string) => void;
}

export const FeaturedPCBuilds: React.FC<FeaturedPCBuildsProps> = ({
  onOpenCustomPCBuilder,
}) => {
  const builds = [
    {
      id: 'gaming-pcs',
      type: 'GAMING PC',
      icon: Gamepad2,
      tag: 'High Performance',
      description:
        'Computer configurations for gaming, multitasking, and immersive entertainment.',
      features: [
        'Dedicated modern graphics options',
        'High-airflow chassis & liquid cooling support',
        'High-speed DDR4 / DDR5 memory options',
        'Fast NVMe SSD storage',
      ],
      buttonText: 'EXPLORE GAMING PCs',
      image: '/images/pc_gaming_build_1793030233850.jpg',
      whatsAppMsg:
        'Hello Computer Galaxy, I would like to inquire about Gaming PC configurations and pricing options.',
      purposeValue: 'Gaming',
    },
    {
      id: 'editing-pcs',
      type: 'VIDEO EDITING PC',
      icon: Video,
      tag: 'Creative Workstation',
      description:
        'Computer configurations designed for video editing, creative work, rendering, and content production.',
      features: [
        'Multi-core Intel Core & AMD Ryzen processors',
        'Generous RAM capacity for heavy timeline scrubbing',
        'High-speed scratch disk NVMe storage',
        'Reliable workstation power delivery',
      ],
      buttonText: 'EXPLORE EDITING PCs',
      image: '/images/pc_editing_workstation_1793030234230.jpg',
      whatsAppMsg:
        'Hello Computer Galaxy, I would like to inquire about Video Editing & Studio PC configurations.',
      purposeValue: 'Video Editing',
    },
    {
      id: 'office-pcs',
      type: 'OFFICE PC',
      icon: Briefcase,
      tag: 'Commercial & Everyday',
      description:
        'Computer solutions for offices, businesses, education, and everyday productivity.',
      features: [
        'Energy-efficient, whisper-quiet operation',
        'Reliable components for uninterrupted business hours',
        'Compact desktop footings & monitor bundles',
        'Cost-effective wholesale & institutional options',
      ],
      buttonText: 'EXPLORE OFFICE PCs',
      image: '/images/pc_office_desktop_1793030234266.jpg',
      whatsAppMsg:
        'Hello Computer Galaxy, I would like to inquire about Office & Business PC solutions and pricing.',
      purposeValue: 'Office Work',
    },
    {
      id: 'custom-pc-build',
      type: 'CUSTOM PC BUILD',
      icon: Sliders,
      tag: 'Personalized Setup',
      description:
        'Build a computer configuration according to your requirements, budget, and preferred components.',
      features: [
        'Select your preferred processor: Intel or AMD',
        'Choose your exact graphics card & monitor preference',
        'Match with your exact budget bracket',
        'Professional assembly & component testing',
      ],
      buttonText: 'REQUEST A CUSTOM BUILD',
      image: null,
      whatsAppMsg:
        'Hello Computer Galaxy, I would like to build a custom computer according to my specific requirements.',
      purposeValue: 'General Use',
    },
  ];

  return (
    <section id="builds" className="py-16 lg:py-20 bg-slate-100/60 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Engineered Configurations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            FIND YOUR PERFECT PC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Powerful computer solutions for every type of user.
          </p>
        </div>

        {/* 4 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {builds.map((build) => {
            const Icon = build.icon;
            return (
              <div
                key={build.id}
                id={build.id}
                className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-200 group"
              >
                {/* Visual Area */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  {build.image ? (
                    <img
                      src={build.image}
                      alt={build.type}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Custom PC visual representation */
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50/60 to-purple-50/60 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/40 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                        <Sliders className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Full Freedom Specification</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-sm">
                        Tailored part-by-part by Computer Galaxy experts to match your work and budget.
                      </p>
                    </div>
                  )}

                  {/* Header Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/85 text-blue-700 dark:text-blue-400 border border-slate-200 dark:border-slate-700/60 backdrop-blur-sm shadow-sm">
                      {build.tag}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {build.type}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {build.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                      {build.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => onOpenCustomPCBuilder(build.purposeValue)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <span>{build.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={createWhatsAppUrl(build.whatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-lg transition-colors"
                    >
                      <span>Ask via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
