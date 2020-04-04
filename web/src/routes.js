import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { verifyIsAuthentication } from './auth';

import Main from './pages/Main/';
import Post from './pages/Post/';

import Authenticated from './errors/Authenticated';
import NotFound from './errors/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
	{...rest}
	render={props =>
		verifyIsAuthentication() ? (
			<Component {...props} />
		) : (
			<Authenticated />
		)
	} />
)

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Main} exact />
				<PrivateRoute path="/post/:id" component={Post} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}