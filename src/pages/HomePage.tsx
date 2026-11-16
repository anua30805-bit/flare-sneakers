import React, { useState, useRef, useEffect } from 'react';
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
  RotateCcw,
  Play,
  Pause
} from 'lucide-react';

// Atmosphere Smoke Variety Modes
export type SmokeMode = 'dryIce' | 'golden' | 'cyber' | 'stealth';

interface SmokeCanvasProps {
  mode: SmokeMode;
}

// Cinematic Volumetric Atmospheric Smoke Simulation Canvas
const SmokeCanvas: React.FC<SmokeCanvasProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 420);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 680);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Style presets for the variety modes
    const MODE_CONFIGS = {
      dryIce: {
        left: [250, 180, 80],     // Amber softbox
        right: [70, 215, 255],    // Cyan softbox
        center: [242, 246, 255],  // Heavy liquid nitrogen white fog
        cascade: true,
        count: 85,
        speedMultiplier: 0.95
      },
      golden: {
        left: [255, 210, 90],     // Deep 24K gold
        right: [245, 150, 40],    // Warm bronze amber
        center: [255, 225, 145],  // Shimmering champagne
        cascade: false,
        count: 70,
        speedMultiplier: 0.8
      },
      cyber: {
        left: [244, 63, 94],      // Neon magenta / pink
        right: [6, 182, 212],     // Electric cyan
        center: [168, 85, 247],   // Ultraviolet purple
        cascade: false,
        count: 75,
        speedMultiplier: 1.15
      },
      stealth: {
        left: [52, 211, 153],     // Emerald green
        right: [16, 185, 129],    // Deep forest
        center: [220, 235, 230],  // Frosted botanical mist
        cascade: true,
        count: 65,
        speedMultiplier: 0.85
      }
    };

    const cfg = MODE_CONFIGS[mode];

    // Procedural organic smoke puff sprite generator with multi-octave turbulence
    const generateSmokeSprite = (tintR: number, tintG: number, tintB: number, turbulenceSeed: number) => {
      const size = 190;
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const cx = c.getContext('2d');
      if (!cx) return c;
      const center = size / 2;

      // Soft volumetric base cloud
      const grad = cx.createRadialGradient(center, center, 0, center, center, center);
      grad.addColorStop(0, `rgba(${tintR}, ${tintG}, ${tintB}, 0.95)`);
      grad.addColorStop(0.35, `rgba(${tintR}, ${tintG}, ${tintB}, 0.65)`);
      grad.addColorStop(0.68, `rgba(${tintR}, ${tintG}, ${tintB}, 0.18)`);
      grad.addColorStop(1, `rgba(${tintR}, ${tintG}, ${tintB}, 0)`);

      cx.fillStyle = grad;
      cx.beginPath();
      cx.arc(center, center, center, 0, Math.PI * 2);
      cx.fill();

      // Add turbulent volumetric lobes & cloud eddies
      for (let i = 0; i < 7; i++) {
        const ang = (i / 7) * Math.PI * 2 + turbulenceSeed;
        const rad = center * (0.22 + (i % 3) * 0.14);
        const bx = center + Math.cos(ang) * rad;
        const by = center + Math.sin(ang) * rad;
        const bSize = center * 0.48;

        const subGrad = cx.createRadialGradient(bx, by, 0, bx, by, bSize);
        subGrad.addColorStop(0, `rgba(${tintR}, ${tintG}, ${tintB}, 0.55)`);
        subGrad.addColorStop(0.65, `rgba(${tintR}, ${tintG}, ${tintB}, 0.14)`);
        subGrad.addColorStop(1, `rgba(${tintR}, ${tintG}, ${tintB}, 0)`);

        cx.fillStyle = subGrad;
        cx.beginPath();
        cx.arc(bx, by, bSize, 0, Math.PI * 2);
        cx.fill();
      }
      return c;
    };

    // Cached high-res multi-lighting sprite banks for current mode
    const sprites = {
      left: [
        generateSmokeSprite(cfg.left[0], cfg.left[1], cfg.left[2], 0.4),
        generateSmokeSprite(cfg.left[0], cfg.left[1], cfg.left[2], 1.8)
      ],
      right: [
        generateSmokeSprite(cfg.right[0], cfg.right[1], cfg.right[2], 0.9),
        generateSmokeSprite(cfg.right[0], cfg.right[1], cfg.right[2], 2.3)
      ],
      center: [
        generateSmokeSprite(cfg.center[0], cfg.center[1], cfg.center[2], 0.2),
        generateSmokeSprite(cfg.center[0], cfg.center[1], cfg.center[2], 1.5),
        generateSmokeSprite(cfg.center[0], cfg.center[1], cfg.center[2], 2.8)
      ]
    };

    class SmokePuff {
      x: number = 0;
      y: number = 0;
      scale: number = 0;
      growth: number = 0;
      rotation: number = 0;
      rotSpeed: number = 0;
      vx: number = 0;
      vy: number = 0;
      life: number = 0;
      lifeSpeed: number = 0;
      maxOpacity: number = 0;
      opacity: number = 0;
      sprite: HTMLCanvasElement = sprites.center[0];

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = width * (0.05 + Math.random() * 0.90);

        if (cfg.cascade) {
          // Heavy dry-ice cascade: dense pooling at the sneaker turntable and tumbling down over pedestal edges
          this.y = initial
            ? height * (0.48 + Math.random() * 0.48)
            : height * (0.66 + Math.random() * 0.22);

          const relX = this.x / (width || 1);
          const driftDir = relX < 0.5 ? -1 : 1;
          this.vx = driftDir * (0.35 + Math.random() * 0.8) + (Math.random() - 0.5) * 0.3;
          // Downward / horizontal tumbling creep
          this.vy = (Math.random() - 0.22) * 0.55;
        } else {
          // Upward mystical haze
          this.y = initial
            ? height * (0.35 + Math.random() * 0.55)
            : height * (0.68 + Math.random() * 0.22);

          const relX = this.x / (width || 1);
          const driftDir = relX < 0.5 ? -1 : 1;
          this.vx = driftDir * (0.2 + Math.random() * 0.6) + (Math.random() - 0.5) * 0.4;
          this.vy = -(0.35 + Math.random() * 0.75);
        }

        this.scale = 0.55 + Math.random() * 0.85;
        this.growth = 0.0035 + Math.random() * 0.0055;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.015;

        this.life = initial ? Math.random() * 0.85 : 0;
        this.lifeSpeed = (0.0018 + Math.random() * 0.0022) * cfg.speedMultiplier;
        this.maxOpacity = 0.24 + Math.random() * 0.28;
        this.opacity = 0;

        // Choose illuminated sprite based on horizontal studio light zones
        const relX = this.x / (width || 1);
        if (relX < 0.35) {
          const arr = sprites.left;
          this.sprite = arr[Math.floor(Math.random() * arr.length)];
        } else if (relX > 0.65) {
          const arr = sprites.right;
          this.sprite = arr[Math.floor(Math.random() * arr.length)];
        } else {
          const arr = sprites.center;
          this.sprite = arr[Math.floor(Math.random() * arr.length)];
        }
      }

      update() {
        this.life += this.lifeSpeed;
        if (this.life >= 1.0) {
          this.reset();
          return;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotSpeed;
        this.scale += this.growth;

        // Natural cinematic smoke swell curve
        if (this.life < 0.25) {
          this.opacity = Math.sin((this.life / 0.25) * (Math.PI / 2)) * this.maxOpacity;
        } else {
          this.opacity = Math.cos(((this.life - 0.25) / 0.75) * (Math.PI / 2)) * this.maxOpacity;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.opacity <= 0.005) return;
        c.save();
        c.globalAlpha = this.opacity;
        c.globalCompositeOperation = 'screen';
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        const w = 190 * this.scale;
        const h = 190 * this.scale;
        c.drawImage(this.sprite, -w / 2, -h / 2, w, h);
        c.restore();
      }
    }

    const puffs: SmokePuff[] = [];
    for (let i = 0; i < cfg.count; i++) {
      puffs.push(new SmokePuff());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < puffs.length; i++) {
        puffs[i].update();
        puffs[i].draw(ctx);
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 w-full h-full mix-blend-screen"
    />
  );
};

