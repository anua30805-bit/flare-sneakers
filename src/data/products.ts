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
  },
  {
    id: 'flare-nomad-suede-court',
    name: 'FLARE Nomad Suede Court Lo',
    modelCode: 'FLR-11-NMD',
    collection: 'Casual Sneakers',
    tagline: 'Architectural Scandinavian Low-Top in Slate Grey Suede with Terry Cloth Laces',
    price: 4499,
    originalPrice: 6499,
    rating: 4.9,
    reviewCount: 78,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 34,
    description:
      'Scandinavian minimalism reimagined with bold streetwear proportions. Handcrafted in velvety slate-grey Italian suede, bordered with sand-beige piping, and finished with plush oversized terry fleece laces over a segmented two-tone cupsole.',
    story:
      'Inspired by luxury European atelier footwear and modern skate architecture. Designed for discerning men who prioritize tactile textures and understated sophistication.',
    features: [
      'Heavyweight Italian suede upper in rich slate anthracite',
      'Contrasting cream/sand leather piping and lateral embroidered script',
      'Signature oversized plush boucle terry cloth fat laces',
      'Molded two-tone durable rubber cupsole with reinforced heel clip',
      'Butter-soft leather interior lining with memory foam collar',
      'OrthoFoam™ ergonomic cushioning for effortless day-to-night wear'
    ],
    specifications: {
      upperMaterial: 'Premium Italian Velvet Suede & Nappa Trim',
      soleMaterial: 'Dual-Tone High-Density Vulcanized Rubber',
      closureType: 'Fat Boucle Terry Laces (6-Eyelet System)',
      cushioning: 'OrthoFoam™ Dual-Density Footbed',
      weight: '430g (Single shoe, Size UK 8)',
      careInstructions: 'Clean with dry suede brush and suede protector spray. Keep away from direct water.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'slate-cream',
    colors: [
      {
        id: 'slate-cream',
        name: 'Anthracite Slate Grey & Sand Cream',
        hex: '#33373E',
        secondaryHex: '#D4C5B9',
        image: '/images/model11-arigato-slate.jpg',
        gallery: [
          '/images/model11-arigato-slate.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-22',
        author: 'Arjun Menon',
        rating: 5,
        date: 'November 15, 2026',
        title: 'The texture and terry laces are insane',
        comment:
          'Easily the most luxurious feeling sneaker in my wardrobe. The suede is ultra-plush and the chunky terry laces get compliments every single time I step out.',
        verified: true,
        helpfulCount: 22,
        sizePurchased: 9,
        colorPurchased: 'Anthracite Slate Grey & Sand Cream'
      },
      {
        id: 'rev-23',
        author: 'Siddheshwar Rao',
        rating: 5,
        date: 'November 12, 2026',
        title: 'Exceptional craftsmanship and silhouette',
        comment:
          'Pairs amazingly with wide-leg trousers and pleated chinos. Solid weight, premium sole, and no breaking-in pain.',
        verified: true,
        helpfulCount: 14,
        sizePurchased: 8,
        colorPurchased: 'Anthracite Slate Grey & Sand Cream'
      }
    ]
  },
  {
    id: 'flare-legacy-heritage-runner',
    name: 'FLARE Legacy Heritage Runner',
    modelCode: 'FLR-12-RUN',
    collection: 'Running Sneakers',
    tagline: 'Retro-Tech Performance Runner in Vintage Olive Suede & Breathable Mesh',
    price: 3999,
    originalPrice: 5799,
    rating: 4.9,
    reviewCount: 142,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 46,
    description:
      'The quintessential 2000s tech runner elevated for high-mileage urban life. Crafted with rich vintage olive-green suede overlays, open-cell breathable cream mesh, and an energy-returning cushioned midsole with segmented rubber crash pads.',
    story:
      'Engineered to blend archival marathon aesthetics with modern orthopedic engineering. Whether navigating bustling metro commutes or weekend coffee runs, the Legacy Heritage Runner delivers unmatched impact absorption.',
    features: [
      'Multi-layered vintage olive pigskin suede and ballistic air-mesh',
      'Dual-density shock absorption midsole with TPU stability shank',
      'Subtle metallic silver and cream detailing with tonal lace stays',
      'Padded anti-friction performance lining with moisture-wicking sockliner',
      'High-traction decoupled rubber outsole with multi-directional grip',
      'Reinforced heel stabilizer for lockdown support during brisk walking'
    ],
    specifications: {
      upperMaterial: 'Suede Overlays & Open-Cell Technical Mesh',
      soleMaterial: 'Energy-Rebound EVA & Carbon Rubber Outsole',
      closureType: 'Lace-Up (Ghillie Webbing & Eyelets)',
      cushioning: 'ImpactGrid™ Multi-Zone Cushioning Core',
      weight: '345g (Single shoe, Size UK 8)',
      careInstructions: 'Wipe mesh with gentle damp cloth. Suede brush for suede overlays.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'olive-cream',
    colors: [
      {
        id: 'olive-cream',
        name: 'Vintage Olive Green & Pale Cream',
        hex: '#556B2F',
        secondaryHex: '#EAE5D9',
        image: '/images/model12-runner-olive.jpg',
        gallery: [
          '/images/model12-runner-olive.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-24',
        author: 'Rohan Sen',
        rating: 5,
        date: 'November 14, 2026',
        title: 'Walked 15k steps on day one. Total comfort.',
        comment:
          'The olive green colorway looks so good with dark wash jeans and white socks. Cushioning feels cloud-like without being unstable.',
        verified: true,
        helpfulCount: 31,
        sizePurchased: 10,
        colorPurchased: 'Vintage Olive Green & Pale Cream'
      },
      {
        id: 'rev-25',
        author: 'Karthik Pillai',
        rating: 5,
        date: 'November 8, 2026',
        title: 'Best lifestyle runner for the price in India',
        comment:
          'Breathability is fantastic in warm weather. Mesh lets air circulate freely and the olive suede gives it a luxury vibe.',
        verified: true,
        helpfulCount: 19,
        sizePurchased: 9,
        colorPurchased: 'Vintage Olive Green & Pale Cream'
      }
    ]
  },
  {
    id: 'flare-terra-mocha-skate',
    name: 'FLARE Terra Mocha Skate Low',
    modelCode: 'FLR-13-TER',
    collection: 'Casual Sneakers',
    tagline: 'Artisanal Skateboard Low-Top in Rich Mocha Brown, Noir Black & Crisp White',
    price: 3899,
    originalPrice: 5499,
    rating: 4.8,
    reviewCount: 84,
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 30,
    description:
      'Earthy, grounded, and street-hardened. The Terra Mocha Skate Low combines supple mocha-brown leather quarters, pitch-black suede toe mudguards, and a ribbed white platform cupsole designed for urban grip and timeless style.',
    story:
      'Inspired by traditional skate silhouettes reworked through an earthy coffee-and-cream palette. Built to transition seamlessly from board to boardroom casually.',
    features: [
      'Tri-tone color blocking in rich mocha brown, noir black, and crisp white',
      'Heavy-duty suede toe cap for abrasion protection',
      'Ribbed textured platform midsole with perimeter lock stitching',
      'FASHION PROFESSIONAL SKATEBOARD padded tongue patch',
      'Cushioned collar and heel loop for effortless slip-on action',
      'High-grip rubber tread with deep waffle traction grooves'
    ],
    specifications: {
      upperMaterial: 'Mocha Tumbled Leather & Velvet Suede Mudguard',
      soleMaterial: 'Perimeter-Stitched Vulcanized Platform Rubber',
      closureType: 'Heavy Flat Cotton Laces (6-Eyelet System)',
      cushioning: 'SkateDrop™ High-Density Footbed',
      weight: '410g (Single shoe, Size UK 8)',
      careInstructions: 'Spot clean leather with damp cloth. Suede protector on toe.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'mocha-black-white',
    colors: [
      {
        id: 'mocha-black-white',
        name: 'Mocha Brown, Black & White',
        hex: '#6D4C41',
        secondaryHex: '#181818',
        image: '/images/model13-mocha-skate.jpg',
        gallery: [
          '/images/model13-mocha-skate.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-26',
        author: 'Farhan Shaikh',
        rating: 5,
        date: 'November 13, 2026',
        title: 'The mocha tone is so versatile',
        comment:
          'Brown sneakers are hard to get right, but FLARE nailed the balance between mocha, black, and white. Sole is sturdy and looks killer with beige cargos.',
        verified: true,
        helpfulCount: 20,
        sizePurchased: 8,
        colorPurchased: 'Mocha Brown, Black & White'
      },
      {
        id: 'rev-27',
        author: 'Siddharth Rao',
        rating: 5,
        date: 'November 9, 2026',
        title: 'Stout build and great ankle comfort',
        comment:
          'Very solid platform sole with zero wobble. The padding inside prevents any heel rubbing.',
        verified: true,
        helpfulCount: 11,
        sizePurchased: 9,
        colorPurchased: 'Mocha Brown, Black & White'
      }
    ]
  },
  {
    id: 'flare-summit-graphic-street',
    name: 'FLARE Summit Graphic Street Lo',
    modelCode: 'FLR-14-SMT',
    collection: 'Casual Sneakers',
    tagline: 'Contemporary Streetwear Low-Top with Mountain Etching Graphic Quarters',
    price: 3799,
    originalPrice: 5299,
    rating: 4.8,
    reviewCount: 66,
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 26,
    description:
      'Where fine art meets street culture. Featuring chocolate-brown leather overlays and contrast white perforated vamp, accented with intricate Japanese woodblock-style mountain landscape etching along the side quarters.',
    story:
      'Created as a wearable canvas celebrating high-altitude exploration and alpine serenity. Built with premium reinforced eyelet straps and branded WORKING utility tags.',
    features: [
      'Artisanal monochrome mountain etching on durable canvas side quarters',
      'Rich chocolate brown leather overlays and padded heel counter',
      'Micro-perforated clean white toe box for ventilation',
      'Dual-tone rubber sole with side notch detailing',
      'Contrast brown woven flat laces and padded tongue with SMILE patch',
      'Shock-absorbing footbed lined with breathable athletic mesh'
    ],
    specifications: {
      upperMaterial: 'Tumbled Chocolate Leather & Graphic Technical Canvas',
      soleMaterial: 'Dual-Density Vulcanized Cupsole',
      closureType: 'Lace-Up (6-Eyelet Reinforced Stay)',
      cushioning: 'ComfortStep™ Memory Foam Insole',
      weight: '395g (Single shoe, Size UK 8)',
      careInstructions: 'Wipe with mild soapy damp cloth. Air dry away from direct heat.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'chocolate-landscape',
    colors: [
      {
        id: 'chocolate-landscape',
        name: 'Chocolate Mocha Brown & Landscape White',
        hex: '#4E342E',
        secondaryHex: '#FAFAFA',
        image: '/images/model14-summit-brown.jpg',
        gallery: [
          '/images/model14-summit-brown.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-28',
        author: 'Pranav Nair',
        rating: 5,
        date: 'November 14, 2026',
        title: 'The etched artwork on the side is beautiful',
        comment:
          'Super unique design that you will not see everywhere else. The chocolate brown leather is soft and looks great in natural light.',
        verified: true,
        helpfulCount: 17,
        sizePurchased: 10,
        colorPurchased: 'Chocolate Mocha Brown & Landscape White'
      },
      {
        id: 'rev-29',
        author: 'Gautam Malhotra',
        rating: 4,
        date: 'November 7, 2026',
        title: 'Great conversation starter',
        comment:
          'Got so many questions about where I bought these. Comfortable enough for daily wear at college.',
        verified: true,
        helpfulCount: 9,
        sizePurchased: 8,
        colorPurchased: 'Chocolate Mocha Brown & Landscape White'
      }
    ]
  },
  {
    id: 'flare-apex-flight-retro',
    name: 'FLARE Apex Flight Retro High',
    modelCode: 'FLR-15-FLT',
    collection: 'High-Top Sneakers',
    tagline: 'Iconic 90s Basketball Silhouette in Noir Nubuck, Crisp White & Netting Mesh',
    price: 5499,
    originalPrice: 7999,
    rating: 5.0,
    reviewCount: 184,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 36,
    description:
      'The timeless holy grail of high-top basketball heritage. Handcrafted with velvet-touch noir black nubuck leather, stark white quarter leather underlays, iconic molded TPU lace wings, breathable quarter netting, and a visible encapsulated heel Air unit.',
    story:
      'A masterclass in late 80s hardwood legacy reimagined for luxury street culture. Originally engineered for gravity-defying court maneuvers, now perfected as the ultimate statement silhouette for men.',
    features: [
      'Velvety noir black nubuck leather and premium white tumbled leather uppers',
      'Structural TPU molded lace wings for customized lockdown fit',
      'Diamond-woven quarter and tongue netting for historic court authenticity',
      'Visible heel Air-cushioning capsule for superior rebound and impact absorption',
      'Padded high-cut collar with extended Achilles heel tab',
      'Multi-directional herringbone rubber outsole for relentless traction'
    ],
    specifications: {
      upperMaterial: '100% Premium Nubuck Leather, Full-Grain Leather & TPU Mesh',
      soleMaterial: 'Dual-Color Sculpted Rubber with Encapsulated Air Unit',
      closureType: 'Speed-Lace with Molded TPU Eyelet Wings',
      cushioning: 'AirRebound™ Heel Unit & Dual-Density OrthoFoam™',
      weight: '490g (Single shoe, Size UK 8)',
      careInstructions: 'Use nubuck sponge for black panels. Leather cleaner for white leather.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'noir-ice-white',
    colors: [
      {
        id: 'noir-ice-white',
        name: 'Noir Black & Ice White',
        hex: '#111111',
        secondaryHex: '#FFFFFF',
        image: '/images/model15-retro4-noir.jpg',
        gallery: [
          '/images/model15-retro4-noir.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-30',
        author: 'Zaid Khan',
        rating: 5,
        date: 'November 15, 2026',
        title: 'Grail status. Build quality matches luxury standards.',
        comment:
          'The black nubuck is deep black and silky to the touch. The TPU wings and netting are flawless. The visible air bubble in the heel gives real bounce.',
        verified: true,
        helpfulCount: 42,
        sizePurchased: 10,
        colorPurchased: 'Noir Black & Ice White'
      },
      {
        id: 'rev-31',
        author: 'Vikramaditya Rathore',
        rating: 5,
        date: 'November 11, 2026',
        title: 'Unreal presence on feet',
        comment:
          'Absolute showstopper sneaker. Fits true to Indian size (UK 9). Padding around the ankle makes it wearable all day.',
        verified: true,
        helpfulCount: 27,
        sizePurchased: 9,
        colorPurchased: 'Noir Black & Ice White'
      }
    ]
  },
  {
    id: 'flare-matrix-street-high',
    name: 'FLARE Matrix Street High-Top',
    modelCode: 'FLR-16-MTX',
    collection: 'High-Top Sneakers',
    tagline: 'Futuristic Skate-High Architecture in Light Slate Grey & Pure White',
    price: 4699,
    originalPrice: 6599,
    rating: 4.8,
    reviewCount: 76,
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 28,
    description:
      'Clean architectural lines meet modern skate dynamics. The Matrix Street High-Top pairs cool slate-grey geometric leather panels with stark white toe and collar overlays, reinforced by a lateral utility strap and a segmented shock-absorbing sole.',
    story:
      'Engineered for city roamers who demand the ankle protection of a skate high with the pristine aesthetic of modern streetwear. Sleek, sculptural, and unapologetically bold.',
    features: [
      'Layered matte slate grey and crisp white full-grain leather construction',
      'Tactical lateral stabilizer strap with embossed FASHION SPORT branding',
      'Anatomically contoured high-top collar with Achilles notch cushion',
      'Contrasting black heel clip for torsional stability',
      'Segmented perimeter-stitched rubber sole with flex grooves',
      'Perforated toe vamp for cooling cross-ventilation'
    ],
    specifications: {
      upperMaterial: 'Full-Grain Leather, Nubuck Panels & Ballistic Trim',
      soleMaterial: 'Segmented High-Grip Vulcanized Rubber Cupsole',
      closureType: '7-Eyelet Precision Lace System with Flat Cotton Laces',
      cushioning: 'ImpactShield™ Skate-Grade Insole',
      weight: '460g (Single shoe, Size UK 8)',
      careInstructions: 'Wipe down with damp leather sponge. Store with shoe trees.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'slate-pure-white',
    colors: [
      {
        id: 'slate-pure-white',
        name: 'Light Slate Grey & Pure White',
        hex: '#9BA3A9',
        secondaryHex: '#FFFFFF',
        image: '/images/model16-matrix-grey.jpg',
        gallery: [
          '/images/model16-matrix-grey.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-32',
        author: 'Nikhil Thomas',
        rating: 5,
        date: 'November 14, 2026',
        title: 'Minimalist high-tops done right',
        comment:
          'The grey and white tones match literally everything. Ankle collar is well-padded without feeling overly bulky. Love the clean futuristic lines.',
        verified: true,
        helpfulCount: 18,
        sizePurchased: 9,
        colorPurchased: 'Light Slate Grey & Pure White'
      },
      {
        id: 'rev-33',
        author: 'Sameer Chawla',
        rating: 5,
        date: 'November 9, 2026',
        title: 'Super comfortable high-tops',
        comment:
          'Leather feels durable and broke in within a couple of hours. Sole has great traction on wet pavement.',
        verified: true,
        helpfulCount: 12,
        sizePurchased: 10,
        colorPurchased: 'Light Slate Grey & Pure White'
      }
    ]
  },
  {
    id: 'flare-force-dual-tone-low',
    name: 'FLARE Force Dual-Tone Low',
    modelCode: 'FLR-17-FRC',
    collection: 'Casual Sneakers',
    tagline: 'Legendary Street Cupsole in Cement Heather Grey & Contrast Carbon Black',
    price: 4199,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 110,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 40,
    description:
      'The quintessential street icon reimagined in a two-tone grayscale aesthetic. Featuring matte carbon-black tumbled leather quarters and collar, juxtaposed against cool cement-grey leather toe and vamp with an embroidered mini-swoosh accent and classic -AIR- cupsole.',
    story:
      'Honoring four decades of hip-hop and streetwear history. The Force Dual-Tone Low transforms an all-time classic into an everyday modern workhorse with unmatched durability and comfort.',
    features: [
      'Two-tone tumbled calfskin leather in Cement Grey & Carbon Black',
      'Embroidered black mini-swoosh logo accent at lateral forefoot',
      'Iconic thick perimeter-stitched rubber cupsole with -AIR- embossed badge',
      'Perforated toe vamp for classic breathability and athletic airflow',
      'Chunky flat black cotton laces and branded woven tongue label',
      'Full-length internal foam cushioning with arch contouring'
    ],
    specifications: {
      upperMaterial: '100% Premium Full-Grain Calfskin Leather',
      soleMaterial: 'Perimeter-Stitched Vulcanized Rubber Cupsole with Pivot Points',
      closureType: 'Lace-Up (8-Eyelet Classic System)',
      cushioning: 'Full-Length OrthoFoam™ Memory Bed',
      weight: '425g (Single shoe, Size UK 8)',
      careInstructions: 'Clean leather with damp microfiber cloth and leather balm.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'cement-carbon-black',
    colors: [
      {
        id: 'cement-carbon-black',
        name: 'Cement Grey & Carbon Black',
        hex: '#B0B7BD',
        secondaryHex: '#1C1C1C',
        image: '/images/model17-force-cement.jpg',
        gallery: [
          '/images/model17-force-cement.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-34',
        author: 'Harish Menon',
        rating: 5,
        date: 'November 15, 2026',
        title: 'Timeless look with modern comfort',
        comment:
          'The cement grey and black combo looks so clean. Way more comfortable than standard store pairs because of the memory foam footbed. Definite 5/5.',
        verified: true,
        helpfulCount: 25,
        sizePurchased: 9,
        colorPurchased: 'Cement Grey & Carbon Black'
      },
      {
        id: 'rev-35',
        author: 'Akash Varma',
        rating: 5,
        date: 'November 10, 2026',
        title: 'Quality leather and solid stitching',
        comment:
          'Stitching around the sole is tight and clean. Leather has a nice matte grain finish that does not crease ugly.',
        verified: true,
        helpfulCount: 16,
        sizePurchased: 10,
        colorPurchased: 'Cement Grey & Carbon Black'
      }
    ]
  },
  {
    id: 'flare-apex-drift-ae86',
    name: 'FLARE Apex Drift Low (AE86 Edition)',
    modelCode: 'FLR-18-DFT',
    collection: 'Original Collection',
    tagline: 'Touge Legend Tribute in Monochrome Noir, Tofu White & Kanji Lateral Script',
    price: 4399,
    originalPrice: 6199,
    rating: 5.0,
    reviewCount: 148,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 32,
    description:
      'Handcrafted homage to Japanese touge racing lore. Crafted with premium full-grain white leather, matte black toe box and swoosh, plum-purple collar lining, safety-orange heel tab, and authentic kanji lettering stamped on the lateral heel counter.',
    story:
      'Born from midnight downhill runs through misty mountain passes. The AE86 Drift Low captures the uncompromising balance, sharp agility, and timeless two-tone aesthetic of Japanese motorsport heritage.',
    features: [
      'Crisp full-grain white leather with matte black leather overlays and swoosh',
      'Japanese touge kanji embroidery on lateral heel overlay',
      'Contrast plum-purple collar lining with padded ankle collar',
      'High-visibility safety orange heel accent tab and tongue label',
      'Durable non-marking vulcanized rubber cupsole with pivot grip',
      'OrthoFoam™ dual-density footbed for all-day street comfort'
    ],
    specifications: {
      upperMaterial: '100% Full-Grain Calfskin Leather & Padded Textile Collar',
      soleMaterial: 'Vulcanized High-Density Rubber Cupsole',
      closureType: 'Lace-Up (7-Eyelet Precision System with Flat Black Laces)',
      cushioning: 'OrthoFoam™ Ergonomic Memory Insole',
      weight: '390g (Single shoe, Size UK 8)',
      careInstructions: 'Clean with damp cloth and mild leather balm. Store with shoe shapers.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'ae86-monochrome',
    colors: [
      {
        id: 'ae86-monochrome',
        name: 'Monochrome Panda White & Black',
        hex: '#FFFFFF',
        secondaryHex: '#181818',
        image: '/images/model18-drift-ae86.jpg',
        gallery: [
          '/images/model18-drift-ae86.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-36',
        author: 'Kenji Nambiar',
        rating: 5,
        date: 'November 15, 2026',
        title: 'Initial D vibes are immaculate. Must have for car guys.',
        comment:
          'The kanji detail on the heel is razor-sharp. Leather quality is leagues ahead of standard retail dunks. Fits true to size with zero heel slippage.',
        verified: true,
        helpfulCount: 38,
        sizePurchased: 9,
        colorPurchased: 'Monochrome Panda White & Black'
      },
      {
        id: 'rev-37',
        author: 'Abhinav Sen',
        rating: 5,
        date: 'November 12, 2026',
        title: 'Insane detail and packaging',
        comment:
          'The purple collar accent and orange tab give it such an authentic touch. Turns heads every time I wear it.',
        verified: true,
        helpfulCount: 21,
        sizePurchased: 10,
        colorPurchased: 'Monochrome Panda White & Black'
      }
    ]
  },
  {
    id: 'flare-gel-vortex-runner',
    name: 'FLARE Gel-Vortex Metallic Runner',
    modelCode: 'FLR-19-VTX',
    collection: 'Running Sneakers',
    tagline: 'Y2K High-Performance Tech Runner in Metallic Bronze & Deep Moss Mesh',
    price: 4199,
    originalPrice: 5899,
    rating: 4.9,
    reviewCount: 122,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 44,
    description:
      'Late 2000s tech-runner DNA reimagined with luxury metallic accents. Combines radiant metallic bronze cage overlays, open-cell deep moss breathable mesh, dual-density GEL-cushioning capsules, and a decoupled high-mileage outsole.',
    story:
      'Engineered at the nexus of high-speed athletics and Tokyo cyber-streetwear. Designed to absorb severe foot-strike impact while radiating an aggressive metallic aesthetic under urban lights.',
    features: [
      'Multi-panel metallic bronze structural cage and ballistic open-cell mesh',
      'Dual-zone visible GEL-cushioning pods in heel and forefoot',
      'High-torsion TPU midfoot stability truss for arch lockdown',
      'Breathable padded mesh tongue with anatomical contouring',
      'Reflective metallic side lines for low-light night visibility',
      'Rugged rubber compound outsole with multi-directional flex grooves'
    ],
    specifications: {
      upperMaterial: 'Metallic Polyurethane Overlays & Engineered Mesh',
      soleMaterial: 'GEL-Infused EVA Midsole & AHAR+ Rubber Outsole',
      closureType: 'Speed-Lacing System with Round Performance Cords',
      cushioning: 'Dual GEL-Vortex™ Shock Dissipation Units',
      weight: '355g (Single shoe, Size UK 8)',
      careInstructions: 'Spot clean mesh with damp sponge. Avoid harsh chemical solvents.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'bronze-moss',
    colors: [
      {
        id: 'bronze-moss',
        name: 'Metallic Bronze & Deep Moss Black',
        hex: '#8C7853',
        secondaryHex: '#1A201C',
        image: '/images/model19-metallic-bronze.jpg',
        gallery: [
          '/images/model19-metallic-bronze.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-38',
        author: 'Siddharth Menon',
        rating: 5,
        date: 'November 15, 2026',
        title: 'Walked across the city with zero fatigue',
        comment:
          'The GEL cushioning in the heel is unbelievably forgiving. Metallic bronze overlays give it a unique futuristic vibe that goes crazy with acid wash denim.',
        verified: true,
        helpfulCount: 29,
        sizePurchased: 10,
        colorPurchased: 'Metallic Bronze & Deep Moss Black'
      },
      {
        id: 'rev-39',
        author: 'Rahul Kapoor',
        rating: 5,
        date: 'November 11, 2026',
        title: 'Top-tier tech runner',
        comment:
          'Extremely light on feet and breathability is great in humid Indian weather. Build quality feels very sturdy.',
        verified: true,
        helpfulCount: 17,
        sizePurchased: 8,
        colorPurchased: 'Metallic Bronze & Deep Moss Black'
      }
    ]
  },
  {
    id: 'flare-heritage-gum-terrace',
    name: 'FLARE Heritage Gum Terrace Low',
    modelCode: 'FLR-20-TRS',
    collection: 'Original Collection',
    tagline: 'The Quintessential Low-Profile Court Sneaker with Suede T-Toe & Honey Gum Sole',
    price: 3899,
    originalPrice: 5499,
    rating: 4.9,
    reviewCount: 165,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 52,
    description:
      'The timeless court silhouette that complements every outfit. Handcrafted from smooth off-white calfskin leather, light grey suede T-toe reinforcement, deep midnight-navy swoosh overlay, and an authentic sticky honey-gum rubber cupsole.',
    story:
      'Originally conceived for indoor racquetball and squash courts of the late 70s, now perfected as an essential wardrobe staple. Clean, effortless, and endlessly versatile.',
    features: [
      'Supple off-white full-grain leather upper with velvety grey suede T-toe',
      'Contrast deep midnight-navy leather side swoosh and heel badge',
      'Authentic non-marking honey gum rubber outsole with circular herringbone tread',
      'Padded low-cut collar with soft breathable textile lining',
      'Waxed flat cream cotton laces with reinforced eyelet stays',
      'Removable anatomical OrthoFoam™ arch support footbed'
    ],
    specifications: {
      upperMaterial: 'Full-Grain Calfskin Leather & Italian Suede Mudguard',
      soleMaterial: 'Vulcanized Natural Honey Gum Rubber',
      closureType: 'Lace-Up (7-Eyelet Precision System)',
      cushioning: 'OrthoFoam™ Dual-Density Insole',
      weight: '370g (Single shoe, Size UK 8)',
      careInstructions: 'Wipe leather with damp cloth. Use suede eraser for toe overlay.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'offwhite-navy-gum',
    colors: [
      {
        id: 'offwhite-navy-gum',
        name: 'Off-White, Suede Grey & Navy Blue Gum',
        hex: '#F7F5F0',
        secondaryHex: '#0D2240',
        image: '/images/model20-killshot-gum.jpg',
        gallery: [
          '/images/model20-killshot-gum.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-40',
        author: 'Varun Nair',
        rating: 5,
        date: 'November 15, 2026',
        title: 'The perfect everyday shoe does exist',
        comment:
          'Matches chinos, dark denim, and shorts effortlessly. The gum sole has authentic grip and the grey suede toe looks premium.',
        verified: true,
        helpfulCount: 34,
        sizePurchased: 9,
        colorPurchased: 'Off-White, Suede Grey & Navy Blue Gum'
      },
      {
        id: 'rev-41',
        author: 'Prashant Iyer',
        rating: 5,
        date: 'November 10, 2026',
        title: 'Cleanest silhouette in my rotation',
        comment:
          'Leather is soft right out of the box with zero stiff break-in pain. Extremely pleased with this purchase.',
        verified: true,
        helpfulCount: 22,
        sizePurchased: 10,
        colorPurchased: 'Off-White, Suede Grey & Navy Blue Gum'
      }
    ]
  },
  {
    id: 'flare-reverse-apex-olive',
    name: 'FLARE Reverse-Apex Low (Olive Edition)',
    modelCode: 'FLR-21-REV',
    collection: 'Original Collection',
    tagline: 'Iconic Street Silhouette Featuring Suede Noir Quarters & Reverse Olive Swoosh',
    price: 5299,
    originalPrice: 7499,
    rating: 5.0,
    reviewCount: 215,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 38,
    description:
      'The crown jewel of modern hype sneaker culture. Engineered with velvety noir black suede underlays, sail white tumbled leather overlays, an oversized reversed military-olive swoosh, contrast red embroidered accents, and an aged yellow-cream cupsole.',
    story:
      'Inspired by Texas music festival energy and rebellious deconstruction. Every stitch balances heritage hardwood court DNA with subversive high-fashion streetwear swagger.',
    features: [
      'Velvety noir black suede quarters with sail white tumbled leather framing',
      'Signature oversized inverted military olive leather swoosh on lateral side',
      'Vintage aged yellowed rubber midsole with perimeter lock stitching',
      'Vibrant red embroidered cactus & wings branding on heel counters',
      'Chunky flat waxed black cotton laces with spare olive laces included',
      'OrthoFoam™ high-resilience footbed engineered for all-day comfort'
    ],
    specifications: {
      upperMaterial: 'Premium Suede Noir, Full-Grain Tumbled Leather & Olive Trim',
      soleMaterial: 'Vintage-Toned Vulcanized Rubber Cupsole',
      closureType: 'Lace-Up (8-Eyelet Precision System)',
      cushioning: 'ImpactShield™ Dual-Layer Memory Foam',
      weight: '415g (Single shoe, Size UK 8)',
      careInstructions: 'Dry brush suede quarters. Use leather balm on sail leather.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'noir-reverse-olive',
    colors: [
      {
        id: 'noir-reverse-olive',
        name: 'Noir Black, Sail White & Military Olive Green',
        hex: '#111111',
        secondaryHex: '#556B2F',
        image: '/images/model21-reverse-olive.jpg',
        gallery: [
          '/images/model21-reverse-olive.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-42',
        author: 'Devendra Singhania',
        rating: 5,
        date: 'November 16, 2026',
        title: 'Flawless execution. The reverse olive swoosh is legendary.',
        comment:
          'Easily the most hyped sneaker in the FLARE collection. Black suede is rich and deep, sail leather is butter soft, and the aged midsole finishes it off perfectly.',
        verified: true,
        helpfulCount: 46,
        sizePurchased: 10,
        colorPurchased: 'Noir Black, Sail White & Military Olive Green'
      },
      {
        id: 'rev-43',
        author: 'Aakash Verma',
        rating: 5,
        date: 'November 13, 2026',
        title: 'Grail quality without the crazy reseller price',
        comment:
          'Stitching is immaculate. Wore it to a sneaker convention and got non-stop questions. Super comfortable footbed.',
        verified: true,
        helpfulCount: 31,
        sizePurchased: 9,
        colorPurchased: 'Noir Black, Sail White & Military Olive Green'
      }
    ]
  },
  {
    id: 'flare-force-pine-street',
    name: 'FLARE Force Pine Street Low',
    modelCode: 'FLR-22-PNE',
    collection: 'Casual Sneakers',
    tagline: 'Urban Icon in Deep Forest Pine Green, Clean Chalk White & Obsidian Black',
    price: 4299,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 98,
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 36,
    description:
      'Bold forestry hues engineered for street swagger. Combines deep pine-green full-grain leather toe guards and lace stays, crisp white side quarters, obsidian-black heel collar, and a thick perimeter-stitched rubber cupsole.',
    story:
      'Crafted for gentlemen who appreciate rich botanical green tones merged with the timeless street cupsole silhouette. Built tough for daily pavement grinding and effortless casual styling.',
    features: [
      'Supple full-grain calfskin leather in Deep Forest Pine Green & Chalk White',
      'Obsidian black contrast heel tab and lateral swoosh branding',
      'Classic perforated toe box for cooling ventilation',
      'Thick perimeter-stitched street cupsole with -AIR- embossed badge',
      'Flat forest-green cotton laces with metal reinforced eyelets',
      'Ergonomic memory foam footbed with enhanced arch contour'
    ],
    specifications: {
      upperMaterial: '100% Full-Grain Calfskin Leather',
      soleMaterial: 'Perimeter-Stitched Vulcanized Rubber Cupsole',
      closureType: 'Lace-Up (8-Eyelet Classic System)',
      cushioning: 'OrthoFoam™ Full-Length Memory Cushioning',
      weight: '430g (Single shoe, Size UK 8)',
      careInstructions: 'Clean with damp cloth and leather conditioner. Air dry naturally.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'pine-white-black',
    colors: [
      {
        id: 'pine-white-black',
        name: 'Forest Pine Green, White & Black',
        hex: '#1E4D2B',
        secondaryHex: '#FFFFFF',
        image: '/images/model22-pine-street.jpg',
        gallery: [
          '/images/model22-pine-street.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-44',
        author: 'Rishi Mohan',
        rating: 5,
        date: 'November 15, 2026',
        title: 'The pine green shade is incredible in person',
        comment:
          'Looks fantastic with off-white jeans and a dark green tee. Very solid construction and comfortable for whole-day wear.',
        verified: true,
        helpfulCount: 23,
        sizePurchased: 9,
        colorPurchased: 'Forest Pine Green, White & Black'
      },
      {
        id: 'rev-45',
        author: 'Anand Kulkarni',
        rating: 5,
        date: 'November 12, 2026',
        title: 'Great leather and solid stitching',
        comment:
          'Sole is thick and provides good height and cushioning. Does not crease awkwardly.',
        verified: true,
        helpfulCount: 15,
        sizePurchased: 10,
        colorPurchased: 'Forest Pine Green, White & Black'
      }
    ]
  },
  {
    id: 'flare-480-vintage-court',
    name: 'FLARE 480 Vintage Court Low',
    modelCode: 'FLR-23-CRT',
    collection: 'Original Collection',
    tagline: 'Classic Hardwood Basketball Heritage in Deep Navy Suede & Cream Leather',
    price: 3999,
    originalPrice: 5699,
    rating: 4.8,
    reviewCount: 134,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    stockQuantity: 48,
    description:
      'Straight from the 1983 hardwood archives. Handcrafted with butter-soft deep navy blue suede overlays, perforated vintage-cream leather toe box and collar, signature cream saddle badge, and an aged yellow-tinted cupsole.',
    story:
      'Born on the storied basketball courts of New England. Stripped of loud gimmicks, engineered for authentic collegiate court style, supreme foot support, and timeless vintage prestige.',
    features: [
      'Rich deep navy blue suede overlays and vintage cream leather vamp',
      'Micro-perforated toe box and side quarters for optimal airflow',
      'Iconic vintage cream saddle badge with tonal stitch detailing',
      'Aged yellow-cream vulcanized rubber cupsole with pivot circle traction',
      'Padded low-cut collar and woven tongue patch with classic court numbering',
      'Removable OrthoFoam™ arch-cushioned footbed'
    ],
    specifications: {
      upperMaterial: 'Premium Suede Overlays & Tumbled Nappa Leather',
      soleMaterial: 'Vintage-Toned Non-Marking Rubber Cupsole',
      closureType: 'Lace-Up (7-Eyelet Precision System with Flat Cream Laces)',
      cushioning: 'OrthoFoam™ Basketball Court Cushioning',
      weight: '400g (Single shoe, Size UK 8)',
      careInstructions: 'Brush suede with dry soft bristle brush. Wipe leather with damp cloth.',
      countryOfOrigin: 'Designed in India / Ethically Handcrafted'
    },
    shipping: {
      dispatchTime: 'Dispatched within 24 hours',
      deliveryEstimate: '3-5 Business Days across India',
      shippingFee: 'Free Express Shipping on prepaid orders',
      returns: '7-Day Doorstep Returns & Size Exchanges'
    },
    availableSizes: [6, 7, 8, 9, 10, 11],
    defaultColorId: 'navy-vintage-cream',
    colors: [
      {
        id: 'navy-vintage-cream',
        name: 'Deep Navy Blue & Vintage Cream White',
        hex: '#15284F',
        secondaryHex: '#F4F0E8',
        image: '/images/model23-court-480.jpg',
        gallery: [
          '/images/model23-court-480.jpg'
        ],
        inStock: true
      }
    ],
    demoReviews: [
      {
        id: 'rev-46',
        author: 'Raghavan Pillai',
        rating: 5,
        date: 'November 16, 2026',
        title: 'Authentic 80s court silhouette. Pure perfection.',
        comment:
          'The navy suede paired with the aged cream sole gives this shoe so much character. Wore it with grey sweatpants and white socks like the lookbook. 10/10.',
        verified: true,
        helpfulCount: 37,
        sizePurchased: 10,
        colorPurchased: 'Deep Navy Blue & Vintage Cream White'
      },
      {
        id: 'rev-47',
        author: 'Karan Mehra',
        rating: 5,
        date: 'November 11, 2026',
        title: 'Incredible comfort and retro style',
        comment:
          'Much lighter than other court shoes. Arch support is noticeable and keeps feet comfortable even after walking all day.',
        verified: true,
        helpfulCount: 20,
        sizePurchased: 9,
        colorPurchased: 'Deep Navy Blue & Vintage Cream White'
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
  { name: 'Grey', hex: '#8C9298' },
  { name: 'Brown', hex: '#6D4C41' }
];

export const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: 99999 },
  { label: 'Under ₹1,000', min: 0, max: 999 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000 – ₹5,000', min: 2000, max: 5000 },
  { label: 'Above ₹5,000', min: 5001, max: 99999 }
];
