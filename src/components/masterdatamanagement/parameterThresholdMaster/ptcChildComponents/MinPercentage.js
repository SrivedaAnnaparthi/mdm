import React from 'react';
import TextField from '@mui/material/TextField';

export default function MinPercentage() {
	return (
		<form>
			<TextField
				fullWidth
				id="outlined-number"
				label="Minimum(%)"
				type="number"
				InputLabelProps={{
					shrink: true
				}}
			/>
		</form>
	);
}
