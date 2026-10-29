import React from 'react';
import { ProductItem } from '../data/products';
import { createWhatsAppUrl } from '../config/businessInfo';
import { MessageSquare, Eye, Cpu, Layers, HardDrive, Monitor, Laptop, Printer } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onViewDetails: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const whatsAppMsg = createWhatsAppUrl(
    `Hello Computer Galaxy, I would like to ask about the price and availability of "${product.name}" (${product.brand}).`
  );

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'processors':
        return Cpu;
      case 'graphics-cards':
        return Layers;
      case 'ssds-storage':
      case 'ram':
        return HardDrive;
      case 'monitors':
        return Monitor;
      case 'laptops':
        return Laptop;
      case 'printers':
        return Printer;
      default:
        return Cpu;
    }
  };

  const Icon = getCategoryIcon(product.categoryId);

  return (
    <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-200 group">
      <div>
        {/* Visual Component Header Banner */}
        <div className="relative h-44 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center p-4 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Subtle tech lines background */}
          <div
            className="absolute inset-0 opacity-15 dark:opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          {/* Centered Graphic Silhouette */}
          <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shadow-sm">
            <Icon className="w-8 h-8" />
          </div>

          {/* Brand tag top-left */}
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/90 dark:bg-slate-950/80 text-blue-700 dark:text-blue-400 border border-slate-200 dark:border-slate-800 backdrop-blur-sm uppercase tracking-wide shadow-xs">
              {product.brand}
            </span>
          </div>

          {/* Category kicker top-right */}
          <div className="absolute top-3 right-3">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>

          {/* Specifications Pills */}
          <div className="space-y-1 mb-4 text-xs text-slate-600 dark:text-slate-400">
            {product.specs.slice(0, 3).map((spec, i) => (
              <div key={i} className="flex items-center gap-1.5 truncate">
                <span className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                <span className="truncate">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Area with Price Status & Action Buttons */}
      <div className="p-5 pt-0">
        <div className="py-2.5 px-3 mb-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Price:</span>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-tight">
            {product.priceDisplay}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-700/70 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <a
            href={whatsAppMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
