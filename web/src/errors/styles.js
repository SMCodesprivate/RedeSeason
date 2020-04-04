import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		overflow: hidden;
	}

	* {
		user-select: none;
	}
`;

export const Container = styled.main`
	width: 100%;
	height: 100vh;
	margin-top: -100vh;
	z-index: 9;
	display: flex;
	flex-direction: column;
	padding-top: 65px;
	align-items: center;

	& svg {
		z-index: 11;
	}

	body {
		overflow: hidden;
	}

	* {
		user-select: none;
	}
`;

export const TitleError = styled.h1`
	color: #333;
	margin-bottom: 25px;
	z-index: 10;

	& > strong {
		color: #e94040;
	}
`;

export const ReturnButton = styled.button`
	width: 100%;
	height: 65px;
	border: 0;
	border-radius: 5px;
	margin-top: 40px;
	cursor: pointer;
	background: #e94040;
	color: #f0f0f0;
	font-size: 18px;
	font-weight: bold;
	transition: filter .2s, color .2s;
	filter: brightness(85%);

	&:hover {
		filter: brightness(100%);
	}

	&:active {
		color: #fff;
		background: #ff6d6d;
	}
`;

export const ConfigsResetLink = styled.div`
	width: 20%;

	& > a {
		width: 200px !important;

	}
`;