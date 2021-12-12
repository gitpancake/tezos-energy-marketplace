import React from 'react';
import { Producer } from '../data/producer';
import { IEnergyService, EnergyService } from '../services/EnergyService';

interface Props {
	children: React.ReactElement;
}

interface EnergyServiceContext {
	EnergyProducer: IEnergyService;
	producers: Producer[];
	addProducer: (producer: Producer) => void;
}

const EnergyProducer = new EnergyService(0);

export const EnergyContext = React.createContext<EnergyServiceContext>({
	EnergyProducer,
	producers: EnergyProducer.getProducers(),
	addProducer: (producer: Producer) => EnergyProducer.addProducer(producer),
});

const EnergyContextProvider = ({ children }: Props) => {
	return (
		<EnergyContext.Provider
			value={{
				EnergyProducer,
				producers: EnergyProducer.getProducers(),
				addProducer: (producer: Producer) =>
					EnergyProducer.addProducer(producer),
			}}
		>
			{children}
		</EnergyContext.Provider>
	);
};

export default EnergyContextProvider;
