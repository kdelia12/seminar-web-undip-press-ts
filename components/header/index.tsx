import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="bg-primary-500">
      <nav className="px-28 py-6">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <img src="/logo.svg" alt="logo" />
            <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
              <Link href="/" className="pr-5 pt-3 text-white">Home</Link>
              <Link href="/about" className="px-5 py-3 text-white ">All Seminar</Link>
              <Link href="/contact" className="px-5 py-3 text-white ">Contact</Link>
              <Link href="/Login"><button className="px-5 py-3 text-white rounded-lg bg-primary-300 hover:bg-primary-600 focus:bg-primary-600">Sign In</button></Link>
            </div>
        <div className="md:hidden">
          <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setIsOpen(!isOpen)}>{isOpen ? (<img src="/x.svg" alt="" />) : (<img src="/Menu.svg" alt="" />)}
          </button>
        </div>
        </div>
      </nav>
    </div>
    
    </>
  );
}