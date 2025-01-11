import React from "react";
import { products } from "../item/productData";

function ProductList() {
  // Function to calculate the discount percentage
  const calculateDiscountPercentage = (price, discount) => {
    const priceValue = parseInt(price.replace(/-/g, ""));
    const discountPercentage = (discount / priceValue) * 100;
    return discountPercentage.toFixed(0);
  };

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 md:px-15 px-10 mt-10">
      {/* Display title */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl">TRENDING</h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">PRODUCT</span>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hidden lg:flex">
            Show more
          </button>
        </div>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full relative">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start justify-between"
          >

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-32 object-cover rounded-md mb-4"
            />

            {/* Product Details */}
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <p className="text-red-500">{calculateDiscountPercentage(item.price, item.discount)}% OFF</p>

            {/* Add to Cart Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
