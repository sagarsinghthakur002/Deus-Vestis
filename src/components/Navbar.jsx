import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full flex items-center justify-between p-1 backdrop-sepia-[10px] text-white shadow-md" role="navigation">
        {/* Logo */}
        <div className="w-[6em]">
          <img className="ml-5" src="/images/logo.png" alt="Your Brand Name" />
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-8 text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/" className="hover:text-red-500" aria-current="page">Home</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-red-500">About</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-red-500">Contact</Link>
          </li>
          <li>
            <Link to="/Location" className="hover:text-red-500">Location</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-red-700" 
            aria-label={isOpen ? "Close Menu" : "Open Menu"} 
            aria-expanded={isOpen}
          >
            {/* Simple hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Login Button */}
        <button 
          className="px-9 py-3 m-5 bg-red-700 hover:bg-red-800 rounded-md text-white hidden md:block"
          aria-label="Login to your account"
        >
          Login
        </button>
      </nav>
    </>
  );
}

export default Navbar;