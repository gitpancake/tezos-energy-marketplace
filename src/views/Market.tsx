import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';
import { saleItems } from '../data/index';

const GridExampleDividedNumber = () => (
	<Grid columns={3} divided>
		<Grid.Row>
			{saleItems.map((saleItem) => {
				return (
					<Grid.Column>
						<Card>
							<Card.Content>
								<Card.Header>{saleItem.name}</Card.Header>
								<Card.Meta>
									{saleItem.energyAmount} at {saleItem.price}/{saleItem.unit}
								</Card.Meta>
								<Card.Description>{saleItem.tezosAddress}</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="green">
										Purchase
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
				);
			})}
		</Grid.Row>
	</Grid>
);

export default GridExampleDividedNumber;
