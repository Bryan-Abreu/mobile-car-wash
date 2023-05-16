import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalSytles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles';
import Video from '../../videos/foamcar.mp4'


const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo autoPlay loop muted src={Video} type='video/mp4'/>
        <Container >
            <MainHeading>J&R Mobile Car Wash And Detailing LLC</MainHeading>
            <HeroText>Convenient Auto Detailing Wherever You Are!</HeroText>
            <ButtonWrapper>
                <Link to='/signup'>
                <Button>Make An Appointment</Button>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero