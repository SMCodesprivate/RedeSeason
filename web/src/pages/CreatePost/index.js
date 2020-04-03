import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import api from '../../services/api';

export default function Posts() {
	const editor = useRef(null);

	const [content, setContent] = useState('');


	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
	}

	async function handleRegister() {
		console.log(content);

		const request = await api.post('/post', {
			content
		});

		console.log(request);
	}

	return (
		<>
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={1} // tabIndex of textarea
				onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				onChange={newContent => {}}
			/>
			<button onClick={handleRegister}>Cadastrar</button>
		</>
	);
}