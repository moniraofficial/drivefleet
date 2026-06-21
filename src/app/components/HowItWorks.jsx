'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function HowItWorks() {
  const steps = [
    { id: 1, title: 'Choose Car', desc: 'Browse and select your preferred vehicle.' },
    { id: 2, title: 'Book Online', desc: 'Pick dates and complete your booking.' },
    { id: 3, title: 'Pick Up', desc: 'Pick up your car from the selected location.' },
    { id: 4, title: 'Enjoy Drive', desc: 'Hit the road and enjoy your journey.' },
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      

      <section className="w-full bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">How It Works</h2>
          <p className="text-xs text-gray-400 mt-1">Rent a car in a few simple steps.</p>


          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
     
            <div className="hidden lg:block absolute top-5 left-[12%] right-[12%] h-[1px] bg-gray-200 z-0" />

            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center group">
      
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-200">
                  {step.id}
                </div>
                
      
                <h3 className="text-xs font-bold text-gray-900 mt-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] text-gray-400 max-w-[180px] mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full bg-[#0B131F] relative min-h-[260px] flex items-center border-t border-b border-slate-900">
        
   
        <div className="absolute right-0 bottom-0 top-0 w-full sm:w-1/2 h-full hidden sm:block pointer-events-none select-none">
          <img 
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" 
            alt="BMW Showcase" 
            className="w-full h-full object-cover object-left opacity-90 scale-x-[-1] brightness-[0.85]" 
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B131F] via-transparent to-transparent" />
        </div>

  
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-md space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Ready to Start Your Next Journey?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Browse premium vehicles and book within minutes.
              </p>
            </div>

            <Link 
              href="/explore"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold px-5 py-3 rounded-lg transition-colors shadow-sm"
            >
              Explore Cars 
              <FaArrowRight className="w-3 h-3 text-slate-900" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}