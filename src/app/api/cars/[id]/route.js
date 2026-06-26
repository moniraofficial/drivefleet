
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
  try {

    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
    }


    const backendResponse = await fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "DELETE",
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || "Failed to delete from backend database" }, 
        { status: backendResponse.status }
      );
    }


    return NextResponse.json({ message: "Car deleted successfully from database! 🗑️" }, { status: 200 });

  } catch (error) {
    console.error("API Car Delete Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
    }


    const backendResponse = await fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body),
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || "Failed to update car in database" }, 
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    return NextResponse.json({ message: "Car updated successfully! 🔄🎉", data }, { status: 200 });

  } catch (error) {
    console.error("API Car PUT Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}