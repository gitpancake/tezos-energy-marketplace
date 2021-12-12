import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import Routing from './Routes';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import LoginContextProvider from './context/Login';
import TezosContextProvider from './context/Tezos';
import EnergyContextProvider from './context/Energy';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<LoginContextProvider>
				<TezosContextProvider>
					<EnergyContextProvider>
						<>
							<Toaster />
							<Routing />
						</>
					</EnergyContextProvider>
				</TezosContextProvider>
			</LoginContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
