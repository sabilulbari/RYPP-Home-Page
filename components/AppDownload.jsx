'use client';

export default function AppDownload() {
  return (
    <div className="relative rounded-3xl bg-[#FFF0F2] p-6 sm:p-8 overflow-hidden border border-red-100 shadow-sm flex flex-col sm:flex-row items-center justify-between min-h-[300px]">
      
      {/* Text Content */}
      <div className="z-10 sm:max-w-[55%] mb-6 sm:mb-0">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Download the <br />
          <span className="text-[#FF1E36]">RYPP App</span>
        </h3>
        
        <p className="mt-2 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
          Book, manage and extend your rides on the go.
        </p>

        {/* Download Badges */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          {/* Google Play */}
          <a 
            href="#download" 
            className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.12C19.43,12.5 19.43,11.5 18.81,10.88L16.81,8.88L14.81,10.88L16.81,12.88" />
            </svg>
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-gray-300 font-semibold leading-none">
                GET IT ON
              </span>
              <span className="block text-xs font-bold leading-tight">
                Google Play
              </span>
            </div>
          </a>

          {/* App Store */}
          <a 
            href="#download" 
            className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.08.08 2.16-.57 2.81-1.37z"/>
            </svg>
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-gray-300 font-semibold leading-none">
                Download on the
              </span>
              <span className="block text-xs font-bold leading-tight">
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Phone Mockup Image */}
      <div className="relative sm:absolute right-2 bottom-0 w-44 sm:w-48 lg:w-52 h-56 sm:h-64 translate-y-4 shrink-0 pointer-events-none">
        <div className="w-full h-full relative flex items-end justify-center">
          {/* Phone Frame */}
          <div className="w-40 sm:w-44 h-full bg-gray-900 rounded-[2rem] p-2.5 shadow-2xl border-4 border-gray-800 transform rotate-6 hover:rotate-0 transition-transform duration-500">
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[1.4rem] overflow-hidden flex flex-col p-3 border border-gray-100">
              {/* Top Notch */}
              <div className="w-12 h-3 bg-gray-900 mx-auto rounded-b-md mb-2" />
              
              {/* App Mock UI */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-[#FF1E36]">RYPP</span>
                <span className="w-2 h-2 rounded-full bg-[#FF1E36]" />
              </div>
              <div className="h-16 bg-red-50 rounded-lg mb-2 p-2 flex flex-col justify-between">
                <span className="text-[8px] font-bold text-[#FF1E36]">QUICK BOOK</span>
                <span className="text-[10px] font-bold text-gray-800">Royal Enfield 350</span>
              </div>
              <div className="h-8 bg-gray-100 rounded-lg mb-1" />
              <div className="h-8 bg-gray-100 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
