'use client';

export default function Vision() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gray-900 p-8 sm:p-10 lg:p-12 min-h-[380px] flex flex-col justify-between shadow-xl border border-gray-800 group">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
        alt="Mountain highway vision"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />

      {/* Text Content */}
      <div className="relative z-10 max-w-lg">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Our Vision
        </h3>
        
        <p className="mt-4 text-sm sm:text-base text-gray-200 font-normal leading-relaxed">
          To make mobility simple, reliable, and accessible for everyone — powering journeys across every city, town, and destination in India.
        </p>
      </div>

      {/* Cursive Overlay Bottom Right */}
      <div className="relative z-10 text-right self-end mt-8">
        <span className="text-3xl sm:text-4xl font-script text-white drop-shadow-md font-bold leading-tight block">
          A Greener <br />
          <span className="text-red-400">Brighter</span> <br />
          India
        </span>
      </div>

    </div>
  );
}
