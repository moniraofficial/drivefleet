'use client';

import React, { useEffect, useState } from 'react';
import { authClient } from "@/app/lib/auth-client"; 
import { useRouter } from "next/navigation";
import Link from 'next/link';


export default function MyBookingsPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
      return;
    }

    if (session) {
      fetch("/api/bookings")
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        });
    }
  }, [session, isPending, router]);

  if (loading || isPending) {
    return <div className="text-center py-10 text-xs">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-lg font-bold text-gray-950">My Bookings</h2>

        {bookings.length === 0 ? (
          <p className="text-xs text-gray-500">No bookings yet.</p>
        ) : (
          <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-50 border-b text-gray-400 font-bold uppercase text-[10px]">
                  <th className="px-6 py-4">Car Name</th>
                  <th className="px-6 py-4">Booking Date</th>
                  <th className="px-6 py-4">Driver Needed</th>
                  <th className="px-6 py-4">Total Price</th>
                </tr>
              </thead>
              <tbody className="divide-y font-medium text-gray-700">
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-gray-900">{booking.carName}</td>
                    {/* Date converts into Dynamic Link to specific car */}
                    <td className="px-6 py-4 text-blue-600 hover:underline">
                      <Link href={`/cars/${booking.carId}`}>
                        {new Date(booking.bookingDate).toLocaleDateString()}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{booking.driverNeeded ? "Yes" : "No"}</td>
                    <td className="px-6 py-4 font-bold text-gray-950">${booking.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}