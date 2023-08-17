'use client'

import React, { useState, useEffect } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const adImages = [
  'https://flowbite.com/docs/images/carousel/carousel-1.svg',
  'https://flowbite.com/docs/images/carousel/carousel-2.svg',
  'https://flowbite.com/docs/images/carousel/carousel-3.svg',
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % adImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + adImages.length) % adImages.length);
  };

  return (
    <div id="default-carousel" className="relative">
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {adImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all ease-in-out duration-700 transform ${
              currentSlide === index
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
            }`}
          >
            <img
              src={image}
              alt={`Ad ${index + 1}`}
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {adImages.map((image, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        className="flex absolute opacity-40 top-0 left-0 z-30 justify-center items-center px-8 h-full focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <BiSolidLeftArrow color='#ffffff' size='2rem'/>
      </button>
      <button
        className="flex absolute opacity-40 top-0 right-0 z-30 justify-center items-center px-12 h-full focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <BiSolidRightArrow color='ffffff' size='2rem'/>
      </button>
    </div>
  );
};

export default AdSlider;
