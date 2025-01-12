import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { productItem } from "../item/productItem";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("mint");
  const [condition, setCondition] = useState("");
  const [isClick, setIsClick] = useState(true);

  const thumbnailContainerRef = useRef(null);
  let isDragging = useRef(false);
  let startX = useRef(0);
  let scrollLeft = useRef(0);

  const handleClick = () => {
    setIsClick(!isClick); // Toggle the state on click
  };

  const colorMapping = {
    "gold": "#ffd700",
    "phantom black": "#2e2a47",
    "mint": "#00bfae",
    "super mint": "#2e8b5f",
    "rose gold": "#b76e79",
    "space gray": "#585858",
    "midnight blue": "#003366",
    "jet black": "#0a0a0a",
    "silver": "#c0c0c0",
    "glacier blue": "#add8e6"
  };

  const getColorCode = (colorName) => {
    return colorMapping[colorName.toLowerCase()] || "#000000";
  };

  const handleConditionClick = (condition) => {
    setCondition(condition);
  };

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const original = parseFloat(originalPrice.replace(/[^0-9.-]+/g, ""));
    const discounted = parseFloat(discountedPrice.replace(/[^0-9.-]+/g, ""));
    if (isNaN(original) || isNaN(discounted)) {
      return "Invalid price";
    }
    const discountPercentage = ((original - discounted) / original) * 100;
    return discountPercentage.toFixed(0);
  };

  const formatImei = (imei) => {
    const firstPart = imei.slice(0, 2);
    const thirdDigit = imei.slice(2, 3);
    const lastPart = imei.slice(-4);
    const middlePart = imei.slice(3, -4);
    const stars = "*".repeat(middlePart.length); // Create stars for the middle part

    return `${"*".repeat(firstPart.length)}${thirdDigit}${stars}${lastPart}`;
  };

  useEffect(() => {
    const matchedProduct = productItem.find((prod) => prod.id === parseInt(id));

    if (matchedProduct) {
      setProduct(matchedProduct);
      setMainImage(matchedProduct.images[0]); // Set the first image as the main image
    }
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image); // Update main image when a thumbnail is clicked
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - thumbnailContainerRef.current.offsetLeft;
    scrollLeft.current = thumbnailContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 3; // Adjust scroll speed
    thumbnailContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  if (!product) return <div>Loading...</div>;
  const productColor = getColorCode(product.color);

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-10">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Image Thumbnails */}
        <div
          ref={thumbnailContainerRef}
          className="flex gap-4 justify-center overflow-x-scroll scroll-smooth scrollbar-hide md:flex-col"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 p-2"
              onClick={() => handleImageClick(image)} // Set image as main on click
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex flex-col items-center border-2 rounded-lg md:w-1/2">
          <img
            src={mainImage}
            alt="Main Product Image"
            className="w-full h-full object-fit py-10 px-6"
          />
        </div>

        {/* Product Details */}
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
        </div>
      </div>
    </div>
  );
}

export default Product;
