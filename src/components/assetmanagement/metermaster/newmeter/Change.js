import { React, useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Change = () => {//one of the tab
	const verifyField = () => {//  when clicked on submit button, need to show a pop-up contained a verified text
		alert('verified');
	};
	const clear = () => {//when clicked on submit button, need to clear the text in textfield and show a pop-up contained a verified text
		alert('verified');
	};
	// State to store value from the input field
	const [ inputValue, setInputValue ] = useState('');

	// Input Field handler
	const handleUserInput = (e) => {
		setInputValue(e.target.value);
	};

	// Reset Input Field handler
	const resetInputField = () => {
		setInputValue('');
	};
	return (
		<Grid container direction="column" alignItems="center" justify="center">
			<h5>Please Enter & Verify the Consume Number Before Proceeding</h5> <br />
			<TextField
				id="Consumer No"
				label="Consumer Service No"
				variant="standard"
				value={inputValue}
				onChange={handleUserInput}
			/>
			<Button onClick={verifyField}>Verify</Button>
			<Button variant="outlined" color="error" onClick={(clear, resetInputField)}>
				Clear
			</Button>
		</Grid>
	);
};
export default Change;
