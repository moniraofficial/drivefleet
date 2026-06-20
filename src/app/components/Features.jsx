'use client';

import React from 'react';
import { FaCheck, FaShield, FaHeadset, FaCalendarDays } from 'react-icons/fa6';

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          
          {/* Feature 1: Verified Cars */}
          <div className="flex items-start space-x-4 lg:px-4 pt-4 sm:pt-0 first:pt-0">
            <div className="p-3 bg-blue-50/50 rounded-xl text-blue-600">
              <FaCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">Verified Cars</h3>
              <p className="text-xs text-gray-400 leading-normal max-w-[180px]">
                All vehicles are inspected
              </p>
            </div>
          </div>

          {/* Feature 2: No Hidden Charges */}
          <div className="flex items-start space-x-4 lg:px-6 pt-6 sm:pt-0">
            <div className="p-3 bg-blue-50/50 rounded-xl text-blue-600">
              <FaShield className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">No Hidden Charges</h3>
              <p className="text-xs text-gray-400 leading-normal max-w-[180px]">
                Transparent pricing always
              </p>
            </div>
          </div>

          {/* Feature 3: 24/7 Customer Support */}
          <div className="flex items-start space-x-4 lg:px-6 pt-6 sm:pt-4 lg:pt-0">
            <div className="p-3 bg-blue-50/50 rounded-xl text-blue-600">
              <FaHeadset className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">24/7 Customer Support</h3>
              <p className="text-xs text-gray-400 leading-normal max-w-[180px]">
                We're here to help you anytime
              </p>
            </div>
          </div>

          {/* Feature 4: Easy Booking */}
          <div className="flex items-start space-x-4 lg:px-6 pt-6 sm:pt-4 lg:pt-0">
            <div className="p-3 bg-blue-50/50 rounded-xl text-blue-600">
              <FaCalendarDays className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">Easy Booking</h3>
              <p className="text-xs text-gray-400 leading-normal max-w-[180px]">
                Book your car in just a few clicks
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}