import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/image.png';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // close mobile menu on link click
  };

  return (
    <nav className="z-90 fixed w-full bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={myImage} alt="Logo" className="h-11 w-11" />
          <a href="/" className="text-xl font-semibold">
            BLACK <span className="text-orange-400">GRAPES GROUP</span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#content2" className="hover:text-gray-300">Free Training Program</a></li>
          <li><a href="#content5" className="hover:text-gray-300">Courses Offered</a></li>
          <li><a href="#content6" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
        </ul>

        {/* Desktop Register Button */}
        {/* <div className="hidden md:block">
          <Link to="/content4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg">
              Register Here
            </Button>
          </Link>
        </div> */}

        <div className="hidden md:block">
          
            <a href='#content4'>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg">
                Register Here
              </Button>
            </a>
        
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col items-start space-y-2 px-4 text-lg">
            <li><a href="#content2" onClick={handleLinkClick} className="hover:text-gray-300">Free Training Program</a></li>
            <li><a href="#content5" onClick={handleLinkClick} className="hover:text-gray-300">Courses Offered</a></li>
            <li><a href="#content6" onClick={handleLinkClick} className="hover:text-gray-300">About Us</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="hover:text-gray-300">Contact Us</a></li>
          </ul>
          <div className="px-4">
            <a href='#content4' onClick={handleLinkClick}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg w-full">
                Register Here
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
