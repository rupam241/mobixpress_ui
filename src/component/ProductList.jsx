import React from "react";
import { productItem } from "../item/productItem";
import { FaRupeeSign } from "react-icons/fa";

function ProductList() {
  // Function to calculate the discount percentage
  const calculateDiscountPercentage = (price, discount) => {
    const priceValue = parseInt(price.replace(/-/g, ""));
    const discountPercentage = (discount / priceValue) * 100;
    return discountPercentage.toFixed(0);
  };

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-10">
      {/* Display title */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl">
            TRENDING
          </h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">
            PRODUCT
          </span>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hidden lg:flex">
            Show more
          </button>
        </div>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full cursor-pointer">
        {productItem.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start justify-between relative"
          >
            <div className="absolute top-0 left-0 bg-customRed w-24 px-2 py-1 flex items-center text-sm text-white rounded-e-xl">
             
              <span>{item.discount}</span>
              <span className="ml-1">OFF</span>
            </div>
            <div className="flex items-center gap-8">
              {/* image */}
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded-md mt-6"
                />
              </div>
              {/* //other field */}
              <div className="mb-14  flex flex-col   ">
                <h2 className="text-lg font-extrabold uppercase">{item.name}</h2>
                <p className="uppercase ">{item.name}({item.storage}){item.color}</p>
                <p className="text-gray-600 ">Quality {item.condition}</p>
                <p className="text-red-500">
                  {calculateDiscountPercentage(item.price, item.discount)}% OFF
                </p>
              </div>
            </div>

            {/* Product Details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
