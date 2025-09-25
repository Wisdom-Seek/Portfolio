
import Image from "next/image";

import pen from "../public/assets/pen.png"
import user from "../public/assets/interface.png"
import code from "../public/assets/code.png"

export default function Service() {
    return (
        <div className="bg-[#101111] h-[80%] w-full flex flex-col gap-12 p-5">
            <div className="h-[10%] flex flex-col gap-4">
                <h3 className="text-white text-3xl  font-semibold">My Services</h3>
                <h3 className="text-white text-5xl font-semibold">What I can Do</h3>
            </div>
            <div className="h-[90%] w-[100%] flex flex-wrap gap-10 justify-center items-center">
                <div className="bg-[#1f1e1f] w-[30%] h-[50%] rounded-2xl">
                    <Image src={pen} width={40} height={30} alt="" className="">

                    </Image>
                    <h3 className="text-white font-semibold">Javascript</h3>
                    <p></p>
                </div>
                <div className="bg-[#1f1e1f] w-[30%] h-[50%] rounded-2xl">
                    <Image src={pen} width={40} height={30} alt="" className="">

                    </Image>
                    <h3 className="text-white font-semibold">Javascript</h3>
                    <p></p>
                </div>
                <div className="bg-[#1f1e1f] w-[30%] h-[50%] rounded-2xl">
                    <Image src={pen} width={40} height={30} alt="" className="">

                    </Image>
                    <h3 className="text-white font-semibold">Javascript</h3>
                    <p></p>
                </div>
            </div>

        </div>
    );
}