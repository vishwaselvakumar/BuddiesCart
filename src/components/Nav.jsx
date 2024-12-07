import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex shadow-md shadow-sky-800 py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[80px] tracking-wide z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-40" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center px-2 py-1 text-gray-600 hover:text-[#007bff] focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center gap-8 bg-white lg:bg-transparent absolute lg:relative top-0 left-0 lg:top-auto lg:left-auto w-full lg:w-auto h-screen lg:h-auto p-6 lg:p-0 lg:space-y-0 space-y-6 lg:shadow-none shadow-md z-50`}
        >
          {/* Exit Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-[#007bff] focus:outline-none lg:hidden"
            onClick={closeMenu}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex gap-4">
            <li>
              <Link
                to="/"
                className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row lg:items-center space-y-9 lg:space-y-0 lg:space-x-6">
            <button
              className="px-4 py-2 text-[15px] rounded font-semibold text-[#007bff] border-2 border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent hover:text-white"
              onClick={closeMenu}
            >
              Connect Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
