// src/components/Nav.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import myImage from '../assets/image.png';
import { Button } from './ui/button';
import { Link, Menu, X } from 'lucide-react';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu
  };

  const handleSmoothScroll = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="z-90 fixed w-full bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
          <img src={myImage} alt="Logo" className="h-11 w-11" />
          <span className="text-xl font-semibold">
            BLACK <span className="text-orange-400">GRAPES GROUP</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <button
              onClick={() => handleSmoothScroll('content2')}
              className="hover:text-gray-300 cursor-pointer"
            >
              Free Training Program
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('content5')}
              className="hover:text-gray-300 cursor-pointer"
            >
              Courses Offered
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('content6')}
              className="hover:text-gray-300 cursor-pointer"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="hover:text-gray-300 cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Desktop Register Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleSmoothScroll('content4')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg"
          >
            Register Here
          </button>
        </div>

        {/* Hamburger Icon */}
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
            <li>
              <button
                onClick={() => {
                  handleSmoothScroll('content2');
                  handleLinkClick();
                }}
                className="hover:text-gray-300"
              >
                Free Training Program
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleSmoothScroll('content5');
                  handleLinkClick();
                }}
                className="hover:text-gray-300"
              >
                Courses Offered
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleSmoothScroll('content6');
                  handleLinkClick();
                }}
                className="hover:text-gray-300"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleSmoothScroll('contact');
                  handleLinkClick();
                }}
                className="hover:text-gray-300"
              >
                Contact Us
              </button>
            </li>
          </ul>
          <div className="px-4">
            <button
              onClick={() => {
                handleSmoothScroll('content4');
                handleLinkClick();
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg w-full"
            >
              Register Here
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
