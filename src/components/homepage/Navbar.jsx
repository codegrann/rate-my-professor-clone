import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  // const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Social Media Icons */}
      <div className="hidden sm:flex space-x-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500"
        >
          <FaTiktok size={20} />
        </a>
      </div>

      {/* Center: Logo */}
      <div>
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-600"
        >
          RMD
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="hidden sm:flex space-x-2">
        <Link
          to="/login"
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Join the Membership
        </Link>
      </div>
      {/* Hamburger Menu (visible on small screens only) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-blue-500"
        >
          <HiMenu size={28} />
        </button>
        {/* Dropdown menu (toggle visibility) */}
        {isMenuOpen && (
          <div className="absolute right-0 top-16 z-[100] flex flex-col gap-4 bg-white shadow-lg rounded p-4">
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-white bg-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Join the Membership
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
