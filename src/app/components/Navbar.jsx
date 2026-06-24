// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaCarRear, FaRegBell, FaChevronDown, FaBars, FaXmark } from 'react-icons/fa6';

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Initial mock state to match the logged-in design seen in image_9db231.png
//   const [user, setUser] = useState({
//     displayName: "John Doe",
//     email: "john@example.com",
//     photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
//   });

//   // Dynamic style matching to make active links stand out cleanly
//   const linkClass = (path) => {
//     const base = "text-xs font-medium tracking-wide transition-colors duration-200 ";
//     return pathname === path 
//       ? base + "text-blue-600 font-semibold" 
//       : base + "text-gray-500 hover:text-gray-900";
//   };

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
          
//           {/* LEFT SIDE: Brand Logo with Steering Wheel Icon */}
//          {/* LEFT SIDE: Brand Logo with Car Icon */}
// <div className="flex items-center">
//   <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:opacity-90">
//     <FaCarRear className="w-6 h-6 text-gray-900" />
//     <span className="text-lg font-bold tracking-tight text-gray-950">
//       DriveFleet
//     </span>
//   </Link>
// </div>

//           {/* CENTER SIDE: Minimalist Horizontal Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className={linkClass('/')}>Home</Link>
//             <Link href="/explore" className={linkClass('/explore')}>Explore Cars</Link>
//             {user && (
//               <>
//                 <Link href="/add-car" className={linkClass('/add-car')}>Add Car</Link>
//                 <Link href="/my-bookings" className={linkClass('/my-bookings')}>My Bookings</Link>
//               </>
//             )}
//           </div>

//           {/* RIGHT SIDE: Notification Bell, Profile Image, and Dropdown Arrow */}
//           <div className="hidden md:flex items-center space-x-5">
//             {/* Notification Bell */}
//             <button className="text-gray-700 hover:text-gray-900 transition-colors relative p-1" aria-label="Notifications">
//               <FaRegBell className="w-5 h-5 stroke-[1.5]" />
//               <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
//             </button>

//             {user ? (
//               <div className="relative">
//                 {/* Profile Image & Arrow Wrapper */}
//                 <button 
//                   onClick={() => setShowDropdown(!showDropdown)}
//                   className="flex items-center space-x-1.5 focus:outline-none"
//                 >
//                   <img 
//                     src={user.photoURL} 
//                     alt="User Profile" 
//                     className="w-8 h-8 rounded-full object-cover border border-gray-200"
//                   />
//                   <FaChevronDown className="w-2.5 h-2.5 text-gray-500" />
//                 </button>

//                 {/* Conditional Dropdown for User Navigation Actions */}
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-1 border border-gray-100 z-50">
//                     <div className="px-4 py-2 text-xs border-b border-gray-50">
//                       <p className="font-semibold text-gray-900 truncate">{user.displayName}</p>
//                       <p className="text-gray-400 truncate">{user.email}</p>
//                     </div>
//                     <Link href="/add-car" onClick={() => setShowDropdown(false)} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Add Car</Link>

//                     <Link href="/my-bookings" onClick={() => setShowDropdown(false)} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">My Bookings</Link>

//                     <Link href="/my-added-cars" onClick={() => setShowDropdown(false)} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">My Added Cars</Link>

