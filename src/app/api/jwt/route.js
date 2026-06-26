// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { email } = body;

//     if (!email) {
//       return NextResponse.json({ error: "Email is required" }, { status: 400 });
//     }

//     // 🔐 রিকোয়ারমেন্ট: JWT টোকেন জেনারেট করা
//     const token = jwt.sign({ email }, process.env.JWT_SECRET || "fallback_secret_key", {
//       expiresIn: "1d",
//     });

//     const response = NextResponse.json({ success: true, message: "Logged in successfully!" }, { status: 200 });

//     // 🔐 রিকোয়ারমেন্ট: HTTPOnly কুকিতে টোকেন স্টোর করা
//     response.cookies.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
//       path: "/",
//       maxAge: 60 * 60 * 24, // ১ দিন মেয়াদ
//     });

//     return response;
//   } catch (error) {
//     console.error("JWT API Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }