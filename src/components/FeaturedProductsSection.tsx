import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SAMPLE_PRODUCTS, ProductItem } from '../data/products';
import { BUSINESS_INFO, createWhatsAppUrl } from '../config/businessInfo';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, X, Filter, RotateCcw, MessageSquare, Info } from 'lucide-react';

interface FeaturedProductsSectionProps {
  initialCategory?: string;
  searchFocusTrigger?: number;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  initialCategory,
  searchFocusTrigger,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (searchFocusTrigger && searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [searchFocusTrigger]);

  const categoryFilterOptions = [
    { id: 'all', label: 'All Products' },
    { id: 'processors', label: 'Processors' },
    { id: 'graphics-cards', label: 'Graphics Cards' },
    { id: 'motherboards', label: 'Motherboards' },
    { id: 'ram', label: 'RAM' },
    { id: 'ssds-storage', label: 'SSDs & Storage' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'printers', label: 'Printers' },
    { id: 'keyboards-mice', label: 'Accessories' },
  ];

  const brandFilterOptions = ['all', ...BUSINESS_INFO.brands];

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((prod) => {
      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = prod.name.toLowerCase().includes(query);
        const matchesBrand = prod.brand.toLowerCase().includes(query);
        const matchesCategory = prod.categoryLabel.toLowerCase().includes(query);
        const matchesSpecs = prod.specs.some((s) => s.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesSpecs) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (prod.categoryId !== selectedCategory) {
          if (
            selectedCategory === 'keyboards-mice' &&
            ['keyboards-mice', 'accessories', 'ups-power'].includes(prod.categoryId)
          ) {
            // allow
          } else {
            return false;
          }
        }
      }

      // Brand filter
      if (selectedBrand !== 'all') {
        if (prod.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
  };

  const isFiltered = searchQuery !== '' || selectedCategory !== 'all' || selectedBrand !== 'all';

  const generalInquiryMsg = createWhatsAppUrl(
    `Hello Computer Galaxy, I am looking for a computer hardware product that I could not find in the showcase: "${searchQuery || 'custom hardware'}"`
  );

  return (
    <section id="products" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Showcase & Component Finder
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            POPULAR COMPUTER COMPONENTS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Search computer hardware, compare specifications, and request immediate pricing from our Sirohi store.
          </p>

          {/* Demo Catalog Disclaimer Note */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 text-left shadow-xs">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              Representative catalog. Contact Computer Galaxy directly for live market prices and immediate availability.
            </span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by component name, brand (e.g. Intel, Asus, RTX), or specs..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white p-0.5 cursor-pointer"
                  aria-label="Clear search text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Dropdown Filter */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Brand:</span>
              </div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                aria-label="Filter by brand"
              >
                <option value="all">All Brands</option>
                {brandFilterOptions
                  .filter((b) => b !== 'all')
                  .map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
              </select>

              {/* Reset Button */}
              {isFiltered && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categoryFilterOptions.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Filter status */}
        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-slate-900 dark:text-white font-bold tabular-nums">{filteredProducts.length}</strong> items
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {selectedBrand !== 'all' && ` by ${selectedBrand}`}
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors cursor-pointer font-medium"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setActiveModalProduct(prod)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <Search className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No matching products found</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              No matching products found for "{searchQuery}". Computer Galaxy sources a vast variety of computer components and brands upon request. Contact us for assistance finding the product you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                Reset Search & Filters
              </button>
              <a
                href={generalInquiryMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask Computer Galaxy on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
