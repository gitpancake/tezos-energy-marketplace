import React from 'react';
import { Routes, Route } from 'react-router';
import App from './App';
import Game from './Game';
import { LoginContext } from './context/Login';

const Routing = () => {
	const { loggedIn } = React.useContext(LoginContext);

	return (
		<Routes>
			{loggedIn ? (
				<Route path="/" element={<Game />} />
			) : (
				<Route path="/" element={<App />} />
			)}
		</Routes>
	);
};

export default Routing;
