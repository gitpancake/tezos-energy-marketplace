import { TezosToolkit } from '@taquito/taquito';

export interface ITaqutioService {
	setWallet(walletAddress: string): string;
	getWalletBalance(): Promise<number>;
}

export class TaquitoService implements ITaqutioService {
	private tezosInstance: TezosToolkit;
	private walletAddress: string = 'tz1i9dVrmewtm4eE6pLfpCPD1y7FSuwSJphX';

	constructor(netAddress: string) {
		this.tezosInstance = new TezosToolkit(netAddress);
	}

	setWallet(walletAddress: string): string {
		this.walletAddress = walletAddress;

		return this.walletAddress;
	}

	async getWalletBalance(): Promise<number> {
		if (!this.walletAddress) {
			throw new Error(
				'Fatal while getting wallet balance - no wallet address set',
			);
		}

		const walletBalance = await this.tezosInstance.rpc.getBalance(
			this.walletAddress,
		);

		return walletBalance.toNumber();
	}
}
