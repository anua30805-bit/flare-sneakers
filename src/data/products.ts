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
  },
  {
    id: 'flare-blade-runner-crimson',
    name: 'FLARE Cyber-Blade Kinetic Runner',
    modelCode: 'FLR-05-BLD',
    collection: 'Running Sneakers',
    tagline: 'Futuristic Hollow-Blade Energy-Return Runner in All-Crimson Red',
    price: 3799,
    originalPrice: 5499,
    rating: 4.9,
    reviewCount: 86,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 34,
    description:
      'Defy gravity with the aggressive aerodynamic silhouette of the Cyber-Blade Kinetic Runner. Engineered with an architectural hollow-blade polymer sole that absorbs impact and propels each step forward, wrapped in high-tensile breathable crimson knit mesh.',
    story:
      'Designed for forward velocity. The Cyber-Blade runner draws inspiration from aerospace aerodynamics and futuristic footwear engineering. Its signature hollow blade chassis delivers high-rebound energy with zero unnecessary weight.',
    features: [
      'Geometric hollow blade suspension sole engineered for forward propulsion',
      'Breathable 3D jacquard knit upper with dynamic lockdown lacing',
      'Reinforced molded TPU heel cage with industrial TREND pull-loop',
      'Ergonomic high-density arch support footbed for all-day comfort',
      'Ultra-grippy multi-surface tread with segmented flex grooves',
      'Moisture-wicking interior lining keeping feet dry during intense workouts'
    ],
    specifications: {
      upperMaterial: 'Breathable Engineered Jacquard Knit & Molded TPU Cage',
      soleMaterial: 'High-Tension Polymer Blade Spring Sole & Carbon Rubber Pods',
      closureType: 'Dynamic Speed-Lace with Integrated Tongue',
      cushioning: 'BladeSpring™ Mechanical Energy-Return Core',
      weight: '310g (Single shoe, Size UK 8)',
      careInstructions: 'Spot clean with cool water and soft brush. Air dry away from direct heat.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'crimson-red',
    colors: [
      {
        id: 'crimson-red',
        name: 'Vibrant Crimson Red',
        hex: '#D90429',
        secondaryHex: '#1A1A1A',
        image: '/images/model5-blade-red.jpg',
        gallery: [
          '/images/model5-blade-red.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-10',
        author: 'Akhil Raj',
        rating: 5,
        date: 'November 12, 2026',
        title: 'Futuristic look with crazy bounce and arch support',
        comment:
          'The blade sole actually gives noticeable spring when walking and running. The crimson red color is super vibrant and looks sick with black joggers. Truly unique design.',
        verified: true,
        helpfulCount: 18,
        sizePurchased: 8,
        colorPurchased: 'Vibrant Crimson Red'
      },
      {
        id: 'rev-11',
        author: 'Nikhil Varghese',
        rating: 5,
        date: 'November 8, 2026',
        title: 'Eye-catching red sneakers, very lightweight',
        comment:
          'Got so many compliments at the gym already. The knit feels snug and supportive around the ankle. Solid grip on treadmill and pavement.',
        verified: true,
        helpfulCount: 9,
        sizePurchased: 10,
        colorPurchased: 'Vibrant Crimson Red'
      }
    ]
  },
  {
    id: 'flare-retro-court-dunk-panda',
    name: 'FLARE Retro Court Dunk (Panda Edition)',
    modelCode: 'FLR-06-DNK',
    collection: 'Original Collection',
    tagline: 'Timeless Monochrome Black & White Low-Top Court Classic',
    price: 4199,
    originalPrice: 5999,
    rating: 5.0,
    reviewCount: 142,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 40,
    description:
      'The most versatile silhouette in men\'s streetwear. Crafted in pristine two-tone full-grain leather with iconic Panda black-and-white blocking, perforated toe box, and padded low-cut collar for unmatched street style.',
    story:
      'Born on the basketball courts of the 1980s and adopted by modern street culture. The Retro Court Dunk in Panda Monochrome is engineered to match effortlessly with literally any wardrobe—from relaxed denim to tailored trousers.',
    features: [
      'Classic dual-tone full-grain tumbled leather in Panda Monochrome',
      'Perforated toe box for maximum ventilation and vintage court heritage',
      'High-abrasion vulcanized rubber cupsole with pivot-circle traction',
      'Padded low-cut collar engineered for freedom of movement',
      'Woven STYLE EST. 2024 vintage tongue label and tonal flat laces',
      'Reinforced double-needle contrast stitching throughout',
      'All-day anatomical memory foam arch support insole'
    ],
    specifications: {
      upperMaterial: '100% Premium Full-Grain Calfskin Leather',
      soleMaterial: 'High-Density Vulcanized Rubber Cupsole',
      closureType: 'Lace-Up (Precision 6-Eyelet System)',
      cushioning: 'OrthoFoam™ Anatomical Arch Support Insole',
      weight: '395g (Single shoe, Size UK 8)',
      careInstructions: 'Clean with damp cloth and leather conditioner. Avoid harsh chemicals.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'panda-black-white',
    colors: [
      {
        id: 'panda-black-white',
        name: 'Monochrome Panda (Black & White)',
        hex: '#111111',
        secondaryHex: '#FFFFFF',
        image: '/images/model6-dunk-panda.jpg',
        gallery: [
          '/images/model6-dunk-panda.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-12',
        author: 'Faizal Khan',
        rating: 5,
        date: 'November 10, 2026',
        title: 'The ultimate daily driver sneaker. Zero flaws.',
        comment:
          'Panda colorway is always a winner. The leather quality here is substantially thicker and softer than ordinary retail drops. Toe box is comfortable and doesn\'t crease painfully. 10/10.',
        verified: true,
        helpfulCount: 26,
        sizePurchased: 9,
        colorPurchased: 'Monochrome Panda (Black & White)'
      },
      {
        id: 'rev-13',
        author: 'Siddharth Iyer',
        rating: 5,
        date: 'November 5, 2026',
        title: 'Goes with literally everything in my closet',
        comment:
          'Clean silhouette, premium finish, and super cushioned underfoot. Arrived in a very neat magnetic shoe box with free extra laces. Super happy with FLARE.',
        verified: true,
        helpfulCount: 14,
        sizePurchased: 10,
        colorPurchased: 'Monochrome Panda (Black & White)'
      }
    ]
  },
  {
    id: 'flare-stratus-chunky-runner',
    name: 'FLARE Stratus Chunky Street Runner',
    modelCode: 'FLR-07-STR',
    collection: 'Casual Sneakers',
    tagline: 'Architectural Sculpted Cloud Sole with Premium Multi-Layer Mesh',
    price: 4699,
    originalPrice: 6499,
    rating: 4.8,
    reviewCount: 78,
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 25,
    description:
      'Bold, elevated street swagger. The Stratus Chunky Runner features a dramatic wave-sculpted platform sole combined with multi-layered breathable air mesh, deep navy suede accents, and premium leather overlays.',
    story:
      'For men who embrace bold proportions. Inspired by modern architectural topography and high-fashion bulky runner trends, the Stratus delivers statement-making presence with featherweight cloud cushioning.',
    features: [
      'Sculpted lightweight wave platform sole with 45mm heel elevation',
      'Multi-layer breathable sandwich mesh with genuine suede paneling',
      'Deep Navy and Cool Slate Grey accents over Crisp Cloud White',
      'Reflective FASHION lateral badge and dual pull-tabs at tongue and heel',
      'Shock-absorbing EVA core with anti-torsion TPU midfoot shank',
      'Deep lugged rubber outsole for all-weather grip on wet pavements'
    ],
    specifications: {
      upperMaterial: 'Layered Breathable Air-Mesh, Microfiber Leather & Suede',
      soleMaterial: 'Ultra-Light Sculpted EVA Platform with Rubber Lug Outsole',
      closureType: 'Athletic Ghillie Cord Lacing System',
      cushioning: 'CloudStratus™ High-Rebound Foam Midsole',
      weight: '410g (Single shoe, Size UK 8)',
      careInstructions: 'Spot clean with mild detergent solution. Do not submerge in water.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'cloud-navy',
    colors: [
      {
        id: 'cloud-navy',
        name: 'Cloud White & Deep Navy',
        hex: '#F0F4F8',
        secondaryHex: '#0B1B3D',
        image: '/images/model7-chunky-navy.jpg',
        gallery: [
          '/images/model7-chunky-navy.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-14',
        author: 'Vivek Chawla',
        rating: 5,
        date: 'November 11, 2026',
        title: 'Chunky silhouette done right without feeling heavy',
        comment:
          'The sculpted sole looks insane in person. Provides great height and shock absorption. The navy blue accents pop nicely against the white mesh. Super stylish.',
        verified: true,
        helpfulCount: 15,
        sizePurchased: 8,
        colorPurchased: 'Cloud White & Deep Navy'
      },
      {
        id: 'rev-15',
        author: 'Rahul Menon',
        rating: 4,
        date: 'November 7, 2026',
        title: 'Great streetwear sneaker, lots of comfort',
        comment:
          'High quality materials and very solid build. Looks awesome with baggy trousers or sweatpants. Definitely recommend getting your usual size.',
        verified: true,
        helpfulCount: 7,
        sizePurchased: 11,
        colorPurchased: 'Cloud White & Deep Navy'
      }
    ]
  },
  {
    id: 'flare-aero-wave-street-mid',
    name: 'FLARE Aero-Wave Street Mid',
    modelCode: 'FLR-08-WAV',
    collection: 'Casual Sneakers',
    tagline: 'Breathable Cage Architecture with Sculpted Ocean Wave Midsole',
    price: 3899,
    originalPrice: 5499,
    rating: 4.9,
    reviewCount: 64,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 32,
    description:
      'A masterclass in futuristic mid-top aesthetics. Built with structural side-cage ventilation, deep ocean-blue wave inserts along the sculpted cupsole, and an industrial Fashion pull-tag collar that turns heads on every city block.',
    story:
      'Inspired by aquatic hydrodynamics and architectural streetwear. The Aero-Wave Mid blends breathable high-density mesh with structural support ribs, giving men a statement shoe with all-day bouncy comfort.',
    features: [
      'Sculpted wave-tread dual-density cupsole with ocean-blue energy ribs',
      'Breathable lattice cage upper with micro-mesh underlay for 360° airflow',
      'Padded mid-top ankle collar with integrated Fashion webbing tag',
      'OrthoFoam™ dual-density memory insole for maximum footbed cushion',
      'Reinforced abrasion-resistant synthetic toe cap and heel counter',
      'Textured slip-resistant rubber outsole designed for wet city pavements'
    ],
    specifications: {
      upperMaterial: 'Engineered Air-Mesh with Molded TPU Support Framework',
      soleMaterial: 'Sculpted High-Abrasion Rubber Cupsole with EVA Core',
      closureType: 'Lace-Up with Reinforced Webbing Eyelets',
      cushioning: 'AeroWave™ Shock-Dispersal Midsole Cushion',
      weight: '390g (Single shoe, Size UK 8)',
      careInstructions: 'Spot clean with mild soapy water and soft brush. Air dry in shade.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'white-royal-blue',
    colors: [
      {
        id: 'white-royal-blue',
        name: 'Crisp White & Royal Blue',
        hex: '#FFFFFF',
        secondaryHex: '#2563EB',
        image: '/images/model8-wave-blue.jpg',
        gallery: [
          '/images/model8-wave-blue.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-16',
        author: 'Gautam Sharma',
        rating: 5,
        date: 'November 14, 2026',
        title: 'Insane design details! The blue wave sole is fire',
        comment:
          'Looks even better in person than the photos. The cage mesh keeps my feet cool during long walks, and the mid-top collar gives great ankle support without feeling tight.',
        verified: true,
        helpfulCount: 21,
        sizePurchased: 9,
        colorPurchased: 'Crisp White & Royal Blue'
      },
      {
        id: 'rev-17',
        author: 'Abhishek Pillai',
        rating: 5,
        date: 'November 9, 2026',
        title: 'Very comfortable and futuristic vibe',
        comment:
          'Got multiple compliments on day one. Fits true to size (UK 8) and the cushioning under the heel is top notch. Delivery took just 2 days to Kochi.',
        verified: true,
        helpfulCount: 11,
        sizePurchased: 8,
        colorPurchased: 'Crisp White & Royal Blue'
      }
    ]
  },
  {
    id: 'flare-retro-court-low-obsidian',
    name: 'FLARE Retro Court Low (Obsidian Edition)',
    modelCode: 'FLR-09-OBS',
    collection: 'Original Collection',
    tagline: 'Iconic Low-Profile Court Silhouette in Two-Tone Obsidian Leather',
    price: 4299,
    originalPrice: 5999,
    rating: 5.0,
    reviewCount: 118,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 38,
    description:
      'Elegance meets court heritage. Handcrafted with butter-soft tumbled leather featuring deep obsidian navy overlays, crisp white toe box with precision perforations, and a soft powder-blue side swoosh overlay.',
    story:
      'A refined tribute to championship courts. The Obsidian Edition balances rich dark navy tones with cool steel-blue contrast for a sneaker that effortlessly elevates everything from tailored denim to casual weekend chinos.',
    features: [
      'Full-grain tumbled calfskin leather in two-tone Obsidian Navy & White',
      'Perforated vamp toe box for optimal breathability and classic court look',
      'Contrasting soft powder-blue side overlay and clean white flat laces',
      'Low-profile padded collar with soft velvet-touch textile lining',
      'Non-marking vulcanized rubber cupsole with circular pivot grip',
      'Removable anatomical arch-support OrthoFoam™ footbed'
    ],
    specifications: {
      upperMaterial: '100% Premium Full-Grain Calfskin Leather',
      soleMaterial: 'High-Density Vulcanized Rubber Cupsole',
      closureType: 'Lace-Up (7-Eyelet Precision System)',
      cushioning: 'Full-Length OrthoFoam™ Memory Cushioning',
      weight: '380g (Single shoe, Size UK 8)',
      careInstructions: 'Clean with damp cloth and leather balm. Avoid harsh detergents.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'obsidian-blue',
    colors: [
      {
        id: 'obsidian-blue',
        name: 'Obsidian Navy & Powder Blue',
        hex: '#0F1E36',
        secondaryHex: '#7C93AC',
        image: '/images/model9-court-navy.jpg',
        gallery: [
          '/images/model9-court-navy.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-18',
        author: 'Deepak Varma',
        rating: 5,
        date: 'November 13, 2026',
        title: 'The cleanest navy sneakers out there. Pure class.',
        comment:
          'The shade of obsidian navy is rich and deep. Leather is soft right out of the box with zero stiff creases. Looks stunning with light blue denim.',
        verified: true,
        helpfulCount: 29,
        sizePurchased: 10,
        colorPurchased: 'Obsidian Navy & Powder Blue'
      },
      {
        id: 'rev-19',
        author: 'Manish Gupta',
        rating: 5,
        date: 'November 6, 2026',
        title: 'Top-tier materials and perfect fit',
        comment:
          'I own multiple court sneakers, and FLARE rivals the best of them in build quality. Packaging was immaculate with individual dust bags.',
        verified: true,
        helpfulCount: 16,
        sizePurchased: 9,
        colorPurchased: 'Obsidian Navy & Powder Blue'
      }
    ]
  },
  {
    id: 'flare-tactical-apex-skate',
    name: 'FLARE Tactical Apex Skate High',
    modelCode: 'FLR-10-TCK',
    collection: 'High-Top Sneakers',
    tagline: 'Reinforced Skateboard Ankle Architecture with Vibrant Safety Orange Accents',
    price: 4899,
    originalPrice: 6999,
    rating: 4.9,
    reviewCount: 92,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 28,
    description:
      'Engineered for maximum street aggression and impact resilience. The Tactical Apex Skate High blends grey suede mudguards, black full-grain leather, industrial lateral webbed straps, and safety orange eyelets and pull-tabs on a notched skate cupsole.',
    story:
      'Conceived at the intersection of urban tactical gear and skate culture. Reinforced at every critical stress point with dual-stitch suede and ballistic webbing, built to withstand hardcore city exploration.',
    features: [
      'Heavy-duty suede mudguard and full-grain leather panel construction',
      'Tactical webbed lateral strap with FASHION SPORT skateboard branding',
      'High-visibility safety orange eyelet hardware and heel pull loop',
      'Padded high-top collar providing maximum ankle stability and protection',
      'Notched perimeter-stitched skate cupsole with deep herringbone grip',
      'Shock-absorbing EVA drop-in midsole core for high-impact landings'
    ],
    specifications: {
      upperMaterial: 'Heavy-Duty Suede, Full-Grain Leather & Ballistic Nylon Webbing',
      soleMaterial: 'Reinforced Vulcanized Rubber Skate Cupsole',
      closureType: 'Speed-Lace with Contrast Two-Tone Heavy Cords',
      cushioning: 'ImpactShield™ Skate-Grade Shock Insole',
      weight: '470g (Single shoe, Size UK 8)',
      careInstructions: 'Brush suede with dry bristle brush. Wipe leather with damp sponge.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'monochrome-orange',
    colors: [
      {
        id: 'monochrome-orange',
        name: 'Concrete Grey, Black & Safety Orange',
        hex: '#4A4A4A',
        secondaryHex: '#FF5722',
        image: '/images/model10-tactical-orange.jpg',
        gallery: [
          '/images/model10-tactical-orange.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-20',
        author: 'Tariq Al-Mansoor',
        rating: 5,
        date: 'November 15, 2026',
        title: 'Built like a tank but surprisingly comfortable',
        comment:
          'The orange accents contrast amazingly with the black and grey panels. Ankle support is solid and the suede feels very durable. Perfect for pairing with utility cargo pants.',
        verified: true,
        helpfulCount: 24,
        sizePurchased: 9,
        colorPurchased: 'Concrete Grey, Black & Safety Orange'
      },
      {
        id: 'rev-21',
        author: 'Kunal Joshi',
        rating: 5,
        date: 'November 10, 2026',
        title: 'Heavyweight street swagger',
        comment:
          'One of the coolest high-tops in my collection. Solid construction, cushioned sole, and the two-tone laces add a great touch.',
        verified: true,
        helpfulCount: 13,
        sizePurchased: 10,
        colorPurchased: 'Concrete Grey, Black & Safety Orange'
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
  { name: 'Red', hex: '#BA0C2F' },
  { name: 'Blue', hex: '#0A2540' },
  { name: 'Orange', hex: '#FF5722' },
  { name: 'Grey', hex: '#8C9298' }
];

export const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: 99999 },
  { label: 'Under ₹1,000', min: 0, max: 999 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000 – ₹5,000', min: 2000, max: 5000 },
  { label: 'Above ₹5,000', min: 5001, max: 99999 }
];
