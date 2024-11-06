import React, { useState, useEffect } from 'react';

const images = [
  "/slider-image01.avif", 
  "/slider-image02.avif",
  "/slider-image03.avif",
  "/slider-image04.avif",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="relative w-full max-w-full mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full object-cover rounded-lg shadow-lg transition-transform duration-500"
      />
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
