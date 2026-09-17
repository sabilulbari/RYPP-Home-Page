'use client';

import { ArrowRight, Play } from 'lucide-react';
import FeatureHighlights from './FeatureHighlights';

export default function Hero({ onBookClick }) {
  return (
    <section id="home" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-8 lg:gap-12 items-center ">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">EXPLORE. RIDE. BELONG.</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              India’s Next Gen <br />
              <span className="text-[#FF1E36]">Vehicle Rental</span> <br />
              Platform
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl font-normal leading-relaxed">
              Bikes, Scooters and Cars for every journey. <br className="hidden sm:inline" />
              Affordable. Flexible. Reliable.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA */}
              <button
                onClick={onBookClick}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white font-semibold text-base shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 transition-all active:scale-[0.98]"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Video Play CTA */}
              <button
                onClick={() => alert("Watch RYPP introduction video")}
                className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-gray-100/80 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-[#FF1E36] text-white flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-gray-900 leading-tight">Watch Video</span>
                  <span className="block text-xs text-gray-500 font-medium leading-tight">2 min</span>
                </div>
              </button>
            </div>

            {/* Feature Highlights Component */}
            <div className="pt-4">
              <FeatureHighlights />
            </div>
          </div>

          {/* Right Column Visual Media */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-md overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
              {/* Hero Background Image */}
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200"
                alt="RYPP Adventure Bike and Car rental on scenic mountain road"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

              {/* Top Left Overlay Script Tagline */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-script text-white drop-shadow-lg font-bold tracking-wide">
                  Ride <span className="text-[#FF1E36]">Your Way.</span>
                </span>
              </div>

              {/* Top Right Vertical Badges */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 flex flex-col items-end gap-2 text-right">
                <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest leading-tight">
                  <div>BIKE</div>
                  <div>CAR</div>
                  <div>RENTALS</div>
                  <div className="text-[#FF1E36]">ANYWHERE</div>
                </div>

                <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[9px] sm:text-[10px] font-semibold text-gray-300 uppercase tracking-wider leading-tight">
                  <div>EXPLORE</div>
                  <div>TRAVEL</div>
                  <div>WORK</div>
                  <div className="text-white">LIVE MORE</div>
                </div>
              </div>

              {/* Bottom Right Script Watermark */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 text-right">
                <span className="text-2xl sm:text-3xl font-script text-white/90 drop-shadow-md">More Roads More Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
