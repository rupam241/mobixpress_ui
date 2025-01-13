import React, { useState, useEffect, Suspense } from "react";
import { productItem } from "../../item/productItem";
import { Link } from "react-router-dom";

const RotatingDetails = React.lazy(() => import("./RotatingDetails"));
const RotatingDetailsSkeleton = React.lazy(() =>
  import("./RotatingDetailsSkeleton")
);

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
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-2 md:mt-8 overflow-hidden">
      <div className="mb-2 md:mb-8 ">
        <img
          src="https://billing.mobixpress.in/uploads/banner/Picsart_24-12-20_17-30-31-447.jpg"
          alt=""
          className="rou"
        />
      </div>

      <div className="flex items-center justify-between w-full overflow-hidden ">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl relative text-customRed">
            DEAL OF
            <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
          </h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">
            THE DAY
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
                    {/* Lazy loaded Skeleton */}
                    <Suspense fallback={<div>Loading...</div>}>
                      <RotatingDetailsSkeleton />
                    </Suspense>
                  </div>
                </div>
              ))
          : productItem.map((item, index) => (
              <Link to={`product-page/${item.id}`} key={index}>
                <div className="bg-white shadow-md rounded-xl p-4 md:flex md:flex-col overflow-hidden">
                  <div className="w-32 bg-customRed py-2 px-3 rounded-t-2xl text-white animate-fade-in-out  flex gap-2 items-center">
                    <span className="font-semibold">
                      {calculateDiscountPercentage(
                        item.originalPrice,
                        item.discount
                      )}
                      %
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
                    {/* Lazy loaded Details */}
                    <Suspense fallback={<div>Loading...</div>}>
                      <RotatingDetails item={item} />
                    </Suspense>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default DealDay;
