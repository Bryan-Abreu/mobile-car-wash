import React from 'react'
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import {heroOne, heroTwo, heroThree} from '../data/HeroData'
import { Content } from '../components/content/Content';
import Carousel from '../components/carousel/Carousel';


function Home() {
  return (
    <>
    <Hero/>
   {/*  <Content {...herofour}/> */}
    <Features />
    <Content {...heroOne}/>
    <Content {...heroTwo}/>
    <Content {...heroThree}/>
    <Carousel />
    </>
  )
}

export default Home;