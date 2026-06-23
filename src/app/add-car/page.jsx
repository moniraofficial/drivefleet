'use client';

import React, { useState } from 'react';

export default function AddCarPage() {
  
  const [formData, setFormData] = useState({
    carName: '',
    brand: '',
    price: '',
    category: '',
    transmission: '',
    fuelType: '',
    seatingCapacity: '',
    imageURL: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exact Figma Data Submitted:", formData);
    alert("ডিজাইন পুরোপুরি ম্যাচ করেছে! পরবর্তী অ্যাসাইনমেন্টে আমরা এটিকে ব্যাকএন্ডের সাথে যুক্ত করব।");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
      
     
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Add New Car</h1>
        <p className="text-xs text-gray-400 mt-1">Fill in the details below</p>
      </div>

    
      <form onSubmit={handleSubmit} className="space-y-5">
        
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Car Name</label>
            <input 
              type="text" 
              name="carName"
              placeholder="Enter car name"
              value={formData.carName}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Brand</label>
            <select 
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium text-gray-500 focus:outline-none focus:border-blue-500 transition-all cursor-pointer shadow-sm"
              required
            >
              <option value="">Select brand</option>
              <option value="BMW">BMW</option>
              <option value="Toyota">Toyota</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Tesla">Tesla</option>
            </select>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Daily Rental Price</label>
            <input 
              type="number" 
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Category</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium text-gray-500 focus:outline-none focus:border-blue-500 transition-all cursor-pointer shadow-sm"
              required
            >
              <option value="">Select category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Electric">Electric</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Transmission</label>
            <select 
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium text-gray-500 focus:outline-none focus:border-blue-500 transition-all cursor-pointer shadow-sm"
              required
            >
              <option value="">Select transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Fuel Type</label>
            <select 
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium text-gray-500 focus:outline-none focus:border-blue-500 transition-all cursor-pointer shadow-sm"
              required
            >
              <option value="">Select fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Seating Capacity</label>
            <input 
              type="text" 
              name="seatingCapacity"
              placeholder="Enter seating capacity"
              value={formData.seatingCapacity}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Image URL</label>
            <input 
              type="url" 
              name="imageURL"
              placeholder="Enter image URL"
              value={formData.imageURL}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>
        </div>

       
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-800">Location</label>
          <input 
            type="text" 
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
            required
          />
        </div>

       
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-800">Description</label>
          <textarea 
            name="description"
            rows="5"
            placeholder="Enter car description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 rounded-xl p-4 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 resize-none shadow-sm"
            required
          ></textarea>
        </div>

      
        <div className="pt-4">
          <button 
            type="submit"
            className="w-full bg-[#111827] hover:bg-black text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-sm active:scale-99"
          >
            Add Car
          </button>
        </div>

      </form>
    </div>
  );
}