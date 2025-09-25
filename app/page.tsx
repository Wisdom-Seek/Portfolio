import Image from "next/image";
import Navbar from "../components/navbar";
import About from "@/components/about";
import Intro from "@/components/intro";
import Service from "@/components/service";


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <Navbar/>
      <Intro/>
      <About/>
      <Service/>

    </div>
  );
}
