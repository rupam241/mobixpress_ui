import React from "react";

function ProductList() {
  return (
    <div className="mt-16 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto px-20">
        {/* TRENDING with Flowing Line */}
        <div className="flex items-center gap-3 relative mb-4 md:mb-0">
          <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl font-serif relative text-customRed">
            TRENDING
            {/* Flowing Line Animation */}
            <span className="absolute left-0 bottom-[-6px] w-[33%] h-[4px] bg-customRed animate-flow-line"></span>
          </h1>
          <span className="font-extrabold text-xl sm:text-base md:text-lg lg:text-xl">
            PRODUCT
          </span>
        </div>

        {/* View More Button with Flowing Line */}
        <div className="text-sm sm:text-base md:text-lg bg-red-200 relative overflow-hidden inline-block">
          {/* Flowing Line */}
          <div className="absolute top-0 left-0 w-full h-full bg-transparent animate-flow-button-line"></div>
          <button className="px-3 py-2 font-semibold text-customRed relative z-10">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
