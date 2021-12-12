interface SaleItem {
	name: string;
	energyAmount: number;
	unit: string;
	price: number;
	tezosAddress: string;
	username: string;
}

export const saleItems: SaleItem[] = [
	{
		name: '2000 Kilowatts Energy',
		energyAmount: 2000,
		unit: 'kw',
		price: 100,
		tezosAddress: 'tz1QiyLcMu1ZTpYoe6MzvmNaGM5fX4EDdJqQ',
		username: 'James',
	},
	{
		name: '13 Kilowatts Energy',
		energyAmount: 13,
		unit: 'kw',
		price: 12,
		tezosAddress: 'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb',
		username: 'Alice',
	},
	{
		name: '13 Kilowatts Energy',
		energyAmount: 13,
		unit: 'kw',
		price: 12,
		tezosAddress: 'tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6',
		username: 'Bob',
	},
];
