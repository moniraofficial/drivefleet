import React from 'react';
import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#F8FAFC] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md">
        
      
        <h1 className="text-7xl font-extrabold text-gray-950 tracking-widest animate-bounce">
          404
        </h1>
        
  
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Oops! Page Not Found
          </h2>
          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            Sorry, the page you are looking for doesn't exist or has been moved. 
            Let's get you back on track to finding your perfect ride!
          </p>
        </div>

  
        <div className="pt-2">
          <Link 
            href="/" 
            className="inline-flex items-center bg-[#1E293B] hover:bg-gray-900 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-sm tracking-wide"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}