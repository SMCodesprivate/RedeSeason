import React from 'react';

import { Container, Background, Dino } from './style.js';

import containerImg from '../../assets/background.png';
import dinoImg from '../../assets/dino.png';

export default () => {
	return (
		<Container>
			<Background src={containerImg} alt="container" />
			<Dino src={dinoImg} alt="container" />
		</Container>
	);
}