import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    // { link: "Testimonials", path: "testimonials" },
    { link: "FAQ", path: "faq" },
  ];
  const handleOnGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-4 px-4 ${
          isSticky
            ? "sticky left-0 right-0 border bg-white duration-300 top-0"
            : "top-0"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="#"
            className="text-2xl font-bold flex items-center space-x-3"
          >
            <img className="w-10 inline-block" src={logo} alt="GenzoAlpha Logo" />
            <span className="text-brandPrimary">ZenzoAlpha</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block hover:text-brandPrimary text-base first:font-medium cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* buttons for large devices */}
          <div
            className="hidden lg:flex space-x-4 items-center"
          >
            {/* <a className="text-brandPrimary first:font-medium hover:text-mybg">
              Login
            </a> */}
            <button onClick={handleOnGetInTouch} className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:text-mybg">
              Get Started
            </button>
          </div>

          {/* menu button for mobile devices */}
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

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block hover:text-brandPrimary text-base first:font-medium"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
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
