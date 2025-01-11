import React, { useState } from "react";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa"; // Hamburger icon

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage hamburger menu toggle

  return (
    <div className="mt-3">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:px-8">
        {/* For Small and Medium Screens */}
        <div className="lg:hidden  flex flex-col w-full">
          {/* Hamburger Menu */}
          <div className=" px-4 flex justify-between items-center w-full">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-black"
            >
              <FaBars />
            </button>
            <div>
              <img
                src="https://www.mobixpress.in/assets/logo1.png"
                alt="MobiXpress Logo"
                className="h-12 w-36"
              />
            </div>
            <div>
              <CiUser
                className="text-3xl cursor-pointer border-2 border-customRed rounded-full object-cover mr-5"
                style={{ fill: "#FF0000" }} // Using inline style for red color
              />
            </div>
          </div>

            <div className="relative flex items-center gap-4 bg-white rounded-full px-4 py-2 w-full mt-4">
              <img
                src="https://www.mobixpress.in/assets/cat.png"
                alt="Category Icon"
                className="h-6 w-6"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-black outline-none placeholder-gray-500 border-2 border-slate-200 px-4 py-3 rounded-full"
              />
              <CiSearch className="absolute right-6 rounded-full text-slate-100 cursor-pointer bg-customRed w-10 h-10 p-1" />
            </div>
       
        </div>

        {/* For Large Screens */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Logo */}
          <div>
            <img
              src="https://www.mobixpress.in/assets/logo1.png"
              alt="MobiXpress Logo"
              className="h-18 w-52"
            />
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center gap-4 bg-white rounded-full px-4 py-2 w-2/3 sm:w-1/2">
            <img
              src="https://www.mobixpress.in/assets/cat.png"
              alt="Category Icon"
              className="h-6 w-6"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-black outline-none placeholder-gray-500 border-2 border-slate-200 px-4 py-3 rounded-full"
            />
            <CiSearch className="absolute right-6 rounded-full text-slate-100 cursor-pointer bg-customRed w-10 h-10 p-1" />
          </div>

          {/* User and Cart Icons */}
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="w-full bg-customRed py-2 px-5 rounded-lg">
              <CiUser className="text-2xl text-white border-2 rounded-full object-fit" />
            </div>
            <div className="flex w-full bg-customRed py-2 px-3 gap-1 rounded-lg items-center">
              <CiShoppingCart className="text-2xl cursor-pointer text-white" />
              <span className="relative flex items-center justify-center text-xs text-white rounded-full w-6 h-6">
                3
                <span className="absolute inset-0 bg-[rgb(255,193,7)] opacity-80 rounded-full animate-ping delay-1000"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
