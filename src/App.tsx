import React from 'react';
import { Card, Form, Grid, Button } from 'semantic-ui-react';
import { LoginContext } from './context/Login';
import './App.css';
import { TezosContext } from './context/Tezos';

function App() {
	const { setLoggedIn } = React.useContext(LoginContext);
	const { setWallet, getWallet } = React.useContext(TezosContext);
	const [username, setUsername] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [walletAddress, setWalletAddress] = React.useState<string>(getWallet());
	const [energyCompanyName, setEnergyCompanyName] = React.useState<string>('');

	const login = () => {
		if (
			username === 'admin' &&
			password === 'admin' &&
			walletAddress &&
			energyCompanyName
		) {
			setLoggedIn(true);
			setWallet(walletAddress);
		}
	};

	return (
		<div className="App">
			<Grid.Row columns={3}>
				<Grid.Column></Grid.Column>
				<Grid.Column>
					<Card raised>
						<div className="login-box">
							<h1>The Energy Game</h1>
							<p>Currently on the Hangzhou Testnet</p>
							<Form onSubmit={() => login()}>
								<Form.Field>
									<input
										placeholder="Username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</Form.Field>
								<Form.Field>
									<input
										placeholder="Password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Form.Field>
								<Form.Field>
									<input
										placeholder="Energy Company Name"
										value={energyCompanyName}
										onChange={(e) => setEnergyCompanyName(e.target.value)}
									/>
								</Form.Field>
								<Form.Field>
									<input
										placeholder="Wallet Address"
										value={walletAddress}
										onChange={(e) => setWalletAddress(e.target.value)}
									/>
								</Form.Field>

								<Button type="submit">Login</Button>
							</Form>
						</div>
					</Card>
				</Grid.Column>
				<Grid.Column></Grid.Column>
			</Grid.Row>
		</div>
	);
}

export default App;
