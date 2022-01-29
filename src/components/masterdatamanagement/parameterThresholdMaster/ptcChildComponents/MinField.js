import React from 'react';
import TextField from '@mui/material/TextField';

export default function MinField() {
	return (
		<form>
			<TextField
				fullWidth
				id="outlined-number"
				label="Minimum(Value)"
				type="number"
				InputLabelProps={{
					shrink: true
				}}
			/>
		</form>
	);
}
