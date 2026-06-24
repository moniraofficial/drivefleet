// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
// import { FcGoogle } from 'react-icons/fc';


// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [photoUrl, setPhotoUrl] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);



//   const handleRegister = (e) => {
//     e.preventDefault();
    
  
//     const formData = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formData.entries());


//     console.log("Registration request:", user);
//     alert("রেজিস্ট্রেশন ডিজাইন রেডি!");
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
//       <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
        
     
//         <div className="text-center space-y-2">
//           <div className="flex items-center justify-center gap-2">
//             <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.446-.26-.846-.663-1.026l-3.25-1.455a1.125 1.125 0 00-.468-.101H10.875c-.522 0-.979.356-1.112.858l-.946 3.562m9.467 0V14.25m0 0H7.5"></path>
//             </svg>
//             <span className="font-bold text-xl text-gray-900 tracking-tight">DriveFleet</span>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 pt-2">Get Started!</h2>
//           <p className="text-xs text-gray-400">Create a new account to explore features</p>
//         </div>


//         <form onSubmit={handleRegister} className="space-y-4">
          
      
//           <div className="space-y-1.5">
//             <label className="text-xs font-semibold text-gray-800">Full Name</label>
//             <input 
//               name="name" // 
//               type="text" 
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//               required
//             />
//           </div>

         
//           <div className="space-y-1.5">
//             <label className="text-xs font-semibold text-gray-800">Email Address</label>
//             <input 
//               name="email" // 
//               type="email" 
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//               required
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-xs font-semibold text-gray-800">Photo URL (optional)</label>
//             <input 
//               name="image" // 
//               type="url" 
//               placeholder="Enter photo URL"
//               value={photoUrl}
//               onChange={(e) => setPhotoUrl(e.target.value)}
//               className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//             />
//           </div>

     
//           <div className="space-y-1.5 relative">
//             <label className="text-xs font-semibold text-gray-800">Password</label>
//             <div className="relative">
//               <input 
//                 name="password" // 
//                 type={showPassword ? "text" : "password"} 
//                 placeholder="Create a strong password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//                 required
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
//             className="w-full bg-[#111827] hover:bg-black text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-sm mt-4"
//           >
//             Register
//           </button>
//         </form>


//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-gray-100"></div>
//           <span className="flex-shrink mx-3 text-gray-400 text-[10px] font-bold uppercase tracking-wider">or</span>
//           <div className="flex-grow border-t border-gray-100"></div>
//         </div>

  
//         <button type="button" className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
//           <FcGoogle className="w-4 h-4" /> Sign up with Google
//         </button>

  
//         <p className="text-center text-xs text-gray-500 font-medium pt-2">
//           Already have an account?{' '}
//           <Link href="/login" className="text-blue-600 font-bold hover:underline">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };


// export default RegisterPage;


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
// import { FcGoogle } from 'react-icons/fc';
// import { authClient } from "@/app/lib/auth-client";

// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [photoUrl, setPhotoUrl] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();


//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const isLongEnough = password.length >= 6;

//   const handleRegister = async (e) => {
//     e.preventDefault();

  
//     if (!hasUppercase || !hasLowercase || !isLongEnough) {
//       alert("পাসওয়ার্ডের সব শর্ত পূরণ করা বাধ্যতামূলক!");
//       return;
//     }

//     try {
//       setLoading(true);
      
//       // Better Auth-এর মাধ্যমে ইমেইল রেজিস্ট্রেশন
//       const { data, error } = await authClient.signUp.email({
//         email: email,
//         password: password,
//         name: name,
//         image: photoUrl.trim() !== "" ? photoUrl : undefined, 
//         callbackURL: "/login", 
//       });

//       if (error) {
      
//         alert(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
//       } else {
//         alert("অ্যাকাউন্ট তৈরি সফল হয়েছে! এবার লগইন করুন।");
//         router.push('/login'); 
//       }
//     } catch (err) {
//       console.error("Registration runtime error:", err);
//       alert("একটি ইন্টারনাল এরর হয়েছে!");
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
//       alert("গুগল লগইন ব্যর্থ হয়েছে।");
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
//           <h2 className="text-2xl font-bold text-gray-900 pt-2">Create an Account</h2>
//           <p className="text-xs text-gray-400">Please fill in the details to register</p>
//         </div>

//         <form onSubmit={handleRegister} className="space-y-4">
//           <div className="space-y-1.5">
//             <label className="text-xs font-semibold text-gray-800">Name</label>
//             <input 
//               name="name"
//               type="text" 
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//               required
//               disabled={loading}
//             />
//           </div>

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

