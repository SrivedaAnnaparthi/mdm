import React from 'react';
import TextField from '@mui/material/TextField';

export default function MaxField() {
	return (
		<form>
			<TextField
				fullWidth
				id="outlined-number"
				label="Maximum(Value)"
				type="number"
				InputLabelProps={{
					shrink: true
				}}
			/>
		</form>
	);
}
