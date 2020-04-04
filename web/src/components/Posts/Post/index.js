import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { PostItem, Head, Background, TextContent, More } from '../style.js';

import avatarImg from '../../../assets/icon.gif';

export default function Posts(props) {
	const editor = useRef(null);
	const [content, setContent] = useState(props.item.content);

	const config = {
		readonly: true, // all options from https://xdsoft.net/jodit/doc/
		preset: 'inline'
	}

	return (
		<PostItem>
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
			<Link to={'/post/'+props.item._id}>
				<More>
					<p>
						Ver mais sobre
					</p>
					<FiChevronRight size={28} color="#ff5e5e" />
				</More>
			</Link>
		</PostItem>
	);
}