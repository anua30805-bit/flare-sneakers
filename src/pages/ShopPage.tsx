import React, { useState, useMemo } from 'react';
import { PRODUCTS, PRICE_RANGES } from '../data/products';
import { Product, ColorVariant, FilterState } from '../types/product';
import { ProductGrid } from '../components/ProductGrid';
import { Filters } from '../components/Filters';
import { QuickViewModal } from '../components/QuickViewModal';
import { Search, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'All Sneakers',
    priceRange: 'All Prices',
    size: null,
    color: null,
    sortBy: 'featured',
    searchQuery: ''
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewColor, setQuickViewColor] = useState<ColorVariant | undefined>(undefined);

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'All Sneakers',
      priceRange: 'All Prices',
      size: null,
      color: null,
      sortBy: 'featured',
      searchQuery: ''
    });
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category Filter
      if (filters.category !== 'All Sneakers' && product.collection !== filters.category) {
        return false;
      }

      // 2. Price Range Filter
      if (filters.priceRange !== 'All Prices') {
        const range = PRICE_RANGES.find((r) => r.label === filters.priceRange);
        if (range && (product.price < range.min || product.price > range.max)) {
          return false;
        }
      }

      // 3. Size Filter
      if (filters.size !== null && !product.availableSizes.includes(filters.size)) {
        return false;
      }

      // 4. Colour Filter
      if (filters.color !== null) {
        const hasColor = product.colors.some(
          (c) => c.name.toLowerCase().includes(filters.color!.toLowerCase())
        );
        if (!hasColor) return false;
      }

      // 5. Search Query
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCategory = product.collection.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchColor = product.colors.some((c) => c.name.toLowerCase().includes(q));
        if (!matchName && !matchCategory && !matchDesc && !matchColor) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [filters]);

  return (
    <div className="py-8 sm:py-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-forest uppercase">
              MEN'S EXCLUSIVE CATALOGUE
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight uppercase">
              THE MEN'S SNEAKER COLLECTION.
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl">
              Discover your style. Find your perfect fit. Handcrafted premium silhouettes built for masculine comfort, grip, and everyday streetwear confidence.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200/80 self-start md:self-auto">
            <span>Showing:</span>
            <strong className="text-forest font-bold">{filteredProducts.length} Sneakers</strong>
            <span>(Indian Sizes UK 6-11)</span>
          </div>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange({ searchQuery: e.target.value })}
              placeholder="Search by shoe model, colour, or feature..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-8 py-2.5 text-xs text-brand-black placeholder-gray-400 focus:outline-none focus:bg-white focus:border-forest"
            />
            {filters.searchQuery && (
              <button
                onClick={() => handleFilterChange({ searchQuery: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-black text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Action: Mobile Filter Trigger & Sort Dropdown */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-gray-100 hover:bg-forest hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold text-brand-black transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-400 hidden sm:block" />
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange({ sortBy: e.target.value as any })}
                className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-brand-black focus:outline-none focus:border-forest"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Releases</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Left Sidebar Filters */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28">
            <Filters
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleResetFilters}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Right Products Column */}
          <div className="lg:col-span-9 space-y-6">
            <ProductGrid
              products={filteredProducts}
              onQuickView={(p, col) => {
                setQuickViewProduct(p);
                setQuickViewColor(col);
              }}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-brand-black">
                  Filters
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-gray-400 hover:text-brand-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <Filters
                  filters={filters}
                  onChange={handleFilterChange}
                  onReset={handleResetFilters}
                  totalResults={filteredProducts.length}
                />
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-forest text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        initialColor={quickViewColor}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
