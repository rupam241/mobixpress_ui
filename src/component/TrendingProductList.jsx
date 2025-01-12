import React, { useState, useEffect } from "react";
import { productItem } from "../item/productItem";
import { Link } from "react-router-dom";

function ProductList() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 3 seconds before displaying the actual product items
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay of 3 seconds
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
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl relative text-customRed">
            TRENDING
            <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
          </h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">
            PRODUCT
          </span>
        </div>

        <button className="relative bg-red-200 py-3 px-4 text-customRed italic text-lg">
          Show more
          <span className="absolute bottom-0 left-0 w-full h-1 bg-customRed animate-flow-button-line"></span>
        </button>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full cursor-pointer">
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
                    {/* image */}
                    <div>
                      <div className="w-24 h-32 bg-gray-300 rounded-md mt-6"></div>
                    </div>

                    {/* Rotating Details with Animation */}
                    <RotatingDetailsSkeleton />
                  </div>
                </div>
              ))
          : productItem.slice(0, 9).map((item, index) => (
              <Link  to={`product-page/${item.id}`} key={index}>
                <div
                  
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start justify-between relative"
                >
                  {/* Discount price label */}
                  <div className="flex items-center justify-between w-32 md:w-auto gap-1 bg-customRed py-1 px-3 rounded-t-2xl text-white  animate-border-flow">
                    <span className="font-semibold">{item.discount}</span>
                    <div className=" items-center">
                      <span className="text-sm">OFF</span>
                    </div>
                  </div>

                  {/* discount percentage level */}
                  {/* <div className="flex items-center justify-between w-full md:w-auto gap-1 bg-customRed py-1 px-3 rounded-t-2xl text-white  ">
                  <span className="font-semibold">
                   {item.discount}
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm">OFF</span>
                  </div>
                </div> */}

                  {/* Product image and other details */}
                  <div className="flex items-center gap-8">
                    {/* Image */}
                    <div className="w-18 md:w-24 lg:w-32">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md mt-6"
                      />
                    </div>

                    {/* Rotating Details */}
                    <RotatingDetails item={item} />
                  </div>
                </div>
              </Link>
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
      setIsVisible(false); // Start fade-out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % details.length);
        setIsVisible(true); // Start fade-in
      }, 500);
    }, 3000);

    return () => clearInterval(interval); // Cleanup
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

// Skeleton for RotatingDetails
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

export default ProductList;
