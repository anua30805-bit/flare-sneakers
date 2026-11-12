# FLARE SNEAKERS – Premium Men's Footwear E-Commerce Platform

> **"STEP INTO YOUR STYLE."**  
> *"BUILT FOR MEN. MADE FOR EVERY STEP."*

**FLARE SNEAKERS** is an international-grade, men's-exclusive sneaker e-commerce website built with React 18, TypeScript, Tailwind CSS, Lucide Icons, and Vite.

---

## 👟 1. The Men's Sneaker Collection

### **Model 01 – FLARE Retro Court Classic (Original Reference Sneaker)**
- **Design Philosophy**: Handcrafted full-grain calfskin leather low-top court silhouette with a brushed suede T-toe cap, vulcanized caramel gum cupsole, and signature chevron side sweep.
- **Interactive 4 Colour Variations** (Exact same silhouette, structure, stitching, and sole across all variants):
  1. **White & Forest Green**: Pure white leather upper, forest green (`#003D32`) heel tab and side stripe, cream suede toe, gum sole.
  2. **Triple Black Edition**: Deep matte tumbled black leather, charcoal suede toe cap, black sole, black flat laces.
  3. **Deep Navy Blue**: Rich navy blue leather, navy suede overlay, crisp white accent trim, gum sole.
  4. **Slate Heather Grey**: Cool slate grey leather, light grey suede toe cap, chalk white accents, gum sole.
- **Price**: ₹3,999 *(Original ₹5,999 — 33% OFF)*
- **Sizes**: UK 6, UK 7, UK 8, UK 9, UK 10, UK 11

### **Model 02 – FLARE Apex Street High-Top**
- **Design Philosophy**: Architectural streetwear high-top silhouette with tactical padded collar, heavy-gauge oiled nubuck leather, ballistic Cordura® nylon panels, and sculpted geometric lug sole.
- **Price**: ₹4,999 *(Original ₹6,999 — 28% OFF)*
- **Sizes**: UK 6, UK 7, UK 8, UK 9, UK 10, UK 11

### **Model 03 – FLARE Kinetic Aero Runner**
- **Design Philosophy**: High-velocity athletic running sneaker with breathable zoned-knit jacquard upper, aerodynamic cushioning, neon lace accents, and nitrogen-infused rebound foam midsole.
- **Price**: ₹3,499 *(Original ₹4,999 — 30% OFF)*
- **Sizes**: UK 6, UK 7, UK 8, UK 9, UK 10, UK 11

### **Model 04 – FLARE Minimalist Luxe Casual**
- **Design Philosophy**: Ultra-clean Italian-style low-profile luxury casual sneaker crafted from unbroken buttery smooth nappa calfskin leather and 360-degree perimeter-stitched cupsole.
- **Price**: ₹4,499 *(Original ₹5,999 — 25% OFF)*
- **Sizes**: UK 6, UK 7, UK 8, UK 9, UK 10, UK 11

---

## 🌐 2. The 4 Main Page Templates

| Route | Page | Key Features |
|---|---|---|
| `/` | **Homepage** | Full-width `#003D32` dark forest-green cinematic hero section with floating sneaker visual, featured collection cards, best sellers, promotional banner ("UPGRADE YOUR SNEAKER GAME"), brand pillars ("Why Choose FLARE"), verified customer reviews, newsletter sign-up. |
| `/shop` | **Shop / Men's Catalogue** | Inspired by modern shopping catalogues with sidebar filters: Categories, Price in INR (`₹`), Sizes (UK 6–11), Colours (White, Green, Black, Blue, Grey), live search bar, sorting (price low-high, high-low, newest, popularity), dynamic colour switching directly on product cards. |
| `/product/:id` | **Product Details** | Multi-angle product gallery (Profile, 45-degree angle, Sole, Heel) with interactive hover zoom and fullscreen modal, dynamic colour selector updating imagery live, UK size selector with interactive size guide modal, quantity controls, Add to Cart, Buy Now, detailed specifications accordion (Upper, Sole, Weight, Care, Shipping, Returns), demonstration customer reviews. |
| `/about` / `/contact` | **About & Contact** | Brand story (*"MORE THAN SNEAKERS. IT'S A LIFESTYLE."*), Mission, Vision, Brand Pillars, Interactive FAQ accordion (6 questions), responsive contact form with input validation, direct WhatsApp and Instagram shortcuts, business office coordinates in Mumbai. |

---

## 🛒 3. Cart & Indian Checkout System

- **Persistent Cart**: Synced across page reloads using `localStorage`.
- **Slide-out Cart Drawer**: Displays selected colourway, UK size, product thumbnail, quantity controls, subtotal, shipping calculation, and promo code support (`FLARE10` for 10% off).
- **Indian Checkout Workflow**:
  - Full Name, 10-digit Indian mobile number validation, Email address.
  - Delivery address with City, Indian State dropdown, and 6-digit PIN code validation.
  - Payment options: **Razorpay** (Cards, NetBanking, Wallets), **Instant UPI** (GPay, PhonePe, Paytm), and **Cash on Delivery (COD)**.
  - Simulated payment verification flow: NEVER displays successful payment unless properly checked and verified.
  - Printable / downloadable PDF order invoice with unique order ID (`FLR-XXXXXX`).

---

## 🎨 4. Brand Palette & Aesthetics

- **Forest Green**: `#003D32`
- **Accent Green**: `#0D7058`
- **Emerald Highlight**: `#109B7A`
- **White**: `#FFFFFF`
- **Black**: `#101010`
- **Light Grey**: `#F4F4F4`
- **Currency**: Indian Rupees (`₹`)
- **Audience**: Exclusively Men's Footwear (Zero women's footwear)

---

## 🚀 5. Development & Running the Application

The web server is currently running locally at:
👉 **`http://localhost:3000`**

To restart or build manually:
```bash
# Start local preview server:
.\run_npm.bat run preview -- --port 3000

# Start development server with hot-reload:
.\run_npm.bat run dev

# Build production bundle:
.\run_npm.bat run build
```
