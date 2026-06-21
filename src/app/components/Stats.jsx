'use client';

import React from 'react';
import { FaCar, FaCalendarCheck, FaFaceSmile, FaHeadset } from 'react-icons/fa6';

export default function Stats() {
  const statItems = [
    { id: 1, icon: <FaCar className="w-5 h-5 text-blue-600" />, number: '500+', label: 'Cars Available' },
    { id: 2, icon: <FaCalendarCheck className="w-5 h-5 text-blue-600" />, number: '10K+', label: 'Bookings Completed' },
    { id: 3, icon: <FaFaceSmile className="w-5 h-5 text-blue-600" />, number: '98%', label: 'Customer Satisfaction' },
    { id: 4, icon: <FaHeadset className="w-5 h-5 text-blue-600" />, number: '24/7', label: 'Support Available' },
  ];

  return (
 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          {statItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex items-center gap-4 justify-start sm:justify-center p-2 ${
                index > 0 ? 'pt-6 sm:pt-0 lg:pt-0' : ''
              }`}
            >
      
              <div className="p-2.5 bg-blue-50 rounded-xl shrink-0">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-base font-bold text-gray-900 tracking-tight">{item.number}</p>
                <p className="text-xs font-medium text-gray-400">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}