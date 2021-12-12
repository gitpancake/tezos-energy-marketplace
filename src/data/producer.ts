export enum ProductionType {
	Wind = 'Windmill',
	Solar = 'Solar',
}

export interface Producer {
	type: ProductionType;
	name: string;
	productionRate: number;
	cost: number;
}

export const producersForSale: Producer[] = [
	{
		type: ProductionType.Wind,
		name: 'Windmill',
		productionRate: 4,
		cost: 25,
	},
	{
		type: ProductionType.Wind,
		name: 'Windmill',
		productionRate: 8,
		cost: 50,
	},
	{
		type: ProductionType.Wind,
		name: 'Windmill',
		productionRate: 12,
		cost: 75,
	},
	{
		type: ProductionType.Wind,
		name: 'Windmill',
		productionRate: 18,
		cost: 100,
	},
];
