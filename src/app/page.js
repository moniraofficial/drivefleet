import Image from "next/image";
import Banner from "./components/Banner";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
      <Features />
   <hi> hero section is coming</hi>
    </div>
  );
}