export const HomePage: React.FC = () => {
  const { navigate, navigateToProduct } = useRouter();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewColor, setQuickViewColor] = useState<ColorVariant | undefined>(undefined);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [smokeMode, setSmokeMode] = useState<SmokeMode>('dryIce');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Guarantee programmatic muted autoplay across all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime < 1.0 && isTransitioning) {
      setIsTransitioning(false);
    }

    // Smoothly fade before the 14.5s outro screen and loop cleanly back to 0s (no sound)
    if (video.currentTime >= 14.2 && !isTransitioning) {
      setIsTransitioning(true);
    }
    if (video.currentTime >= 14.6) {
      video.currentTime = 0;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      setTimeout(() => setIsTransitioning(false), 150);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    setIsTransitioning(false);
    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
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
      {/* 1. CINEMATIC HERO SECTION (Volumetric Studio 360° Sneaker Showcase) */}
      <section className="relative bg-gradient-to-b from-[#040B09] via-[#002820] to-forest overflow-hidden text-white pt-6 sm:pt-10 pb-14 sm:pb-20">
        {/* Dynamic Studio Lighting matching selected Atmosphere mode */}
        <div
          className={`absolute top-1/4 -left-20 w-[460px] h-[460px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 ${
            smokeMode === 'dryIce'
              ? 'bg-amber-500/25'
              : smokeMode === 'golden'
              ? 'bg-amber-400/35'
              : smokeMode === 'cyber'
              ? 'bg-pink-500/30'
              : 'bg-emerald-500/25'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-20 w-[460px] h-[460px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 ${
            smokeMode === 'dryIce'
              ? 'bg-cyan-400/25'
              : smokeMode === 'golden'
              ? 'bg-yellow-400/25'
              : smokeMode === 'cyber'
              ? 'bg-cyan-400/35'
              : 'bg-teal-400/25'
          }`}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-emerald-400/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-forest-dark/80 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Cinematic High-Top Sneaker Showcase Stage with Volumetric Smoke Atmosphere */}
            <div className="relative w-full max-w-[390px] sm:max-w-[420px] flex items-center justify-center">
              {/* Twin Physical Studio Softboxes */}
              <div
                className={`hidden sm:block absolute top-[10%] -left-14 w-20 h-28 rounded-2xl p-1 shadow-[0_0_60px_rgba(245,158,11,0.9),0_0_120px_rgba(245,158,11,0.5)] rotate-[22deg] z-20 pointer-events-none transition-all duration-500 ${
                  smokeMode === 'dryIce'
                    ? 'bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-amber-500/70'
                    : smokeMode === 'golden'
                    ? 'bg-gradient-to-br from-yellow-200 via-amber-400 to-amber-600 shadow-amber-400/80'
                    : smokeMode === 'cyber'
                    ? 'bg-gradient-to-br from-pink-300 via-pink-500 to-rose-700 shadow-pink-500/80'
                    : 'bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 shadow-emerald-500/70'
                }`}
              >
                <div className="w-full h-full rounded-xl bg-white/90 opacity-95 shadow-inner" />
              </div>

              <div
                className={`hidden sm:block absolute top-[10%] -right-14 w-20 h-28 rounded-2xl p-1 rotate-[-22deg] z-20 pointer-events-none transition-all duration-500 ${
                  smokeMode === 'dryIce'
                    ? 'bg-gradient-to-bl from-cyan-200 via-cyan-400 to-cyan-600 shadow-[0_0_60px_rgba(6,182,212,0.9)]'
                    : smokeMode === 'golden'
                    ? 'bg-gradient-to-bl from-amber-100 via-yellow-400 to-amber-600 shadow-[0_0_60px_rgba(245,158,11,0.8)]'
                    : smokeMode === 'cyber'
                    ? 'bg-gradient-to-bl from-cyan-200 via-cyan-400 to-blue-600 shadow-[0_0_60px_rgba(6,182,212,0.9)]'
                    : 'bg-gradient-to-bl from-teal-200 via-teal-400 to-teal-700 shadow-[0_0_60px_rgba(20,184,166,0.8)]'
                }`}
              >
                <div className="w-full h-full rounded-xl bg-white/90 opacity-95 shadow-inner" />
              </div>

              {/* Atmospheric Background Smoke Halos */}
              <div className="absolute -inset-10 bg-radial from-white/15 via-cyan-400/10 to-transparent blur-3xl pointer-events-none animate-pulse-subtle" />
              <div className="absolute -bottom-8 inset-x-2 h-36 bg-gradient-to-t from-emerald-500/20 via-cyan-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Studio Pedestal Base Structure */}
              <div className="absolute -bottom-8 inset-x-6 h-12 bg-gradient-to-b from-[#1c1c1c] via-[#0d0d0d] to-black rounded-b-3xl border-x border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-5 pointer-events-none flex items-center justify-center">
                <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Video Stage Container */}
              <div
                onClick={togglePlay}
                className="relative z-10 w-full aspect-[390/644] rounded-3xl overflow-hidden cursor-pointer shadow-[0_30px_90px_rgba(0,0,0,0.95)] border border-white/10 bg-black group select-none"
              >
                <video
                  ref={videoRef}
                  src="/videos/hero-sneaker-showcase.mp4"
                  poster="/images/hero-sneaker.jpg"
                  autoPlay
                  muted
                  playsInline
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onTimeUpdate={handleVideoTimeUpdate}
                  className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Cinematic Multi-Lighting Volumetric Smoke Simulation Engine */}
                <SmokeCanvas mode={smokeMode} />

                {/* Seamless Edge Vignettes */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent z-15" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] rounded-3xl pointer-events-none z-15" />

                {/* Big Center Play Icon (if paused or browser blocked autoplay) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer z-20 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-forest/90 hover:bg-forest text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 border border-white/20">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Interactive Controls (Replay + Sound Venda - Permanently Muted) */}
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

            {/* Atmosphere Variety Controller */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 z-20">
              <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mr-1 hidden sm:inline">
                Smoke Style:
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSmokeMode('dryIce');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-all flex items-center gap-1.5 ${
                  smokeMode === 'dryIce'
                    ? 'bg-white text-forest shadow-lg scale-105 ring-2 ring-cyan-400/50'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                }`}
              >
                <span>❄️ Heavy Dry-Ice</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSmokeMode('golden');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-all flex items-center gap-1.5 ${
                  smokeMode === 'golden'
                    ? 'bg-amber-400 text-black shadow-lg scale-105 ring-2 ring-amber-300/50'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                }`}
              >
                <span>✨ Golden Luxe</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSmokeMode('cyber');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-all flex items-center gap-1.5 ${
                  smokeMode === 'cyber'
                    ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg scale-105 ring-2 ring-pink-400/50'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                }`}
              >
                <span>⚡ Cyber Neon</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSmokeMode('stealth');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider transition-all flex items-center gap-1.5 ${
                  smokeMode === 'stealth'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105 ring-2 ring-emerald-300/50'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                }`}
              >
                <span>🌿 Forest Mist</span>
              </button>
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
