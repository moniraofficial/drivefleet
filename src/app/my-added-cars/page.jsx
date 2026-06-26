'use client';

import React, { useState, useEffect } from 'react';
import { authClient } from "@/app/lib/auth-client"; 
import { useRouter } from "next/navigation";

export default function MyAddedCarsPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);


  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);


  useEffect(() => {
    if (!isPending && !session) {
      alert("Please login to see your added cars!");
      router.push("/login");
      return;
    }

    if (session) {
      const fetchMyCars = async () => {
        try {
          const res = await fetch('/api/cars?owner=true');
          const data = await res.json();
          if (res.ok) {
            setCars(data);
          } else {
            console.error(data.error);
          }
        } catch (error) {
          console.error("Error fetching my cars:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchMyCars();
    }
  }, [session, isPending, router]);


  const handleDeleteConfirm = async () => {
    if (!carToDelete) return;
    setDeleting(true);

    try {
      const res = await fetch(`/api/cars/${carToDelete}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Car deleted successfully! 🗑️");
        
  
        setCars(prevCars => prevCars.filter(car => car._id !== carToDelete && car.id !== carToDelete)); 
        
        setIsDeleteModalOpen(false);
      } else {
        alert("Failed to delete the car.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setDeleting(false);
      setCarToDelete(null);
    }
  };

  if (isPending || loading) {
    return <div className="text-center py-24 text-xs font-semibold text-gray-500 animate-pulse">Loading your listed cars...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* 🏷️ Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">My Added Cars</h2>
            <p className="text-xs text-gray-400 mt-0.5">Manage the cars you have added</p>
          </div>
          <button 
            onClick={() => router.push('/add-car')}
            className="bg-[#1E293B] hover:bg-gray-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-colors self-start sm:self-center"
          >
            Add New Car
          </button>
        </div>

        {/* Table Container */}
        {cars.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-xs text-gray-500 font-medium">You haven't added any cars yet!</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                    <th className="py-4 px-6">Car</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6">Availability</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs">
                  {cars.map((car) => (
                    <tr key={car._id || car.id} className="hover:bg-gray-50/40 transition-colors">
                      {/* Car Info */}
                      <td className="py-4 px-6 flex items-center gap-4 min-w-[240px]">
                        <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                          <img 
                            src={car.imageURL || car.image || "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=200"} 
                            alt={car.carName || car.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-bold text-gray-900">{car.carName || car.name}</span>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 font-medium text-gray-600 min-w-[120px]">
                        <span className="font-bold text-gray-900">${car.price || car.dailyPrice}</span> /day
                      </td>

                      {/* Availability Status Badge */}
                      <td className="py-4 px-6 min-w-[140px]">
                        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-[10px] font-bold ${
                          car.availability === 'Unavailable' || car.availability === 'Not Available'
                            ? 'bg-red-50 text-red-500' 
                            : 'bg-green-50 text-green-500'
                        }`}>
                          {car.availability || 'Available'}
                        </span>
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-6 text-center min-w-[120px]">
                        <div className="flex items-center justify-center gap-2">
                          {/* Update/Edit Button */}
                          <button 
                            onClick={() => router.push(`/my-added-cars/edit/${car._id || car.id}`)}
                            className="p-2 border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            title="Edit"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.74 19.543a4.5 4.5 0 0 1-1.889 1.148l-3.908 1.156 1.156-3.908a4.5 4.5 0 0 1 1.148-1.889L16.862 4.487ZM16.862 4.487 19.5 7.125" />
                            </svg>
                          </button>

                          {/* Delete Button */}
                          <button 
                            onClick={() => {
                       
                              setCarToDelete(car._id || car.id);
                              setIsDeleteModalOpen(true);
                            }}
                            className="p-2 border border-red-100 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                            title="Delete"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/*  Pagination UI Component */}
        {cars.length > 0 && (
          <div className="flex justify-center items-center gap-1.5 pt-4">
            <button className="p-2 border border-gray-200 rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1E293B] text-white text-xs font-bold rounded-xl shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-xs font-bold rounded-xl transition-colors">2</button>
            <button className="p-2 border border-gray-200 rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 border border-gray-100 shadow-xl space-y-4">
            <div className="text-center space-y-1">
              <h3 className="text-sm font-bold text-gray-900">Are you absolutely sure?</h3>
              <p className="text-[11px] text-gray-400 font-medium">This action cannot be undone. This car listing will be permanently removed from MongoDB.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button 
                disabled={deleting} 
                onClick={() => setIsDeleteModalOpen(false)} 
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button 
                disabled={deleting} 
                onClick={handleDeleteConfirm} 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm"
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}