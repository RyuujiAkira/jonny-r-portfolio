"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Optional: for hamburger icon

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-white fixed left-0 top-0 h-auto w-full z-50 md:max-w-20 px-5 py-2 flex flex-row justify-between md:h-full md:flex-col">
      <Link href="/">
        <Image
          className="aspect-square cursor-pointer mx-auto"
          width={50}
          height={50}
          src="/assets/nav-logo-dark.png"
          alt="Picture of the author"
          loading="eager"
          fetchPriority="high"
          style={{ objectFit: "cover" }}
        />
      </Link>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden mt-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Menu for desktop and mobile */}
      <div
        className={`relative flex flex-col md:flex-row justify-between items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:gap-10 md:rotate-0 md:translate-x-0 mt-4 md:mt-0`}
      >
        <Link href="/about">
          <span className="hover:text-gray-300">About</span>
        </Link>
        <Link href="/experience">
          <span className="hover:text-gray-300">Experience</span>
        </Link>
        <Link href="/projects">
          <span className="hover:text-gray-300">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-gray-300">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
