'use client';

import { Star, ArrowRight } from 'lucide-react';

export default function VehicleCard({ vehicle, onBookNow }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Vehicle Image Container */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 mb-3">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Vehicle Details */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight line-clamp-1">
          {vehicle.name}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="font-semibold text-gray-900">{vehicle.rating}</span>
          <span>({vehicle.reviews} reviews)</span>
        </div>

        {/* Price Tag */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-lg sm:text-xl font-extrabold text-gray-900">
            ₹ {vehicle.price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs font-medium text-gray-500">/ day</span>
        </div>
      </div>

      {/* Book Now Button */}
      <button
        onClick={() => onBookNow(vehicle)}
        className="mt-4 w-full py-2.5 px-4 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
      >
        <span>Book Now</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
