'use client';

import { Award, Bike, MapPin, Star, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Award,
      value: '10K+',
      label: 'Happy Riders',
    },
    {
      icon: Bike,
      value: '500+',
      label: 'Vehicles on Platform',
    },
    {
      icon: MapPin,
      value: '50+',
      label: 'Cities (Upcoming)',
    },
    {
      icon: Star,
      value: '4.8',
      label: 'Average Rating',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Verified Partners',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-lg shadow-gray-100/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 ${
                    idx > 0 && idx % 2 === 0 ? 'pt-4 sm:pt-0' : ''
                  } ${idx > 0 ? 'sm:pl-6' : ''}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#FF1E36] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-gray-900 leading-none">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-semibold text-gray-500 mt-1">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
