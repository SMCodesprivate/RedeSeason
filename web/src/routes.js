import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './pages/Main/';
import CreatePost from './pages/CreatePost/';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/createpost" component={CreatePost} />
			</Switch>
		</Router>
	);
}