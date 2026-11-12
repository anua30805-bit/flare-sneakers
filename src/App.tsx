import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutContactPage } from './pages/AboutContactPage';

const AppContent: React.FC = () => {
  const { currentRoute } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-black">
      {/* Sticky Header */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && <HomePage />}
        {currentRoute === 'shop' && <ShopPage />}
        {currentRoute === 'product' && <ProductDetailPage />}
        {(currentRoute === 'about' || currentRoute === 'contact') && <AboutContactPage />}
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Universal Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <WishlistDrawer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </RouterProvider>
  );
};

export default App;
