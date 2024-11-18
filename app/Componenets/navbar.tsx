'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#faf5f5]">
      {/* Navigation */}
      <nav className="lg:pl-[750px] xl:pl-[900px] sm:pl-[600px] py-16 max-w-7xl flex justify-between items-center">

        {/* Desktop Navbar Links - Aligning to the left with dynamic margin */}
        <div className="hidden md:flex space-x-9">
          {/* Here, you can adjust the margin for different screen sizes */}
          <Link href="/work" className="text-lg text-black hover:text-blue-700">Work</Link>
          <Link href="/blog" className="text-lg text-black hover:text-blue-700">Blog</Link>
          <Link href="/contact" className="text-lg text-black hover:text-blue-700">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu Button - Aligning to the left */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

      </nav>

      {/* Mobile Dropdown Menu - Aligning to the left */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white p-4 space-y-4 flex flex-col`}>
        <Link href="/work" className="text-lg text-black hover:text-blue-700">Work</Link>
        <Link href="/blog" className="text-lg text-black hover:text-blue-700">Blog</Link>
        <Link href="/contact" className="text-lg text-black hover:text-blue-700">Contact</Link>
      </div>
    </div>
  );
}
