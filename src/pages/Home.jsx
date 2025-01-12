import React from 'react'

import Hero from '../component/Hero'
import ProductList from '../component/TrendingProductList'
import DealDay from '../component/DealDay'
import HotDeal from '../component/HotDeal'
import Recommend from '../component/Recommended'

function Home() {
  return (
    <div className='overflow-x-hidden' >
    
     <ProductList/>
     <DealDay/>
     <HotDeal/>
     <Recommend/>
    </div>
  )
}

export default Home