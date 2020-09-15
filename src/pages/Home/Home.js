import React from 'react'

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../../Data'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </div>
  )
}

export default Home
