import React, { useState } from "react";

function Footer() {
  const priceRanges = [
    { min: 0, max: 7999 },
    { min: 8000, max: 14999 },
    { min: 15000, max: 29999 },
    { min: 30000, max: 49999 },
    { min: 50000, max: 79999 },
    { min: 80000, max: 150000 },
  ];

  const branchDetails = [
    {
      branch: "BRACK-1",
      address: "Barrakpore Railway Station",
      phone: "8017999888",
      email: "service@mobixpress.in",
    },
    {
      branch: "DUNLOP",
      address: "153/1 B. T. Road, Vikram A. C. Market",
      phone: "9831746860",
      email: "service@mobixpress.in",
    },
    {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    },
    {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    },
    {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    },
    {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    },
    {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    },
    {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    }, {
      branch: "BARASAT",
      address: "12, Jessore Road",
      phone: "8420425633",
      email: "service@mobixpress.in",
    },
  ];

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(e.target.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.clientX;
    const walk = (x - startX) * 2; // Multiplies the scroll speed
    e.target.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="md:w-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center rounded-xl pt-2 lg:pt-4 lg:px-20 px-10 mt-10">
      <h1 className="uppercase md:font-bold text-4xl font-semibold text-center">
        Welcome to MobiXpress # Leading Seller in Second Hand <br />
        <span className="text-center mt-2">Smartphones</span>
      </h1>
      <p className="mt-4 text-center">
        MobiXpress, known as Second Hand smartphone expert and leading industry
        from last 5 years, focused on delivering quality products at most
        affordable prices along with continued customer support services. We
        ensure best quality products passed from 55 strict quality checks. We
        aim to contribute towards a greener environment and reduce e-waste. Join
        our community and get the most reliable and affordable products ever.
      </p>

      <div className="mt-20">
        <img
          src="https://www.mobixpress.in/assets/Box_Image.webp"
          alt="Product box"
          className="w-full h-auto rounded-md"
        />
      </div>

      <div className="mt-10 w-full">
        <h3 className="text-xl font-semibold text-center mb-4">Price Ranges</h3>
        <div
          className="flex gap-6 p-4"
          style={{
            maxWidth: "100%",
            flexWrap: "nowrap",
            overflowX: "auto",
            cursor: "grab", // Change cursor when hovering over the scrollable area
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {priceRanges.map((range, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-100 p-4 rounded-lg shadow-md"
              style={{ minWidth: "200px" }}
            >
              <span className="text-lg font-medium">
                Between ₹ {range.min} & ₹ {range.max}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full overflow-hidden mt-10">
        <div className="flex items-center gap-2 italic">
          <h1 className="md:text-3xl font-extrabold font-serif text-xl relative text-customRed">
            OUR
            <span className="absolute bottom-0 left-0 h-1 bg-customRed animate-flow-line"></span>
          </h1>
          <span className="md:text-3xl font-extrabold font-serif text-xl">
            BRANCH
          </span>
        </div>

        <button className="bg-red-200 py-3 px-4 text-customRed italic text-lg sm:flex hidden relative ">
          Show more
          <span className="absolute bottom-0 left-0 w-full h-1 bg-customRed animate-flow-button-line"></span>
        </button>
      </div>

      {/* Branch details with scrolling */}
      <div className="mt-6 w-full ">
  <div
    className="flex items-center justify-between gap-10"
    style={{
      maxWidth: "100%",
      flexWrap: "nowrap",
      overflowX: "hidden",
      cursor: "grab",
    }}
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
  >
    {branchDetails.map((branch, index) => (
      <div
        key={index}
        className="bg-gray-100 px-6 sm:px-10 lg:px-20 rounded-lg shadow-md mb-6 sm:mb-10 py-6 sm:py-10 "
        style={{ minWidth: "250px" }}
      >
        <h4 className="font-medium text-xl">{branch.branch}</h4>
        <p>{branch.address}</p>
        <p>Phone: {branch.phone}</p>
        <p>Email: {branch.email}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Footer;
