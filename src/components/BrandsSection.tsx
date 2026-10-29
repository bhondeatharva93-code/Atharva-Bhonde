import React from 'react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Info } from 'lucide-react';

interface BrandsSectionProps {
  onSelectBrand?: (brand: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onSelectBrand }) => {
  return (
    <section className="py-16 lg:py-20 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Industry Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            BRANDS WE OFFER
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            We source hardware and accessories from established computer technology manufacturers.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {BUSINESS_INFO.brands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => onSelectBrand?.(brand)}
              className="group p-4 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 shadow-sm hover:shadow transition-all duration-200 flex flex-col items-center justify-center text-center focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              <span className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight transition-colors">
                {brand}
              </span>
              <span className="text-[10px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 mt-1 uppercase tracking-wider">
                Hardware
              </span>
            </button>
          ))}
        </div>

        {/* Brand Availability Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-center">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Brand availability is subject to physical inventory and supply chains. Contact Computer Galaxy to confirm immediate stock for any specific model.
          </span>
        </div>
      </div>
    </section>
  );
};
