'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function FinalCTA({ onBookClick }) {
  return (
    <section className="py-[1px] bg-white">
      <div>
        <div className="relative  overflow-hidden bg-gray-900 shadow-2xl p-8 sm:p-12 lg:p-16 min-h-[340px] flex items-center justify-between">
          {/* Background Image */}
          <Image
            width={2000}
            height={1500}
            src="https://t4.ftcdn.net/jpg/06/17/22/05/360_F_617220542_RSgQ6TUVLl0I3RTBRP9xAXfhJiFu1bio.jpg"
            alt="Scenic road journey at sunset"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-300"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

          {/* Left Text & CTA */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">Ready for Your Next Journey?</h2>

            <p className="mt-3 text-sm sm:text-base text-gray-200 font-medium leading-relaxed">Choose your ride and experience freedom like never before.</p>

            <button
              onClick={onBookClick}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#FF1E36] hover:bg-[#E01B32] text-white font-semibold text-base shadow-lg shadow-red-500/30 transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Cursive Decorative Typography */}
          <div className="relative right-8 z-10 hidden lg:block text-right -rotate-25">
            <span className="text-3xl lg:text-4xl font-script text-white/90 drop-shadow-lg font-bold leading-snug block  ">
              Different <br />
              Journeys <br />
              <span className="text-red-400">A Brighter</span> <br />
              Tomorrow.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
