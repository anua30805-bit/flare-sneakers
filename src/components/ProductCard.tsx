import React, { useState } from 'react';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product, ColorVariant } from '../types/product';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product, selectedColor: ColorVariant) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { navigateToProduct } = useRouter();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Selected colorway for this card
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colors.find((c) => c.id === product.defaultColorId) || product.colors[0]
  );

  // Quick size picker popover state
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (size: number, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedColor, size, 1);
    setShowSizePicker(false);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100/90 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div
        onClick={() => navigateToProduct(product.id)}
        className="relative aspect-square w-full bg-gradient-to-b from-[#F7F7F7] to-[#EFEFEF] overflow-hidden cursor-pointer flex items-center justify-center p-4 sm:p-6"
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.isBestSeller && (
            <span className="bg-forest text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-sm">
              Best Seller
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-brand-black text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-sm">
              New Arrival
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isFavorited
              ? 'bg-rose-50 text-rose-500 shadow-sm scale-110'
              : 'bg-white/80 backdrop-blur-sm text-gray-500 hover:text-rose-500 hover:bg-white shadow-sm'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Product Photograph */}
        <img
          src={selectedColor.image}
          alt={`${product.name} - ${selectedColor.name}`}
          className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick View Button on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.(product, selectedColor);
            }}
            className="w-full bg-white/95 backdrop-blur-sm hover:bg-forest hover:text-white text-brand-black text-xs font-bold py-2.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 border border-gray-200"
          >
            <Eye className="w-4 h-4" />
            <span>QUICK VIEW</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Collection Tag */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-forest uppercase tracking-wider mb-1.5">
            <span>{product.collection}</span>
            <span className="text-gray-400 font-normal">MEN</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => navigateToProduct(product.id)}
            className="font-bold text-base sm:text-lg text-brand-black hover:text-forest transition-colors cursor-pointer line-clamp-1 leading-snug tracking-tight"
          >
            {product.name}
          </h3>

          {/* Colorway Swatches (CRITICAL for Model 01 and color switching) */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {product.colors.map((color) => {
                const isSelected = selectedColor.id === color.id;
                return (
                  <button
                    key={color.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(color);
                    }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                    className={`w-5 h-5 rounded-full transition-all relative flex items-center justify-center ${
                      isSelected
                        ? 'ring-2 ring-forest ring-offset-2 scale-110'
                        : 'hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: color.hex,
                      border: color.hex.toLowerCase() === '#ffffff' ? '1px solid #D1D5DB' : 'none'
                    }}
                  >
                    {color.secondaryHex && (
                      <span
                        className="w-2 h-2 rounded-full absolute bottom-0 right-0 shadow-xs"
                        style={{ backgroundColor: color.secondaryHex }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <span className="text-[11px] text-gray-500 font-medium">
              {product.colors.length} {product.colors.length === 1 ? 'colour' : 'colours'}
            </span>
          </div>

          {/* Ratings */}
          <div className="mt-3 flex items-center gap-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-brand-black">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Price & Action Area */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2 relative">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-extrabold text-brand-black tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs sm:text-sm text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <p className="text-[10px] text-emerald-700 font-semibold tracking-wide">
              Free Express Delivery
            </p>
          </div>

          {/* Add to Cart button / Size Trigger */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSizePicker(!showSizePicker);
              }}
              className={`p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-forest hover:bg-forest-light text-white shadow-sm'
              }`}
              title="Add to Cart"
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">ADDED</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span className="hidden sm:inline">ADD</span>
                </>
              )}
            </button>

            {/* Quick Size Selection Popover */}
            {showSizePicker && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 z-30 animate-fadeIn"
              >
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 text-[11px] font-bold text-gray-700">
                  <span>SELECT UK SIZE</span>
                  <button
                    onClick={() => setShowSizePicker(false)}
                    className="text-gray-400 hover:text-brand-black text-xs"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={(e) => handleQuickAdd(size, e)}
                      className="py-1.5 text-xs font-bold rounded-lg border border-gray-200 hover:border-forest hover:bg-forest hover:text-white transition-colors"
                    >
                      UK {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
