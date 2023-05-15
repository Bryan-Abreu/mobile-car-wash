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
	buttonLabel: 'View Our Gallery',

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
		'We offer mobile detailing services that cover interior, exterior, polishing, and engine bay detailing for your vehicle. Our team is flexible and willing to come to your preferred location, be it your home, office, or any other place that suits your convenience. Our services include the application of top-notch sealants, dressings, conditioners, and carnauba waxes to protect your vehicle from the harsh elements of Arizona and keep it shining.',
	buttonLabel: 'Contact us today!',

	linkTo: '/download',
	imgStart: '',
	img:Img3,
	start: 'true',
};
