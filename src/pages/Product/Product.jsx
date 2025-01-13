import React, { useState, useEffect, useRef, Suspense } from "react";
import { useParams } from "react-router-dom";
import { productItem } from "../../item/productItem";

// Lazy load the components
const ImageThumbnails = React.lazy(() => import('./ImageThumbnails'));
const ProductDetails = React.lazy(() => import('./ProductDetails'));
const MainImage = React.lazy(() => import('./MainImage.jsx'));

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
    const stars = "*".repeat(middlePart.length); 

    return `${"*".repeat(firstPart.length)}${thirdDigit}${stars}${lastPart}`;
  };

  useEffect(() => {
    const matchedProduct = productItem.find((prod) => prod.id === parseInt(id));

    if (matchedProduct) {
      setProduct(matchedProduct);
      setMainImage(matchedProduct.images[0]); 
    }
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image); 
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
    const walk = (x - startX.current) * 3; 
    thumbnailContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  if (!product) return <div>Loading...</div>;
  const productColor = getColorCode(product.color);

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-10">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Lazy load ImageThumbnails */}
        <Suspense fallback={<div>Loading thumbnails...</div>}>
          <ImageThumbnails 
            product={product} 
            thumbnailContainerRef={thumbnailContainerRef} 
            handleImageClick={handleImageClick} 
            handleMouseDown={handleMouseDown} 
            handleMouseLeave={handleMouseLeave} 
            handleMouseUp={handleMouseUp} 
            handleMouseMove={handleMouseMove}
          />
        </Suspense>

        {/* Lazy load MainImage */}
        <Suspense fallback={<div>Loading main image...</div>}>
          <MainImage mainImage={mainImage} />
        </Suspense>

        {/* Lazy load ProductDetails */}
        <Suspense fallback={<div>Loading product details...</div>}>
          <ProductDetails 
            product={product} 
            calculateDiscountPercentage={calculateDiscountPercentage} 
            condition={condition} 
            handleConditionClick={handleConditionClick} 
            isClick={isClick} 
            handleClick={handleClick} 
            productColor={productColor} 
            formatImei={formatImei}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Product;
