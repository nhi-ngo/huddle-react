import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import { homeObjTwo } from '../../Data'

const Products = () => {
  return (
    <div>
      <HeroSection {...homeObjTwo} />
    </div>
  )
}

export default Products
