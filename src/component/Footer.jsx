import React, { useState } from "react";

import { MdEmail } from "react-icons/md";

function Footer() {
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
    <>
    
      <div className="relative w-full mt-24 mb-12">
        <div className="border-t-4 border-customRed w-full transition-all ease-in-out duration-500"></div>
      </div>

      {/* last */}
      <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-10 lg:pt-14 lg:px-20 px-10 mt-10 mb-10  text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
          {/* Logo & Contact */}
          <div className="flex flex-col items-start">
            <img
              src="https://www.mobixpress.in/mobi/html/assets/css/src/logo.png"
              className="md:w-56 w-36 mb-4"
              alt="MobiXpress Logo"
            />
            <h2 className="text-xl font-bold mb-2">MOBIXPRESS</h2>
            <div className="flex items-center gap-2 text-gray-400">
              <MdEmail className="text-customRed" />
              <span>rupamdey241@gmail.com</span>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h1 className="text-lg font-bold mb-4">Menu</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-customRed">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customRed">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customRed">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* MobiXpress Policy */}
          <div>
            <h1 className="text-lg font-bold mb-4">MobiXpress Policy</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-customRed">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customRed">
                  Refund & Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customRed">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h1 className="text-lg font-bold mb-4">Office Address</h1>
            <address className="text-gray-600 space-y-1">
              <p>M-1/81, H ROAD, ANADAPURI</p>
              <p>ANANDADEEP APARTMENT</p>
              <p>Anandpuri, Barrackpore</p>
              <p>North Twenty Four Parganas</p>
              <p>West Bengal, 700122</p>
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
