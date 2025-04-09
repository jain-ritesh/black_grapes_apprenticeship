import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";

const SliderImage = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[100vh]  overflow-hidden shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
      />

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-4 h-4 bg-orange-500"
                : "w-3 h-3 bg-white opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
