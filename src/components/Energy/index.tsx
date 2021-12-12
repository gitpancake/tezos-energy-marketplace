import React from 'react';
import { GAME_TICK } from '../../config/constants';
import { EnergyContext } from '../../context/Energy';
import { FormatToLocaleString } from '../../utils/numbers';

const Energy = () => {
	const { EnergyProducer } = React.useContext(EnergyContext);
	const [producedEnergy, setProducedEnergy] = React.useState<number>(
		EnergyProducer.getProducedEnergy(),
	);

	const getFormattedProducedEnergy = () => {
		return `${FormatToLocaleString(producedEnergy)} kwh`;
	};

	React.useEffect(() => {
		const producingInterval = setInterval(() => {
			EnergyProducer.incrementProducedEnergy();

			const energyProduced = EnergyProducer.getProducedEnergy();

			setProducedEnergy(energyProduced);
		}, GAME_TICK);

		return () => {
			clearInterval(producingInterval);
		};
	});

	return <div>{getFormattedProducedEnergy()}</div>;
};

export default Energy;
