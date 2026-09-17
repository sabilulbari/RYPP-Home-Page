'use client';

import { Users, Bike, ShieldCheck, Headset } from 'lucide-react';

export default function FeatureHighlights() {
  const highlights = [
    {
      icon: Users,
      title: 'Trusted by',
      subtitle: '10K+ Riders',
    },
    {
      icon: Bike,
      title: 'Wide Range',
      subtitle: 'of Vehicles',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Secure',
      subtitle: 'Rentals',
    },
    {
      icon: Headset,
      title: '24/7',
      subtitle: 'Support',
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-lg shadow-gray-100/80">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className={`flex items-center gap-3.5 ${idx > 0 && idx % 2 === 0 ? 'pt-4 md:pt-0' : ''} ${idx % 2 === 1 ? 'pt-4 sm:pt-0' : ''} md:px-4 ${idx === 0 ? 'md:pl-0' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#FF1E36] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500 leading-tight">
                  {item.title}
                </span>
                <span className="block text-sm font-bold text-gray-900 leading-tight">
                  {item.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
