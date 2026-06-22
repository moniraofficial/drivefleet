
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FaRegHeart, FaGear, FaUsers, FaGasPump, FaCheck } from 'react-icons/fa6';

export default function CarDetailsPage() {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
  
      fetch(`http://localhost:5000/api/cars/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Car not found");
          return res.json();
        })
        .then((data) => {
          setCar(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching single car details:", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-24 text-sm font-semibold text-blue-600 tracking-wider">
        গাড়ির বিস্তারিত তথ্য ডাটাবেস থেকে লোড হচ্ছে...
      </div>
    );
  }

  if (!car) {
    return (
      <div className="text-center py-24 text-sm font-medium text-gray-400">
        দুঃখিত, এই আইডি দিয়ে কোনো গাড়ির তথ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        

        <nav className="text-[11px] text-gray-400 font-medium">
          Home &nbsp;&gt;&nbsp; Explore Cars &nbsp;&gt;&nbsp; <span className="text-gray-600">{car.name}</span>
        </nav>

   
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          
 
          <div className="md:col-span-7 space-y-4">
            <div className="bg-[#F1F5F9]/50 rounded-xl p-8 flex items-center justify-center relative aspect-[4/3] max-h-[400px]">
              <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <FaRegHeart className="w-4 h-4" />
              </button>
              <img 
                src={car.image} 
                alt={car.name} 
                className="max-h-full max-w-full object-contain select-none"
              />
            </div>


            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((thumb) => (
                <div key={thumb} className="border border-gray-100 bg-gray-50/50 rounded-xl p-2 flex items-center justify-center aspect-[4/3] cursor-pointer hover:border-gray-300 transition-all">
                  <img src={car.image} alt="thumbnail" className="max-h-full object-contain opacity-70 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>


          <div className="md:col-span-5 space-y-6">
            

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{car.name}</h1>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-blue-600">${car.price}</span>
                <span className="text-xs text-gray-400">/day</span>
              </div>
              <div className="pt-1">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-100">
                  Available
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-gray-500 font-semibold border-b border-gray-50 pb-5">
              <div className="flex items-center gap-1.5"><FaGear className="text-gray-400 w-3.5 h-3.5" /> <span>{car.transmission}</span></div>
              <div className="flex items-center gap-1.5"><FaUsers className="text-gray-400 w-3.5 h-3.5" /> <span>{car.seats}</span></div>
              <div className="flex items-center gap-1.5"><FaGasPump className="text-gray-400 w-3.5 h-3.5" /> <span>{car.fuel}</span></div>
            </div>


            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-gray-900">Location</h4>
              <p className="text-xs text-gray-500 font-medium">New York, USA</p>
            </div>


            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-gray-900">About This Car</h4>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Experience luxury and performance with the {car.name}. Perfect for city drives and long road trips with premium comfort and advanced features.
              </p>
            </div>


            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-gray-900">Features</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-gray-500 font-semibold">
                {['Air Conditioning', 'Sunroof', 'GPS Navigation', 'Bluetooth', 'USB Charger', 'Airbags'].map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                      <FaCheck className="w-2 h-2 text-gray-500" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>


            <button className="w-full bg-[#1E293B] hover:bg-gray-900 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm tracking-wide mt-4">
              Book Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}