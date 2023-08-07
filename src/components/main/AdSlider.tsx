'use client'

import React, { useState } from 'react';

const adImages = [
    './1.jpg',
    './1.jpg',
    './1.jpg'
];

const AdSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out transform translate-x-[-100%] translate-x-[calc(-100%*${currentSlide})]">
        {adImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Ad ${index + 1}`} className="w-full h-auto rounded" />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={() => goToSlide((currentSlide - 1 + adImages.length) % adImages.length)}
          className="bg-black text-white p-2 rounded-full mr-2"
        >
          &lt;
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % adImages.length)}
          className="bg-black text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AdSlider;