import React from 'react';

const MainImage = ({ mainImage }) => {
  return (
    <div className="flex flex-col items-center border-2 rounded-lg md:w-1/2">
      <img
        src={mainImage}
        alt="Main Product Image"
        className="w-full h-full object-cover py-10 px-6" 
      />
    </div>
  );
}

export default MainImage;
