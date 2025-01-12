import React, { useRef, useState, useEffect } from 'react';
import {products} from "../../item/productData"
import { throttle } from 'lodash';


const SkeletonLoader = () => (
  <div className="border p-4 rounded-xl flex flex-col items-center bg-white relative w-24 h-18 shadow-md animate-pulse">
    {/* Skeleton for Product Image */}
    <div className="w-14 h-10 mt-6 bg-gray-300 animate-pulse"></div>

    {/* Skeleton for Price */}
    <div className="absolute right-2 top-2 bg-gray-300 w-12 h-4 rounded-lg animate-pulse"></div>

    {/* Skeleton for Product Name */}
    <div className="w-16 h-4 bg-gray-300 mt-4 animate-pulse"></div>
  </div>
);


const ProductCard = React.memo(({ item }) => (
  <div className="border p-4 rounded-xl flex flex-col items-center bg-white relative w-48 h-36 shadow-md sm:w-40 md:w-44 lg:w-48 xl:w-56">
    {/* Product Image */}
    <div className="w-20 h-18 mb-4 border-2 p-2">
      <img
        srcSet={`${item.image}?w=400 400w, ${item.image}?w=800 800w`}
        src={item.image}
        alt={item.name}
        className="w-full h-full object-contain"
        loading="lazy" 
      />
    </div>

    {/* Price */}
    <p className="absolute right-2 top-2 bg-customRed text-white px-2 py-1 text-xs rounded-lg">
      {item.price}
    </p>

    {/* Product Name */}
    <h2 className="font-semibold text-sm text-center">{item.name}</h2>
  </div>
));

function DisplayHero() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = throttle((e) => {
    if (!isMouseDown) return;
    const x = e.clientX;
    const scroll = scrollLeft - (x - startX);
    containerRef.current.scrollLeft = scroll;
  }, 16); 

  return (
    <div
      className="md:max-w-screen-xl mx-auto rounded-xl pt-2 mt-10 flex items-center justify-start gap-7 overflow-x-auto scrollbar-hide cursor-grab max-w-xl"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      id="scroll-container"
    >
      {isLoading
        ? 
          Array(12)
            .fill()
            .map((_, index) => <SkeletonLoader key={index} />)
        : 
        products.map((item, key) => (
            <ProductCard key={key} item={item} />
          ))}
    </div>
  );
}

export default DisplayHero;
