'use client';

import { ArrowRight } from 'lucide-react';

export default function RideCategories({ onCategorySelect }) {
  const categories = [
    {
      id: "bikes",
      title: "Bikes",
      subtitle: "For every adventure",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "scooters",
      title: "Scooters",
      subtitle: "Simple. Smart. Reliable.",
      image: "https://imgcdn.zigwheels.my/medium/gallery/exterior/184/2573/moda-sporter-s-74313.jpg?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "cars",
      title: "Cars",
      subtitle: "For every journey",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Choose Your Ride
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-8 h-0.5 bg-[#FF1E36] rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              From city commutes to weekend getaways — find the perfect vehicle for your journey.
            </p>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategorySelect && onCategorySelect(category.id)}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-10">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
                    {category.subtitle}
                  </p>
                </div>

                {/* White Arrow Button */}
                <div className="w-10 h-10 rounded-lg bg-white text-gray-900 flex items-center justify-center group-hover:bg-[#FF1E36] group-hover:text-white transition-colors duration-300 shadow-lg shrink-0">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
