import { BASE_RATE } from '../config/constants';
import { Producer, ProductionType } from '../data/producer';

export interface IEnergyService {
	getProducedEnergy: () => number;
	incrementProducedEnergy: (increment?: number) => number;
	addProducer: (producer: Producer) => Producer[];
	getProducers: () => Producer[];
	deductProducedEnergy: (energy: number) => number;
}

const getAggregatedProductionRate = (producers: Producer[]): number => {
	let totalProductionRate = 0;

	producers.forEach((producer: Producer) => {
		totalProductionRate += producer.productionRate;
	});

	return totalProductionRate;
};

export class EnergyService implements IEnergyService {
	private producedEnergy: number;

	private producers: Producer[] = [
		{
			type: ProductionType.Wind,
			name: 'Windmill',
			productionRate: 2,
			cost: 1000,
		},
	];

	constructor(startingEnergy: number) {
		this.producedEnergy = startingEnergy;
	}

	getProducedEnergy(): number {
		return this.producedEnergy;
	}

	incrementProducedEnergy(increment?: number): number {
		if (increment) {
			this.producedEnergy += increment;
		} else {
			this.producedEnergy +=
				BASE_RATE * getAggregatedProductionRate(this.producers);
		}

		return this.producedEnergy;
	}

	addProducer(producer: Producer): Producer[] {
		this.producers.push(producer);

		return this.producers;
	}

	getProducers(): Producer[] {
		return this.producers;
	}

	deductProducedEnergy(energy: number): number {
		this.producedEnergy -= energy;

		return this.producedEnergy;
	}
}
