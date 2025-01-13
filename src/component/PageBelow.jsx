import React from 'react'
import { useState } from 'react';

function PageBelow() {
     const priceRanges = [
        { min: 0, max: 7999 },
        { min: 8000, max: 14999 },
        { min: 15000, max: 29999 },
        { min: 30000, max: 49999 },
        { min: 50000, max: 79999 },
        { min: 80000, max: 150000 },
      ];
    
      const branchDetails = [
        {
          branch: "BRACK-1",
          address: "Barrakpore Railway Station",
          phone: "8017999888",
          email: "service@mobixpress.in",
        },
        {
          branch: "DUNLOP",
          address: "153/1 B. T. Road, Vikram A. C. Market",
          phone: "9831746860",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
        {
          branch: "BARASAT",
          address: "12, Jessore Road",
          phone: "8420425633",
          email: "service@mobixpress.in",
        },
      ];
    
      const [isMouseDown, setIsMouseDown] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
    
      const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.clientX);
        setScrollLeft(e.target.scrollLeft);
      };
    
      const handleMouseLeave = () => {
        setIsMouseDown(false);
      };
    
      const handleMouseUp = () => {
        setIsMouseDown(false);
      };
    
      const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        const x = e.clientX;
        const walk = (x - startX) * 2; // Multiplies the scroll speed
        e.target.scrollLeft = scrollLeft - walk;
      };
    
  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 md:mt-10 mt-8 ">
    <h1 className="uppercase md:font-bold text-4xl font-semibold text-center">
      Welcome to MobiXpress # Leading Seller in Second Hand <br />
      <span className="text-center mt-2">Smartphones</span>
    </h1>
    <p className="md:mt-4 mt-3 text-center">
      MobiXpress, known as Second Hand smartphone expert and leading
      industry from last 5 years, focused on delivering quality products at
      most affordable prices along with continued customer support services.
      We ensure best quality products passed from 55 strict quality checks.
      We aim to contribute towards a greener environment and reduce e-waste.
      Join our community and get the most reliable and affordable products
      ever.
    </p>

    <div className="md:mt-20 mt-10">
      <img
        src="https://www.mobixpress.in/assets/Box_Image.webp"
        alt="Product box"
        className="w-full h-auto rounded-md"
      />
    </div>

    <div className="md:mt-8 mt-6 w-full">
      <h3 className="text-xl font-semibold text-center ">
        Price Ranges
      </h3>
      <div
        className="flex gap-6 p-4"
        style={{
          maxWidth: "100%",
          flexWrap: "nowrap",
          overflowX: "auto",
          cursor: "grab", // Change cursor when hovering over the scrollable area
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {priceRanges.map((range, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-100 p-4 rounded-lg shadow-md mt-4 md:mt-6"
            style={{ minWidth: "200px" }}
          >
            <span className="text-lg font-medium">
              Between ₹ {range.min} & ₹ {range.max}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex items-center justify-between w-full overflow-hidden md:mt-8 mt-4">
      <div className="flex items-center gap-2 italic">
        <h1 className="md:text-3xl font-extrabold font-serif text-xl relative text-customRed">
          OUR
          <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
        </h1>
        <span className="md:text-3xl font-extrabold font-serif text-xl">
          BRANCH
        </span>
      </div>

      <button
          className="relative bg-red-200 py-3 px-4 text-customRed italic text-lg hidden md:flex 
          overflow-hidden 
          hover:text-black
          hover:scale-105 transition-all ease-in-out duration-300"
        >
          Show more
          <span className="absolute bottom-0 left-0 w-full h-1 bg-customRed animate-line-flow"></span>
          {/* New hover animation effects */}
          <span className="absolute inset-0 border-2 border-transparent hover:border-customRed transition-all duration-500"></span>
        </button>
    </div>

    {/* Branch details with scrolling */}
    <div className="md:mt-8 mt-2 w-full mb-24">
      <div
        className="flex gap-6 overflow-x-auto p-4 scrollbar-hide"
        style={{
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {branchDetails.map((branch, index) => (
          <div
            key={index}
            className={`flex-shrink-0 bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-xl p-6 w-64 min-w-[250px] md:w-72 lg:w-80 transition-transform hover:scale-105 hover:shadow-2xl animate-fade-slide`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="text-lg font-bold text-blue-900 mb-2">
              {branch.branch}
            </h4>
            <p className="text-gray-700 mb-1">📍 {branch.address}</p>
            <p className="text-gray-700 mb-1">📞 {branch.phone}</p>
            <p className="text-gray-700">✉️ {branch.email}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default PageBelow