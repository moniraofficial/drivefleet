

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

          <Link href="/explore">
            <button className="flex items-center gap-3 bg-[#00008B] hover:bg-[#191970] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Cars
              <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;