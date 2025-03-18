import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import icon from "@/assets/icons/Icon.svg";
import icon1 from "@/assets/icons/Icon1.svg";
import icon2 from "@/assets/icons/Icon2.svg";
import { Button } from "../ui/button";
import { IoMdTime } from "react-icons/io";

const SearchPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-4 w-full h-full max-w-md md:max-w-3xl md:h-[90vh] md:w-[50%] shadow-lg rounded-lg overflow-auto">
        <div className="flex justify-end items-center">
          <h2 className="text-xl font-bold mx-auto">Search all workers</h2>
          <div>
            
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <h3 className="text-2xl pt-4 pb-3">
          View Workers with their promo Pricing
        </h3>
        {/* Search Section */}
        <div className="flex items-center border-[#eaebec] bg-white rounded-full shadow-sm px-4 py-3">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Categories Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2>Categories</h2>
            <p className="text-base text-blue-500 cursor-pointer">See All</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="bg-[#8677EE] p-4 rounded-lg text-center">
              <img
                src={icon1}
                alt="Promo Icon"
                className="w-10 h-10 mb-2 mx-auto"
              />
              <h3 className="text-white">PROMOS</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <img
                src={icon}
                alt="Promo Icon"
                className="w-10 h-10 mb-2 mx-auto"
              />
              <p className="text-base font-semibold">Icon Design</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <img
                src={icon2}
                alt="Promo Icon"
                className="w-10 h-10 mb-2 mx-auto"
              />
              <p className="text-base font-semibold">App Design</p>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="my-6 flex gap-5 justify-between">
          <Button className="text-white px-3 py-1 rounded text-sm bg-[#8677EE] hover:bg-[#2A2373] w-full">
            YARDWORD
          </Button>
          <Button className="text-white px-3 py-1 rounded text-sm bg-[#8677EE] hover:bg-[#2A2373] w-full">
            COURSE
          </Button>
          <Button className="text-white px-3 py-1 rounded text-sm bg-[#8677EE] hover:bg-[#2A2373] w-full">
            COURSE
          </Button>
        </div>

        {/* Contractors/Workers Section */}
        <div className="my-6">
          <div className="flex justify-between items-center">
            <h2>Contractors/Workers</h2>
            <p className="text-base cursor-pointer">See All</p>
          </div>
          <div className="mt-4 space-y-4">
            {/* Worker Card */}
            <div className="bg-[#EBE8FF] rounded-lg shadow-md flex items-center gap-4">
              <div className="w-1/3 h-30 bg-[#D8D8D8] rounded-l-lg"></div>
              <div className="py-4 space-y-1">
                <h4 className="font-semibold text-lg">Kyle Gee</h4>
                <div className="text-base flex items-center gap-2">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>{" "}
                  <h6 className="text-[12px]">5.0 (21 Reviews)</h6>
                </div>
               <div className="flex items-center gap-1">
                  <IoMdTime className="text-[#8677ee]"/>
               <h6 className="text-[12px]">
                  25 class
                </h6>
               </div>
              </div>
            </div>

            <div className="bg-[#FFF2D5] rounded-lg shadow-md flex items-center gap-4">
              <div className="w-1/3 h-30 bg-[#D8D8D8] rounded-l-lg"></div>
              <div className="py-4 space-y-1">
                <h4 className="font-semibold text-lg">Mobile Softeware</h4>
                <div className="text-base flex items-center gap-2">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>{" "}
                  <h6 className="text-[12px]">5.0 (12 Reviews)</h6>
                </div>
               <div className="flex items-center gap-1">
                  <IoMdTime className="text-[#E3A835]"/>
               <h6 className="text-[12px]">
                  21 class
                </h6>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
