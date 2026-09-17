'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { vehicles } from '@/data/vehicles';
import VehicleCard from './VehicleCard';

export default function PopularVehicles({ onBookNow, activeTabOverride }) {
  const [activeTab, setActiveTab] = useState('bikes');

  // Allow parent component (e.g., RideCategories) to override tab if selected
  const currentTab = activeTabOverride || activeTab;

  const filteredVehicles = vehicles.filter((v) => {
    if (currentTab === 'all') return true;
    return v.category === currentTab;
  });

  return (
    <section id="vehicles" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Popular Vehicles
          </h2>

          {/* Category Tabs */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <button
              onClick={() => setActiveTab('bikes')}
              className={`relative py-1 text-sm font-bold transition-colors ${
                currentTab === 'bikes'
                  ? 'text-[#FF1E36]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Bikes
              {currentTab === 'bikes' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF1E36] rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('scooters')}
              className={`relative py-1 text-sm font-bold transition-colors ${
                currentTab === 'scooters'
                  ? 'text-[#FF1E36]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Scooters
              {currentTab === 'scooters' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF1E36] rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('cars')}
              className={`relative py-1 text-sm font-bold transition-colors ${
                currentTab === 'cars'
                  ? 'text-[#FF1E36]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Cars
              {currentTab === 'cars' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF1E36] rounded-full" />
              )}
            </button>
          </div>

          {/* View All Link */}
          <button
            onClick={() => setActiveTab('all')}
            className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#FF1E36] hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {(filteredVehicles.length > 0 ? filteredVehicles : vehicles.slice(0, 6)).map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onBookNow={onBookNow}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => setActiveTab('all')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF1E36]"
          >
            <span>View All Vehicles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
