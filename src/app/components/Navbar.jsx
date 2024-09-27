"use client"; // For client-side rendering

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js optimized Image
import Link from "next/link"; // Import Next.js Link
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"; // For scrolling to sections
import logo from "../assets/logo1.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Service", path: "/#service" },
    { link: "About", path: "/#about" },
    { link: "Product", path: "/#product" },
    { link: "Contact Us", path: "/#contact" },
    { link: "FAQ", path: "/#faq" },
  ];

  const handleOnGetInTouch = () => {
    router.push("/#contact");
  };

  return (
    <header className="bg-brandPrimary md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-4 lg:px-4 px-4 ${
          isSticky
            ? "sticky left-0 right-0 bg-[#003049] duration-300 top-0"
            : "top-0 bg-[#003049]"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center space-x-3"
          >
            <Image
              className="w-10 inline-block"
              src={logo} // Ensure logo is in public folder
              alt="GenzoAlpha Logo"
              width={40}
              height={40}
            />
            <div className="flex flex-col -space-y-3">
              <span className="text-white">GenzoAlpha</span>
              <span className="text-[12px] text-white">Consulting Group</span>
            </div>
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  className="block hover:text-brandPrimary text-white text-base first:font-medium cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons for large devices */}
          <div className="hidden lg:flex space-x-4 items-center">
            <button
              onClick={handleOnGetInTouch}
              className="bg-brandPrimary hover:bg-white text-white py-2 px-4 transition-all duration-300 rounded hover:text-mybg"
            >
              Get Started
            </button>
          </div>

          {/* Menu button for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes size={24} className="text-neutralDgrey" />
              ) : (
                <FaBars className="text-neutralDgrey" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              href={path}
              key={path}
              className="block text-white hover:text-brandPrimary text-base first:font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
