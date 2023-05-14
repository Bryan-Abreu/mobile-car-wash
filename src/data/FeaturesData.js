import React from 'react';

import { BsClockHistory } from 'react-icons/bs';
import { TbEngine } from 'react-icons/tb';
import {  BiDollar } from 'react-icons/bi';
import { MdWaterDrop } from 'react-icons/md';
import {GiVacuumCleaner, GiMagnifyingGlass} from 'react-icons/gi'
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Quick',
		description: 'Quick and thorough',
		icon: iconStyle(BsClockHistory),
		imgClass: 'one',
	},
	{
		name: 'Attention to Detail',
		description: 'We prioritize making you feel comfortable and at ease.',
		icon: iconStyle(GiMagnifyingGlass),
		imgClass: 'two',
	},
	{
		name: 'We provide our own water',
		description: "We bring our own water to ensure that we don't waste yours.",
		icon: iconStyle(MdWaterDrop),
		imgClass: 'three',
	},
	{
		name: 'Shampoo',
		description: 'We offer shampooing services for your seats, carpets, and any other areas that require cleaning.',
		icon: iconStyle(GiVacuumCleaner),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We provide the best value for your money.',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Engine Cleaning',
		description:
			'We possess the capability to thoroughly clean your engine, thereby restoring it to its original factory appearance or even better.',
		icon: iconStyle(TbEngine),
		imgClass: 'six',
	},
];
