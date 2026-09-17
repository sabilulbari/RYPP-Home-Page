'use client';

import { ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Vehicle',
      description: 'Browse bikes, scooters or cars as per your need.',
    },
    {
      number: '02',
      title: 'Select Date & Location',
      description: 'Pick your trip dates and location.',
    },
    {
      number: '03',
      title: 'Book & Pay',
      description: 'Confirm your booking with secure payment.',
    },
    {
      number: '04',
      title: 'Ride & Enjoy',
      description: 'Pick up your vehicle and start your journey.',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
            Get on the road in just a few simple steps.
          </p>
        </div>

        {/* 4 Steps Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              
              {/* Step Circle Badge */}
              <div className="w-16 h-16 rounded-full bg-red-50 text-[#FF1E36] font-extrabold text-xl flex items-center justify-center mb-5 border-2 border-red-100 group-hover:bg-[#FF1E36] group-hover:text-white transition-colors duration-300 shadow-sm">
                {step.number}
              </div>

              {/* Step Title & Description */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-normal max-w-xs leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-gray-300">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
