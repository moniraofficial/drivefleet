

import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth"; 
import { headers } from "next/headers";


export async function GET() {
  try {
    const backendResponse = await fetch(`${process.env.PUBLIC_SERVER_URL}/api/cars`, {
      cache: "no-store",
    });
    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API Cars GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized! Please login first." }, { status: 401 });
    }

    const body = await req.json();

    const backendResponse = await fetch(`${process.env.PUBLIC_SERVER_URL}/api/cars`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        ownerEmail: session.user.email,
        availability: "Available"
      }),
    });

    const data = await backendResponse.json();
    if (!backendResponse.ok) {
      return NextResponse.json({ error: data.message || "Failed to save car" }, { status: backendResponse.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("API Cars POST Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

