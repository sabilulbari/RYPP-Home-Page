'use client';

import { ArrowRight, Mountain, Briefcase, Car, Compass } from 'lucide-react';

export default function PromoBanner({ onExploreClick }) {
  const features = [
    { label: 'Weekend Getaways', icon: Mountain },
    { label: 'Business Travel', icon: Briefcase },
    { label: 'Daily Commute', icon: Car },
    { label: 'Exploring New Cities', icon: Compass },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl min-h-[360px] sm:min-h-[400px] flex flex-col justify-between">
          
          {/* Scenic Background Image */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600"
            alt="Scenic road journey"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          {/* Top Main Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-14 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Rent Smart. Ride Happy.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              Whether it's a quick city ride or a long road trip, <br className="hidden sm:inline" />
              RYPP makes vehicle rental simple, affordable and hassle-free.
            </p>

            <button
              onClick={() => {
                if (onExploreClick) onExploreClick();
                const elem = document.getElementById('vehicles');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white font-semibold text-sm shadow-lg shadow-red-500/30 transition-all active:scale-[0.98]"
            >
              <span>Explore Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cursive Overlay Top Right */}
          <div className="absolute top-8 right-8 z-10 hidden md:block text-right">
            <span className="text-3xl lg:text-4xl font-script text-white/90 drop-shadow-md">
              Good Rides Brighter Stories
            </span>
          </div>

          {/* Bottom Features Bar */}
          <div className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10 px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
