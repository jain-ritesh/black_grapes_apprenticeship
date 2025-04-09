import React from 'react';
import hero8 from "../assets/hero8.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const  Content7 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-6 md:p-20">
      {/* Text Section */}
      <div className="md:w-1/2 w-full px-2">
        <h2 className="text-lg md:text-xl font-semibold py-2">Flexible Work Hours:</h2>
        <p className="text-base text-gray-700">
          Enjoy the freedom to choose your work schedule, allowing you to balance your internship with other commitments.
        </p>
        <br />
        <h2 className="text-lg md:text-xl font-semibold py-2">Remote Learning:</h2>
        <p className="text-base text-gray-700">
          Access all training materials and work on projects from anywhere, with virtual meetings and team collaborations.
        </p>
        <br />
        <h2 className="text-lg md:text-xl font-semibold py-2">Real-World Exposure:</h2>
        <p className="text-base text-gray-700">
          Gain hands-on experience by working on live projects that directly impact business outcomes and improve your skills.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img src={hero8} alt="Internship Visual" className="w-full h-auto rounded-2xl shadow-md" />
      </div>
    </div>
  );
};

export default Content7;
