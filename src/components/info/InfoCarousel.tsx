import { useEffect, useState } from "react";

// Import images
import {
  default as image1,
  default as image2,
  default as image3,
  default as image4,
} from "../../assets/images/WhiteDemo.jpeg";

const InfoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image array
  const images = [
    [image1, image2, image3], // Slide 1
    [image2, image3, image4], // Slide 2
    [image3, image4, image1], // Slide 3
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-4/5 mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 5}%)` }}
        >
          {images.map((slide, index) => (
            <div
              key={index}
              className="flex min-w-full justify-center items-center gap-4"
            >
              {/* Two large images */}
              <img
                src={slide[0]}
                alt="Slide 1"
                className="w-1/3 h-40 rounded-lg"
              />
              <img
                src={slide[1]}
                alt="Slide 2"
                className="w-1/3 h-40 rounded-lg"
              />

              {/* Small vertical image */}
              <img
                src={slide[2]}
                alt="Slide 3"
                className="w-12 h-40 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-end mt-4 mr-[10%] md:mr-[30%]">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md">
          Home Page
        </button>
      </div>
    </div>
  );
};

export default InfoCarousel;
