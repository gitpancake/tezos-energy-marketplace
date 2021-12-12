import React from 'react';
import { GAME_TICK } from '../../config/constants';
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
		}, GAME_TICK);

		return () => {
			clearInterval(balanceInterval);
		};
	}, [walletBalance, setWalletBalance, getWalletBalance]);

	const formattedWalletBalance = () => {
		if (!walletBalance) {
			return 'Loading Wallet...';
		}

		return `${FormatToLocaleString(walletBalance)}ꜩ`;
	};

	return <div>{formattedWalletBalance()}</div>;
};

export default Balance;
