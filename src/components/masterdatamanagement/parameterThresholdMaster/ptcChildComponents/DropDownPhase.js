import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownPhase() {
	const [ phase, setMeter ] = React.useState('');

	const handleChange = (event) => {
		setMeter(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Meter Phase</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="outlined-required"
					label="Meter Phase"
					value={phase}
					variant="outlined"
					onChange={handleChange}
				>
					<MenuItem value={10}>1 Ph</MenuItem>
					<MenuItem value={20}>2 Ph</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
