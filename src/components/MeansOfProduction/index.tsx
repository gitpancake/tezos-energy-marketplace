import React from 'react';
import { EnergyContext } from '../../context/Energy';

const NumProductionMeans = () => {
	const { EnergyProducer } = React.useContext(EnergyContext);

	return <div># Producers: {EnergyProducer.getProducers().length}</div>;
};

export default NumProductionMeans;
