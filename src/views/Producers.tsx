import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Producer } from '../data/producer';
import './marketplace.css';

const Producers = ({ producers }: { producers: Producer[] }) => {
	return (
		<Grid columns={3} className="marketplace">
			<h1>Your Producers</h1>
			<p>
				Below are all of your energy producers. This page does not automatically
				reload on purchase, so revisit this tab after purchase
			</p>
			{producers.map((producer, index) => {
				return (
					<Grid.Column key={index}>
						<Card>
							<Card.Content>
								<Card.Header>{producer.name}</Card.Header>
								<Card.Meta>Producing {producer.productionRate} units</Card.Meta>
							</Card.Content>
						</Card>
					</Grid.Column>
				);
			})}
		</Grid>
	);
};

export default Producers;
