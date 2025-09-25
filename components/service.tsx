
import Image from "next/image";

import pen from "../public/assets/pen.png"
import user from "../public/assets/interface.png"
import code from "../public/assets/code.png"
import arrow from "../public/assets/arrow.png"

export default function Service() {
    return (
        <div id="projects" className="bg-[#101111] h-[100%] w-full flex flex-col  p-5 justify-center items-center">
            <div className="h-[10%] flex flex-col gap-4">
                <h3 className="text-white text-2xl  font-semibold">My Services</h3>
                <h3 className="text-white text-5xl font-semibold">What I can Do</h3>
            </div>
            <div className="h-[70%] w-[100%] flex flex-wrap gap-10 justify-center items-center">
                <div className="bg-[#1f1e1f] w-[30%] h-[50%] rounded-2xl flex flex-col justify-center items-center gap-4">
                    <Image src={pen} width={40} height={30} alt="" className="">

                    </Image>
                    <h3 className="text-white font-semibold">Creative Designs</h3>
                    <p className="text-white w-[70%] ">Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences.</p>
                </div>
                <div className="bg-[#1f1e1f] w-[30%] h-[50%] rounded-2xl flex flex-col justify-center items-center gap-4">
                    <Image src={code} width={70} height={70} alt="" className="">

                    </Image>
                    <h3 className="text-white font-semibold">Clean Code</h3>
                    <p className="text-white w-[70%] ">Writing code that is well-structured, readable, and maintainable. It involves following coding best practices.</p>
                </div>
                <div className="bg-[#1f1e1f] w-[30%] h-[50%] rounded-2xl flex flex-col justify-center items-center gap-4">
                    <Image src={user} width={40} height={30} alt="" className="">

                    </Image>
                    <h3 className="text-white font-semibold">User Friendly</h3>
                    <p className="text-white w-[70%]" >Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience.</p>
                </div>
            </div>
             <a href="#nav"><Image src={arrow} width={40} height={30} alt="" className="animate-[pulse_1s_ease-in-out_infinite]">

            </Image></a>

        </div>
    );
}