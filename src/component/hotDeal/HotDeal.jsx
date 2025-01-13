import React, { useState, useEffect, useRef, Suspense } from "react";
import {productItem} from "../../item/productItem"
import { Link } from "react-router-dom";

const RotatingDetails = React.lazy(() => import("./RotatingDetails"));
const RotatingDetailsSkeleton = React.lazy(() => import("./RotatingDetailsSkeleton"));

function HotDeal() {
  const [loading, setLoading] = useState(true);
  const scrollWrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollWrapperRef.current.offsetLeft);
    setScrollLeft(scrollWrapperRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-4 lg:px-20 px-6  mt-2 md:mt-8 overflow-hidden">
      <div>
        <img
          src="https://billing.mobixpress.in/uploads/banner/Picsart_24-12-20_20-13-52-299.jpg"
          alt=""
          className=" md:mb-8 mb-4 "
        />
      </div>
      <div className="flex justify-between items-center w-full md:mt-8 mt-4">
        <div className="flex items-center gap-2 italic">
          <h1 className="text-xl md:text-3xl font-extrabold font-serif text-customRed relative">
            HOT
            <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
          </h1>
          <span className="text-xl md:text-3xl font-extrabold font-serif">DEAL</span>
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

      {/* Item List with Horizontal Scrolling and Drag-to-Scroll */}
      <div
        ref={scrollWrapperRef}
        className="scroll-wrapper flex gap-6 overflow-x-auto py-4 scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {loading
          ? Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start justify-between relative animate-pulse overflow-hidden w-64 sm:w-80 lg:w-96"
                >
                  <div className="absolute top-0 left-0 bg-gray-300 w-10 px-2 py-1 flex items-center text-sm text-white rounded-e-xl">
                    <span className="w-10 bg-gray-500 h-4"></span>
                  </div>
                  <div className="flex items-center gap-8">
                    {/* Image */}
                    <div className="w-24 md:w-32">
                      <div className="bg-gray-300 rounded-md mt-10"></div>
                    </div>

                    {/* Rotating Details with Animation */}
                    <Suspense fallback={<RotatingDetailsSkeleton />}>
                      <RotatingDetailsSkeleton />
                    </Suspense>
                  </div>
                </div>
              ))
          : productItem.map((item,index) => (
         <Link to={`product-page/${item.id}`} key={index}>
         <div
               
                className="bg-white shadow-lg rounded-xl p-6 w-96 sm:w-112 md:w-1/2 lg:w-1/3 flex items-center relative"
              >
                {/* holding container */}
                <div className="flex flex-col items-center gap-3 mt-6">
                  {/* image */}
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-48 h-36 object-cover rounded-md"
                    />
                  </div>

                  {/* DISCOUNT */}
                  <div className="w-32 md:w-28 bg-customRed py-2 px-3 rounded-t-2xl text-white animate-border-flow absolute top-0 left-0">
                    <span>{item.discount}</span>
                    <span>OFF</span>
                  </div>

                  {/* Rotating Details */}
                  <Suspense fallback={<RotatingDetailsSkeleton />}>
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

export default HotDeal;
