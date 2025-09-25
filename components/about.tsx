import Image from "next/image";

import js from "../public/assets/javascript.png"
import ts from "../public/assets/typescript.png"
import njs from "../public/assets/nextjs.png"
import html from "../public/assets/html.png"
import react from "../public/assets/react.png"
import tail from "../public/assets/tailwind.png"
import arrow from "../public/assets/arrow.png"

export default function About() {
  return (
    <div id="about" className="bg-[#151514] h-[100%] w-full flex justify-center items-center ">
      <div className="flex flex-col w-[50%]">
        <h3 className="text-white text-3xl mt-6">About me</h3>
        <h3 className="text-white text-5xl mt-7">Who Am I</h3>
        <p className="text-[#8c8e8f] text-xl mt-10">
          My name is Jatin Singh, and I am a passionate frontend web developer. I have always been fascinated by the intersection of design and technology, and I am thrilled to be able to bring my creative ideas to life through coding. My primary focus is on frontend development, where I excel in crafting beautiful user interfaces that are both visually appealing and user-friendly.My technical skills include proficiency in HTML, CSS, JavaScript, and various frontend frameworks such as React and Next.js. I am well-versed in responsive design principles, ensuring that websites look great and function seamlessly across different devices and screen sizes. Continuously learning and staying up-to-date with the latest trends and technologies is a priority for me. I am always exploring new tools, frameworks, and techniques to enhance my skills and deliver cutting-edge solutions to my clients.</p>
        <div className="bg-[#101110] w-[100%] h-[20%] mt-10 rounded-2xl p-5 flex flex-wrap gap-6">

          <div className="bg-[#242524] w-[30%] h-[40%] rounded-2xl flex justify-center items-center">
            <Image src={js} width={40} height={30} alt="" className="">

            </Image>
            <h3 className="text-white font-semibold">Javascript</h3>
          </div>
          <div className="bg-[#242524] w-[30%] h-[40%] rounded-2xl flex justify-center items-center">
             <Image src={ts} width={40} height={30} alt="" className="">

            </Image>
            <h3 className="text-white font-semibold">Typescript</h3>
          </div>
          <div className="bg-[#242524] w-[30%] h-[40%] rounded-2xl flex justify-center items-center">
             <Image src={react} width={40} height={30} alt="" className="">

            </Image>
            <h3 className="text-white font-semibold">React</h3>
          </div>
          <div className="bg-[#242524] w-[30%] h-[40%] rounded-2xl flex justify-center items-center">
             <Image src={html} width={40} height={30} alt="" className="">

            </Image>
            <h3 className="text-white font-semibold">HTML</h3>
          </div>
          <div className="bg-[#242524] w-[30%] h-[40%] rounded-2xl flex justify-center items-center">
             <Image src={njs} width={40} height={30} alt="" className="">

            </Image>
            <h3 className="text-white font-semibold">NextJs</h3>
          </div>
          <div className="bg-[#242524] w-[30%] h-[40%] rounded-2xl flex justify-center items-center">
             <Image src={tail} width={40} height={30} alt="" className="">

            </Image>
            <h3 className="text-white font-semibold">Tailwind Css</h3>
          </div>
          <div className="w-full h-[10%] flex justify-between items-center">
           <button className="bg-[#dc2427] hover:bg-[#bd2525] hover:shadow-lg w-40 h-10 rounded-2xl text-white font-semibold shadow-[#484c51] shadow-md mt-5 cursor-pointer animate-[pulse_1s_ease-in-out_infinite]">Download CV</button>
            <a href="#nav"><Image src={arrow} width={40} height={30} alt="" className="animate-[pulse_1s_ease-in-out_infinite]">

            </Image></a>
          </div>

        </div>

      </div>
    </div>
  );
}