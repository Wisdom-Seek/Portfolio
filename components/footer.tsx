
import Image from "next/image";
import git from "../public/assets/git.png"
import mail from "../public/assets/gmail.png"
import linked from "../public/assets/linked.png"

export default function Footer() {
    return (
        <div id="footer" className="bg-[#0f0f0f] w-full h-[30%] flex justify-center items-center gap-15">
            <div className="flex w-[30%] flex-col gap-5">
                <p className="text-white text-5xl font-bold">Lets work together on your
                    next project</p>
                <p className="text-[#8c8e8f] text-xl">Collaboration is key! Lets join forces and combine our skills to tackle your next
                    project with a powerful synergy that guarantees success.</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <button className="bg-[#dc2427]  w-40 h-10 rounded-2xl text-white font-semibold shadow-[#484c51] shadow-md cursor-pointer">Contact me</button>
                <div className="flex gap-4">
                    <a href="https://github.com/Wisdom-Seek"><Image src={git} width={20} height={20} alt="" className="animate-[pulse_1s_ease-in-out_infinite]">

                    </Image></a>
                    <a href="mailto:jatin18979@gmail.com"><Image src={mail} width={20} height={20} alt="" className="animate-[pulse_1s_ease-in-out_infinite]">

                    </Image></a>
                    <a href="www.linkedin.com/in/jatin-singh-a42265309"><Image src={linked} width={20} height={20} alt="" className="animate-[pulse_1s_ease-in-out_infinite]">

                    </Image></a>
                </div>

            </div>

        </div>
    );
}