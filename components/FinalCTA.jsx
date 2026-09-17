'use client';

import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onBookClick }) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl p-8 sm:p-12 lg:p-16 min-h-[340px] flex items-center justify-between">
          
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600"
            alt="Scenic road journey at sunset"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          {/* Left Text & CTA */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready for Your Next Journey?
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-gray-200 font-medium leading-relaxed">
              Choose your ride and experience freedom like never before.
            </p>

            <button
              onClick={onBookClick}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white font-semibold text-base shadow-lg shadow-red-500/30 transition-all active:scale-[0.98]"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Cursive Decorative Typography */}
          <div className="relative z-10 hidden lg:block text-right">
            <span className="text-3xl lg:text-4xl font-script text-white/90 drop-shadow-lg font-bold leading-snug block">
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
