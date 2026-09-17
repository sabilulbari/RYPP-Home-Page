
'use client';

import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { vehicles } from '../../public/data/vehicles';
import VehicleCard from './VehicleCard';

export default function PopularVehicles({ onBookNow, activeTabOverride }) {
  // Local tab state
  const [activeTab, setActiveTab] = useState('bikes');

  // If local tab is changed, it will override parent tab
  const [isLocalOverride, setIsLocalOverride] = useState(false);

  // Parent override OR local override
  const currentTab = isLocalOverride
    ? activeTab
    : activeTabOverride ?? activeTab;

  // Change tab from this component
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsLocalOverride(true);
  };

  // Filter vehicles
  const filteredVehicles =
    currentTab === 'all'
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.category === currentTab);

  return (
    <section id="vehicles" className="py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Popular Vehicles</h2>

          {/* Category Tabs */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Bikes */}
            <button
              onClick={() => handleTabChange("bikes")}
              className={`relative py-1 text-sm font-bold transition-colors ${currentTab === "bikes" ? "text-[#FF1E36]" : "text-gray-500 hover:text-[#FF1E36] cursor-pointer "}`}
            >
              Bikes
              {currentTab === "bikes" && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF1E36] rounded-full" />}
            </button>

            <Plus className="w-3.5 h-3.5 text-green-900 " />

            {/* Scooters */}
            <button
              onClick={() => handleTabChange("scooters")}
              className={`relative py-1 text-sm font-bold transition-colors ${currentTab === "scooters" ? "text-[#FF1E36]" : "text-gray-500 hover:text-[#FF1E36] cursor-pointer"}`}
            >
              Scooters
              {currentTab === "scooters" && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF1E36] rounded-full" />}
            </button>
            <Plus className="w-3.5 h-3.5 text-green-900 " />

            {/* Cars */}
            <button
              onClick={() => handleTabChange("cars")}
              className={`relative py-1 text-sm font-bold transition-colors ${currentTab === "cars" ? "text-[#FF1E36]" : "text-gray-500 hover:text-[#FF1E36] cursor-pointer"}`}
            >
              Cars
              {currentTab === "cars" && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF1E36] rounded-full" />}
            </button>
          </div>

          {/* View All */}
          <button onClick={() => handleTabChange("all")} className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#FF1E36] hover:underline cursor-pointer">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
          ))}
        </div>

        {/* No Vehicle */}
        {filteredVehicles.length === 0 && <div className="py-12 text-center text-gray-500">No vehicles available in this category.</div>}

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <button onClick={() => handleTabChange("all")} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF1E36]">
            <span>View All Vehicles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
