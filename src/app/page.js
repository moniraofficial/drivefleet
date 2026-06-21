import Image from "next/image";
import Banner from "./components/Banner";
import Features from "./components/Features";
import AvailableCars from "./components/AvailableCars";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
    
      <AvailableCars />
      <Features />
      <Stats />
      <HowItWorks />
   
    </div>
  );
}

