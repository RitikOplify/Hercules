"use client";
import React, { useState } from "react";

function ImageCarousel() {
  const images = [
    "/Images/watch1.jpg",
    "/Images/watch7.png",
    "/Images/watch6.png",
    "/Images/watch5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 3;
  const nextSlide = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center py-10 bg-white">
        <div className="flex justify-end w-full pr-10 space-x-4 text-lg">
          <button
            onClick={prevSlide}
            className="bg-black text-white px-4 py-1 rounded-sm shadow-md hover:shadow-lg transition"
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white px-4 py-1 rounded-sm shadow-md hover:shadow-lg transition"
            disabled={currentIndex >= images.length - visibleImages}
          >
            &#8250;
          </button>
        </div>

        <div className="overflow-hidden w-[960px]">
          {/* Adjusted width for 3 images */}
          <div
            className="flex transition-transform duration-500 ease-in-out space-x-4"
            style={{ transform: `translateX(-${currentIndex * (320 + 16)}px)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Watch ${index}`}
                className="h-80 w-72 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
