import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav className="fixed top-0 left-0 z-10 w-full flex items-center justify-between p-1  backdrop-sepia-[10px] text-white shadow-md">
          {/* Logo */}
          <div className="w-[6em]">
            <img className="ml-5 " src="/images/logo.png" alt="logo" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <Link to="/" className="hover:text-red-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/Location" className="hover:text-red-500">Location</Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-red-500">Contact</Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-red-500">About</Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-red-700" aria-label="Open Menu">
              {/* Simple hamburger icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Login Button */}
          <button 
            className="px-5 py-3 bg-red-700 hover:bg-red-800 rounded-md text-white hidden md:block"
            aria-label="Login to your account"
          >
            Login
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
