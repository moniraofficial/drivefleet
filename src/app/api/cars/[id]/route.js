
// import { NextResponse } from "next/server";


// export async function DELETE(req, { params }) {
//   try {

//     const { id } = await params;

//     if (!id) {
//       return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
//     }


//     const backendResponse = await fetch(`http://localhost:5000/api/cars/${id}`, {
//       method: "DELETE",
//     });

//     if (!backendResponse.ok) {
//       const errorData = await backendResponse.json().catch(() => ({}));
//       return NextResponse.json(
//         { error: errorData.message || "Failed to delete from backend database" }, 
//         { status: backendResponse.status }
//       );
//     }


//     return NextResponse.json({ message: "Car deleted successfully from database! 🗑️" }, { status: 200 });

//   } catch (error) {
//     console.error("API Car Delete Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


// export async function PUT(req, { params }) {
//   try {
//     const { id } = await params;
//     const body = await req.json();

//     if (!id) {
//       return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
//     }


//     const backendResponse = await fetch(`http://localhost:5000/api/cars/${id}`, {
//       method: "PUT",
//       headers: { 
//         "Content-Type": "application/json" 
//       },
//       body: JSON.stringify(body),
//     });

//     if (!backendResponse.ok) {
//       const errorData = await backendResponse.json().catch(() => ({}));
//       return NextResponse.json(
//         { error: errorData.message || "Failed to update car in database" }, 
//         { status: backendResponse.status }
//       );
//     }

//     const data = await backendResponse.json();
//     return NextResponse.json({ message: "Car updated successfully! 🔄🎉", data }, { status: 200 });

//   } catch (error) {
//     console.error("API Car PUT Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";

//  ১. ডাইনামিক আইডি ধরে গাড়ি ডিলিট করার সিকিউর এন্ডপয়েন্ট (DELETE)
export async function DELETE(req, { params }) {
  try {
    //  রিকোয়ারমেন্ট: কুকি অথবা হেডার ভেরিফিকেশন
    const token = req.cookies.get("token")?.value || req.headers.get("authorization");

    if (!token || (token !== "logged in" && !token.startsWith("ey"))) {
      return NextResponse.json({ error: "Unauthorized access! ❌ Invalid security token" }, { status: 401 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
    }

    // এক্সপ্রেস ব্যাকএন্ডে রিকোয়েস্ট ফরওয়ার্ড করা হচ্ছে
    const backendResponse = await fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "DELETE",
    });

    if (!backendResponse.ok) {
      return NextResponse.json({ error: "Failed to delete from backend database" }, { status: backendResponse.status });
    }

    return NextResponse.json({ message: "Car deleted successfully from database! 🗑️" }, { status: 200 });
  } catch (error) {
    console.error("API Car Delete Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function PUT(req, { params }) {
  try {
    //  রিকোয়ারমেন্ট: কুকি অথবা হেডার ভেরিফিকেশন
    const token = req.cookies.get("token")?.value || req.headers.get("authorization");

    if (!token || (token !== "logged in" && !token.startsWith("ey"))) {
      return NextResponse.json({ error: "Unauthorized access! ❌ Invalid security token" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
    }


    const backendResponse = await fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!backendResponse.ok) {
      return NextResponse.json({ error: "Failed to update car in database" }, { status: backendResponse.status });
    }

    const data = await backendResponse.json();
    return NextResponse.json({ message: "Car processed successfully! 🔄🎉", data }, { status: 200 });
  } catch (error) {
    console.error("API Car PUT Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
