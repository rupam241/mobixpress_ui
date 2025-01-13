import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";

function Menu() {
  const [activeIndex, setActiveIndex] = useState(null); // Track clicked index

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked item index
  };

  return (
    <div className="border border-[#ccc] w-full mt-4 lg:block hidden">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-around">
        {/* Menu Links */}
        <div className="space-y-2 md:space-y-0 md:flex items-center md:space-x-4">
          <div
            onClick={() => handleClick(0)} // Handle click for Home
            className={`relative group cursor-pointer py-2 px-4 transition-all duration-500 ease-out transform
              ${activeIndex === 0 ? "scale-105 shadow-lg shadow-customRed" : ""}`}
            style={{
              backgroundColor: activeIndex === 0 ? "#f8d7da" : "transparent", 
            }}
          >
            <Link
              to=""
              className="text-lg relative group hover:text-customRed transition-colors duration-300"
            >
              Home
              {/* Wave-like Underline animation */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-customRed transition-all duration-500 ease-in-out
                  ${activeIndex === 0 ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </Link>
          </div>

          <div
            onClick={() => handleClick(1)} // Handle click for Mobixpress Store
            className={`relative group cursor-pointer py-2 px-4 transition-all duration-500 ease-out transform
              ${activeIndex === 1 ? "scale-105 shadow-lg shadow-customRed" : ""}`}
            style={{
              backgroundColor: activeIndex === 1 ? "#f8d7da" : "transparent", // Light pink background for active item
            }}
          >
            <Link
              to="/store"
              className="text-lg relative group hover:text-customRed transition-colors duration-300"
            >
              Mobixpress Store
              {/* Wave-like Underline animation */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-customRed transition-all duration-500 ease-in-out
                  ${activeIndex === 1 ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </Link>
          </div>

          <div
            onClick={() => handleClick(2)} // Handle click for MobiXmas Deals
            className={`relative group cursor-pointer py-2 px-4 transition-all duration-500 ease-out transform
              ${activeIndex === 2 ? "scale-105 shadow-lg shadow-customRed" : ""}`}
            style={{
              backgroundColor: activeIndex === 2 ? "#f8d7da" : "transparent", // Light pink background for active item
            }}
          >
            <Link
              to="/deals"
              className="text-lg relative group hover:text-customRed transition-colors duration-300"
            >
              MobiXmas Deals
              {/* Wave-like Underline animation */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-customRed transition-all duration-500 ease-in-out
                  ${activeIndex === 2 ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </Link>
          </div>

          <div
            onClick={() => handleClick(3)} // Handle click for My Order
            className={`relative group cursor-pointer py-2 px-4 transition-all duration-500 ease-out transform
              ${activeIndex === 3 ? "scale-105 shadow-lg shadow-customRed" : ""}`}
            style={{
              backgroundColor: activeIndex === 3 ? "#f8d7da" : "transparent", // Light pink background for active item
            }}
          >
            <Link
              to="/orders"
              className="text-lg relative group hover:text-customRed transition-colors duration-300"
            >
              My Order
              {/* Wave-like Underline animation */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-customRed transition-all duration-500 ease-in-out
                  ${activeIndex === 3 ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </Link>
          </div>

          <div
            onClick={() => handleClick(4)} // Handle click for Exchange
            className={`relative group cursor-pointer py-2 px-4 transition-all duration-500 ease-out transform
              ${activeIndex === 4 ? "scale-105 shadow-lg shadow-customRed" : ""}`}
            style={{
              backgroundColor: activeIndex === 4 ? "#f8d7da" : "transparent", // Light pink background for active item
            }}
          >
            <Link
              to="/exchange"
              className="text-lg relative group hover:text-customRed transition-colors duration-300"
            >
              Exchange
              {/* Wave-like Underline animation */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-customRed transition-all duration-500 ease-in-out
                  ${activeIndex === 4 ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-4 md:mt-0 flex items-center gap-3 text-black">
          <div className=" ">
            <IoCall className="text-white bg-customRed p-2 w-10 h-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-customRed" />
          </div>
          <div className="text-center md:text-left mt-2 text-sm">
            <p className="font-semibold">Help Number</p>
            <span className="text-lg">+91 801799888</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
