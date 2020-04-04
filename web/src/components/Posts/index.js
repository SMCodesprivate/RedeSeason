import React, { useState, useEffect } from 'react';

import { PostList, Container, Discord } from './style.js';
import Post from './Post';

import api from '../../services/api';

export default function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function load() {
			const request = await api.get('post');
			if(request.data.length === 0) return;
			setPosts(p => [...p, ...request.data]);
		}

		load();
	}, []);

	return (
		<Container>
			<PostList>
				{(posts.length === 0) ? (
					<h1>Nenhum post até o momento</h1>
				) : posts.map(item => (
					<Post key={item._id} item={item} />
				))}
			</PostList>
			<Discord src="https://discordapp.com/widget?id=690259514637025341&theme=dark" allowtransparency="true" frameborder="0"></Discord>
		</Container>
	);
}