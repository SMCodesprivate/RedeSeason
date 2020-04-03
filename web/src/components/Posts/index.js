import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { FiChevronRight } from 'react-icons/fi';

import { PostList, PostItem, Head, Background, TextContent, More, Container, Discord } from './style.js';

import api from '../../services/api';
import avatarImg from '../../assets/icon.gif';

export default function Posts() {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	async function loadContent() {
		const request = await api.get('post');

		console.log(request.data);

		setContent(request.data[0].content);
	}

	useEffect(() => {
		loadContent();
	}, []);

	const config = {
		readonly: true, // all options from https://xdsoft.net/jodit/doc/
		preset: 'inline'
	}

	const arr = [1, 2, 3, 4, 5];

	return (
		<Container>
			<PostList>
				{arr.map(item => (
					<PostItem key={item}>
						<Head>
							<h2>18:17 - 30/03/2020</h2>
							<Background colorBack="#6449bd">
								<Background colorBack="#5159c1">
									<h1>SMCodes</h1>
									<img src={avatarImg} alt="dino" />
								</Background>
							</Background>
						</Head>

						<TextContent>
							<JoditEditor
								ref={editor}
								value={content}
								config={config}
								tabIndex={1} // tabIndex of textarea
								onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
								onChange={newContent => {}}
							/>
						</TextContent>
						<More>
							<p>
								Ver mais sobre
							</p>
							<FiChevronRight size={28} color="#ff5e5e" />
						</More>
					</PostItem>
				))}
			</PostList>
			<Discord src="https://discordapp.com/widget?id=690259514637025341&theme=dark" allowtransparency="true" frameborder="0"></Discord>
		</Container>
	);
}