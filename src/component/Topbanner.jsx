import React from 'react'

function TopBanner() {
  return (
    <div className="bg-customRed w-full h-auto">
    <div className="px-3 sm:px-8 md:px-20 py-1 sm:py-2 flex flex-col md:flex-row items-center justify-center gap-4 ">
      {/* Cashback Text Box */}
      <div className="font-extrabold bg-slate-100">
        <h4 className="px-2 py-1 text-center sm:text-left">GET 15% CASHBACK + FREE DELIVERY</h4>
      </div>

      {/* Store Info and Button */}
      <div className="flex text-white items-center gap-2 md:text-xs">
        <div>Visit MobiXpress Store</div>
        <button className="bg-[rgb(255,193,7)] px-4 py-3 rounded-full  text-black font-extrabold">
          Click Now
        </button>
        <div>T*C apply</div>
      </div>
    </div>
  </div>
  )
}

export default TopBanner 