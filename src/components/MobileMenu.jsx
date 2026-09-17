'use client';

import { X, MapPin, User, ArrowRight, ChevronDown } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, onBookClick }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">RYPP</span>
              <span className="block text-xs font-script text-[#FF1E36] font-bold tracking-wide">
                Ride Your Way.
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-4">
            <a 
              href="#home" 
              onClick={onClose}
              className="text-[#FF1E36] font-semibold text-base py-2 border-b border-red-50"
            >
              Home
            </a>
            <a 
              href="#vehicles" 
              onClick={onClose}
              className="text-gray-700 font-medium text-base hover:text-[#FF1E36] transition-colors py-2"
            >
              Vehicles
            </a>
            <a 
              href="#how-it-works" 
              onClick={onClose}
              className="text-gray-700 font-medium text-base hover:text-[#FF1E36] transition-colors py-2"
            >
              How It Works
            </a>
            <a 
              href="#why-rypp" 
              onClick={onClose}
              className="text-gray-700 font-medium text-base hover:text-[#FF1E36] transition-colors py-2"
            >
              About
            </a>
            <a 
              href="#career" 
              onClick={onClose}
              className="text-gray-700 font-medium text-base hover:text-[#FF1E36] transition-colors py-2"
            >
              Career
            </a>
            <a 
              href="#footer" 
              onClick={onClose}
              className="text-gray-700 font-medium text-base hover:text-[#FF1E36] transition-colors py-2"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
          {/* Location selector */}
          <div className="flex items-center justify-between px-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-800">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF1E36]" />
              <span>Bengaluru</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>

          {/* Sign In */}
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
            <User className="w-4 h-4 text-gray-600" />
            <span>Sign In</span>
          </button>

          {/* Book Now */}
          <button 
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
