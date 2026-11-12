import React from 'react';
import { Product, ColorVariant } from '../types/product';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product, selectedColor: ColorVariant) => void;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickView,
  onResetFilters
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-12 text-center my-8">
        <div className="w-14 h-14 mx-auto rounded-full bg-forest-subtle flex items-center justify-center text-forest mb-4">
          <SlidersHorizontal className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-brand-black mb-1">No Men's Sneakers Found</h3>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
          We couldn't find any sneakers matching your selected filters. Try broadening your criteria or resetting your filters.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center justify-center bg-forest hover:bg-forest-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
          >
            RESET ALL FILTERS
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};
