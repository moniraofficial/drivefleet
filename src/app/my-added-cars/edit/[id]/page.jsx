'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { authClient } from "@/app/lib/auth-client";

export default function EditCarPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  

  const [formData, setFormData] = useState({
    name: '', 
    price: '',
    description: '',
    availability: 'Available',
    image: '',
    type: 'Sedan',
    location: '',
  });


  useEffect(() => {
    if (!isPending && !session) {
      alert("Please login first to edit your car!");
      router.push("/login");
      return;
    }

    if (id) {
    
      fetch(`http://localhost:5000/api/cars/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Car not found");
          return res.json();
        })
        .then((data) => {
          setFormData({
            name: data.carName || data.name || '',
            price: data.price || data.dailyPrice || '',
            description: data.description || '',
            availability: data.availability || 'Available',
            image: data.imageURL || data.image || '',
            type: data.type || 'Sedan',
            location: data.location || '',
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching car for edit:", err);
          alert("Failed to load car data.");
          router.push('/my-added-cars');
        });
    }
  }, [id, session, isPending, router]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
    
      const res = await fetch(`/api/cars/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Car updated successfully! 🔄🎉");
        router.push("/my-added-cars"); 
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to update car.");
      }
    } catch (error) {
      console.error("Update Error:", error);
      alert("Something went wrong while updating!");
    } finally {
      setUpdating(false);
    }
  };

  if (isPending || loading) {
    return <div className="text-center py-24 text-xs font-semibold text-gray-500 animate-pulse">Loading car data for editing...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Update Car Listing</h2>
          <p className="text-xs text-gray-400 mt-0.5">Modify the details of <span className="text-gray-700 font-semibold">{formData.name}</span></p>
        </div>

        <form onSubmit={handleUpdateSubmit} className="space-y-4 text-xs font-medium text-gray-700">
          
          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-900">Image URL</label>
            <input 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Price */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-900">Daily Rent Price ($)</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Car Type */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-900">Car Type</label>
              <select 
                name="type" 
                value={formData.type} 
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Location */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-900">Pickup Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Availability Status */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-900">Availability Status</label>
              <select 
                name="availability" 
                value={formData.availability} 
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-900">Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:border-blue-500 h-28 resize-none transition-colors"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2 font-bold text-xs">
            <button 
              type="button" 
              onClick={() => router.push('/my-added-cars')}
              className="w-1/2 border border-gray-200 text-gray-600 py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={updating}
              className="w-1/2 bg-[#1E293B] hover:bg-gray-950 text-white py-3 rounded-xl disabled:bg-gray-400 transition-colors flex items-center justify-center"
            >
              {updating ? "Updating Listing..." : "Update Car"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}