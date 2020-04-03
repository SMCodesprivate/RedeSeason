import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
  align-self: center;
	display: flex;
	flex-direction: row;
	margin: 175px auto 0 auto;
`;

export const Discord = styled.iframe`
	margin-left: 2%;
	width: 375px;
	height: 500px;
	border: 0;
`;

export const Background = styled.div`
	background: ${({ colorBack = 'transparent' }) => colorBack};
`;

export const PostList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 65%;
	list-style: none;
`;

export const PostItem = styled.li`
	flex: 1;
	background: #fff;
	box-shadow: 0 0 2px #333;
	margin-bottom: 50px;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
`;

export const Head = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	background: #7159c1;
	align-items: center;
	justify-content: space-between;
	user-select: none;

	& > h2 {
		width: 30%;
		margin-left: 40px;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		border-bottom-color: #ff5f5f;
		color: #fafafa;
		font-size: 20px;
		padding-left: 15px;
	}

	& > ${Background} > ${Background} > h1 {
		font-size: 18px;
		color: #ededed;
		font-weight: bold;
	}

	& > ${Background} {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 130px;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	& > ${Background} > ${Background} {
		padding-left: 5px;
		padding-right: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}
`;

export const TextContent = styled.div`
	margin: 75px 75px 50px 75px;
  word-wrap: break-word;
	overflow: hidden;
	max-height: 550px;
  display: -webkit-box;
  -webkit-line-clamp: 15;
	-webkit-box-orient: vertical;
	font-size: 20px;
	font-weight: 400;
`;

export const More = styled.div`
	width: 80%;
	display: flex;
	flex-direction: row;
	cursor: pointer;
	user-select: none;
	transition: opacity .1s;
	align-items: center;
	justify-content: space-between;
  margin: 0 auto 25px auto;

	p {
		color: #ff5e5e;
		font-size: 28px;
		font-weight: bold;
	}

	svg {
		margin-left: 5px;
	}

	&:active {
		opacity: .3;
	}
`;