import styled from "styled-components";
import { Button } from "../../globalSytles";

export const HeroSection = styled.section`
height: 100vh;
background-position: center;
background-size: cover;
padding-top: clamp(70px, 25vh, 220px);
box-shadow: inset 0 0 0 1000px rgba (0,0,0,0.2);
`;


//-------------------- HeroContainer ------------------>


export const HeroContainer = styled.div`
width:auto;
margin-right: auto;
margin-left: auto;
padding-top:5%;
justify-content: center;

@media screen and (max-width: 960px){
    padding:0 30px;
}
`;

//--------------- Hero Video --------------->

export const HeroVideo = styled.video`
object-fit: cover;
width: 100%;
height: 100%;
background: linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.3));
top: 0;
position: absolute;
z-index: -1;
`;


//--------------------- Hero Heading ---------------------->


export const HeroHeading = styled.h3`
font-size: 3rem;
margin: ${({ margin }) => (margin ? margin : '')};
margin-bottom: ${({ mb }) => (mb ? mb : '')};
margin-top: ${({ mt }) => (mt ? mt : '')};
color: 	#dcdcdc;
letter-spacing: 0.4rem;
line-height: 1.06;
text-align: center;
width: ${({ width }) => (width ? width : '100%')};
padding-bottom: 2%;
`;

//------------------ HeroText ------------>


export const HeroText = styled.p`
margin-bottom: 35px;
font-size: 2rem;
font-weight: bold;
line-height: 24px;
text-align: center;
letter-spacing: 2px;
color: 	#dcdcdc;
padding-bottom: 2%;
`;


//---------------ButtonWrapper ------------>


export const ButtonWrapper = styled.div`
width: 100%;
display:flex;
justify-content: center;
flex-flow: wrap;
gap: 0.5rem;
`;


//----------- HeroButton --------------------->


export const HeroButton = styled(Button)`
color: black;
font-size: 1.5rem;

&:before {
    background: #dcdcdc;
    height: 500%;
}

&:hover:before {
    height: 0%
}

&:hover {
    color:white;
}
`;
//----------- HeroButton --------------------->


export const HeroButtonTwo = styled(Button)`
color: black;
font-size: 1.5rem;
`;
