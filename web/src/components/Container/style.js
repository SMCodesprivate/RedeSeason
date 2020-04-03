import styled, { keyframes } from 'styled-components';

const dino_width = 250;
const initial_dino_animate = 85;
const diference_animate = 25;
const min_animate = initial_dino_animate - diference_animate;
const max_animate = initial_dino_animate + diference_animate;

const movimentation = keyframes`
	0% {
		top: ${min_animate}px;
	}
	25% {
		top: ${max_animate}px;
	}
	50% {
		top: ${min_animate}px;
	}
	75% {
		top: ${max_animate}px;
	}
	100% {
		top: ${min_animate}px;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 400px;
`;

export const Background = styled.img`
	width: 100%;
	height: 400px;
	position: absolute;
	user-select: none;
`;

export const Dino = styled.img`
	width: ${dino_width}px;
	left: calc((100% - ${dino_width}px) / 2);
	position: absolute;
	user-select: none;
	animation-name: ${movimentation};
	animation-duration: 3s;
	animation-iteration-count: infinite;
	top: ${min_animate}px;
`;