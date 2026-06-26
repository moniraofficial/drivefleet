'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRegHeart, FaGear, FaUsers, FaGasPump, FaSliders, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function ExplorePage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(200);
  const [categories, setCategories] = useState({
    all: true, SUV: false, Sedan: false, Hatchback: false, Electric: false, Luxury: false
  });
  const [transmission, setTransmission] = useState({ all: true, Automatic: false, Manual: false });

  useEffect(() => {

    fetch('/api/cars')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (type) => {
    if (type === 'all') {
      setCategories({ all: true, SUV: false, Sedan: false, Hatchback: false, Electric: false, Luxury: false });
    } else {
      setCategories({ ...categories, all: false, [type]: !categories[type] });
    }
  };

  const handleTransmissionChange = (type) => {
    if (type === 'all') {
      setTransmission({ all: true, Automatic: false, Manual: false });
    } else {
      setTransmission({ ...transmission, all: false, [type]: !transmission[type] });
    }
  };

  const handleReset = () => {
    setSearch('');
    setMaxPrice(200);
    setCategories({ all: true, SUV: false, Sedan: false, Hatchback: false, Electric: false, Luxury: false });
    setTransmission({ all: true, Automatic: false, Manual: false });
  };

  const filteredCars = cars.filter((car) => {

    if (!car || !car.name) return false;

    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = car.price <= maxPrice;
    
  
    let matchesCategory = true;
    if (!categories.all) {
      const activeCats = Object.keys(categories).filter(k => categories[k]);
      matchesCategory = activeCats.some(cat => 
        car.category && car.category.toLowerCase() === cat.toLowerCase()
      );
    }

    let matchesTrans = true;
    if (!transmission.all) {
      matchesTrans = transmission[car.transmission];
    }

    return matchesSearch && matchesPrice && matchesCategory && matchesTrans;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb & Search Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
          <div>
            <nav className="text-[11px] text-gray-400 font-medium mb-1">
              Home &nbsp;&gt;&nbsp; <span className="text-gray-600">Explore Cars</span>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Explore Cars</h1>
            <p className="text-xs text-gray-400 mt-0.5">Find the perfect car for your next adventure</p>
          </div>

          <div className="flex items-center gap-2 max-w-md w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search by car name" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-xs focus:outline-none focus:border-blue-500 font-medium placeholder-gray-400 shadow-sm"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-gray-700 shadow-sm transition-colors">
              <FaSliders className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Sidebar Filter Panel */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 space-y-6 shadow-sm">
            
            {/* Price Range */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Price Range</h3>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-600 h-1 bg-gray-100 rounded-lg cursor-pointer" 
              />
              <div className="flex justify-between text-xs text-gray-500 font-semibold">
                <span>$0</span>
                <span className="text-gray-900">${maxPrice}+</span>
              </div>
            </div>

            {/* Car Category */}
            <div className="space-y-2.5 border-t border-gray-50 pt-5">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Car Category</h3>
              {Object.keys(categories).map((cat) => (
                <label key={cat} className="flex items-center gap-3 text-xs font-medium text-gray-500 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={categories[cat]}
                    onChange={() => handleCategoryChange(cat)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded accent-blue-600" 
                  />
                  <span className="capitalize">{cat === 'all' ? 'All Category' : cat}</span>
                </label>
              ))}
            </div>

            {/* Transmission */}
            <div className="space-y-2.5 border-t border-gray-50 pt-5">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Transmission</h3>
              {Object.keys(transmission).map((trans) => (
                <label key={trans} className="flex items-center gap-3 text-xs font-medium text-gray-500 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={transmission[trans]}
                    onChange={() => handleTransmissionChange(trans)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded accent-blue-600" 
                  />
                  <span>{trans === 'all' ? 'All' : trans}</span>
                </label>
              ))}
            </div>

            <button 
              onClick={handleReset}
              className="w-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-800 flex items-center justify-center gap-2 text-xs font-bold py-3 rounded-xl transition-all border border-gray-100"
            >
              Reset Filters
            </button>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-6">
            
            <div className="flex justify-between items-center text-xs text-gray-500 font-semibold px-1">
              <p>Showing {filteredCars.length} cars</p>
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select className="bg-white border border-gray-200 py-1.5 px-3 rounded-lg text-gray-800 font-bold focus:outline-none shadow-sm cursor-pointer">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-24 text-center text-xs font-semibold text-blue-600 tracking-wider shadow-sm">
                MongoDB ডাটাবেস থেকে ডেটা লোড হচ্ছে...
              </div>
            ) : filteredCars.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-24 text-center text-xs font-semibold text-gray-400 tracking-wider shadow-sm">
                No matching vehicles found for these criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <div 
                    key={car._id || car.id} 
                    className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
                  >
                    <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                      <FaRegHeart className="w-3.5 h-3.5" />
                    </button>

                    {/* Availability Status Badge */}
                    <span className={`absolute top-4 left-4 z-10 text-[9px] font-extrabold px-2 py-0.5 rounded-md shadow-sm ${
                      car.availability === "Available" 
                        ? "bg-green-50 text-green-700 border border-green-100" 
                        : "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      {car.availability || "Available"}
                    </span>

                    <div className="h-36 w-full flex items-center justify-center my-4 p-2">
                      <img src={car.image} alt={car.name} className="max-h-full max-w-full object-contain select-none transition-transform duration-300 group-hover:scale-102" />
                    </div>

                    <div className="space-y-1 px-1">
                      <div className="flex justify-between items-baseline gap-1">
                        <h3 className="font-bold text-gray-900 text-sm truncate max-w-[150px]">{car.name}</h3>
                        <div>
                          <span className="text-sm font-bold text-blue-600">${car.price}</span>
                          <span className="text-[10px] text-gray-400">/day</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-3.5 my-3 border-t border-gray-50 text-[10px] text-gray-400 font-semibold px-1">
                      <div className="flex items-center gap-1.5"><FaGear className="w-3.5 h-3.5 text-gray-300 shrink-0" /><span className="truncate">{car.transmission}</span></div>
                      <div className="flex items-center gap-1.5 justify-center"><FaUsers className="w-3.5 h-3.5 text-gray-300 shrink-0" /><span>{car.seats} Seats</span></div>
                      <div className="flex items-center gap-1.5 justify-end"><FaGasPump className="w-3.5 h-3.5 text-gray-300 shrink-0" /><span className="truncate">{car.fuel || car.fuelType}</span></div>
                    </div>

                
                    <Link href={`/cars/${car._id || car.id}`} className="w-full mt-1">
                      <button className="w-full bg-white border border-gray-200 hover:border-gray-950 hover:bg-gray-950 hover:text-white text-gray-800 font-bold text-xs py-2.5 rounded-xl transition-all">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>

      </div>
    </div>
  );
}