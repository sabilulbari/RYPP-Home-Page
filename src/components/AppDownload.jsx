'use client';
import GooglePlayIconIcon from "@iconify-react/logos/google-play-icon";
import Mac24Icon from "@iconify-react/qlementine-icons/mac-24";
import Image from "next/image";
export default function AppDownload() {
  return (
    <div className="relative rounded-lg bg-[#FFF0F2] p-6 sm:p-8 overflow-hidden border border-red-100 shadow-sm flex flex-col sm:flex-row items-center justify-between min-h-[300px]">
      {/* Text Content */}
      <div className="z-10 sm:max-w-[55%] mb-6 sm:mb-0">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Download the <br />
          <span className="text-[#FF1E36]">RYPP App</span>
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">Book, manage and extend your rides on the go.</p>
        {/* Download Badges */}
        <div className="flex items-center gap-3 mt-8 w-full sm:max-w-[420px]">
          {/* Google Play */}
          <a href="#download" className="flex-1 flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-md hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap">
            <GooglePlayIconIcon height="2em" className="shrink-0" />

            <div className="text-left min-w-0">
              <span className="block text-[8px] uppercase tracking-wider text-gray-300 font-semibold leading-none">GET IT ON</span>

              <span className="block text-sm font-medium whitespace-nowrap">Google Play</span>
            </div>
          </a>

          {/* App Store */}
          <a href="#download" className="flex-1 flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-md hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap">
            <Mac24Icon height="2em" className="shrink-0" />

            <div className="text-left min-w-0">
              <span className="block text-[8px] tracking-wider text-gray-300 font-semibold leading-none whitespace-nowrap">Download on the</span>

              <span className="block text-sm font-medium whitespace-nowrap">App Store</span>
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
            <div className=" w-full h-full bg-white rounded-[1.4rem] overflow-hidden flex flex-col p-3 border border-gray-100">
              {/* Top Notch */}
              <div className="w-12 h-3 bg-gray-900 mx-auto rounded-b-md mb-2" />
              <Image src={"https://i.ibb.co.com/cS02N9HD/rypp-logo-png-removebg-preview-1.png"} alt="logo" height={50} width={50} className="relative top-12 left-8"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
