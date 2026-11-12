import React, { createContext, useContext, useState, useEffect } from 'react';

export type RouteType = 'home' | 'shop' | 'product' | 'about' | 'contact';

interface RouterContextType {
  currentRoute: RouteType;
  productId: string | null;
  navigate: (path: string) => void;
  navigateToProduct: (id: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const parsePath = (pathname: string): { route: RouteType; id: string | null } => {
    // Normalise pathname
    const cleanPath = pathname.replace(/\/+$/, '') || '/';

    if (cleanPath === '/' || cleanPath === '') {
      return { route: 'home', id: null };
    }
    if (cleanPath === '/shop' || cleanPath.startsWith('/shop?')) {
      return { route: 'shop', id: null };
    }
    if (cleanPath.startsWith('/product/')) {
      const id = cleanPath.replace('/product/', '').split('?')[0];
      return { route: 'product', id };
    }
    if (cleanPath === '/about') {
      return { route: 'about', id: null };
    }
    if (cleanPath === '/contact') {
      return { route: 'contact', id: null };
    }
    // Fallback to home
    return { route: 'home', id: null };
  };

  const initial = parsePath(window.location.pathname);
  const [currentRoute, setCurrentRoute] = useState<RouteType>(initial.route);
  const [productId, setProductId] = useState<string | null>(initial.id);

  useEffect(() => {
    const handlePopState = () => {
      const { route, id } = parsePath(window.location.pathname);
      setCurrentRoute(route);
      setProductId(id);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    const targetPath = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', targetPath);
    const { route, id } = parsePath(targetPath);
    setCurrentRoute(route);
    setProductId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, productId, navigate, navigateToProduct }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
