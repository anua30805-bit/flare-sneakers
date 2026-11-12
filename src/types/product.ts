export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  secondaryHex?: string;
  image: string;
  gallery: string[];
  inStock: boolean;
}

export interface ProductSpecifications {
  upperMaterial: string;
  soleMaterial: string;
  closureType: string;
  cushioning: string;
  weight: string;
  careInstructions: string;
  countryOfOrigin: string;
}

export interface ShippingDetails {
  dispatchTime: string;
  deliveryEstimate: string;
  shippingFee: string;
  returns: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpfulCount: number;
  sizePurchased: number;
  colorPurchased: string;
}

export interface Product {
  id: string;
  name: string;
  modelCode: string;
  collection: 'Original Collection' | 'High-Top Sneakers' | 'Running Sneakers' | 'Casual Sneakers';
  tagline: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  description: string;
  story: string;
  features: string[];
  specifications: ProductSpecifications;
  shipping: ShippingDetails;
  availableSizes: number[]; // UK 6, 7, 8, 9, 10, 11
  colors: ColorVariant[];
  defaultColorId: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  stockQuantity: number;
  demoReviews: Review[];
}

export interface CartItem {
  id: string; // composite key: `${productId}-${colorId}-${size}`
  productId: string;
  productName: string;
  collection: string;
  price: number;
  originalPrice: number;
  selectedColor: ColorVariant;
  selectedSize: number;
  quantity: number;
  image: string;
}

export interface FilterState {
  category: string;
  priceRange: string;
  size: number | null;
  color: string | null;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
  searchQuery: string;
}

export interface CustomerOrder {
  orderId: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'razorpay' | 'upi' | 'cod';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  orderDate: string;
}
