
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRegHeart, FaGear, FaUsers, FaGasPump, FaArrowRight } from 'react-icons/fa6';


export default function AvailableCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars in homepage:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
   
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Available Cars</h2>
          <p className="text-xs text-gray-400 mt-1">Explore our most popular rental vehicles</p>
        </div>
        <Link 
          href="/explore" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors group"
        >
          View All Cars 
          <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>


      {loading ? (
        <div className="text-center py-20 text-xs font-semibold text-blue-600 tracking-wider bg-white rounded-2xl border border-gray-100 shadow-sm">
          ডাটাবেস থেকে গাড়িগুলোর তালিকা লোড হচ্ছে...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {cars.map((car) => (
            <div 
              key={car._id || car.id} 
              className="bg-white rounded-xl border border-gray-100 p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
            >
         
              <button className="absolute top-4 right-4 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <FaRegHeart className="w-3.5 h-3.5" />
              </button>

              <div className="h-24 w-full flex items-center justify-center my-3 p-1">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-300 group-hover:scale-102" 
                />
              </div>

             
              <div className="space-y-0.5 mt-1">
                <div className="flex justify-between items-baseline gap-1">
                  <h3 className="font-bold text-gray-900 text-xs truncate max-w-[95px]" title={car.name}>
                    {car.name}
                  </h3>
                  <div className="shrink-0 text-right">
                    <span className="text-xs font-bold text-blue-600">${car.price}</span>
                    <span className="text-[9px] text-gray-400">/day</span>
                  </div>
                </div>
              </div>

         
              <div className="grid grid-cols-3 gap-0.5 pt-3 my-3 border-t border-gray-50 text-[9px] text-gray-400 font-medium">
                <div className="flex items-center gap-1">
                  <FaGear className="w-2.5 h-2.5 text-gray-300 shrink-0" />
                  <span className="truncate">{car.transmission}</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                  <FaUsers className="w-2.5 h-2.5 text-gray-300 shrink-0" />
                  <span className="truncate">{car.seats}</span>
                </div>
                <div className="flex items-center gap-1 justify-end">
                  <FaGasPump className="w-2.5 h-2.5 text-gray-300 shrink-0" />
                  <span className="truncate">{car.fuel}</span>
                </div>
              </div>

            
       
<Link href={`/cars/${car.id}`}>
  <button className="w-full bg-white border border-gray-200 hover:border-gray-950 hover:bg-gray-950 hover:text-white text-gray-800 font-semibold text-[11px] py-2 rounded-lg transition-all">
    View Details
  </button>
</Link>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}