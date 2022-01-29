import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import { Stack, Grid, TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './useStyle';

function ClassofAccuracy() {//one of the tab to show accuracy of a class
	const classes = useStyles();// custom styling hook assigned to classes variable
	const [ inputFields, setInputFields ] = useState([ { id: uuidv4(), firstName: '' } ]);// State to store value from the input field

	const handleSubmit = (e) => {// submitting data to backend
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (id, event) => { //To enter the data in text fields
		const newInputFields = inputFields.map((i) => {//taking the data into textfields
			if (id === i.id) {
				i[event.target.name] = event.target.value;
			}
			return i;
		});

		setInputFields(newInputFields);
	};

	const handleAddFields = () => {// function to add the fields 
		setInputFields([ ...inputFields, { id: uuidv4(), firstName: '' } ]);
	};

	const handleRemoveFields = (id) => {// function to remove the fields 
		const values = [ ...inputFields ];
		values.splice(values.findIndex((value) => value.id === id), 1);
		setInputFields(values);
	};
	const clearField = () => {//showing a pop-up to display "elements cleared" 
		alert('elements cleared');
	};
	const addField = () => {//showing a pop-up to display "elements submitted"  
		alert('elements submitted');
	};
	return (
		<Grid container direction="column" alignItems="center" justify="center">
			<form className={classes.root} onSubmit={handleSubmit}>
				{inputFields.map((inputField) => (
					<div key={inputField.id}>
						<IconButton
							disabled={inputFields.length === 1}
							onClick={() => handleRemoveFields(inputField.id)}
						>
							<RemoveCircleIcon />
						</IconButton>
						<TextField
							name="firstName"
							label="Class of Accuracy"
							variant="standard"
							value={inputField.firstName}
							onChange={(event) => handleChangeInput(inputField.id, event)}
						/>
						<IconButton onClick={handleAddFields}>
							<AddCircleIcon />
						</IconButton>
					</div>
				))}
				<br />
				<Grid container direction="column" alignItems="center" justify="center">
					<Stack spacing={2} direction="row">
						<Button
							style={{ maxWidth: '400px', maxHeight: '30px', minWidth: '100px', minHeight: '30px' }}
							variant="outlined"
							color="error"
							onClick={clearField}
						>
							Clear
						</Button>
						<Button
							style={{ maxWidth: '400px', maxHeight: '200px', minWidth: '100px', minHeight: '30px' }}
							variant="contained"
							onClick={addField}
						>
							Submit
						</Button>
					</Stack>
				</Grid>
			</form>
		</Grid>
	);
}

export default ClassofAccuracy;
