import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { currentRoute, navigate } = useRouter();
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'SHOP', path: '/shop' },
    { label: 'COLLECTIONS', path: '/shop' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-forest-dark text-white text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-forest-deep/60">
        <ShieldCheck className="w-3.5 h-3.5 text-forest-accent" />
        <span>EXCLUSIVELY MEN'S SNEAKERS • FREE EXPRESS DELIVERY ACROSS INDIA ABOVE ₹1,999 • 7-DAY DOORSTEP RETURNS</span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-gray-100'
            : currentRoute === 'home'
            ? 'bg-forest text-white py-4 border-b border-forest-light/20'
            : 'bg-white text-brand-black py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                currentRoute === 'home' && !isScrolled
                  ? 'text-white hover:bg-forest-dark'
                  : 'text-brand-black hover:bg-gray-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 text-left group"
              aria-label="FLARE SNEAKERS Home"
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg transition-transform group-hover:scale-105 ${
                  currentRoute === 'home' && !isScrolled
                    ? 'bg-white text-forest'
                    : 'bg-forest text-white shadow-sm'
                }`}
              >
                <span className="tracking-tighter">FL</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-black text-xl sm:text-2xl tracking-tighter leading-none ${
                    currentRoute === 'home' && !isScrolled ? 'text-white' : 'text-forest'
                  }`}
                >
                  FLARE
                </span>
                <span
                  className={`text-[9px] font-bold tracking-[0.25em] uppercase ${
                    currentRoute === 'home' && !isScrolled ? 'text-gray-300' : 'text-brand-muted'
                  }`}
                >
                  SNEAKERS • MEN
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentRoute === 'home'
                  : currentRoute === link.path.replace('/', '');

              const baseText =
                currentRoute === 'home' && !isScrolled
                  ? 'text-gray-200 hover:text-white'
                  : 'text-brand-black/80 hover:text-forest';

              const activeText =
                currentRoute === 'home' && !isScrolled
                  ? 'text-white font-bold'
                  : 'text-forest font-bold';

              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className={`text-sm tracking-wider font-semibold transition-all relative py-1 ${
                    isActive ? activeText : baseText
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        currentRoute === 'home' && !isScrolled ? 'bg-white' : 'bg-forest'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors ${
                currentRoute === 'home' && !isScrolled
                  ? 'text-gray-200 hover:text-white hover:bg-forest-dark'
                  : 'text-brand-black hover:text-forest hover:bg-gray-100'
              }`}
              title="Search Sneakers"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className={`p-2 rounded-full transition-colors relative ${
                currentRoute === 'home' && !isScrolled
                  ? 'text-gray-200 hover:text-white hover:bg-forest-dark'
                  : 'text-brand-black hover:text-forest hover:bg-gray-100'
              }`}
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Icon with Live Count */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center gap-2 p-2 px-3 rounded-full transition-all ${
                currentRoute === 'home' && !isScrolled
                  ? 'bg-white text-forest hover:bg-gray-100'
                  : 'bg-forest text-white hover:bg-forest-hover shadow-sm'
              }`}
              title="Shopping Cart"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-accent-green bg-emerald-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold hidden sm:inline">
                {cartCount > 0 ? `CART (${cartCount})` : 'CART'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-brand-black border-t border-gray-100 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between text-left py-3 text-base font-semibold border-b border-gray-100 text-brand-black hover:text-forest"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Featured Collections (Men Only)
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-brand-black">
                <button
                  onClick={() => {
                    navigate('/shop');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gray-50 p-2.5 rounded-lg text-left hover:bg-forest-subtle hover:text-forest"
                >
                  Retro Court Classic
                </button>
                <button
                  onClick={() => {
                    navigate('/shop');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gray-50 p-2.5 rounded-lg text-left hover:bg-forest-subtle hover:text-forest"
                >
                  Apex High-Tops
                </button>
                <button
                  onClick={() => {
                    navigate('/shop');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gray-50 p-2.5 rounded-lg text-left hover:bg-forest-subtle hover:text-forest"
                >
                  Kinetic Runners
                </button>
                <button
                  onClick={() => {
                    navigate('/shop');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gray-50 p-2.5 rounded-lg text-left hover:bg-forest-subtle hover:text-forest"
                >
                  Minimalist Luxe
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Currency: INR (₹)</span>
              <span className="font-semibold text-forest">Men's Exclusive Footwear</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
