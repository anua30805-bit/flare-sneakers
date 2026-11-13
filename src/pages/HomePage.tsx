import React, { useState, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Product, ColorVariant } from '../types/product';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  Zap,
  TrendingUp,
  Star,
  CheckCircle,
  Truck,
  RotateCcw
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, navigateToProduct } = useRouter();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewColor, setQuickViewColor] = useState<ColorVariant | undefined>(undefined);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    // Smoothly fade before the 15.0s outro and loop cleanly back to 0s (no sound)
    if (video.currentTime >= 14.4 && !isTransitioning) {
      setIsTransitioning(true);
    }
    if (video.currentTime >= 14.8) {
      video.currentTime = 0;
      video.play().catch(() => {});
      setTimeout(() => setIsTransitioning(false), 150);
    }
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    setIsTransitioning(false);
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const originalSneaker = PRODUCTS[0];
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival || p.isFeatured);

  const collections = [
    {
      title: 'Original Collection',
      tagline: 'Timeless Court Heritage & Suede T-Toe',
      image: '/images/model1-white-green.jpg',
      category: 'Original Collection',
      price: 'From ₹3,999'
    },
    {
      title: 'High-Top Collection',
      tagline: 'Architectural Streetwear & Nubuck Lug',
      image: '/images/model2-hightop.jpg',
      category: 'High-Top Sneakers',
      price: 'From ₹4,999'
    },
    {
      title: 'Running Collection',
      tagline: 'Nitrogen Rebound Cushioning & Air Mesh',
      image: '/images/model3-runner.jpg',
      category: 'Running Sneakers',
      price: 'From ₹3,499'
    },
    {
      title: 'Casual Collection',
      tagline: 'Italian Seamless Nappa Calfskin',
      image: '/images/model4-casual.jpg',
      category: 'Casual Sneakers',
      price: 'From ₹4,499'
    }
  ];

  const whyChooseFlare = [
    {
      icon: Award,
      title: 'Premium Quality',
      desc: 'Selected full-grain leather uppers, authentic vulcanized gum soles, and precision dual-stitch construction built for longevity.'
    },
    {
      icon: Zap,
      title: 'Everyday Comfort',
      desc: 'OrthoFoam™ anatomical arch support footbeds engineered specifically for masculine foot geometry and all-day wearability.'
    },
    {
      icon: TrendingUp,
      title: 'Modern Design',
      desc: 'International minimalist aesthetics stripped of loud branding. Bold, confident, masculine silhouettes that elevate any outfit.'
    },
    {
      icon: ShieldCheck,
      title: 'Customer Satisfaction',
      desc: 'Free express shipping across India, 7-day doorstep size exchanges, and 24/7 dedicated personal concierge service.'
    }
  ];

  const testimonials = [
    {
      name: 'Aditya Kashyap',
      role: 'Creative Director, Mumbai',
      rating: 5,
      comment:
        'The Retro Court Classic in White & Forest Green is phenomenal. The leather feels softer than sneakers twice the price, and the silhouette looks razor sharp with pleated trousers.',
      product: 'Retro Court Classic (White & Green)'
    },
    {
      name: 'Rohan Varma',
      role: 'Architect, Bengaluru',
      rating: 5,
      comment:
        'Finally a brand that understands men’s sneaker design without slapping huge logos all over it. The Apex High-Top is lightweight despite its rugged look. Truly world class.',
      product: 'Apex Street High-Top'
    },
    {
      name: 'Karan Singhal',
      role: 'Tech Founder, Gurugram',
      rating: 5,
      comment:
        'I run 6km every morning in the Kinetic Runners and wear the Minimalist Luxe to board meetings. Outstanding comfort, zero break-in pain, and swift delivery in 2 days.',
      product: 'Kinetic Aero Runner'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. CINEMATIC HERO SECTION (Animated Studio Showcase on Deep Forest Green) */}
      <section className="relative bg-gradient-to-b from-[#040B09] via-[#002820] to-forest overflow-hidden text-white pt-6 sm:pt-10 pb-14 sm:pb-20">
        {/* Atmospheric Studio Glow Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-forest-dark/80 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Cinematic High-Top Sneaker Showcase Stage */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] flex items-center justify-center">
              {/* Ambient Floor Shadow / Studio Light Halo */}
              <div className="absolute -inset-6 bg-radial from-red-600/10 via-forest-light/10 to-transparent blur-3xl pointer-events-none" />

              {/* Video Stage Container */}
              <div
                onClick={() => navigate('/shop')}
                className="relative z-10 w-full aspect-[390/644] rounded-3xl overflow-hidden cursor-pointer shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-white/10 bg-black group"
              >
                <video
                  ref={videoRef}
                  src="/videos/hero-sneaker-showcase.mp4"
                  autoPlay
                  muted
                  playsInline
                  onTimeUpdate={handleVideoTimeUpdate}
                  className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Seamless Edge Vignettes */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_45px_rgba(0,0,0,0.85)] rounded-3xl" />

                {/* Interactive Replay Control (Sound Venda - Permanently Muted) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={handleReplay}
                    className="p-2.5 rounded-full bg-black/60 hover:bg-forest text-white/90 hover:text-white backdrop-blur-md border border-white/15 transition-all shadow-md"
                    title="Replay Showcase"
                    aria-label="Replay Showcase"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate('/shop')}
                className="w-full sm:w-auto bg-white text-forest hover:bg-emerald-50 font-black text-sm tracking-widest uppercase px-10 py-4 rounded-xl shadow-xl hover:shadow-glow transition-all flex items-center justify-center gap-3 group"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-xl transition-all"
              >
                EXPLORE COLLECTION
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14 border-t border-white/15 text-center text-xs text-gray-300">
              <div>
                <div className="font-extrabold text-white text-sm sm:text-base">100%</div>
                <div className="text-[11px] text-gray-300">Men's Exclusive</div>
              </div>
              <div>
                <div className="font-extrabold text-white text-sm sm:text-base">FREE</div>
                <div className="text-[11px] text-gray-300">Delivery in India</div>
              </div>
              <div>
                <div className="font-extrabold text-white text-sm sm:text-base">7 DAYS</div>
                <div className="text-[11px] text-gray-300">Doorstep Return</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COLLECTIONS: "FIND YOUR PERFECT PAIR" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="text-xs font-extrabold tracking-widest text-forest uppercase">
            MEN'S CURATED SILHOUETTES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight uppercase">
            FIND YOUR PERFECT PAIR.
          </h2>
          <p className="text-sm text-gray-500">
            Four distinctive men's designs engineered for terrace weekends, street swagger, morning runs, and minimalist luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, idx) => (
            <div
              key={col.title}
              onClick={() => navigate('/shop')}
              className="group relative bg-[#F7F7F7] rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="p-6 relative z-10">
                <span className="text-[10px] font-mono text-gray-400 font-bold">0{idx + 1}</span>
                <h3 className="font-extrabold text-lg text-brand-black group-hover:text-forest transition-colors mt-1">
                  {col.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{col.tagline}</p>
                <div className="mt-2 text-xs font-black text-forest">{col.price}</div>
              </div>

              {/* Sneaker Image */}
              <div className="aspect-[4/3] p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 pt-0 flex items-center justify-between text-xs font-bold text-forest group-hover:translate-x-1 transition-transform">
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-forest uppercase">
              TOP PERFORMERS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight uppercase">
              BEST SELLERS
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              The men's sneakers our community can't stop talking about.
            </p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-forest-light uppercase tracking-wider group"
          >
            <span>VIEW ALL ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p, col) => {
                setQuickViewProduct(p);
                setQuickViewColor(col);
              }}
            />
          ))}
        </div>
      </section>

      {/* 4. PROMOTIONAL BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-forest overflow-hidden text-white p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-forest-light/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-widest text-emerald-300 uppercase bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                LIMITED EDITION DROP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-tight">
                UPGRADE YOUR <br />
                <span className="text-emerald-300">SNEAKER GAME.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-200 max-w-lg leading-relaxed">
                Your next favourite pair is waiting. Built specifically for men who appreciate refined aesthetics, supreme all-day arch support, and timeless craftsmanship.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate('/shop')}
                  className="bg-white text-forest hover:bg-emerald-50 font-black text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  EXPLORE NOW
                </button>
                <span className="text-xs text-gray-300">
                  Use coupon <strong>FLARE10</strong> for 10% instant discount
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square bg-forest-dark/50 rounded-2xl p-6 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/model1-white-green.jpg"
                  alt="FLARE Sneaker Promo"
                  className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-forest uppercase">
              FRESH SILHOUETTES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight uppercase">
              NEW ARRIVALS
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Engineered with modern textures, dynamic soles, and pristine details.
            </p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-forest-light uppercase tracking-wider group"
          >
            <span>VIEW ALL RELEASES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p, col) => {
                setQuickViewProduct(p);
                setQuickViewColor(col);
              }}
            />
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE FLARE */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold tracking-widest text-forest uppercase">
              THE FLARE STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight uppercase">
              WHY CHOOSE FLARE SNEAKERS
            </h2>
            <p className="text-sm text-gray-500">
              We focus solely on men's footwear, solving common issues of stiffness, flimsy soles, and excessive branding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFlare.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-premium transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-forest-subtle flex items-center justify-center text-forest">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base text-brand-black">{pillar.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-forest uppercase">
            VERIFIED REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight uppercase">
            TRUSTED BY MEN ACROSS INDIA
          </h2>
          <p className="text-sm text-gray-500">
            Real feedback from sneakerheads, professionals, and daily movers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-brand-black">{t.name}</h4>
                  <p className="text-[11px] text-gray-400">{t.role}</p>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

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
