import styled from 'styled-components';

// Colors defaults
const background = '#7159c1';
const background_hover = '#6449bd';
const color = '#efefef';
const color_hover = '#cacaca';

// Defaults sizes
const menu_height = 90;
const margin_list = 10;
const default_radius = 5;
const default_font_size = 18;

// Default others
const default_time_transition = .2;



export const ContainerMenu = styled.nav`
	width: 100%;
	z-index: 2;
	height: ${menu_height}px;
	background: ${background};
`;

export const ListCategories = styled.ul`
	list-style: none;
	margin-left: 35px;
	display: flex;
`;

export const CategoryItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${default_font_size}px;
	text-decoration: none;
	font-weight: 600;
	transition: color ${default_time_transition}s, background ${default_time_transition}s;
	height: ${menu_height-margin_list}px;
	font-family: 'Roboto', sans-serif;
	padding: 0 20px 0 20px;
	border-radius: ${default_radius}px;
	margin: 5px 5px 0 5px;
	color: ${color};
	cursor: pointer;
	user-select: none;

	svg {
		position: relative;
		color: ${color} !important;
		stroke-width: 2.75px;
		margin-right: 8px;
		margin-left: 8px;
		transition: color ${default_time_transition}s, background ${default_time_transition}s, transform ${default_time_transition}s;
		transform: rotateZ(${props => `${props.rotate}deg`});
	}

	&:hover,
	&:hover svg {
		background: ${background_hover};
		color: ${color_hover} !important;
		transform: rotateZ(0deg);
	}
`;

export const ListItens = styled.nav`
	display: none;
	width: 200px;
	background: ${background};
	border-radius: ${default_radius}px;
	margin: auto;
`;

export const Item = styled(CategoryItem)`
	margin: 10px 0 0 0;
	padding: 0;
`;

export const MoreItens = styled.li`
	height: ${menu_height}px;

	&:hover {
		height: unset;
	}

	&:hover li svg {
		color: ${color_hover} !important;
		transform: rotateZ(0deg);
	}

	&:hover ${ListItens} {
		display: block !important;
	}
`;
