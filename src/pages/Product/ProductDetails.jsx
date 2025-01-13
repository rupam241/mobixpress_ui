import React from 'react';

function ProductDetails({
  product,
  calculateDiscountPercentage,
  formatImei,
  condition,
  handleConditionClick,
  handleClick,
  productColor,
  isClick,
  handleAddToCart,
  handleBuyNow
}) {
  return (
    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-10 w-full">
      <div className="productName flex flex-wrap items-center gap-1 font-bold text-2xl w-full ">
        <span>{product.name}</span>
        <span>({product.storage}),</span>
        <span>{product.color}</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-4 mt-3">
        <div className="text-2xl font-bold">{product.price}</div>
        <div className="text-base line-through text-customRed font-medium">
          {product.originalPrice}
        </div>
        <div className="bg-green-600 px-6 rounded-l-3xl flex gap-1 text-lg font-medium text-white">
          <span>
            {calculateDiscountPercentage(product.originalPrice, product.discount)}
          </span>
          <span>%</span>
        </div>
      </div>

      {/* Store Name */}
      <div className="mt-5 flex gap-3 items-center">
        <span className="text-lg font-bold">Store Name</span>
        <span className="text-gray-500">{product.branch}</span>
      </div>

      {/* Age */}
      <div className="mt-3 flex items-center gap-3">
        <span className="text-lg font-bold">Age</span>
        <span className="text-gray-700">{product.age}</span>
      </div>

      {/* IMEI */}
      <div className="border-2 border-black px-7 py-3 rounded-lg mt-5 inline-block gap-1">
        <span>IMEI No</span>
        <span className="ml-2">{formatImei(product.imei)}</span>
      </div>

      {/* Condition Section */}
      <div className="mt-3 flex flex-col gap-3">
        <span className="text-xl font-bold">Condition</span>
        <span>{condition || "Please select a condition"}</span>

        <div className="flex items-center gap-4">
          <span
            className={`border-2 py-2 px-4 rounded-lg cursor-pointer ${
              condition === "Mint" ? "border-red-500" : "border-black"
            }`}
            onClick={() => handleConditionClick("Mint")}
          >
            Mint
          </span>

          <span
            className={`border-2 py-2 px-4 rounded-lg cursor-pointer ${
              condition === "Super mint" ? "border-red-500" : "border-black"
            }`}
            onClick={() => handleConditionClick("Super mint")}
          >
            Super mint
          </span>
        </div>
      </div>

      {/* Color Section */}
      <div>
        <div className="mt-4 flex items-center gap-1">
          <span className="text-xl font-bold">Color</span>
          <span>|</span>
          <span className="uppercase text-gray-500">{product.color}</span>
        </div>
        <div className="mt-3">
          <div
            onClick={handleClick}
            className={`border-2 p-3 rounded-full inline-block cursor-pointer ${
              isClick ? "border-customRed" : "border-black"
            }`}
          >
            <span
              className="p-4 rounded-full flex justify-center items-center"
              style={{
                backgroundColor: productColor,
                color: productColor === "#ffffff" ? "#000" : "#fff",
              }}
            ></span>
          </div>
        </div>
      </div>

      {/* Storage Section */}
      <div className="mt-2 flex flex-col gap-2">
        <div>
          <span>Storage</span>
          <span>|</span>
          <span>{product.storage}</span>
        </div>

        <div>
          <span>{product.storage}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex gap-4">
        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
        >
          Buy Now
        </button>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-8 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
