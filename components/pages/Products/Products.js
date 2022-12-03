import React from 'react'
import HeroSection from '../../HeroSection'
import {homeOBjTwo} from './Data'
import HeroSection2 from '../../HeroSection2'

function Products() {
  return (
    <>
        <HeroSection {...homeOBjTwo} />
        <HeroSection2/>
    </>
  )
}

export default Products;