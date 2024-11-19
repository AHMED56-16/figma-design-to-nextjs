'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import heroImage from "@/public/assests/hero-image.png";
import featuredPic1 from "@/public/assests/featured-pic-1.png";
import featuredPic2 from "@/public/assests/featured-pic-2.png";
import featuredPic3 from "@/public/assests/featured-pic-3.png";
import icons from "@/public/assests/icons.png";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="bg-[#faf5f5] min-h-screen relative">
      <div className="bg-[#faf5f5]">
        <nav className="lg:pl-[750px] xl:pl-[900px] sm:pl-[600px] py-16 max-w-7xl flex justify-between items-center">

          <div className="hidden md:flex space-x-9">
            <Link href="/work" className="text-lg text-black hover:text-blue-700">Work</Link>
            <Link href="/blog" className="text-lg text-black hover:text-blue-700">Blog</Link>
            <Link href="/contact" className="text-lg text-black hover:text-blue-700">Contact</Link>
          </div>

          <button className="md:hidden text-black focus:outline-none sm : block" onClick={toggleMenu}>
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

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white p-4 space-y-4 flex flex-col`}>
          <Link href="/work" className="text-lg text-black hover:text-blue-700">Work</Link>
          <Link href="/blog" className="text-lg text-black hover:text-blue-700">Blog</Link>
          <Link href="/contact" className="text-lg text-black hover:text-blue-700">Contact</Link>
        </div>






        <div className="hero-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-24 px-5">
          <div className="hero-text col-span-1 sm:col-span-3 lg:col-span-3 flex flex-col pl-16">
            <h1 className="font-heebo text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[61px] sm:leading-[50px] lg:leading-[70px] tracking-[2px] text-left mb-4">
              Hi, I am John,<br /> Creative Technologist
            </h1>
            <p className="font-heebo text-base sm:text-lg lg:text-xl font-normal leading-[23.5px] sm:leading-[28px] text-left mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="h-12 w-52 text-white bg-[#F98585] align-middle mt-9">Generate resume</button>
          </div>
          <div className="hero-image col-span-1 sm:col-span-3 lg:col-span-3 flex justify-center pb-14">
            <Image src={heroImage} alt="hero image" className="w-[292px] h-[299px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-contain" />
          </div>
        </div>

        <div className="bg-[#CFA6A6] px-6 py-4 mb-0 flex justify-between">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Recent Posts</h1>
          <span className="text-[#F98585]">Read More</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center py-12 items-center bg-[#CFA6A6]">
          <div className="w-full sm:w-[483px] h-[356px] bg-white flex flex-col items-start p-6 shadow-lg mb-8 sm:mb-0 sm:mr-8">
            <div className="mt-10">
              <h1 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600">Making a design system From Scratch</h1>
              <article className="flex flex-col items-start">
                <div className="flex items-center gap-x-12 text-xs text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                  <a href="#" className="bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                </div>
                <div className="group relative mt-4">
                  <p className="mt-5 text-sm text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="w-full sm:w-[483px] h-[356px] bg-white flex flex-col items-start p-6 shadow-lg mb-8 sm:mb-0 sm:mr-8">
            <div className="mt-10">
              <h1 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600">Making a design system From Scratch</h1>
              <article className="flex flex-col items-start">
                <div className="flex items-center gap-x-12 text-xs text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                  <a href="#" className="bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                </div>
                <div className="group relative mt-4">
                  <p className="mt-5 text-sm text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[90%] lg:w-[75%] bg-[#faf5f5] p-8 mx-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 px-8">Featured Work</h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6">
              <div className="w-full sm:w-1/2 h-[300px] rounded-lg overflow-hidden mb-6 sm:mb-0">
                <Image src={featuredPic1} alt="Featured Image 1" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-1/2 sm:ml-6">
                <h3 className="text-2xl font-semibold text-gray-900">Designing Dashboard</h3>
                <div><button className="text-white bg-[#F98585] m-2 rounded-2xl w-16">2020</button><span>Dashboard</span></div>
                <p className="mt-4 text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6">
              <div className="w-full sm:w-1/2 h-[300px] rounded-lg overflow-hidden mb-6 sm:mb-0">
                <Image src={featuredPic2} alt="Featured Image 2" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-1/2 sm:ml-6">
                <h3 className="text-2xl font-semibold text-gray-900">Designing Dashboard</h3>
                <div><button className="text-white bg-[#F98585] m-2 rounded-2xl w-16">2020</button><span>Dashboard</span></div>
                <p className="mt-4 text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6">
              <div className="w-full sm:w-1/2 h-[300px] rounded-lg overflow-hidden mb-6 sm:mb-0">
                <Image src={featuredPic3} alt="Featured Image 3" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-1/2 sm:ml-6">
                <h3 className="text-2xl font-semibold text-gray-900">Designing Dashboard</h3>
                <div><button className="text-white bg-[#F98585] m-2 rounded-2xl w-16">2020</button><span>Dashboard</span></div>
                <p className="mt-4 text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer h-[243px] flex justify-center items-center flex-col gap-9">
          <Image src={icons} alt="Icons" />
          <p className="text-center text-gray-600">Copyright © 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
