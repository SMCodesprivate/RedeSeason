import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

import Menu from '../../components/Menu';

// import api from '../../services/api';

import { Editor } from './style.js';

export default function Post() {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = {
		readonly: true, // all options from https://xdsoft.net/jodit/doc/
		preset: 'inline'
	}

	useEffect(() => {
		// async function pushPost() {

		// }
	});

	return (
		<>
			<Menu />
			<Editor>
				<JoditEditor
					ref={editor}
					value={content}
					config={config}
					tabIndex={1} // tabIndex of textarea
					onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
					onChange={newContent => {}}
				/>
			</Editor>
		</>
	);
}
