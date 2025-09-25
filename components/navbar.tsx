import Link from "next/link";
export default function Navbar() {
  return (
    <div id="nav" className="bg-black flex flex-row h-[8%] justify-between items-center">
      <h3 className="text-[#dc2427] text-3xl font-serif ml-2 font-semibold cursor-pointer">Wisdom</h3>
      <div className="flex flex-row gap-18 mr-10">
        <Link href="/#intro" className="text-white hover:text-[#dc2427] text-2xl cursor-pointer">Home</Link>
        <Link href="/#about" className="text-white text-2xl cursor-pointer hover:text-[rgb(220,36,39)]">About</Link>
        <Link href="/#projects" className="text-white text-2xl cursor-pointer hover:text-[#dc2427]">Projects</Link>
        <Link href="/#footer" className="text-white text-2xl cursor-pointer hover:text-[#dc2427]">Contact</Link>
      </div>
    </div>
  );
}