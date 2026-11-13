import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Shield, Truck, RotateCcw, Award, Mail, Phone, MapPin, Instagram, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-16 pb-10 border-t border-gray-800">
      {/* Brand Trust Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest/40 border border-forest-light/40 flex items-center justify-center shrink-0 text-forest-accent">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide uppercase">Handcrafted Men's Quality</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Full-grain leather and precision engineering designed exclusively for men's gait and foot geometry.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest/40 border border-forest-light/40 flex items-center justify-center shrink-0 text-forest-accent">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide uppercase">Free Express Shipping</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Complimentary 2-4 day door delivery across India on all orders over ₹1,999.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest/40 border border-forest-light/40 flex items-center justify-center shrink-0 text-forest-accent">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide uppercase">7-Day Doorstep Returns</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Wrong size? Zero friction doorstep return and free exchange pickup service.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest/40 border border-forest-light/40 flex items-center justify-center shrink-0 text-forest-accent">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide uppercase">Secure Indian Checkout</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                256-bit encrypted transactions powered by Razorpay, UPI, NetBanking and COD.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center font-black text-sm text-white">
                FL
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">FLARE</span>
              <span className="text-[10px] tracking-widest text-forest-accent uppercase font-bold px-2 py-0.5 rounded bg-forest/30 border border-forest-light/30">
                MEN'S FOOTWEAR
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              FLARE SNEAKERS is an exclusive men's footwear brand built on modern sneaker culture, masculine silhouettes, and everyday comfort. Step into your style.
            </p>
            <div className="text-xs text-forest-accent font-semibold tracking-wider uppercase">
              "BUILT FOR MEN. MADE FOR EVERY STEP."
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-forest flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919207560571"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:concierge@flaresneakers.com"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-forest flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-widest text-gray-300">Collections</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">
                  Retro Court Classic
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">
                  Apex Street High-Tops
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">
                  Kinetic Aero Runners
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">
                  Minimalist Luxe Casual
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">
                  New Arrivals (Men)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-widest text-gray-300">Customer Care</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  Size Guide & Measurements
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  Order Tracking
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  7-Day Returns & Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
                  Contact Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Sign-up */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-widest text-gray-300">The Flare Club</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to unlock private drops, exclusive discounts, and 10% off your first sneaker order.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-lg bg-forest/40 border border-forest-light text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You're in! Use coupon <strong>FLARE10</strong> at checkout for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-forest-light"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-forest hover:bg-forest-light text-white text-xs font-bold py-2.5 rounded-lg transition-colors tracking-wider uppercase"
                >
                  Join The Club
                </button>
              </form>
            )}
            <div className="pt-2 text-[11px] text-gray-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bandra Kurla Complex, Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Payment Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div>
          © 2026 FLARE SNEAKERS. All rights reserved. Exclusively Men's Footwear.
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-semibold text-gray-400">Accepted Payments:</span>
          <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px] text-gray-300">
            Razorpay
          </span>
          <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px] text-gray-300">
            UPI / GPay
          </span>
          <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px] text-gray-300">
            Cards / NetBanking
          </span>
          <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px] text-gray-300">
            COD
          </span>
        </div>
      </div>
    </footer>
  );
};
