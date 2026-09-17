'use client';

import { ArrowRight } from 'lucide-react';
import { destinations } from '../../public/data/destinations';
import DestinationCard from './DestinationCard';

export default function PopularDestinations() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="mt-1 text-sm sm:text-base text-gray-600 font-medium">
              Top places our riders love to explore.
            </p>
          </div>

          <a 
            href="#destinations" 
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF1E36] hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

      </div>
    </section>
  );
}
