import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ColorVariant, CartItem, CustomerOrder } from '../types/product';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, color: ColorVariant, size: number, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  shipping: number;
  discount: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  lastOrder: CustomerOrder | null;
  setLastOrder: (order: CustomerOrder | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'flare_sneakers_cart_v1';
const PROMO_STORAGE_KEY = 'flare_sneakers_promo_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [promoCode, setPromoCode] = useState<string>(() => {
    try {
      return localStorage.getItem(PROMO_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<CustomerOrder | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      if (promoCode) {
        localStorage.setItem(PROMO_STORAGE_KEY, promoCode);
      } else {
        localStorage.removeItem(PROMO_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save promo to localStorage', e);
    }
  }, [promoCode]);

  const addToCart = (product: Product, color: ColorVariant, size: number, quantity = 1) => {
    const compositeId = `${product.id}-${color.id}-uk${size}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === compositeId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          id: compositeId,
          productId: product.id,
          productName: product.name,
          collection: product.collection,
          price: product.price,
          originalPrice: product.originalPrice,
          selectedColor: color,
          selectedSize: size,
          quantity,
          image: color.image
        };
        return [...prev, newItem];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Free delivery across India for orders above ₹1,999
  const shipping = subtotal === 0 ? 0 : subtotal >= 1999 ? 0 : 150;

  // Promo discount calculation (e.g., FLARE10 gives 10% off, FIRSTPAIR gives ₹500 off)
  let discount = 0;
  if (promoCode.toUpperCase() === 'FLARE10') {
    discount = Math.round(subtotal * 0.1);
  } else if (promoCode.toUpperCase() === 'FIRSTPAIR' && subtotal >= 3000) {
    discount = 500;
  }

  const applyPromoCode = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'FLARE10' || trimmed === 'FIRSTPAIR') {
      setPromoCode(trimmed);
      return true;
    }
    return false;
  };

  const removePromoCode = () => {
    setPromoCode('');
  };

  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        shipping,
        discount,
        promoCode,
        applyPromoCode,
        removePromoCode,
        total,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        lastOrder,
        setLastOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
