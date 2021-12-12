import React from 'react';
import { ITaqutioService, TaquitoService } from '../services/taquito';

interface Props {
	children: React.ReactElement;
}

const Taquito = new TaquitoService('https://rpc.hangzhounet.teztnets.xyz');

export const TezosContext = React.createContext<ITaqutioService>({
	setWallet: (walletAddress: string) => Taquito.setWallet(walletAddress),
	getWalletBalance: () => Taquito.getWalletBalance(),
	makeTransfer: (address: string, amount: number) =>
		Taquito.makeTransfer(address, amount),
});

const TezosContextProvider = ({ children }: Props) => {
	return (
		<TezosContext.Provider
			value={{
				setWallet: (walletAddress: string) => Taquito.setWallet(walletAddress),
				getWalletBalance: () => Taquito.getWalletBalance(),
				makeTransfer: (address: string, amount: number) =>
					Taquito.makeTransfer(address, amount),
			}}
		>
			{children}
		</TezosContext.Provider>
	);
};

export default TezosContextProvider;
