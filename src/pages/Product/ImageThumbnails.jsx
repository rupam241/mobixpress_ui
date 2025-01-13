import React from 'react';

const ImageThumbnails = ({ product, thumbnailContainerRef, handleImageClick, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove }) => {
  return (
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
  );
}

export default ImageThumbnails;
