import React, { useState, useEffect } from "react";
import HeroSkeleton from "./skeleton/HeroSkeleton";
import { bannerData } from "../item/BannerData";
import { products } from "../item/productData";

function Hero() {
  const [loading, setLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [bgColor, setBgColor] = useState("bg-red-500");

  // Array of dynamic background colors
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prev) => {
        const currentIndex = colors.indexOf(prev);
        return colors[(currentIndex + 1) % colors.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <HeroSkeleton />
      ) : (
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row sm:gap-4 justify-between items-center rounded-xl pt-2 lg:pt-4 px-20 ">
          {/* First Image Container with Lazy Loading */}
          <div className="h-full">
            <img
              src={bannerData[currentBanner]}
              alt={`Banner ${currentBanner + 1}`}
              loading="lazy" // Lazy Loading Implemented Here
              className="w-full h-1/4 object-cover rounded-xl"
            />
          </div>

          {/* Second Image and Text Container with Lazy Loading */}
          <div className="mt-4 lg:mt-0 border-2 border-customRed p-10 hidden lg:flex flex-col items-center justify-center h-full w-2/3 rounded-2xl">
            <div className="w-full h-full flex-1 flex items-center justify-center">
              <img
                src="https://mobixpress.in/billing/uploads/model/realme_C63_5Gwdd.png"
                alt=""
                loading="lazy" // Lazy Loading Implemented Here
                className="h-auto object-contain w-full max-w-xs p-10"
              />
            </div>

            <div className="text-center ">
              <span
                className={`font-semibold text-lg text-black inline-block py-2 px-5 rounded-lg ${bgColor}`}
              >
                Realme C63 5G
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
