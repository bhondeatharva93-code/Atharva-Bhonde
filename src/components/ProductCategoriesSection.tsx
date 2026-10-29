import React from 'react';
import { PRODUCT_CATEGORIES, CategoryItem } from '../data/categories';
import {
  Cpu,
  CircuitBoard,
  Layers,
  MemoryStick,
  HardDrive,
  Box,
  Zap,
  Fan,
  Monitor,
  Laptop,
  Printer,
  Keyboard,
  Headphones,
  Usb,
  BatteryCharging,
  PcCase,
  ArrowRight,
} from 'lucide-react';

interface ProductCategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
  activeCategoryId?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  CircuitBoard,
  Layers,
  MemoryStick,
  HardDrive,
  Box,
  Zap,
  Fan,
  Monitor,
  Laptop,
  Printer,
  Keyboard,
  Headphones,
  Usb,
  BatteryCharging,
  PcCase,
};

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onSelectCategory,
  activeCategoryId,
}) => {
  return (
    <section id="categories" className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Component & System Catalog
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            EXPLORE OUR PRODUCTS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Everything you need to build, upgrade, and complete your computer setup.
          </p>
        </div>

        {/* 16 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PRODUCT_CATEGORIES.map((cat: CategoryItem) => {
            const IconComponent = iconMap[cat.iconName] || Cpu;
            const isSelected = activeCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                className={`group relative rounded-xl p-5 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-md ring-1 ring-blue-500'
                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:border-blue-500/40 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {cat.subtitle}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {cat.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`w-full inline-flex items-center justify-between py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-800 group-hover:border-blue-600/50'
                  }`}
                  aria-label={`Explore ${cat.name}`}
                >
                  <span>{isSelected ? 'Viewing Products' : 'Explore'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
