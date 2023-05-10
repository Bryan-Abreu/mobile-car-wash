import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalSytles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles';
import Video from '../../videos/detailing.mp4'


const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo autoPlay loop muted src={Video} type='video/mp4'/>
        <Container>
            <MainHeading>Your mobile detailing needs</MainHeading>
            <HeroText>We proivde the best cleaning services in the valley</HeroText>
            <ButtonWrapper>
                <Link to='/signup'>
                <Button>Get Started</Button>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero