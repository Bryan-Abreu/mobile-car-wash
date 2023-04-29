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
		description: 'Fast and detailed',
		icon: iconStyle(BsClockHistory),
		imgClass: 'one',
	},
	{
		name: 'Attention to Detail',
		description: 'We care to make you feel at ease',
		icon: iconStyle(GiMagnifyingGlass),
		imgClass: 'two',
	},
	{
		name: 'We Bring Water',
		description: 'We bring our own water',
		icon: iconStyle(MdWaterDrop),
		imgClass: 'three',
	},
	{
		name: 'Shampoo',
		description: 'We can shampoo your seats, carpet and anything else you want done',
		icon: iconStyle(GiVacuumCleaner),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Engine Cleaning',
		description:
			'We can clean your engine and make it look back to factory ',
		icon: iconStyle(TbEngine),
		imgClass: 'six',
	},
];
