import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Producer } from '../data/producer';

const Producers = ({ producers }: { producers: Producer[] }) => {
	return (
		<Grid columns={3}>
			{producers.map((producer, index) => {
				return (
					<Grid.Column key={index}>
						<Card>
							<Card.Content>
								<Card.Header>{producer.name}</Card.Header>
								<Card.Meta>
									Production Rate: {producer.productionRate} units
								</Card.Meta>
							</Card.Content>
							<Card.Content extra></Card.Content>
						</Card>
					</Grid.Column>
				);
			})}
		</Grid>
	);
};

export default Producers;
