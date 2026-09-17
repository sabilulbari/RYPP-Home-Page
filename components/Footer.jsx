'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0B0F19] text-gray-400 pt-12 lg:pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <span className="text-3xl font-black text-white tracking-tight block">
                RYPP
              </span>
              <span className="text-xs font-script font-bold text-[#FF1E36] tracking-wide block">
                Ride Your Way.
              </span>
            </div>
            
            <div className="text-xs space-y-1 text-gray-400">
              <p className="font-semibold text-gray-300">India's Smart Mobility Platform</p>
              <p>Bike • Car • Rentals</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF1E36] flex items-center justify-center transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF1E36] flex items-center justify-center transition-colors">
                <span className="text-xs font-bold">ig</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF1E36] flex items-center justify-center transition-colors">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF1E36] flex items-center justify-center transition-colors">
                <span className="text-xs font-bold">fb</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF1E36] flex items-center justify-center transition-colors">
                <span className="text-xs font-bold">yt</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#vehicles" className="hover:text-white transition-colors">Vehicles</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-rypp" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#career" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Booking Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF1E36] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF1E36] shrink-0" />
                <span>hello@rypp.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF1E36] shrink-0" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="lg:col-span-1">
            <NewsletterForm />
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© 2026 RYPP. All Rights Reserved.</p>
          <p className="font-script text-sm text-gray-400">
            Ride Your Way. Explore More.
          </p>
        </div>

      </div>
    </footer>
  );
}
