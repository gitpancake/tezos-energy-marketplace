import React from 'react';
import toast from 'react-hot-toast';
import { Dimmer, Button, Card, Grid, Loader } from 'semantic-ui-react';
import secrets from '../config/secrets';
import { EnergyContext } from '../context/Energy';
import { TezosContext } from '../context/Tezos';
import { saleItems } from '../data/index';
import './marketplace.css';

const MarketPurchase = () => {
	const { makeTransfer } = React.useContext(TezosContext);
	const { EnergyProducer } = React.useContext(EnergyContext);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [receivingAddress] = React.useState<string>(secrets.receiverAddress);

	const buyEnergy = (energyAmount: number, tezosPrice: number) => {
		setIsLoading(true);
		makeTransfer(receivingAddress, tezosPrice)
			.then(() => {
				EnergyProducer.incrementProducedEnergy(energyAmount);

				toast.success(
					`Your order for ${energyAmount} units of energy at ${tezosPrice}ꜩ has been placed.`,
					{
						icon: '👏',
						position: 'bottom-left',
						duration: 3000,
						style: { backgroundColor: '#77dd77' },
					},
				);
			})
			.catch(() => {
				toast.error(
					`Your order for ${energyAmount} units of energy at ${tezosPrice}ꜩ failed.`,
					{
						icon: '👎',
						position: 'bottom-left',
						duration: 3000,
						style: { backgroundColor: '#ff6961' },
					},
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const opties = [
		'Firing the lasers',
		'Placing your order',
		'Organising the kitties',
	];

	return (
		<Grid columns={1} centered className="marketplace">
			{isLoading ? (
				<Dimmer active>
					<Loader size="massive" inverted>
						{opties[Math.round(Math.random() * opties.length)]}
					</Loader>
				</Dimmer>
			) : (
				<>
					<h1>Purchase Energy</h1>
					{saleItems.map((saleItem) => {
						return (
							<Card>
								<Card.Content>
									<Card.Header>{saleItem.name}</Card.Header>
									<Card.Meta>{saleItem.price}ꜩ</Card.Meta>
									<Card.Description>{saleItem.username}</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<div className="ui two buttons">
										<Button
											basic
											color="green"
											onClick={() =>
												buyEnergy(saleItem.energyAmount, saleItem.price)
											}
										>
											Purchase
										</Button>
									</div>
								</Card.Content>
							</Card>
						);
					})}
				</>
			)}
		</Grid>
	);
};

export default MarketPurchase;
