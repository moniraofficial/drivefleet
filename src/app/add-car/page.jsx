

'use client';

import React, { useState, useEffect } from 'react';
import { authClient } from "@/app/lib/auth-client"; 
import { useRouter } from "next/navigation";

export default function AddCarPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    carName: '',
    brand: '',
    price: '',
    category: 'Sedan', 
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seatingCapacity: '',
    imageURL: '',
    location: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!isPending && !session) {
      alert("You must be logged in to add a car listing!");
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    
      const formattedData = {
        carName: formData.carName,
        brand: formData.brand,
        price: parseFloat(formData.price), 
        category: formData.category,
        transmission: formData.transmission,
        fuelType: formData.fuelType,
        seatingCapacity: parseInt(formData.seatingCapacity) || 4, 
        imageURL: formData.imageURL,
        location: formData.location,
        description: formData.description,
      };

     
      const res = await fetch("/api/cars", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formattedData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Car listed successfully in MongoDB! 🚗🎉");
        setFormData({
          carName: '', brand: '', price: '', category: 'Sedan',
          transmission: 'Automatic', fuelType: 'Petrol', seatingCapacity: '',
          imageURL: '', location: '', description: ''
        });
        router.push("/explore"); 
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to the server.");
    } finally {
      loading && setLoading(false);
    }
  };

  if (isPending) {
    return <div className="text-center py-24 text-xs font-semibold text-gray-500">Checking authentication...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-950">Add a New Car</h2>
          <p className="text-xs text-gray-400">Fill up the information below to list your car in MongoDB Database</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs font-semibold text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Car Name */}
            <div className="space-y-1">
              <label>Car Name *</label>
              <input required type="text" name="carName" value={formData.carName} onChange={handleChange} placeholder="e.g. Tesla Model 3" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500" />
            </div>

            {/* Brand */}
            <div className="space-y-1">
              <label>Brand</label>
              <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="e.g. Tesla" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500" />
            </div>

            {/* Price */}
            <div className="space-y-1">
              <label>Daily Rent Price ($) *</label>
              <input required type="number" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. 50" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500" />
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <label>Image URL *</label>
              <input required type="url" name="imageURL" value={formData.imageURL} onChange={handleChange} placeholder="https://imgbb.com/your-image.png" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500" />
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label>Car Type / Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500">
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="space-y-1">
              <label>Transmission</label>
              <select name="transmission" value={formData.transmission} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500">
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div className="space-y-1">
              <label>Fuel Type</label>
              <select name="fuelType" value={formData.fuelType} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500">
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Seating Capacity */}
            <div className="space-y-1">
              <label>Seat Capacity</label>
              <input type="number" name="seatingCapacity" value={formData.seatingCapacity} onChange={handleChange} placeholder="e.g. 4" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500" />
            </div>

          </div>

          {/* Pickup Location */}
          <div className="space-y-1">
            <label>Pickup Location *</label>
            <input required type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. New York, USA" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500" />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Tell something about the car's condition, features..." className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-blue-500 h-28 resize-none" />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button type="submit" disabled={loading} className="w-full bg-gray-950 hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-colors disabled:bg-gray-400">
              {loading ? "Listing Car..." : "Submit Car Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}