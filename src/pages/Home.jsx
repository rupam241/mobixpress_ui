import React from "react";

import Hero from "../component/Hero";
import ProductList from "../component/trendingProduct/TrendingProductList";
import DealDay from "../component/dealDay/DealDay";
import HotDeal from "../component/hotDeal/HotDeal";
import Recommend from "../component/recommended/Recommend";
import DisplayHero from "../component/displayHero/DisplayHero";
import PageBelow from "../component/PageBelow";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <DisplayHero />

      <ProductList/>

      <DealDay />
      <HotDeal />
      <Recommend />
      <PageBelow />
    </div>
  );
}

export default Home;
