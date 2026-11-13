import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'flare-retro-court-classic',
    name: 'FLARE Retro Court Classic',
    modelCode: 'FLR-01-CRT',
    collection: 'Original Collection',
    tagline: 'The Signature Heritage Low-Top Sneaker for Modern Men',
    price: 3999,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 128,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: false,
    stockQuantity: 42,
    description:
      'The definitive cornerstone of the FLARE collection. Handcrafted from premium full-grain calfskin leather with a brushed suede T-toe cap and authentic caramel gum sole. Built specifically for men, merging vintage court aesthetics with modern ergonomic support.',
    story:
      'Inspired by vintage terrace culture and classic athletic court footwear of the late 20th century, the Retro Court Classic was meticulously refined over two years to master the perfect masculine proportions. No exaggerated frills—just pristine leather, surgical stitching, and an all-day comfort footbed engineered for the modern man on the move.',
    features: [
      'Full-grain tumbled calfskin leather upper with supple hand feel',
      'Brushed velvet-touch suede T-toe overlay for abrasion resistance',
      'Non-marking heritage caramel gum rubber cupsole with herringbone grip',
      'Anatomical dual-density memory foam footbed with arch reinforcement',
      'Waxed 100% cotton flat laces with brushed metal aglets',
      'Gold foil embossed FLARE branding on heel counter and tongue tab',
      'Breathable microfiber lining to keep feet cool and odor-free all day'
    ],
    specifications: {
      upperMaterial: '100% Premium Full-Grain Calfskin Leather & Italian Suede',
      soleMaterial: 'Vulcanized High-Traction Gum Rubber',
      closureType: 'Lace-Up (7-Eyelet Precision System)',
      cushioning: 'Dual-Density OrthoFoam™ Memory Footbed',
      weight: '385g (Single shoe, Size UK 8)',
      careInstructions: 'Clean with damp cloth and leather conditioner. Suede brush for toe overlay. Do not machine wash.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'white-green',
    colors: [
      {
        id: 'white-green',
        name: 'White & Forest Green',
        hex: '#FFFFFF',
        secondaryHex: '#003D32',
        image: '/images/model1-white-green.jpg',
        gallery: [
          '/images/model1-white-green.jpg',
          '/images/hero-sneaker.jpg',
          '/images/model1-detail-angle.jpg',
          '/images/model1-sole.jpg',
          '/images/model1-heel.jpg'
        ],
        inStock: true
      },
      {
        id: 'black',
        name: 'Triple Black Edition',
        hex: '#121212',
        secondaryHex: '#262626',
        image: '/images/model1-black.jpg',
        gallery: [
          '/images/model1-black.jpg',
          '/images/model1-detail-angle.jpg',
          '/images/model1-sole.jpg',
          '/images/model1-heel.jpg'
        ],
        inStock: true
      },
      {
        id: 'navy',
        name: 'Deep Navy Blue',
        hex: '#0A2540',
        secondaryHex: '#FFFFFF',
        image: '/images/model1-navy.jpg',
        gallery: [
          '/images/model1-navy.jpg',
          '/images/model1-detail-angle.jpg',
          '/images/model1-sole.jpg',
          '/images/model1-heel.jpg'
        ],
        inStock: true
      },
      {
        id: 'grey',
        name: 'Slate Heather Grey',
        hex: '#8C9298',
        secondaryHex: '#FFFFFF',
        image: '/images/model1-grey.jpg',
        gallery: [
          '/images/model1-grey.jpg',
          '/images/model1-detail-angle.jpg',
          '/images/model1-sole.jpg',
          '/images/model1-heel.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-1',
        author: 'Vikram Malhotra',
        rating: 5,
        date: 'October 28, 2026',
        title: 'The cleanest sneakers I own. Better than European imports.',
        comment:
          'Ordered the White & Forest Green in UK 9. The leather quality is phenomenal—rich, buttery feel that breaks in immediately without blistering. The dark green accents stand out with chinos and denim alike. Incredible value at ₹3,999.',
        verified: true,
        helpfulCount: 34,
        sizePurchased: 9,
        colorPurchased: 'White & Forest Green'
      },
      {
        id: 'rev-2',
        author: 'Arjun Singhania',
        rating: 5,
        date: 'October 20, 2026',
        title: 'Monochrome perfection in Triple Black',
        comment:
          'Got the Triple Black version for work and evening wear. Zero flashy logos, just sleek masculine craftsmanship. The gum sole is super grippy and the memory footbed makes 10,000 steps effortless.',
        verified: true,
        helpfulCount: 19,
        sizePurchased: 8,
        colorPurchased: 'Triple Black Edition'
      },
      {
        id: 'rev-3',
        author: 'Rohan Deshmukh',
        rating: 5,
        date: 'October 15, 2026',
        title: 'True to size and ridiculously comfortable',
        comment:
          'I was hesitant about sizing since sneaker brands vary, but UK 10 fits true to size with just the right amount of toe box room. Packaging was also super premium with individual dust bags.',
        verified: true,
        helpfulCount: 12,
        sizePurchased: 10,
        colorPurchased: 'Deep Navy Blue'
      }
    ]
  },
  {
    id: 'flare-apex-street-hightop',
    name: 'FLARE Apex Street High-Top (Chicago Red & White)',
    modelCode: 'FLR-02-APX',
    collection: 'High-Top Sneakers',
    tagline: '360° Architectural Streetwear High-Top with Iconic Presence',
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviewCount: 94,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: false,
    stockQuantity: 28,
    description:
      'Engineered for commanding street presence. The Apex High-Top combines tactical full-grain leather uppers in iconic Chicago Red, Crisp White, and Deep Black with a sculpted geometric sole and padded ankle architecture.',
    story:
      'Created for the urban explorer who demands edge and substance. Inspired by iconic court heritage and brutalist architecture, the Apex High-Top in Chicago Red & White represents the boldest silhouette in our men\'s lineup.',
    features: [
      'Padded anatomical high-top collar with Achilles-tendon flex notch',
      'Full-grain leather uppers in iconic Chicago Red, Black & White',
      'High-traction vulcanized cupsole with 360° stitched edge',
      'Reinforced speed-lacing eyelets with authentic cotton-blend cords',
      'Weather-resistant hydrophobic outer coating against dust and splashes',
      'Reinforced heel counter with pull loop for effortless on-and-off wear'
    ],
    specifications: {
      upperMaterial: 'Premium Full-Grain Leather & Ballistic Accents',
      soleMaterial: 'Vulcanized High-Traction Rubber with EVA Cushion',
      closureType: 'High-Tension Speed-Lace System',
      cushioning: 'ImpactShield™ Shock-Absorbing Midsole',
      weight: '465g (Single shoe, Size UK 8)',
      careInstructions: 'Wipe clean with moist sponge. Treat leather with premium shoe cream monthly.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'chicago-red',
    colors: [
      {
        id: 'chicago-red',
        name: 'Chicago Red & White Edition',
        hex: '#BA0C2F',
        secondaryHex: '#FFFFFF',
        image: '/images/model2-hightop.jpg',
        gallery: [
          '/images/model2-hightop.jpg',
          '/images/hero-sneaker.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-4',
        author: 'Karan Mehra',
        rating: 5,
        date: 'November 2, 2026',
        title: 'Chunky, aggressive, and astonishingly lightweight',
        comment:
          'Most high-tops weigh a ton, but Flare got the sole chemistry right. The ankle padding hugs your foot securely. Pairs insanely well with cargo pants and oversized hoodies.',
        verified: true,
        helpfulCount: 22,
        sizePurchased: 10,
        colorPurchased: 'Tactical Black & Olive'
      },
      {
        id: 'rev-5',
        author: 'Devendra Patel',
        rating: 4,
        date: 'October 24, 2026',
        title: 'Outstanding quality and street aesthetic',
        comment:
          'The nubuck feels thick and premium. Took about one day to break in the ankle collar, and now it feels like a glove. Highly recommended for streetwear fans.',
        verified: true,
        helpfulCount: 11,
        sizePurchased: 8,
        colorPurchased: 'Tactical Black & Olive'
      }
    ]
  },
  {
    id: 'flare-kinetic-aero-runner',
    name: 'FLARE Kinetic Aero Runner',
    modelCode: 'FLR-03-KNT',
    collection: 'Running Sneakers',
    tagline: 'Hyper-Lightweight Athletic Runner with Nitrogen Rebound Cushioning',
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviewCount: 156,
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 36,
    description:
      'Engineered for maximum athletic velocity and all-day active agility. The Kinetic Aero Runner features a breathable zoned-knit jacquard upper, dynamic lockdown lacing, and a high-response nitrogen-infused foam midsole that returns energy with every stride.',
    story:
      'We set out to create an athletic shoe that looks as sleek on city sidewalks as it performs on running tracks and morning gym routines. With featherweight construction and aerodynamic sculpting, the Kinetic Aero Runner represents the athletic peak of FLARE engineering.',
    features: [
      'Engineered zoned jacquard knit upper for 360-degree ventilation',
      'Nitrogen-infused responsive rebound midsole for 68% energy return',
      'Aero-contour heel collar with Achilles tendon relief groove',
      'Carbon-rubber traction pods placed at high-wear forefoot and heel zones',
      'Reflective 3M night-visibility safety accents along eyestay and heel',
      'Integrated OrthoLite® moisture-wicking sockliner with anti-microbial finish'
    ],
    specifications: {
      upperMaterial: 'Engineered Breathable Jacquard Knit & Hot-Melt TPU Support Overlays',
      soleMaterial: 'Nitrogen-Infused Rebound EVA with High-Abrasion Carbon Rubber Pads',
      closureType: 'Integrated Dynamic Fly-Wire Lace System',
      cushioning: 'AeroGlide™ Nitrogen Cushioning Core',
      weight: '265g (Single shoe, Size UK 8)',
      careInstructions: 'Spot clean with mild detergent and cool water. Air dry away from direct heat.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'emerald-black',
    colors: [
      {
        id: 'emerald-black',
        name: 'Forest Emerald & Carbon Black',
        hex: '#0D7058',
        secondaryHex: '#181818',
        image: '/images/model3-runner.jpg',
        gallery: [
          '/images/model3-runner.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-6',
        author: 'Sameer Nair',
        rating: 5,
        date: 'November 4, 2026',
        title: 'Breezy and featherlight. My go-to running and gym pair.',
        comment:
          'Unbelievable cushioning. You literally feel the spring in your step. It is breathable even in hot Indian weather, and the dark emerald green looks very sharp.',
        verified: true,
        helpfulCount: 27,
        sizePurchased: 9,
        colorPurchased: 'Forest Emerald & Carbon Black'
      },
      {
        id: 'rev-7',
        author: 'Aditya Roy',
        rating: 5,
        date: 'October 30, 2026',
        title: 'Replaced my expensive branded runners with these',
        comment:
          'The arch support is spot on. I do 5k runs every morning and no shin splints or soreness. Great job by FLARE.',
        verified: true,
        helpfulCount: 14,
        sizePurchased: 11,
        colorPurchased: 'Forest Emerald & Carbon Black'
      }
    ]
  },
  {
    id: 'flare-minimalist-luxe-casual',
    name: 'FLARE Minimalist Luxe Casual',
    modelCode: 'FLR-04-MIN',
    collection: 'Casual Sneakers',
    tagline: 'Ultra-Clean Italian-Style Low-Profile Luxury Leather Sneaker',
    price: 4499,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 112,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 30,
    description:
      'The epitome of quiet luxury for the modern gentleman. Cut from seamless, unadorned butter-soft nappa calfskin leather, mounted upon a hand-stitched low-profile cupsole. Effortlessly transcends boardrooms, dinner dates, and weekend city strolls.',
    story:
      'Stripped of all unnecessary embellishment, the Minimalist Luxe is an exercise in pure form and material supremacy. When you wear shoes this clean, every cut and stitch must be flawless. Made for men who understand that simplicity is the ultimate sophistication.',
    features: [
      'Unbroken seamless nappa leather quarter panels with folded edges',
      'Ultra-soft natural calfskin leather interior lining for sockless comfort',
      '360-degree perimeter sidewall stitched durable Italian-style cupsole',
      'Waxed tone-on-tone fine cotton laces with debossed metal tips',
      'Removable contoured memory-cushion leather insole with natural arch support',
      'Subtle blind-embossed FLARE serial number on the heel'
    ],
    specifications: {
      upperMaterial: '100% Ultra-Soft Nappa Calfskin Leather',
      soleMaterial: 'Perimeter-Stitched Low-Profile Vulcanized Rubber Cupsole',
      closureType: 'Clean Blind-Eyelet Lace-Up',
      cushioning: 'Full-Length Dual Density Latex Cushion Bed',
      weight: '345g (Single shoe, Size UK 8)',
      careInstructions: 'Buff gently with neutral leather cream and soft horsehair brush.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'bone-white',
    colors: [
      {
        id: 'bone-white',
        name: 'Chalk Bone & Cream',
        hex: '#EDEAE3',
        secondaryHex: '#D8D4CA',
        image: '/images/model4-casual.jpg',
        gallery: [
          '/images/model4-casual.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-8',
        author: 'Pranav Kapoor',
        rating: 5,
        date: 'November 1, 2026',
        title: 'Quiet luxury done right. Matches with tailored suits.',
        comment:
          'I wear these to business casual meetings with linen trousers and an unstructured blazer. The leather smells divine and the silhouette is sleek without being bulky. Top-tier craftsmanship.',
        verified: true,
        helpfulCount: 31,
        sizePurchased: 8,
        colorPurchased: 'Chalk Bone & Cream'
      },
      {
        id: 'rev-9',
        author: 'Harsh Vardhan',
        rating: 5,
        date: 'October 19, 2026',
        title: 'Insanely comfortable from day one',
        comment:
          'No stiff break-in period at all because the leather inside and outside is so soft. The sole stitching gives great reassurance it will last for years.',
        verified: true,
        helpfulCount: 16,
        sizePurchased: 9,
        colorPurchased: 'Chalk Bone & Cream'
      }
    ]
  }
];

export const CATEGORIES = [
  'All Sneakers',
  'Original Collection',
  'High-Top Sneakers',
  'Running Sneakers',
  'Casual Sneakers'
] as const;

export const SIZES = [6, 7, 8, 9, 10, 11];

export const COLOR_FILTERS = [
  { name: 'White', hex: '#FFFFFF', border: true },
  { name: 'Green', hex: '#003D32' },
  { name: 'Black', hex: '#111111' },
  { name: 'Blue', hex: '#0A2540' },
  { name: 'Grey', hex: '#8C9298' }
];

export const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: 99999 },
  { label: 'Under ₹1,000', min: 0, max: 999 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000 – ₹5,000', min: 2000, max: 5000 },
  { label: 'Above ₹5,000', min: 5001, max: 99999 }
];
