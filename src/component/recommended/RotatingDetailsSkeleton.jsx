
import React from "react";
const RotatingDetailsSkeleton = React.memo(() => {
  return (
    <div className="flex flex-col mb-3">
      <div className="w-24 h-6 bg-gray-300 rounded-md mt-2"></div>
      <div className="w-32 h-4 bg-gray-300 rounded-md mt-2"></div>
      <div className="w-16 h-4 bg-gray-300 rounded-md mt-2"></div>
      <div className="w-16 h-6 bg-gray-300 rounded-md mt-4"></div>
    </div>
  );
});

export default RotatingDetailsSkeleton;
