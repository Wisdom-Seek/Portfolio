export default function Navbar() {
  return (
    <div className="bg-black flex flex-row h-[8%] justify-between items-center">
      <h3 className="text-[#dc2427] text-3xl font-serif ml-2 font-semibold">Wisdom</h3>
      <ul className="flex flex-row gap-18 mr-10">
        <li className="text-white text-2xl cursor-pointer">Home</li>
        <li className="text-white text-2xl cursor-pointer">About</li>
        <li className="text-white text-2xl cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}