import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownCategory() {
	const [ meter, setMeter ] = React.useState('');

	const handleChange = (event) => {
		setMeter(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Meter Subcategory</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={meter}
					label="Select Subcategory"
					onChange={handleChange}
				>
					<MenuItem value={10}>Non-Domestic/Commercial</MenuItem>
					<MenuItem value={20}>Domestic</MenuItem>
					<MenuItem value={30}>Industrial</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
