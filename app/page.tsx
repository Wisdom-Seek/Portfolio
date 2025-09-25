import Image from "next/image";
import Navbar from "../components/navbar";
import About from "@/components/about";
import Intro from "@/components/intro";
import Service from "@/components/service";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Navbar/>
      <Intro/>
      <About/>
      <Service/>
      <Footer/>

    </div>
  );
}
