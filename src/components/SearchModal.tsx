import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useRouter } from '../context/RouterContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { navigateToProduct } = useRouter();

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(lower);
      const matchCol = p.collection.toLowerCase().includes(lower);
      const matchDesc = p.description.toLowerCase().includes(lower);
      const matchColors = p.colors.some((c) => c.name.toLowerCase().includes(lower));
      return matchName || matchCol || matchDesc || matchColors;
    });
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = ['Retro Court', 'Triple Black', 'High-Top', 'Running', 'White & Green', 'Casual Luxe'];

  const handleSelectProduct = (id: string) => {
    onClose();
    navigateToProduct(id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-4 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <Search className="w-5 h-5 text-forest shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search men's sneakers by model, color, or style..."
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base text-brand-black placeholder-gray-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-brand-black p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 bg-gray-100 hover:bg-forest-subtle hover:text-forest text-xs font-medium text-gray-700 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="text-sm font-semibold text-brand-black">No sneakers match "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for "Retro Court", "Black", or "Running".</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Found {searchResults.length} {searchResults.length === 1 ? 'Sneaker' : 'Sneakers'}
              </p>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product.id)}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gray-100 p-1 shrink-0 flex items-center justify-center">
                    <img
                      src={product.colors[0].image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-forest uppercase tracking-wider">
                      {product.collection}
                    </div>
                    <h4 className="font-bold text-sm text-brand-black truncate group-hover:text-forest transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-black text-brand-black">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-[11px] text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-[11px] text-amber-600 flex items-center gap-0.5 font-semibold">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-forest group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
