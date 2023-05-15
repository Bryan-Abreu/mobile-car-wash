import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CaroselData';
import { Row, Heading, Section,} from '../../globalSytles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,

} from './CarouselStyles';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse id='gallery'>
					Gallery
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
