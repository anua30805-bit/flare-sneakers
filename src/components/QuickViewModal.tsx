import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Product, ColorVariant } from '../types/product';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';

interface QuickViewModalProps {
  product: Product | null;
  initialColor?: ColorVariant;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  initialColor,
  isOpen,
  onClose
}) => {
  if (!isOpen || !product) return null;

  const { addToCart } = useCart();
  const { navigateToProduct } = useRouter();

  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    initialColor || product.colors.find((c) => c.id === product.defaultColorId) || product.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<number>(product.availableSizes[2] || 8); // default UK 8
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden my-6 border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 text-gray-500 hover:text-brand-black shadow-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="bg-gradient-to-b from-[#F7F7F7] to-[#EEEEEE] p-8 flex items-center justify-center relative aspect-square md:aspect-auto">
            <img
              src={selectedColor.image}
              alt={product.name}
              className="w-full h-full max-h-80 object-contain drop-shadow-xl"
            />
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Right: Info & Controls */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-bold text-forest uppercase tracking-wider">
                {product.collection} • MEN
              </div>
              <h3 className="font-extrabold text-xl text-brand-black mt-1 leading-snug">
                {product.name}
              </h3>

              {/* Price & Rating */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-brand-black">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-brand-black bg-amber-50 px-2 py-1 rounded-md text-amber-900 border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviewCount})</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              {/* Colorway Selection */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                  <span>COLOUR:</span>
                  <span className="text-forest font-semibold">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor.id === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`w-6 h-6 rounded-full transition-all relative flex items-center justify-center ${
                          isSelected
                            ? 'ring-2 ring-forest ring-offset-2 scale-110'
                            : 'opacity-70 hover:opacity-100 hover:scale-105'
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
              </div>

              {/* Size Selection */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                  <span>MEN'S SIZE:</span>
                  <span className="text-forest">UK {selectedSize}</span>
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {product.availableSizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          isSelected
                            ? 'border-forest bg-forest text-white'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-forest hover:bg-forest-light text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG • ₹{product.price.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  navigateToProduct(product.id);
                }}
                className="w-full text-center text-xs font-bold text-forest hover:text-forest-light hover:underline py-1 flex items-center justify-center gap-1"
              >
                <span>View Full Sneaker Specs & Multi-Angle Photos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
