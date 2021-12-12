import React from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import { GAME_TICK } from '../config/constants';
import { EnergyContext } from '../context/Energy';
import { Producer, producersForSale } from '../data/producer';
import './purchase-producer.css';

const Producers = () => {
	const { EnergyProducer, addProducer } = React.useContext(EnergyContext);
	const [producedEnergy, setProducedEnergy] = React.useState<number>(0);

	React.useEffect(() => {
		setProducedEnergy(EnergyProducer.getProducedEnergy());

		const checkProducedInterval = setInterval(() => {
			setProducedEnergy(EnergyProducer.getProducedEnergy());
		}, GAME_TICK);

		return () => {
			clearInterval(checkProducedInterval);
		};
	}, [EnergyProducer, producedEnergy]);

	const addUserProducer = (producer: Producer): void => {
		addProducer(producer);
	};

	return (
		<Grid columns={1} centered className="producer-marketplace">
			<h1>Production Marketplace</h1>
			{producersForSale.map((producer) => (
				<Card>
					<Card.Content>
						<Card.Header>
							{producer.name}, {producer.type}
						</Card.Header>
						<Card.Meta>
							Production Rate: {producer.productionRate} units
						</Card.Meta>
					</Card.Content>
					<Card.Content extra>Cost: {producer.cost} kwh</Card.Content>
					<Card.Content>
						<Button
							onClick={() => addUserProducer(producer)}
							disabled={producedEnergy < producer.cost}
						>
							Purchase
						</Button>
					</Card.Content>
				</Card>
			))}
		</Grid>
	);
};

export default Producers;
