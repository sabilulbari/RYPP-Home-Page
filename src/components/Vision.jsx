'use client';

import Image from "next/image";

export default function Vision() {
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 p-8 sm:p-10 lg:p-12 min-h-[380px] flex flex-col justify-between shadow-xl border border-gray-800 group">
      {/* Background Image */}
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFft96z3LOvHML5B_G0TZszElP11JhV14IwbuWAgnEhDb-1evPPD9DIA&s=10"
        alt="Mountain highway vision"
        height={100}
        width={150}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-black/40" />

      {/* Text Content */}
      <div className="relative z-10 max-w-lg">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Our Vision</h3>

        <p className="mt-4 text-sm sm:text-base text-gray-200 font-normal leading-relaxed">
          To make mobility simple, reliable, and accessible for everyone — powering journeys across every city, town, and destination in India.
        </p>
      </div>

      {/* Cursive Overlay Bottom Right */}
      <div className="relative -rotate-20 z-10 text-right self-end mt-8">
        <span className="text-3xl sm:text-4xl font-script text-white drop-shadow-md font-bold leading-tight block">
          A Greener <br />
          <span className="text-red-400">Brighter</span> <br />
          India
        </span>
      </div>
    </div>
  );
}
