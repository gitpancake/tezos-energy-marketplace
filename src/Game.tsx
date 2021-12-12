import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import Market from './views/Market';
import Production from './views/Producers';
import Balance from './components/Balance';
import EnergyBalance from './components/Energy';
import NumProductionMeans from './components/MeansOfProduction';
import BaseRateTab from './components/BaseRate';
import { LoginContext } from './context/Login';
import ProducerPurchase from './views/PurchaseProducer';
import { EnergyContext } from './context/Energy';

const Game = () => {
	const { energyCompanyName } = React.useContext(LoginContext);
	const { producers } = React.useContext(EnergyContext);

	const handleItemClick = (e: any, { name }: { name?: string }) =>
		setActiveItem(name);

	const [activeItem, setActiveItem] = React.useState<string | undefined>(
		'Market',
	);

	return (
		<div>
			<Menu pointing>
				<Menu.Item>{energyCompanyName}</Menu.Item>
				<Menu.Item
					name="Your Production"
					active={activeItem === 'Your Production'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name="Market"
					active={activeItem === 'Market'}
					onClick={handleItemClick}
				/>
				<Menu.Menu position="right">
					<Menu.Item>
						<BaseRateTab />
					</Menu.Item>
					<Menu.Item>
						<NumProductionMeans />
					</Menu.Item>
					<Menu.Item>
						<EnergyBalance />
					</Menu.Item>
					<Menu.Item>
						<Balance />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			<Grid centered columns={2}>
				<Grid.Row>
					<Grid.Column width={'8'}>
						{activeItem === 'Market' && <Market />}
						{activeItem === 'Your Production' && (
							<Production producers={producers} />
						)}
					</Grid.Column>
					<Grid.Column width={'4'}>
						{activeItem === 'Market' && <Market />}
						{activeItem === 'Your Production' && <ProducerPurchase />}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Game;
