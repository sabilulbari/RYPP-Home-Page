# RYPP — Vehicle Rental Homepage

A highly polished, production-quality, responsive homepage for **RYPP — Ride Your Way**, India's Next-Gen Vehicle Rental Platform.

Recreated with pixel-close fidelity to the reference design specification `home_page.png`.

---

## 🚀 Features

- **Pixel-Accurate Visual Reproduction**: Recreates exact layout, typography hierarchy, custom script font overlays, color tokens (brand red `#FF1E36`, dark navy `#0B0F19`), spacing, and card designs.
- **Dynamic Category Tab Filtering**: Real-time React state switching between **Bikes**, **Scooters**, and **Cars** without page reloads.
- **Interactive Booking Modal**: Fully functional modal with pre-filled vehicle details, custom form validation for user details & dates, and interactive success states.
- **Responsive Navigation Drawer**: Custom mobile slide-out menu with smooth backdrop blur, location selector, Sign In, and CTA.
- **Interactive Testimonial Slider**: Rider reviews carousel with interactive navigation controls and pagination indicators.
- **Newsletter Subscription Validation**: Real-time email syntax regex validation with inline feedback messages.
- **Fully Responsive**: Optimized for desktop (1440px+), tablet (768px - 1023px), and mobile viewports (360px - 430px) without horizontal scrollbar overflow.

---

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Language**: JavaScript (ES6+ / JSX)
- **Styling**: Tailwind CSS v3 & PostCSS
- **Icons**: Lucide React
- **Typography**: `Inter` (sans-serif) & `Caveat` (script overlays) via `next/font/google`

---

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css         # Tailwind directives & CSS variables
│   ├── layout.js          # Root layout with Google Fonts setup
│   └── page.js            # Main homepage composition
├── components/
│   ├── Navbar.jsx         # Sticky desktop header with location & CTAs
│   ├── MobileMenu.jsx     # Slide-out mobile drawer menu
│   ├── Hero.jsx           # Hero banner with feature pills & overlay scripts
│   ├── FeatureHighlights.jsx # 4 key highlights (10K+ Riders, 24/7 Support, etc.)
│   ├── RideCategories.jsx # "Choose Your Ride" 3-column cards
│   ├── PromoBanner.jsx    # Dark banner ("Rent Smart. Ride Happy.")
│   ├── PopularVehicles.jsx# Tabbed vehicle showcase section
│   ├── VehicleCard.jsx    # Reusable vehicle pricing & rating card
│   ├── BookingModal.jsx   # Interactive modal form with validation
│   ├── WhyRypp.jsx        # 2x2 value propositions section
│   ├── AppDownload.jsx    # Mobile app promotion card with phone mockup
│   ├── PopularDestinations.jsx # Top travel destinations grid
│   ├── DestinationCard.jsx# Reusable destination card with dark gradient
│   ├── HowItWorks.jsx     # 4 horizontal numbered steps
│   ├── Testimonial.jsx    # Red rider review slider card
│   ├── Vision.jsx         # "Our Vision" dark scenic card
│   ├── Stats.jsx          # Horizontal statistics bar
│   ├── FinalCTA.jsx       # Sunset scenic final call-to-action banner
│   ├── Footer.jsx         # Dark navy footer with quick links & support
│   └── NewsletterForm.jsx # Email newsletter validation form
├── data/
│   ├── vehicles.js        # Mock data for bikes, scooters, and cars
│   └── destinations.js    # Mock data for top Indian travel destinations
├── next.config.js         # Next.js configuration & image remote patterns
├── tailwind.config.js     # Custom design tokens & brand color extension
└── package.json
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js (v18.0.0 or higher)** installed.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd rypp-vehicle-rental
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🏃 Running Development Server

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

---

## 🏗️ Production Build

To build the project for production:
```bash
npm run build
```

To run the production build locally:
```bash
npm run start
```

---

## ☁️ Deployment on Vercel

This project is fully prepared for zero-configuration deployment on **Vercel**:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **New Project**.
3. Import your repository.
4. Select **Next.js** as the Framework Preset (Vercel will auto-detect it).
5. Click **Deploy**.

Vercel will automatically run `npm run build` and provision an optimized edge network deployment.
