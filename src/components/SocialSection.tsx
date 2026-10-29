import React from 'react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const socialLinks = [
    {
      platform: 'YouTube',
      handle: BUSINESS_INFO.socialMedia.youtubeHandle,
      url: BUSINESS_INFO.socialMedia.youtubeUrl,
      icon: Youtube,
      color: 'text-red-600 dark:text-red-400 group-hover:text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800/40',
      description: 'Tech updates, PC configuration reviews & hardware demos',
      actionLabel: 'Visit YouTube Channel',
    },
    {
      platform: 'Instagram',
      handle: BUSINESS_INFO.socialMedia.instagramFacebookHandle,
      url: BUSINESS_INFO.socialMedia.instagramUrl,
      icon: Instagram,
      color: 'text-pink-600 dark:text-pink-400 group-hover:text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800/40',
      description: 'Recent builds, setup reels & store announcements',
      actionLabel: 'Follow on Instagram',
    },
    {
      platform: 'Facebook',
      handle: BUSINESS_INFO.socialMedia.instagramFacebookHandle,
      url: BUSINESS_INFO.socialMedia.facebookUrl,
      icon: Facebook,
      color: 'text-blue-600 dark:text-blue-400 group-hover:text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40',
      description: 'Community hardware discussions & customer inquiries',
      actionLabel: 'View Facebook Page',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Social Channels
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            CONNECT WITH COMPUTER GALAXY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Follow our digital channels for build videos, hardware previews, and technology tips.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 p-6 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bgColor} ${item.color} transition-colors`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
                    {item.platform}
                  </h3>

                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    @{item.handle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between transition-colors">
                  <span>{item.actionLabel}</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
