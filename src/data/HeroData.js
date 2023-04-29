import Img1 from '../images/car2.jpg'
import Img2 from '../images/car1.jpg'
import Img3 from '../images/car3.jpg'
export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Founded in 2020',
	},
	headline: "We've been in business for 3 years",
	description: 'We have designed and implemented the best automotive detailing in our business',
	buttonLabel: 'Find More',
	imgStart: 'start',
	img: Img1,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Detailing Perfection',
	},
	headline: 'The best practices',
	description: 'Our clients have had the best experience working with us',
	buttonLabel: 'View Project',

	linkTo: '/more',
	imgStart: 'start',
	img: Img2,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why us? ',
	description:
		'Our 3 year experience have allowed us to be the best in the Vally',
	buttonLabel: 'View Our Detail',

	linkTo: '/download',
	imgStart: '',
	img:Img3,
	start: 'true',
};
