import React from 'react';
import { GAME_TICK } from '../../config/constants';
import { EnergyContext } from '../../context/Energy';

const NumProductionMeans = () => {
	const { EnergyProducer } = React.useContext(EnergyContext);
	const [numProducers, setNumProducers] = React.useState<number>(
		EnergyProducer.getProducers().length,
	);

	React.useEffect(() => {
		const retrieveProducersInterval = setInterval(() => {
			setNumProducers(EnergyProducer.getProducers().length);
		}, GAME_TICK);

		return () => {
			clearInterval(retrieveProducersInterval);
		};
	}, [EnergyProducer]);

	return <div># Producers: {numProducers}</div>;
};

export default NumProductionMeans;
