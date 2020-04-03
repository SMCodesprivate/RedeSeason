import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import { PostList, Container, Discord } from './style.js';
import * as animationData from './loading.json';

import api from '../../services/api';

export default function Posts() {
	const [posts, setPosts] = useState([]);

	async function load() {
		const request = await api.get('post');
		setPosts([...posts, request.data]);
	}


	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	useEffect(load, []);

	return (
		<Container>
			<PostList>
				{(posts.length === 0) ? (
					<>
						<h1>Nenhum post até o momento</h1>
						<Lottie options={defaultOptions}
							height={400}
							width={400}
						/>
					</>
				) : posts.map((item, index) => (
					<h1 key={index}>Post {index}</h1>
				))}
			</PostList>
			<Discord src="https://discordapp.com/widget?id=690259514637025341&theme=dark" allowtransparency="true" frameborder="0"></Discord>
		</Container>
	);
}