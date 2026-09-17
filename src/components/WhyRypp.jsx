'use client';

import { IndianRupee, ShieldCheck, MapPin, Headset } from 'lucide-react';
import AppDownload from './AppDownload';

export default function WhyRypp() {
  const features = [
    {
      icon: IndianRupee,
      title: 'Affordable Prices',
      description: 'Great vehicles, budget friendly.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Partners',
      description: 'Trusted & rated local vendors.',
    },
    {
      icon: MapPin,
      title: 'Pan India Availability',
      description: '50+ cities and counting.',
    },
    {
      icon: Headset,
      title: '24/7 Support',
      description: "We're always here for you.",
    },
  ];

  return (
    <section id="why-rypp" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Why RYPP Features */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why RYPP?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
              More than just rentals — a better way to move.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF1E36] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Download App Card */}
          <div className="lg:col-span-5">
            <AppDownload />
          </div>

        </div>

      </div>
    </section>
  );
}
