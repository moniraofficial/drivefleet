import { NextResponse } from "next/server";
import { auth, db } from "@/app/lib/auth"; // আপনার পাথ অনুযায়ী ইমপোর্ট
import { headers } from "next/headers";


export async function POST(req) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized! Please login first." }, { status: 401 });
    }

    const body = await req.json();
    const { carId, carName, carImage, driverNeeded, specialNote, totalPrice } = body;

    if (!carId || !totalPrice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newBooking = {
      carId,
      carName: carName || "Unknown Car",
      carImage: carImage || "",
      userId: session.user.id,
      driverNeeded: driverNeeded === true, 
      specialNote: specialNote || "",
      totalPrice: parseFloat(totalPrice),
      bookingDate: new Date(), 
    };

    const result = await db.collection("bookings").insertOne(newBooking);
    return NextResponse.json({ message: "Booking successful!", bookingId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function GET(req) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userBookings = await db
      .collection("bookings")
      .find({ userId: session.user.id })
      .sort({ bookingDate: -1 })
      .toArray();

    return NextResponse.json(userBookings, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}