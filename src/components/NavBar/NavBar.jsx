// Navbar.js
import React, { useState } from 'react';
import logo from '../../assets/Uvelaphi.png'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
            <img src={logo} alt="logo" style={{ width: '68px', height: '69px' }} />
            </div>
          </div>
          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Navigation links */}
                <a href="#" className="text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Clan Names
                </a>
                <a href="#" className="text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Resources
                </a>
                <button className="text-black bg-slate-400 pt-2 pl-2 pb-2 pr-2 rounded-md text-sm font-medium">
                  Sign In
                </button>
                {/* Add more links as needed */}
              </div>
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-300 focus:outline-none focus:bg-green-300 focus:text-white transition duration-150 ease-in-out">
              {/* Hamburger icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {/* Mobile navigation links */}
          <a href="#" className="block text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="block text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#" className="block text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Clan Names
          </a>
          <a href="#" className="block text-black hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Resources
          </a>
          <button className=" text-black bg-green-700 ml-3 pt-2 pl-2 pb-2 pr-2 rounded-md text-base font-medium">
            Sign In
          </button>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
