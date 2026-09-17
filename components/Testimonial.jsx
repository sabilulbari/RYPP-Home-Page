'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Vision from './Vision';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote: "RYPP made my trip to Coorg unforgettable. Easy booking, great vehicle and zero hassle!",
      name: "Amit Sharma",
      role: "Traveler, Bengaluru",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      quote: "Rented a Honda Activa for 5 days in Goa. Vehicle was in top condition and delivered right to our hotel!",
      name: "Priya Nair",
      role: "Solo Traveler, Mumbai",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      quote: "Booked a Creta for our family weekend trip to Manali. Seamless pickup and super affordable rates!",
      name: "Rahul Verma",
      role: "Roadtripper, Delhi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: What Our Riders Say (Red Card) */}
          <div className="rounded-3xl bg-[#FF1E36] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between shadow-xl">
            
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                What Our Riders Say
              </h2>
              <p className="mt-1 text-sm sm:text-base text-red-100 font-medium">
                Real people. Real journeys. Real freedom.
              </p>
            </div>

            {/* White Quote Card Container */}
            <div className="my-8 bg-white rounded-2xl p-6 sm:p-8 text-gray-900 shadow-lg relative min-h-[180px] flex flex-col justify-between">
              
              {/* Quote Text */}
              <p className="text-sm sm:text-base font-semibold italic text-gray-800 leading-relaxed">
                "{current.quote}"
              </p>

              {/* Author & Slider Navigation Row */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-red-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-tight">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Slider Nav Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-6 bg-white'
                      : 'w-2 bg-red-300 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Our Vision (Dark Card) */}
          <Vision />

        </div>

      </div>
    </section>
  );
}