//           <div className="space-y-1.5">
//             <label className="text-xs font-semibold text-gray-800">Photo URL</label>
//             <input 
//               name="image"
//               type="url" 
//               placeholder="Enter photo URL"
//               value={photoUrl}
//               onChange={(e) => setPhotoUrl(e.target.value)}
//               className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-1.5 relative">
//             <label className="text-xs font-semibold text-gray-800">Password</label>
//             <div className="relative">
//               <input 
//                 name="password"
//                 type={showPassword ? "text" : "password"} 
//                 placeholder="Create a strong password"
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

//           <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5 space-y-1.5 text-[11px] font-medium">
//             <div className={`flex items-center gap-2 ${hasUppercase ? 'text-green-600' : 'text-red-500'}`}>
//               <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${hasUppercase ? 'bg-green-500 border-green-500 text-white' : 'border-red-300'}`}>
//                 {hasUppercase ? '✓' : '✕'}
//               </span>
//               Must have an Uppercase letter
//             </div>
//             <div className={`flex items-center gap-2 ${hasLowercase ? 'text-green-600' : 'text-red-500'}`}>
//               <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${hasLowercase ? 'bg-green-500 border-green-500 text-white' : 'border-red-300'}`}>
//                 {hasLowercase ? '✓' : '✕'}
//               </span>
//               Must have a Lowercase letter
//             </div>
//             <div className={`flex items-center gap-2 ${isLongEnough ? 'text-green-600' : 'text-red-500'}`}>
//               <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${isLongEnough ? 'bg-green-500 border-green-500 text-white' : 'border-red-300'}`}>
//                 {isLongEnough ? '✓' : '✕'}
//               </span>
//               Length must be at least 6 characters
//             </div>
//           </div>

//           <button 
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#111827] hover:bg-black text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-sm mt-4 disabled:bg-gray-400"
//           >
//             {loading ? "Registering..." : "Register"}
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
//           Already have an account?{' '}
//           <Link href="/login" className="text-blue-600 font-bold hover:underline">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '../lib/auth-client';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter(); 

 
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const isLongEnough = password.length >= 6;

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      alert("পাসওয়ার্ডের সব শর্ত পূরণ করা বাধ্যতামূলক!");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log("Registration request:", user);

    try {
    
      const {data} = await authClient.signUp.email({
        email: email.trim(),
        password: password,
        name: name
      });

    console.log(data);
      alert("রেজিস্ট্রেশন সফল হয়েছে! এবার লগইন করুন।");
      
    
      router.push('/login'); 

    } catch (error) {
      console.error("Registration error:", error);
      alert("রেজিস্ট্রেশন ব্যর্থ হয়েছে।");
    }
  };

    const handleGoogleLogin = async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
        
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.446-.26-.846-.663-1.026l-3.25-1.455a1.125 1.125 0 00-.468-.101H10.875c-.522 0-.979.356-1.112.858l-.946 3.562m9.467 0V14.25m0 0H7.5"></path>
            </svg>
            <span className="font-bold text-xl text-gray-900 tracking-tight">DriveFleet</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 pt-2">Get Started!</h2>
          <p className="text-xs text-gray-400">Create a new account to explore features</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Full Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-800">Photo URL (optional)</label>
            <input 
              name="image" 
              type="url" 
              placeholder="Enter photo URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-xs font-semibold text-gray-800">Password</label>
            <div className="relative">
              <input 
                name="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <FaRegEyeSlash className="w-4 h-4" /> : <FaRegEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* পাসওয়ার্ড ভ্যালিডেশন চেকলিস্ট UI */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5 space-y-1.5 text-[11px] font-medium">
            <div className={`flex items-center gap-2 ${hasUppercase ? 'text-green-600' : 'text-red-500'}`}>
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${hasUppercase ? 'bg-green-500 border-green-500 text-white' : 'border-red-300'}`}>
                {hasUppercase ? '✓' : '✕'}
              </span>
              Must have an uppercase letter
            </div>
            <div className={`flex items-center gap-2 ${hasLowercase ? 'text-green-600' : 'text-red-500'}`}>
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${hasLowercase ? 'bg-green-500 border-green-500 text-white' : 'border-red-300'}`}>
                {hasLowercase ? '✓' : '✕'}
              </span>
              Must have a lowercase letter
            </div>
            <div className={`flex items-center gap-2 ${isLongEnough ? 'text-green-600' : 'text-red-500'}`}>
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${isLongEnough ? 'bg-green-500 border-green-500 text-white' : 'border-red-300'}`}>
                {isLongEnough ? '✓' : '✕'}
              </span>
              Must be at least 6 characters
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#111827] hover:bg-black text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-sm mt-4"
          >
            Register
          </button>
        </form>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-3 text-gray-400 text-[10px] font-bold uppercase tracking-wider">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <button onClick={handleGoogleLogin} type="button" className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
          <FcGoogle className="w-4 h-4" /> Sign up with Google
        </button>

        <p className="text-center text-xs text-gray-500 font-medium pt-2">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-bold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;