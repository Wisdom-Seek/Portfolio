import anime from "../public/assets/anime.jpg"
import Image from "next/image";

export default function Intro() {
  return (
     <div className="bg-[#0a0b0b] flex items-center justify-between h-[80%] w-ful">
        <div className="flex flex-col w-[30%] ml-[10%]">
            <h2 className="text-[#e64749] text-2xl mb-2 font-semibold">Hello, my name is</h2>
            <h1 className="text-white text-7xl mb-4 font-semibold">Jatin Singh</h1>
            <h3 className="text-[#8c8e8f] mb-3">A Passionate and dedicated junior web developer, driven by the ever-evolving world of technology and its limitless posssibilities</h3>
            <button className="bg-[#dc2427] w-40 h-10 rounded-2xl text-white font-semibold shadow-[#484c51] shadow-md cursor-pointer">Contact me</button>
        </div>
        <div className="flex w-[30%] justify-center mr-10">
           <Image src={anime} width={500} height={400} alt="" className="rounded-2xl shadow-[#484c51] shadow-xl">

           </Image>
        </div>
     </div>
  );
}
