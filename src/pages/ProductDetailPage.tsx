import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import { Product, ColorVariant } from '../types/product';
import { ProductGallery } from '../components/ProductGallery';
import { ProductCard } from '../components/ProductCard';
import { SizeGuideModal } from '../components/SizeGuideModal';
import {
  Star,
  Heart,
  ShoppingBag,
  Zap,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Ruler,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ThumbsUp,
  Share2
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { productId, navigate } = useRouter();
  const { addToCart, setIsCheckoutOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Find product by id or fallback to first product
  const product: Product =
    PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  // Selected Colorway (defaults to defaultColorId)
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colors.find((c) => c.id === product.defaultColorId) || product.colors[0]
  );

  // Selected UK Size
  const [selectedSize, setSelectedSize] = useState<number>(8);
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'care' | 'shipping' | 'reviews'>('specs');
  const [copiedLink, setCopiedLink] = useState(false);

  // Update color when product changes
  useEffect(() => {
    setSelectedColor(
      product.colors.find((c) => c.id === product.defaultColorId) || product.colors[0]
    );
    window.scrollTo(0, 0);
  }, [product]);

  const isFavorited = isInWishlist(product.id);
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  // Dynamic gallery images: current colorway's gallery
  const galleryImages =
    selectedColor.gallery && selectedColor.gallery.length > 0
      ? selectedColor.gallery
      : [selectedColor.image];

  return (
    <div className="py-8 sm:py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <button onClick={() => navigate('/')} className="hover:text-forest">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-forest">
            Men's Collection
          </button>
          <span>/</span>
          <span className="text-forest font-semibold">{product.collection}</span>
          <span>/</span>
          <span className="text-brand-black font-bold truncate">{product.name}</span>
        </nav>

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT SECTION: Large Product Photography & Multi-Angle Gallery */}
          <div className="lg:col-span-7 sticky top-28">
            <ProductGallery images={galleryImages} productName={product.name} />
          </div>

          {/* RIGHT SECTION: Product Details, Colour Selector, Size Selector & Purchasing */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Collection & Model Code */}
              <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-widest text-forest">
                <span>{product.collection} • MEN</span>
                <span className="text-gray-400 font-mono text-[11px]">{product.modelCode}</span>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-black text-brand-black mt-1.5 tracking-tight uppercase leading-tight">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-gray-500 mt-1 italic font-medium">
                "{product.tagline}"
              </p>

              {/* Ratings and Review Count */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                </div>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className="text-xs text-gray-500 hover:text-forest font-medium underline"
                >
                  Based on {product.reviewCount} verified men's reviews
                </button>
              </div>

              {/* Price Breakdown in Indian Rupees */}
              <div className="mt-5 p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-brand-black tracking-tight">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-base text-gray-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    {discountPercent > 0 && (
                      <span className="bg-emerald-600 text-white text-xs font-extrabold px-2 py-0.5 rounded shadow-xs">
                        SAVE {discountPercent}%
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Inclusive of all taxes. Free express shipping across India.
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    In Stock
                  </span>
                  <p className="text-[10px] text-gray-400 mt-1">{product.stockQuantity} pairs left</p>
                </div>
              </div>
            </div>

            {/* CRITICAL: COLOUR SELECTOR (Especially for Model 01 with 4 colorways) */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-gray-700 uppercase tracking-wider">
                  COLOURWAY: <strong className="text-brand-black font-extrabold">{selectedColor.name}</strong>
                </span>
                <span className="text-gray-400 text-[11px]">
                  {product.colors.length} {product.colors.length === 1 ? 'option' : 'options'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                      className={`relative flex items-center gap-2 p-2 rounded-xl border text-xs font-bold transition-all ${
                        isSelected
                          ? 'border-forest bg-forest-subtle/40 ring-2 ring-forest shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-gray-300 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs text-brand-black">{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SIZE SELECTOR (UK 6 - 11) & SIZE GUIDE */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-gray-700 uppercase tracking-wider">
                  SELECT UK SIZE: <strong className="text-forest font-extrabold">UK {selectedSize}</strong>
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1 text-forest hover:text-forest-light text-xs font-semibold underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Guide (CM)</span>
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {product.availableSizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-xl text-xs font-black transition-all border ${
                        isSelected
                          ? 'border-forest bg-forest text-white shadow-md'
                          : 'border-gray-200 text-brand-black hover:border-forest/50 hover:bg-gray-50'
                      }`}
                    >
                      UK {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* QUANTITY & ACTIONS */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-gray-200 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-extrabold text-sm text-brand-black">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist & Share buttons */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-center ${
                    isFavorited
                      ? 'border-rose-200 bg-rose-50 text-rose-500'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors flex items-center justify-center relative"
                  title="Share Sneaker Link"
                >
                  <Share2 className="w-5 h-5" />
                  {copiedLink && (
                    <span className="absolute -top-8 bg-brand-black text-white text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                      Link Copied!
                    </span>
                  )}
                </button>
              </div>

              {/* Primary Purchase Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                    addedAnimation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-forest hover:bg-forest-light text-white hover:shadow-glow'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO CART!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-4 px-6 rounded-2xl bg-brand-black hover:bg-gray-900 text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>BUY NOW (EXPRESS)</span>
                </button>
              </div>
            </div>

            {/* Quick Guarantees Bar */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-forest shrink-0" />
                <span>Free delivery across India</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-forest shrink-0" />
                <span>7-Day doorstep exchange</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                <span>100% Full-grain leather guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-forest shrink-0" />
                <span>Razorpay / UPI / COD accepted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Accordion / Tabs */}
        <div className="pt-10 border-t border-gray-100">
          <div className="flex items-center gap-2 sm:gap-6 border-b border-gray-200 pb-3 overflow-x-auto scrollbar-none text-xs sm:text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-2 px-1 relative transition-colors ${
                activeTab === 'specs' ? 'text-forest' : 'text-gray-400 hover:text-brand-black'
              }`}
            >
              Specifications & Materials
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('care')}
              className={`py-2 px-1 relative transition-colors ${
                activeTab === 'care' ? 'text-forest' : 'text-gray-400 hover:text-brand-black'
              }`}
            >
              Features & Care Guide
              {activeTab === 'care' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`py-2 px-1 relative transition-colors ${
                activeTab === 'shipping' ? 'text-forest' : 'text-gray-400 hover:text-brand-black'
              }`}
            >
              Shipping & 7-Day Returns
              {activeTab === 'shipping' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-2 px-1 relative transition-colors ${
                activeTab === 'reviews' ? 'text-forest' : 'text-gray-400 hover:text-brand-black'
              }`}
            >
              Customer Reviews ({product.demoReviews.length})
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest rounded-full" />
              )}
            </button>
          </div>

          <div className="py-8">
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                <div className="space-y-4">
                  <h3 className="font-extrabold text-base text-brand-black uppercase tracking-tight">
                    Technical Specifications
                  </h3>
                  <div className="space-y-2.5 divide-y divide-gray-100">
                    <div className="pt-2 flex justify-between">
                      <span className="text-gray-500 font-medium">Upper Material</span>
                      <span className="font-bold text-brand-black text-right">
                        {product.specifications.upperMaterial}
                      </span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-gray-500 font-medium">Sole Material</span>
                      <span className="font-bold text-brand-black text-right">
                        {product.specifications.soleMaterial}
                      </span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-gray-500 font-medium">Closure Type</span>
                      <span className="font-bold text-brand-black text-right">
                        {product.specifications.closureType}
                      </span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-gray-500 font-medium">Comfort & Cushioning</span>
                      <span className="font-bold text-brand-black text-right">
                        {product.specifications.cushioning}
                      </span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-gray-500 font-medium">Shoe Weight</span>
                      <span className="font-bold text-brand-black text-right">
                        {product.specifications.weight}
                      </span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-gray-500 font-medium">Country of Origin</span>
                      <span className="font-bold text-brand-black text-right">
                        {product.specifications.countryOfOrigin}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h3 className="font-extrabold text-base text-brand-black uppercase tracking-tight">
                    The Design Story
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {product.story}
                  </p>
                  <div className="p-4 bg-forest/10 rounded-2xl border border-forest/20 text-xs text-forest font-semibold">
                    FLARE SNEAKERS exclusively produces men's footwear, prioritizing anatomical heel cupping and durable rubber tread suitable for daily urban terrain.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                <div className="space-y-3">
                  <h3 className="font-extrabold text-base text-brand-black uppercase tracking-tight">
                    Key Construction Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-600">
                        <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h3 className="font-extrabold text-base text-brand-black uppercase tracking-tight">
                    Care & Maintenance Instructions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.specifications.careInstructions}
                  </p>
                  <ul className="space-y-2 pt-2 text-gray-600 list-disc list-inside">
                    <li>Allow shoes to air dry naturally away from radiators or direct harsh sun.</li>
                    <li>Use wooden shoe trees to maintain original silhouette when not in rotation.</li>
                    <li>Apply a water-repellent protector spray before initial wear in wet seasons.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h3 className="font-extrabold text-base text-brand-black uppercase tracking-tight flex items-center gap-2">
                    <Truck className="w-5 h-5 text-forest" />
                    <span>Shipping Timeline</span>
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• {product.shipping.dispatchTime}</p>
                    <p>• {product.shipping.deliveryEstimate}</p>
                    <p>• {product.shipping.shippingFee}</p>
                    <p>• Real-time courier SMS and WhatsApp tracking provided upon shipment.</p>
                  </div>
                </div>

                <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h3 className="font-extrabold text-base text-brand-black uppercase tracking-tight flex items-center gap-2">
                    <RotateCcw className="w-5 h-5 text-forest" />
                    <span>7-Day Doorstep Exchange Guarantee</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If your pair doesn't fit like a dream, our courier will pick it up directly from your doorstep and drop off your preferred size at zero added charge.
                  </p>
                  <p className="text-gray-600">
                    Pairs must be unworn, in original box packaging with all tags intact.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 font-medium">
                  <strong>Notice:</strong> Customer reviews shown below are demonstration data for visual reference until real customer submissions accumulate.
                </div>

                <div className="space-y-4">
                  {product.demoReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white shadow-xs space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-brand-black">{rev.author}</span>
                          {rev.verified && (
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">{rev.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex text-amber-500">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-brand-black">{rev.title}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {rev.comment}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                        <span>Purchased: {rev.colorPurchased} • UK {rev.sizePurchased}</span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{rev.helpfulCount} found this helpful</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS (Other Men's Sneaker Models) */}
        <div className="pt-12 border-t border-gray-100 space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-forest uppercase">
                COMPLETE YOUR ROTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight uppercase">
                EXPLORE OTHER MEN'S MODELS
              </h2>
            </div>
            <button
              onClick={() => navigate('/shop')}
              className="text-xs font-bold text-forest hover:underline uppercase tracking-wider"
            >
              View All Catalogue
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
};
