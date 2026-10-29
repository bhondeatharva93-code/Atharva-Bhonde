import React, { useState } from 'react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Logo } from './Logo';
import { Phone, MapPin, Youtube, Instagram, Facebook, MessageSquare, X } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
  onCategoryClick: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onCategoryClick }) => {
  const currentYear = new Date().getFullYear();
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Gaming PCs', href: '#gaming-pcs' },
    { label: 'Editing PCs', href: '#editing-pcs' },
    { label: 'Custom PC Build', href: '#custom-pc-build' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const categoryLinks = [
    { label: 'Processors', id: 'processors' },
    { label: 'Motherboards', id: 'motherboards' },
    { label: 'Graphics Cards', id: 'graphics-cards' },
    { label: 'RAM and SSDs', id: 'ssds-storage' },
    { label: 'Monitors', id: 'monitors' },
    { label: 'Laptops', id: 'laptops' },
    { label: 'Printers', id: 'printers' },
    { label: 'Accessories', id: 'keyboards-mice' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showSubtitle />
            <p className="text-sm text-slate-300 dark:text-slate-400 leading-relaxed max-w-sm mt-3">
              Your trusted computer hardware partner in Sirohi, Rajasthan. Wholesaler and retailer of computer components, prebuilt PCs, laptops, and peripherals.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.socialMedia.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:border-red-500/50 hover:text-red-400 flex items-center justify-center transition-colors"
                title="YouTube: weblinkitgyan"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.socialMedia.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:border-pink-500/50 hover:text-pink-400 flex items-center justify-center transition-colors"
                title="Instagram: weblinkittech"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.socialMedia.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-400 flex items-center justify-center transition-colors"
                title="Facebook: weblinkittech"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 flex items-center justify-center transition-colors"
                title="WhatsApp Inquiries"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Product Categories
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {categoryLinks.map((cat) => (
                <li key={cat.label}>
                  <button
                    type="button"
                    onClick={() => onCategoryClick(cat.id)}
                    className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Store Contact
            </h4>
            <div className="space-y-2 leading-relaxed text-slate-300">
              <p className="font-semibold text-white">{BUSINESS_INFO.name}</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.floorAndShop}, {BUSINESS_INFO.address.bazar}, near WEBLINK COMPUTER, Sirohi, Rajasthan 307001.
                </span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-blue-400 transition-colors font-semibold text-white tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {currentYear} COMPUTER GALAXY. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPolicyModal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setPolicyModal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      {/* Policy Placeholder Modal */}
      {policyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setPolicyModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer"
              aria-label="Close policy"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 max-h-60 overflow-y-auto pr-2">
              <p>
                This is an editable placeholder for Computer Galaxy's official {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}.
              </p>
              <p>
                Computer Galaxy values your privacy. Inquiries initiated through WhatsApp or telephone are treated in accordance with customary retail privacy practices in India.
              </p>
              <p>
                For official legal terms or billing specifics, please consult with the store management directly at Iskon Plaza, Sirohi, Rajasthan.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setPolicyModal(null)}
                className="py-1.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
