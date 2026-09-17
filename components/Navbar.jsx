'use client';

import { useState } from 'react';
import { MapPin, User, ArrowRight, Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col group">
          <span className="text-3xl font-black tracking-tight text-gray-900 leading-none">
            RYPP
          </span>
          <span className="text-xs font-script font-bold text-[#FF1E36] tracking-wide mt-0.5 leading-none">
            Ride Your Way.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#home"
            className="relative text-[#FF1E36] font-semibold text-sm py-1 transition-colors group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF1E36] rounded-full" />
          </a>
          <a
            href="#vehicles"
            className="text-gray-600 hover:text-[#FF1E36] font-medium text-sm transition-colors"
          >
            Vehicles
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-[#FF1E36] font-medium text-sm transition-colors"
          >
            How It Works
          </a>
          <a
            href="#why-rypp"
            className="text-gray-600 hover:text-[#FF1E36] font-medium text-sm transition-colors"
          >
            About
          </a>
          <a
            href="#career"
            className="text-gray-600 hover:text-[#FF1E36] font-medium text-sm transition-colors"
          >
            Career
          </a>
          <a
            href="#footer"
            className="text-gray-600 hover:text-[#FF1E36] font-medium text-sm transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Right Utilities */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Location Selector */}
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-xs font-semibold text-gray-800 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#FF1E36]" />
            <span>Bengaluru</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>

          {/* Sign In */}
          <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <User className="w-4 h-4 text-gray-500" />
            <span>Sign In</span>
          </button>

          {/* Book Now Button */}
          <button
            onClick={onBookClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white text-sm font-semibold shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-[0.98]"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onBookClick}
            className="px-3.5 py-1.5 rounded-full bg-[#FF1E36] text-white text-xs font-semibold shadow-sm"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookClick={onBookClick}
      />
    </header>
  );
}
