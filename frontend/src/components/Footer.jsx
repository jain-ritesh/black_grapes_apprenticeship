import React from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <h3 className="text-xl font-semibold uppercase">Black Grapes Group</h3>
          </div>
          <p className="text-sm text-gray-400">
            Black Grapes Group offers dynamic internships to empower future tech leaders with hands-on experience in cutting-edge technologies.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-3">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p>Phone:</p>
              <div className="flex flex-col text-amber-500">
                <a href="tel:+917470997884">+91 7470997884</a>
                <a href="tel:+916262414463">+91 6262414463</a>
                <a href="tel:+919039397884">+91 9039397884</a>
              </div>
            </div>
            <div>
              <p>Email:</p>
              <div className="flex flex-col text-amber-500">
                <a href="mailto:blackgrapes.arpitjain@gmail.com">blackgrapes.arpitjain@gmail.com</a>
                <a href="mailto:blackgrapes.deepikajain@gmail.com">blackgrapes.deepikajain@gmail.com</a>
              </div>
            </div>
            <div>
              <p>Address 1:</p>
              <a
                href="https://www.google.com/maps?q=252-F/H,+Scheme+No+54,+Vijay+Nagar,+Indore,+Madhya+Pradesh+452010,+India"
                className="text-amber-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                252-F/H, Scheme No 54, Vijay Nagar, Indore, MP 452010
              </a>
            </div>
            <div>
              <p>Address 2:</p>
              <a
                href="https://www.google.com/maps?q=Office+Number+1141,+in+front+of+Union+Bank,+Vijay+Nagar,+Part+I,+Scheme+No+114,+Indore,+MP+452010"
                className="text-amber-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Office 1141, in front of Union Bank, Scheme No 114, Indore, MP 452010
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <a href= '/privacy-policy'>Privacy Policy</a>
            <a href="/terms-condition">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Black Grapes Softech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
