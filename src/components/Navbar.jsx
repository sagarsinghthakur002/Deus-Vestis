import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="bg-slate-950 text-white">
        <nav className="flex items-center justify-between px-5 py-5">
          {/* Logo */}
          <div className="w-20">
            <img src="/images/logo.png" alt="logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link to="/" className="hover:text-red-500">Home</Link>
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

          {/* Login Button */}
          <button className="px-5 py-3 bg-red-700 hover:bg-red-800 rounded-md text-white">
            Login
          </button>

        </nav>
      </div>
    </>
  );
}

export default Navbar;
