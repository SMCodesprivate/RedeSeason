import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100%;
		background: #fafafa;
	}

	a {
		text-decoration: none;
	}
`;