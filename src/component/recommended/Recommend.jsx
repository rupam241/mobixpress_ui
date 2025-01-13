import React, { useState, useEffect, Suspense, useMemo } from "react";
import { productItem } from "../../item/productItem";
import { Link } from "react-router-dom";

// Lazy load components
const RotatingDetails = React.lazy(() => import("./RotatingDetails"));
const RotatingDetailsSkeleton = React.lazy(() =>
  import("./RotatingDetailsSkeleton")
);

const Recommended = React.memo(() => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 1 second before displaying the actual product items
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay of 1 second
  }, []);

  const calculateDiscountPercentage = useMemo(
    () => (originalPrice, discountedPrice) => {
      const original = parseFloat(originalPrice.replace(/[^0-9.-]+/g, ""));
      const discounted = parseFloat(discountedPrice.replace(/[^0-9.-]+/g, ""));
      if (isNaN(original) || isNaN(discounted)) {
        return "Invalid price";
      }
      const discountPercentage = ((original - discounted) / original) * 100;
      return discountPercentage.toFixed(0);
    },
    [] // This function won't be recreated unless dependencies change
  );

  const productList = useMemo(() => {
    return loading
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
                <Suspense fallback={<RotatingDetailsSkeleton />}>
                  <RotatingDetailsSkeleton />
                </Suspense>
              </div>
            </div>
          ))
      : productItem.slice(0, 9).map((item, index) => (
          <Link to={`product-page/${item.id}`}>
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start justify-between relative"
            >
              {/* Discount price label */}
              <div className="flex items-center justify-between w-32 md:w-auto gap-1 bg-customRed py-1 px-3 rounded-t-2xl text-white  animate-border-flow">
                <span className="font-semibold">{item.discount}</span>
                <div className=" items-center">
                  <span className="text-sm">OFF</span>
                </div>
              </div>

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
                <Suspense fallback={<RotatingDetailsSkeleton />}>
                  <RotatingDetails item={item} />
                </Suspense>
              </div>
            </div>
          </Link>
        ));
  }, [loading]);

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 md:mt-8 mt-2">
      <div className="md:mb-8 mb-2">
        <img
          src="https://billing.mobixpress.in/uploads/banner/Picsart_24-12-20_17-30-31-447.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl relative text-customRed">
            RECOMMENDED
            <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
          </h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">
            PRODUCT
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

      {/* Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-8 mt-2 w-full cursor-pointer">
        {productList}
      </div>

      <div className="md:mt-8 mt-2">
        <img
          src="https://billing.mobixpress.in/uploads/banner/Picsart_24-12-20_17-40-02-958.jpg"
          alt=""
          className="rounded-xl"
        />
      </div>
    </div>
  );
});

export default Recommended;
