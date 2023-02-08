import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="bg-primary-500">
      <div className="container flex flex-wrap items-center justify-between p-6 mx-auto">
          <img src="/logo.svg" alt="logo" />
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="px-4 py-2 text-white hover:bg-gray-700">Home</Link>
            <Link href="/about" className="px-4 py-2 text-white hover:bg-gray-700">All Seminar</Link>
            <Link href="/contact" className="px-4 py-2 text-white hover:bg-gray-700">Contact</Link>
            <Link href="/signin"><button className="px-4 py-2 text-white">Sign In</button></Link>
          </div>
      <div className="md:hidden">
        <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
         onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (<img src="/x.svg" alt="" />) : (<img src="/Menu.svg" alt="" />)}
        </button>
      </div>
      </div>
    </nav>
    </>
  );
}