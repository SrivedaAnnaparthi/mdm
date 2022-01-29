import React from 'react';
import TextField from '@mui/material/TextField';

export default function MaxPercentage() {
	return (
		<form>
			<TextField
				fullWidth
				id="outlined-number"
				label="Maximum(%)"
				type="number"
				InputLabelProps={{
					shrink: true
				}}
			/>
		</form>
	);
}
