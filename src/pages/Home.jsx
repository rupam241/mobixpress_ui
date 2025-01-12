import React from 'react'

import Hero from '../component/Hero'
import ProductList from '../component/TrendingProductList'
import DealDay from '../component/DealDay'
import HotDeal from '../component/HotDeal'
import Recommend from '../component/Recommended'
import DisplayHero from '../component/DisplayHero'
import PageBelow from '../component/PageBelow'

function Home() {
  return (
    <div className='overflow-x-hidden' >
      
    <Hero />
        <DisplayHero/>
        
     <ProductList/>
     <DealDay/>
     <HotDeal/>
     <Recommend/>
     <PageBelow/>
    </div>
  )
}

export default Home