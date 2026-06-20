'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaLocationDot, FaCarRear } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2 text-gray-900">
              <FaCarRear className="w-5 h-5 text-blue-600" />
              <span className="text-base font-bold tracking-tight text-gray-950">
                DriveFleet
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Your trusted partner for premium car rental experiences.
            </p>
            <div className="flex items-center space-x-2.5 pt-2">
              <a href="#" className="w-7 h-7 bg-gray-950 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-950 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-950 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                <FaInstagram className="w-3 h-3" />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-950 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/explore" className="hover:text-gray-900 transition-colors">Explore Cars</Link></li>
              <li><Link href="/add-car" className="hover:text-gray-900 transition-colors">Add Car</Link></li>
              <li><Link href="/my-bookings" className="hover:text-gray-900 transition-colors">My Bookings</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Support</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">24/7 Support</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center space-x-2">
                <FaPhone className="w-3.5 h-3.5 text-gray-900 shrink-0" />
                <span className="hover:text-gray-900">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="w-3.5 h-3.5 text-gray-900 shrink-0" />
                <span className="hover:text-gray-900 truncate">support@drivefleet.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaLocationDot className="w-3.5 h-3.5 text-gray-900 shrink-0 mt-0.5" />
                <span>123 Drive Street, City, Country</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <p>© {currentYear} DriveFleet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}