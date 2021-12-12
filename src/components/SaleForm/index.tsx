import React from 'react';
import toast from 'react-hot-toast';
import { Form } from 'semantic-ui-react';

const SaleForm = () => {
	const [energyAmount, setEnergyAmount] = React.useState<number>(0);
	const [tezosPrice, setTezosPrice] = React.useState<number>(0);

	const submitForm = () => {
		toast.success(
			`Your sale for ${energyAmount} units of energy at ${tezosPrice}ꜩ has been placed.`,
			{
				icon: '👏',
				position: 'bottom-left',
				duration: 3000,
				style: { backgroundColor: '#77dd77' },
			},
		);
	};

	return (
		<div>
			<h1>Sell Energy</h1>
			<p>You can sell your hard-earned energy here, for tezos</p>
			<Form onSubmit={() => submitForm()}>
				<Form.Group widths="equal">
					<Form.Input
						placeholder="Producer KWH EnergyAmount"
						label="Producer KWH EnergyAmount"
						type="number"
						onChange={(e) => setEnergyAmount(Number(e.target.value))}
					/>
					<Form.Input
						placeholder="Sale Price (ꜩ)"
						label="Sale Price (ꜩ)"
						value={tezosPrice}
						type="number"
						onChange={(e) => setTezosPrice(Number(e.target.value))}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Button
						type="submit"
						disabled={tezosPrice <= 0 || energyAmount <= 0}
					>
						Submit
					</Form.Button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default SaleForm;
