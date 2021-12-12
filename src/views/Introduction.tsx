import React from 'react';
import { Grid } from 'semantic-ui-react';
import './marketplace.css';

const Introduction = () => (
	<Grid columns={1} className="marketplace">
		<Grid columns={1}>
			<h1>Introduction</h1>
			<Grid.Row>
				<Grid.Column>
					<h3>Overview</h3>
					<p>
						Welcome to the Energy Marketplace game. The goal of this game is
						simple: produce as many KWHs as you can, using your Energy
						Production Means.
					</p>
					<p>
						You can see an overview of your current stats in the menu bar. Your
						energy production means produce every second, and here is how they
						calculate their energy production:
					</p>
					<code>(BASE_PRODUCTION_RATE * TOTAL_PRODUCER_PRODUCTION_RATE)</code>
					<br />
					<br />
					<p>
						You can see your total energy producer and your Tezos walelt balance
						in the menu bar
					</p>
					<h3>Production</h3>
					<p>
						You can purchase your Energy Production means in the 'Your
						Production' tab. Here you will see an overview of your current
						producers, and be able to purchase new producers. You can purchase
						means of production using the energy you generate.
					</p>
					<h3>Marketplace</h3>
					<p>
						Once you feel ready, you can check out the Marketplace tab. From
						here you can buy and sell energy for Tezos.
					</p>
					<p>
						In the Marketplace you will see current energy contracts available
						for sale, posted by other users of the Tezos network.
					</p>
					<p>You are also able to post energy, using the Sales Form.</p>
					<h3>Future Development</h3>
					<p>
						In the future, a town or consumption area will be introduced and the
						challenge will be to ensure the town never runs out of energy. The
						town demand will grow every x ticks, and the challenge will be to
						always have enough energy to supply the town.
					</p>
					<br />
					<img
						width={80}
						src="https://i.imgur.com/PjYgK7e.png"
						alt="built-with-taquito"
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Grid>
);

export default Introduction;
