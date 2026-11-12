import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useRouter } from '../context/RouterContext';

export const WishlistDrawer: React.FC = () => {
  const { wishlistProducts, isWishlistOpen, setIsWishlistOpen, toggleWishlist } = useWishlist();
  const { navigateToProduct, navigate } = useRouter();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center font-bold text-xs">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h2 className="font-extrabold text-base text-brand-black tracking-tight">SAVED SNEAKERS</h2>
                <p className="text-xs text-gray-500 font-medium">
                  {wishlistProducts.length} {wishlistProducts.length === 1 ? 'pair' : 'pairs'} bookmarked
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-gray-400 hover:text-brand-black hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-gray-100 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-300 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-black">Your wishlist is empty</h3>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                    Save your favourite men's sneakers here to compare, keep track of sizes, or buy later.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigate('/shop');
                  }}
                  className="inline-flex items-center justify-center bg-forest hover:bg-forest-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm uppercase tracking-wider"
                >
                  Browse Men's Sneakers
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigateToProduct(product.id);
                    }}
                    className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 p-1 shrink-0 flex items-center justify-center overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.colors[0].image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-forest uppercase tracking-wider">
                      {product.collection}
                    </span>
                    <h4
                      onClick={() => {
                        setIsWishlistOpen(false);
                        navigateToProduct(product.id);
                      }}
                      className="font-bold text-sm text-brand-black truncate cursor-pointer hover:text-forest"
                    >
                      {product.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-extrabold text-sm text-brand-black">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setIsWishlistOpen(false);
                        navigateToProduct(product.id);
                      }}
                      className="p-2 rounded-lg bg-forest text-white hover:bg-forest-light text-xs font-bold transition-colors flex items-center justify-center"
                      title="View Details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-gray-100 transition-colors flex items-center justify-center"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
