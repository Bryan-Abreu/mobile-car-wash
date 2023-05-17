import React from 'react'
import { Link } from 'react-router-dom';

import {HeroVideo, HeroContainer, HeroHeading, HeroSection, HeroText, ButtonWrapper, HeroButton, HeroButtonTwo} from './HeroStyles';
import Video from '../../videos/foamcar.mp4'


const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo autoPlay loop muted src={Video} type='video/mp4'/>
        <HeroContainer  >
            <HeroHeading>J&R Mobile Car Wash And Detailing LLC</HeroHeading>
            <HeroText className='.text'>Convenient Auto Detailing Wherever You Are!</HeroText>
            <ButtonWrapper>
                <Link to='/signup'>
                <HeroButtonTwo>Make An Appointment</HeroButtonTwo>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </HeroContainer>
    </HeroSection>
  )
}

export default Hero