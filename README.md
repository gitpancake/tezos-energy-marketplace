# The Energy Marketplace Game

This project has been created as a proof of concept, specifically for the [despace.berlin](https://www.despace.berlin/) Tezos Hackathon

This project was created thank you to the TypeScript Library [Taquito](https://tezostaquito.io/docs/quick_start).

It is currently connected to and using the [Hangzhou Testnet](https://hangzhounet.tzkt.io/).

Thanks to the people at DeSpace Berlin, in person and in the Discord for helping this project get started.

This project is released under the GNU GPL. So please follow the GNU GPL guidelines when contributing or working on it.

<p align="center">
 <img
 width={80}
 src="https://i.imgur.com/PjYgK7e.png"
 alt="built-with-taquito"
 />
 </p>

---

<h2 align="center">Running the Project</h2>

To setup the wallets with test Tezos, check out the [Faucets](https://teztnets.xyz/hangzhounet-faucet) on the Hangzhou net.

The [tezos-client](https://assets.tqtezos.com/docs/setup/1-tezos-client/) can be used to setup wallets needed for testing.

You will also need a wallet for your Tezos, such as [Temple](https://templewallet.com/) or [Spire](https://chrome.google.com/webstore/detail/spire/gpfndedineagiepkpinficbcbbgjoenn)

You will need two wallet addresses (sender and receiver) and a private key for the sending wallet on the network you wish to use this application with.

- Clone this repository `git clone <git_url>`

- Use the `nvm` version by running `nvm use` in project root. Required: `v12`

- Install dependencies `yarn` or `npm install`

- Now to add your signing key and receiver address create `src/config/secrets.ts`. Below is the `interface` for the secrets file.

```typescript
interface Secret {
 senderAddress?: string;
 signingKey: string;
 receiverAddress: string;
}

const secrets: Secret = {
 senderAddress: <sending_wallet_address>
 signingKey: <secret_key_for_sending_wallet>,
 receiverAddress: <receiver_wallet_address>,
};

export default secrets;

```

- Save this file, it is ignored by `git`

- Run the application `yarn start`

- The default username + password is `tezos` and `stake` (can be changed in `App.tsx`). **Make sure your selected wallet address matches the wallet your private key came from!**.

There is no database, so all data stored is ephemeral. In the Producer screen you need to force re-render as the tree does not re-render on update. This can be done by switching tabs. When the screen is reloaded, all data will be lost, so do this only when you wish to restart.

**THIS IS A POC!**

Happy exploring :)

---

<h2 align="center">The Concept</h2>

The goal of this game is simple: produce as many KWHs as you can, using your Energy Production Means, then reap the rewards in Tezos when you sell your energy on the Marketplace.

---

<h2 align="center">Future</h2>

In the future, a town or consumption area will be introduced and the challenge will be to ensure the town never runs out of energy. The town demand will grow every x ticks, and the challenge will be to always have enough energy to supply the town.

---

<h2 align="center">Architecture & Mechanics</h2>

The game follows a Tick-based system. The `GAME_TICK` is measured in milliseconds and can be altered from`config/constants.ts`

## Application Context

useContext has been used to share state throughout the application at one top level. Find these in `src/context/<domain>`. Below are the interfaces for the Contexts

```typescript
interface ILoginContext {
 loggedIn: boolean;
 setLoggedIn: (newState: boolean) => void;
 energyCompanyName: string;
 setEnergyCompanyName: (name: string) => void;
}
```

```typescript
interface IEnergyServiceContext {
 EnergyProducer: IEnergyService;
 producers: Producer[];
 addProducer: (producer: Producer) => void;
}
```

## Taquito Service

A service was setup to work with the TezosToolkit provided by Taquito and only expose the functionality required of it. This Service is instantiated in the `Tezos` context and provided with the `netAddress` - which is the RPC of the network being used in the implementation.

```typescript
interface ITaqutioService {
 setWallet(walletAddress: string): string;
 getWallet(): string;
 getWalletBalance(): Promise<number>;
 makeTransfer(
  receiverAddress: string,
  amount: number,
 ): Promise<TransactionWalletOperation>;
}
```

## React

The application is built in React, with components. Unfortunately some components don't re-render so they need to be forced to re-render. This can be achieved by switching tabs in the Menu Bar.

There is no database, so all data stored is ephemeral. When the screen is reloaded, all data will be lost, so do this only when you wish to restart.
