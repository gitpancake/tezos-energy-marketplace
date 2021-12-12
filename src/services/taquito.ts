import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import secrets from '../config/secrets';

export interface ITaqutioService {
	setWallet(walletAddress: string): string;
	getWallet(): string;
	getWalletBalance(): Promise<number>;
	makeTransfer(
		receiverAddress: string,
		amount: number,
	): Promise<TransactionWalletOperation>;
}

export class TaquitoService implements ITaqutioService {
	private tezosInstance: TezosToolkit;
	private walletAddress: string = secrets.senderAddress || '';

	constructor(netAddress: string) {
		this.tezosInstance = new TezosToolkit(netAddress);

		const signer = new InMemorySigner(secrets.signingKey);
		this.tezosInstance.setProvider({ rpc: netAddress, signer });
	}

	setWallet(walletAddress: string): string {
		this.walletAddress = walletAddress;

		return this.walletAddress;
	}

	getWallet(): string {
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
