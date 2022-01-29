import React, { useState } from 'react';
import DDL from './DDL';

const Options1 = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'The Color Blue',
		value: 'blue'
	}
];

const DropdownOptions = () => {
	// state to manage dropdown selection
	const [ selected, setSelected ] = useState(Options1[0]);
	return (
		<div>
			<DDL Options1={Options1} selected={selected} onSelectedChange={setSelected} />
		</div>
	);
};
