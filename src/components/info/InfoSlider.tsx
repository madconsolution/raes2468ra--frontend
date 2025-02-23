import {
  default as slide1,
  default as slide2,
  default as slide3,
} from "@/assets/images/image1.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const InfoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const skipSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center ">
        {/* Dots Indicator */}
        <div className=" top-4 left-4 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        {/* Skip Button */}
        <Button
          onClick={skipSlide}
          className=" top-4 right-4  text-blue-500 font-bold px-4 py-2 rounded-lg"
        >
          Skip
        </Button>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className={currentSlide === index ? "block" : "hidden"}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-[300px] h-auto  md:mt-0 md:w-[460px] md:h-[250px]  mx-auto rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <>
          <h1 className="font-[700] my-5 text-4xl text-[#0A3875]">
            Hire web developers in Kelowna
          </h1>
          <p>
            Find the right iOS Game Development course for you. Answer a few
            questions to see what we'd recommend for you.
          </p>
        </>
      </div>
    </div>
  );
};

export default InfoSlider;
