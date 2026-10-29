import React from 'react';
import { ProductItem } from '../data/products';
import { BUSINESS_INFO, createWhatsAppUrl } from '../config/businessInfo';
import { X, MessageSquare, Phone, Check, ShieldAlert } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const inquiryMsg = createWhatsAppUrl(
    `Hello Computer Galaxy, I would like to inquire about the current price and physical store availability of:
Product: ${product.name}
Brand: ${product.brand}
Category: ${product.categoryLabel}`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-7">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand & Category */}
        <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-2">
          <span>{product.brand}</span>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="text-slate-500 dark:text-slate-400">{product.categoryLabel}</span>
        </div>

        {/* Product Title */}
        <h3 id="modal-product-title" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {product.name}
        </h3>

        {/* Price Display */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/90 mb-4 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">Pricing Status:</span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{product.priceDisplay}</span>
        </div>

        {/* Product Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Specifications */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
            Key Specifications
          </h4>
          <ul className="space-y-2">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Demonstration Note */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-800 dark:text-blue-300 mb-6">
          <ShieldAlert className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p>
            Computer Galaxy offers wholesale and retail computer hardware. Inquire directly via
            WhatsApp or call for verified availability in our Sirohi store.
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={inquiryMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
