import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaRegClock, FaStar } from "react-icons/fa";
import ButtonCourse from "../button/ButtonCourse";

const SliderCommon = () => {
  const services = [
    {
      title: "JAVASCRIPT PROJECTS",
      rating: 5.0,
      reviews: 21,
      availability: "24 hours availability",
      price: "$50/hr",
    },
    {
      title: "REACT DEVELOPMENT",
      rating: 4.9,
      reviews: 15,
      availability: "12 hours availability",
      price: "$60/hr",
    },
    {
      title: "NODE.JS BACKEND",
      rating: 4.8,
      reviews: 30,
      availability: "24 hours availability",
      price: "$70/hr",
    },
  ];

  return (
    <div>
      <div className="w-9/12 h-auto py-5 md:w-full mx-auto ">
        <h2 className="text-center text-lg font-semibold mb-4">Services</h2>
        <Carousel className="w-full ">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/3 px-2"
              >
                <div className="bg-indigo-100 p-4 rounded-lg shadow-md py-10">
                  <h3 className="text-gray-900 font-semibold">
                    {service.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500 mt-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    <span className="text-gray-600 text-sm">
                      {service.rating} ({service.reviews} Reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <FaRegClock className="mr-1" />
                    <span className="text-sm">{service.availability}</span>
                  </div>
                  <div className="mt-2 text-blue-600 font-semibold">
                    <span className="text-lg">{service.price}</span>{" "}
                    <a href="#" className="underline">
                      Request
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Button */}
      <ButtonCourse></ButtonCourse>
    </div>
  );
};

export default SliderCommon;
