import React, { useState, useEffect, memo } from "react";

const RotatingDetails = memo(({ item }) => {
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
});

export default RotatingDetails;
