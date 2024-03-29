import React from 'react';

interface Props {
	children: React.ReactElement;
}

interface ILoginContext {
	loggedIn: boolean;
	setLoggedIn: (newState: boolean) => void;
	energyCompanyName: string;
	setEnergyCompanyName: (name: string) => void;
}

export const LoginContext = React.createContext<ILoginContext>({
	loggedIn: false,
	setLoggedIn: () => {},
	energyCompanyName: '',
	setEnergyCompanyName: () => {},
});

const LoginContextProvider = ({ children }: Props) => {
	const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
	const [energyCompanyName, setEnergyCompanyName] = React.useState<string>('');

	return (
		<LoginContext.Provider
			value={{ loggedIn, setLoggedIn, energyCompanyName, setEnergyCompanyName }}
		>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContextProvider;
