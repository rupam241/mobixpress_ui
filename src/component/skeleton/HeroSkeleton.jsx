import React from 'react';

function HeroSkeleton() {
  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col sm:flex-row sm:gap-4 justify-between items-center  rounded-xl pt-7 px-20 "'>
      {/* First Image Skeleton */}
      <div className='h-full flex-1'>
        <div className='w-full h-72 bg-gray-300 animate-pulse rounded-md'></div>
      </div>

      {/* Second Image and Text Skeleton */}
      <div className=' mt-4 sm:mt-0 border-2 p-8 hidden lg:flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col items-center '>
          {/* Image Skeleton */}
          <div className='w-32 h-32 bg-gray-300 animate-pulse rounded-full mb-4'></div>
          {/* Product Name Skeleton */}
          <div className='w-48 h-6 bg-gray-300 animate-pulse rounded-md mb-4'></div>
          {/* Additional Info Skeleton */}
          <div className='w-32 h-6 bg-gray-300 animate-pulse rounded-md mb-2'></div>
          <div className='w-24 h-6 bg-gray-300 animate-pulse rounded-md'></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSkeleton;
