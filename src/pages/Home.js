import React from 'react'
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import {heroOne, heroTwo, heroThree} from '../data/HeroData'
import { Content } from '../components/content/Content';

function Home() {
  return (
    <>
    <Hero/>
    <Features />
    <Content {...heroOne}/>
    <Content {...heroTwo}/>
    <Content {...heroThree}/>
    </>
  )
}

export default Home;