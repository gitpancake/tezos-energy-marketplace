import React from 'react';
import { TezosContext } from '../../context/Tezos';
import { FormatToLocaleString } from '../../utils/numbers';

const Balance = () => {
	const { getWalletBalance } = React.useContext(TezosContext);
	const [walletBalance, setWalletBalance] = React.useState<number | null>(null);

	React.useEffect(() => {
		const fetchWalletBalance = async () => {
			const balance = await getWalletBalance();

			setWalletBalance(balance);
		};

		if (!walletBalance) {
			fetchWalletBalance();
		}

		const balanceInterval = setInterval(() => {
			fetchWalletBalance();
		}, 10000);

		return () => {
			clearInterval(balanceInterval);
		};
	});

	const formattedWalletBalance = () => {
		if (!walletBalance) {
			return 'Loading Wallet...';
		}

		return `${FormatToLocaleString(walletBalance)}ꜩ`;
	};

	return <div>{formattedWalletBalance()}</div>;
};

export default Balance;
