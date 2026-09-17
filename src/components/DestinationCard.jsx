'use client';

import Image from "next/image";

export default function DestinationCard({ destination }) {
  return (
    <div className="group relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      {/* Background Image */}
      <Image
        src={destination.image}
        alt={destination.name}
        height={100}
        width={100}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Bottom Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
          {destination.name}
        </h3>
        <p className="text-xs text-gray-300 font-medium mt-0.5">
          {destination.subtitle}
        </p>
      </div>
    </div>
  );
}