//                     <button onClick={() => setUser(null)} className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 border-t border-gray-50">Logout</button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link href="/login" className="bg-gray-950 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all">
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Hamburguer Toggle (Hidden on desktop) */}
//           <div className="flex items-center md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
//               {isOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Responsive Layout View */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2">
//           <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Home</Link>
//           <Link href="/explore" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Explore Cars</Link>
//           {user && (
//             <>
//               <Link href="/add-car" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Add Car</Link>
//               <Link href="/my-bookings" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">My Bookings</Link>
//               <Link href="/my-added-cars" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">My Added Cars</Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaCarRear, FaRegBell, FaChevronDown, FaBars, FaXmark } from 'react-icons/fa6';
import { signOut, useSession } from "@/app/lib/auth-client"; // 🟢 Better Auth ইমপোর্ট করা হলো

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // 🟢 শিক্ষকের কোড থেকে Better Auth সেশন এবং পেন্ডিং স্টেট নেওয়া হলো
  const { data: session, isPending } = useSession();
  const user = session?.user; // সেশন থেকে ইউজার ডাটা আলাদা করা হলো

  // 🟢 লগআউট ফাংশনালিটি
  const handleLogOut = async () => {
    await signOut();
    setShowDropdown(false);
    setIsOpen(false);
    router.push("/");
  };

  // ডাইনামিক অ্যাক্টিভ লিঙ্ক স্টাইল
  const linkClass = (path) => {
    const base = "text-xs font-medium tracking-wide transition-colors duration-200 ";
    return pathname === path 
      ? base + "text-blue-600 font-semibold" 
      : base + "text-gray-500 hover:text-gray-900";
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* LEFT SIDE: Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:opacity-90">
              <FaCarRear className="w-6 h-6 text-gray-900" />
              <span className="text-lg font-bold tracking-tight text-gray-950">
                DriveFleet
              </span>
            </Link>
          </div>

          {/* CENTER SIDE: Horizontal Links (ডাটা লোড হওয়া পর্যন্ত লজিক চেক করবে) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/explore" className={linkClass('/explore')}>Explore Cars</Link>
            {!isPending && user && (
              <>
                <Link href="/add-car" className={linkClass('/add-car')}>Add Car</Link>
                <Link href="/my-bookings" className={linkClass('/my-bookings')}>My Bookings</Link>
              </>
            )}
          </div>

          {/* RIGHT SIDE: Notification & Authentication */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Notification Bell */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors relative p-1" aria-label="Notifications">
              <FaRegBell className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            </button>

            {/* 🟢 সেশন চেক করে কন্ডিশনাল রেন্ডারিং */}
            {!isPending && (
              user ? (
                <div className="relative">
                  {/* Profile Image & Arrow Wrapper */}
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center space-x-1.5 focus:outline-none"
                  >
                    <img 
                      src={user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"} 
                      alt="User Profile" 
                      className="w-8 h-8 rounded-full object-cover border border-gray-200"
                    />
                    <FaChevronDown className="w-2.5 h-2.5 text-gray-500" />
                  </button>

                  {/* Dropdown Options */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-1 border border-gray-100 z-50">
                      <div className="px-4 py-2 text-xs border-b border-gray-50">
                        <p className="font-semibold text-gray-900 truncate">{user.name}</p>
                        <p className="text-gray-400 truncate">{user.email}</p>
                      </div>
                      <Link href="/add-car" onClick={() => setShowDropdown(false)} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Add Car</Link>
                      <Link href="/my-bookings" onClick={() => setShowDropdown(false)} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">My Bookings</Link>
                      <Link href="/my-added-cars" onClick={() => setShowDropdown(false)} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">My Added Cars</Link>
                      
                      {/* 🟢 আপনার কাস্টম স্টাইল ঠিক রেখে কাস্টম লগআউট অ্যাকশন */}
                      <button 
                        onClick={handleLogOut} 
                        className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 border-t border-gray-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login" className="bg-gray-950 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all">
                  Login
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 md:hidden focus:outline-none">
              {isOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Home</Link>
          <Link href="/explore" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Explore Cars</Link>
          
          {!isPending && (
            user ? (
              <>
                <Link href="/add-car" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Add Car</Link>
                <Link href="/my-bookings" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">My Bookings</Link>
                <Link href="/my-added-cars" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">My Added Cars</Link>
                <button 
                  onClick={handleLogOut} 
                  className="block w-full text-left pt-2 text-sm text-red-600 border-t border-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-blue-600 pt-2 border-t border-gray-100">
                Login
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}