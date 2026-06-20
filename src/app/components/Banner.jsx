// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { FaArrowRight } from 'react-icons/fa6';

// export default function Banner() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
//         {/* Left Text Column */}
//         <div className="space-y-6 max-w-xl">
//           <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
//             PREMIUM CAR RENTAL
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B131F] leading-[1.15]">
//             Find the Right Car <br />for Every Journey
//           </h1>
//           <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed max-w-md">
//             Rent premium vehicles from trusted owners with a seamless booking experience.
//           </p>
//           <div className="pt-2">
//             <Link 
//               href="/explore" 
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-[#111827] to-[#1F2937] text-white font-medium text-xs px-6 py-3.5 rounded-xl transition-all shadow-md hover:opacity-95 group"
//             >
//               Explore Cars 
//               <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>

//         {/* Right Image Column */}
//         <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
//           <img 
//             src="/banner image.jpg" 
//             alt="Premium Dark BMW SUV Rental" 
//             className="w-full max-w-lg md:max-w-2xl object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] select-none"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url('/banner image.jpg')`,
          backgroundPosition: 'center right', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent/5 w-full md:w-3/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111827] leading-tight mb-6">
            Find the Perfect Car for<br />
            <span className="text-[#00008B]"> Every Journey</span>
          </h1>

          <p className="text-xl text-black-700 mb-8 max-w-lg leading-relaxed font-medium">
            Rent premium vehicles from trusted owners with a seamless booking experience.
          </p>

          <Link href="/animals">
            <button className="flex items-center gap-3 bg-[#00008B] hover:bg-[#191970] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Browse All Animals
              <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;