import * as React from 'react';
import { TextField } from '@mui/material';

export default function SearchField() {
	return (
		<form>
			<TextField id="outlined-search" label="Search..." type="search" />
		</form>
	);
}
