import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';

export interface ITaqutioService {
	setWallet(walletAddress: string): string;
	getWalletBalance(): Promise<number>;
	makeTransfer(
		receiverAddress: string,
		amount: number,
	): Promise<TransactionWalletOperation>;
}

export class TaquitoService implements ITaqutioService {
	private tezosInstance: TezosToolkit;
	private walletAddress: string = 'tz1i9dVrmewtm4eE6pLfpCPD1y7FSuwSJphX';

	constructor(netAddress: string) {
		this.tezosInstance = new TezosToolkit(netAddress);

		const signer = new InMemorySigner(
			'edskS29hNzGCbSxMLd828dCUNZpGoihZZrf3HVFcXKF98KK8ib5YZ6rdUDfEB9sGdQDL5rn2qVh4VtzMNTcf2b9wf9h9GHk1E5',
		);
		this.tezosInstance.setProvider({ rpc: netAddress, signer });
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

	makeTransfer(
		receiverAddress: string,
		amount: number,
	): Promise<TransactionWalletOperation> {
		if (!this.walletAddress) {
			throw new Error(
				'Fatal while getting wallet balance - no wallet address set',
			);
		}

		return this.tezosInstance.wallet
			.transfer({
				to: receiverAddress,
				amount,
			})
			.send();
	}
}
