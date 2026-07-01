import { NextResponse } from 'next/server'

import { headers } from 'next/headers';
import { auth } from './app/lib/auth';


 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {


const session = await auth.api.getSession({
    headers: await headers()
});
if (!session) {
return NextResponse.redirect(new URL('/login', request.url))
}


 
}
 
export const config = {
  matcher: ["/add-car/:path*",
    "/my-bookings/:path*",
    "/my-added-cars/:path*",
    "/api/bookings/:path*"],
}

// import { NextResponse } from "next/server";

// // 🛠️ ফিক্স: ফাংশনটির নাম middleware দিয়ে default export করা হলো
// export default async function middleware(request) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname } = request.nextUrl;

//   const isPrivateRoute = 
//     pathname.startsWith("/add-car") || 
//     pathname.startsWith("/my-bookings") || 
//     pathname.startsWith("/my-added-cars");

//   const isPrivateApi = pathname.startsWith("/api/bookings");

//   if ((isPrivateRoute || isPrivateApi) && !token) {
//     if (isPrivateApi) {
//       return NextResponse.json({ error: "Unauthorized access! No token found." }, { status: 401 });
//     }
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/add-car/:path*",
//     "/my-bookings/:path*",
//     "/my-added-cars/:path*",
//     "/api/bookings/:path*",
//   ],
// };