'use client'

import React, { useState, useEffect } from 'react';
 
const adImages = [
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
];
 
const AdSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % adImages.length);
    }, 3000);
 
    return () => {
      clearInterval(timer);
    };
  }, []);
 
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };
 
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-md shadow-md">
      <div className="flex transition-transform duration-300 ease-in-out transform -translate-x-full translate-x-[calc(-100%*${currentSlide})]">
        {adImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Ad ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="flex flex-row space-x-2">
          {adImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 ${
                currentSlide === index
                  ? 'bg-blue-600 rounded-full'
                  : 'bg-gray-400 rounded-full'
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4 bg-white text-black px-4 py-2 rounded-lg shadow-md">
        {currentSlide + 1} / {adImages.length}
      </div>
    </div>
  );
};
 
export default AdSlider;
