import React, { useState, useEffect } from "react";
import { productItem } from "../item/productItem";

function DealDay() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const original = parseFloat(originalPrice.replace(/[^0-9.-]+/g, ""));
    const discounted = parseFloat(discountedPrice.replace(/[^0-9.-]+/g, ""));
    if (isNaN(original) || isNaN(discounted)) {
      return "Invalid price";
    }
    const discountPercentage = ((original - discounted) / original) * 100;
    return discountPercentage.toFixed(0);
  };

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-10 overflow-hidden">
      <div className="mb-4 md:mb- ">
        <img src="https://billing.mobixpress.in/uploads/banner/Picsart_24-12-20_17-30-31-447.jpg" alt="" className="rou" />
      </div>
      
      
      
      <div className="flex items-center justify-between w-full overflow-hidden mt-">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl relative text-customRed">
            DEAL OF
            <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
          </h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">
            THE DAY
          </span>
        </div>

        <button className="bg-red-200 py-3 px-4 text-customRed italic text-lg sm:flex hidden relative">
          Show more
          <span className="absolute bottom-0 left-0 w-full h-1 bg-customRed animate-flow-button-line"></span>
        </button>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 w-full overflow-hidden">
        {loading
          ? Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start justify-between relative animate-pulse"
                >
                  <div className="absolute top-0 left-0 bg-gray-300 w-24 px-2 py-1 flex items-center text-sm text-white rounded-e-xl">
                    <span className="w-10 bg-gray-500 h-4"></span>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="w-24 h-32 bg-gray-300 rounded-md mt-6"></div>
                    <RotatingDetailsSkeleton />
                  </div>
                </div>
              ))
          : productItem.map((item, key) => (
              <div
                key={key}
                className="bg-white shadow-md rounded-xl p-4 md:flex md:flex-col overflow-hidden"
              >
                <div className="w-32 bg-customRed py-2 px-3 rounded-t-2xl text-white animate-border-flow  flex gap-2 items-center">
                  <span className="font-semibold">
                    {calculateDiscountPercentage(item.originalPrice, item.discount)}%
                  </span>
                  <span className="text-sm">OFF</span>
                </div>

                <div className="flex flex-col items-center gap-8">
                  <div className="md:w-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-md mt-6"
                    />
                  </div>
                  <RotatingDetails item={item} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

const RotatingDetails = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const details = [
    `Sales Count: ${item.salesCount}`,
    `Flat Discount: ${item.discount}`,
    `Availability: ${item.availability}`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % details.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [details.length]);

  return (
    <div className="flex flex-col mb-3">
      <h2 className="text-lg font-extrabold uppercase">{item.name}</h2>
      <p className="uppercase mt-1 text-gray-500">
        {item.name} ({item.storage}) {item.color}
      </p>
      <p className="text-gray-600 mt-1">Quality {item.condition}</p>

      <span
        className={`text-green-500 text-xs mt-2 font-semibold transition-all duration-700 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {details[currentIndex]}
      </span>
      <span className="flex items-center gap-5 mt-3">
        <span className="font-semibold">{item.price}</span>
        <span className="line-through text-customRed font-semibold">
          {item.originalPrice}
        </span>
      </span>
    </div>
  );
};

const RotatingDetailsSkeleton = () => {
  return (
    <div className="flex flex-col mb-3">
      <div className="w-24 h-6 bg-gray-300 rounded-md mt-2"></div>
      <div className="w-32 h-4 bg-gray-300 rounded-md mt-2"></div>
      <div className="w-16 h-4 bg-gray-300 rounded-md mt-2"></div>
      <div className="w-16 h-6 bg-gray-300 rounded-md mt-4"></div>
    </div>
  );
};

export default DealDay;
