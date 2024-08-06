import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
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

  const navItem = [
    { link: "Home", path: "home" },
    { link: "Service", path: "Service" },
    { link: "About", path: "About" },
    { link: "Product", path: "Product" },
    { link: "Testmonials", path: "Testmonials" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-4 px-4 ${
          isSticky
            ? "sticky left-0 right-0 border bg-white duration-300 top-0"
            : "top-0"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8 ">
          <a
            href=""
            className="text-2xl font-bold flex items-center space-x-3 "
          >
            <img className="w-10 inline-block items-center" src={logo} />
            <span className="text-[blue]">GenzoAlpha</span>
          </a>

          {/* nav item for large devices  */}
          <ul className="md:flex space-x-12 hidden ">
            {navItem.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block hover:text-brandPrimary text-base first:font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* btn for large devices */}
          <div
            onClick={toggleMenu}
            className="hidden lg:flex space-x-12  items-center "
          >
            <a className="hidden lg:flex items-center text-brandPrimary first:font-medium hover:text-gray-900">
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:text-neutralGray">
              SignUp
            </button>
          </div>

          {/* menu btn for only mobile devices  */}

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

        {/* nav item for mobile devices */}

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              to={`/${path}`}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block hover:text-brandPrimary text-base first:font-medium"
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
