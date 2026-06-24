'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { authClient } from "@/app/lib/auth-client";

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
    

//     const formData = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formData.entries());


//     console.log("Login request:", user);
//     alert("লগইন ডিজাইন রেডি!");
//   };

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
  
      const { data, error } = await authClient.signIn.email({
        email: email.trim(),
        password: password,
      });
 console.log(data, error);
      if (error) {
        console.log("Login error:", error);
        toast.error(error.message || "Invalid email or password.");
      } else {
        toast.success("Welcome back! Logged in successfully.");
        router.push('/'); 
        router.refresh(); 
      }
    } catch (err) {
      console.error(err);
      toast.error("A network or server error occurred.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
        
        {/* Header Block Section */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.446-.26-.846-.663-1.026l-3.25-1.455a1.125 1.125 0 00-.468-.101H10.875c-.522 0-.979.356-1.112.858l-.946 3.562m9.467 0V14.25m0 0H7.5"></path>
            </svg>
            <span className="font-bold text-xl text-gray-900 tracking-tight">DriveFleet</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 pt-2">Welcome Back!</h2>
          <p className="text-xs text-gray-400">Sign in to your account to continue</p>
        </div>


        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Email Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Email Address</label>
            <input 
              name="email" // 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>

       
          <div className="space-y-1.5 relative">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-gray-800">Password</label>
              <Link href="/forgot-password" className="text-[11px] text-blue-600 font-semibold hover:underline">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <input 
                name="password" // 
                type={password} 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
                required
              />
              <button 
                type="button"
                // onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {password ? <FaRegEyeSlash className="w-4 h-4" /> : <FaRegEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

        
          <button 
          loading={isLoading}
            type="submit"
            className="w-full bg-[#111827] hover:bg-black text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-sm mt-4"
          >
            Sign In
          </button>
        </form>

     
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-3 text-gray-400 text-[10px] font-bold uppercase tracking-wider">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

       
        <button type="button" className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
          <FcGoogle className="w-4 h-4" /> Sign in with Google
        </button>

       
        <p className="text-center text-xs text-gray-500 font-medium pt-2">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 font-bold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};


export default LoginPage;


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
// import { FcGoogle } from 'react-icons/fc';
// import { authClient } from "@/app/lib/auth-client";


// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

   
//       const { data, error } = await authClient.signIn.email({
//         email: email,
//         password: password,
//         callbackURL: "/", 
//       });

//       if (error) {
    
//         alert(error.message || "লগইন ব্যর্থ হয়েছে! ইমেইল বা পাসওয়ার্ড চেক করুন।");
//       } else {
//         alert("লগইন সফল হয়েছে!");
//         router.push('/'); 
//         router.refresh();
//       }
//     } catch (err) {
//       console.error("Login runtime error:", err);
//       alert("লগইন করার সময় একটি সমস্যা হয়েছে।");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleGoogleLogin = async () => {
//     try {
//       await authClient.signIn.social({
//         provider: "google",
//         callbackURL: "/", 
//       });
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       alert("গুগল লগইন ব্যর্থ হয়েছে।");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
//       <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
        
//         {/* Title */}
//         <div className="text-center space-y-2">
//           <div className="flex items-center justify-center gap-2">
//             <span className="font-bold text-xl text-gray-900 tracking-tight">DriveFleet</span>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 pt-2">Login to Account</h2>
//           <p className="text-xs text-gray-400">Sign in to your account to continue</p>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div className="space-y-1.5">
//             <label className="text-xs font-semibold text-gray-800">Email</label>
//             <input 
//               name="email"
//               type="email" 
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//               required
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-1.5 relative">
//             <div className="flex justify-between items-center">
//               <label className="text-xs font-semibold text-gray-800">Password</label>
//             </div>
//             <div className="relative">
//               <input 
//                 name="password"
//                 type={showPassword ? "text" : "password"} 
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//                 required
//                 disabled={loading}
//               />
//               <button 
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 {showPassword ? <FaRegEyeSlash className="w-4 h-4" /> : <FaRegEye className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>

//           <button 
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#111827] hover:bg-black text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-sm mt-4 disabled:bg-gray-400"
//           >
//             {loading ? "Signing In..." : "Login"}
//           </button>
//         </form>

//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-gray-100"></div>
//           <span className="flex-shrink mx-3 text-gray-400 text-[10px] font-bold uppercase tracking-wider">or</span>
//           <div className="flex-grow border-t border-gray-100"></div>
//         </div>

//         <button 
//           onClick={handleGoogleLogin}
//           type="button" 
//           className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
//         >
//           <FcGoogle className="w-4 h-4" /> Continue with Google
//         </button>

//         <p className="text-center text-xs text-gray-500 font-medium pt-2">
//           New here?{' '}
//           <Link href="/register" className="text-blue-600 font-bold hover:underline">
//             Register Page
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default LoginPage;

