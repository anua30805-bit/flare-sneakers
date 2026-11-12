import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    discount,
    promoCode,
    applyPromoCode,
    removePromoCode,
    total,
    setIsCheckoutOpen
  } = useCart();

  const { navigate } = useRouter();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const success = applyPromoCode(promoInput);
    if (success) {
      setPromoSuccess(`Coupon '${promoInput.toUpperCase()}' applied successfully!`);
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon. Try FLARE10 for 10% off.');
    }
  };

  const freeDeliveryThreshold = 1999;
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeDeliveryThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-forest text-white flex items-center justify-center font-bold text-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-extrabold text-base text-brand-black tracking-tight">YOUR SNEAKER CART</h2>
                <p className="text-xs text-gray-500 font-medium">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in your bag
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-brand-black hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3.5 bg-forest-subtle/50 border-b border-forest-light/10">
            <div className="flex items-center justify-between text-xs font-semibold text-forest mb-1.5">
              <span>
                {remainingForFreeShipping > 0
                  ? `Add ₹${remainingForFreeShipping.toLocaleString('en-IN')} more for FREE Express Delivery`
                  : 'You have unlocked FREE Express Delivery across India!'}
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-forest h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-gray-100 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-black">Your cart is empty</h3>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                    Explore our men's collection and step into premium handcrafted sneakers today.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="inline-flex items-center justify-center bg-forest hover:bg-forest-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm uppercase tracking-wider"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 p-1 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-sm text-brand-black leading-tight line-clamp-1">
                          {item.productName}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-rose-500 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Variant & Size details */}
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1 font-medium">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-gray-300 inline-block"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </span>
                        <span>•</span>
                        <span className="font-bold text-brand-black">UK {item.selectedSize}</span>
                      </div>
                    </div>

                    {/* Quantity controls and price */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-gray-500 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-brand-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-gray-500 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-extrabold text-sm text-brand-black">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        {item.originalPrice > item.price && (
                          <div className="text-[10px] text-gray-400 line-through">
                            ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50/70 space-y-4">
              {/* Promo Code Form */}
              <div className="space-y-1.5">
                {promoCode ? (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Code <strong>{promoCode}</strong> applied</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-xs text-rose-600 hover:underline font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo code (e.g. FLARE10)"
                      className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs uppercase placeholder-gray-400 focus:outline-none focus:border-forest"
                    />
                    <button
                      type="submit"
                      className="bg-brand-black hover:bg-forest text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors uppercase tracking-wider"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && <p className="text-[11px] text-rose-500">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-600">{promoSuccess}</p>}
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-200/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-brand-black">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount Coupon ({promoCode})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Shipping (All India)</span>
                  <span className="font-semibold text-brand-black">
                    {shipping === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-extrabold text-brand-black pt-2 border-t border-gray-200">
                  <span>Total Amount</span>
                  <span className="text-forest text-lg">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-forest hover:bg-forest-light text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-glow transition-all flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wider uppercase"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                <span>100% Encrypted Indian Payments (Razorpay / UPI / COD)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
