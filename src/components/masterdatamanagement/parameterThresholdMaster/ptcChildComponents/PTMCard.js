import * as React from 'react';
import { Grid, Typography, Modal, Button, Box, TextField, Stack } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import data from "../../../../resources/data.json";
import Select from "react-select";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '1px light #fff',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

const style1 = {
	width: 400,
	pt: 2,
};

const columns = [
	{ id: 'name', label: 'S.No', minWidth: 10 },
	{ id: 'code', label: 'Parameter Name', minWidth: 40 },
	{
		id: 'population',
		label: 'Min(Value)',
		minWidth: 40,
		format: (value) => value.toLocaleString('en-US')
	},
	{
		id: 'size',
		label: 'Max(Value)',
		minWidth: 40,
		format: (value) => value.toLocaleString('en-US')
	},
	{
		id: 'density',
		label: 'Min(%)',
		minWidth: 40,
		format: (value) => value.toFixed(2)
	},
	{
		id: 'modify',
		label: 'Modify',
		minWidth: 40,
		format: (value) => value.toFixed(2)
	}
];

function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [ createData('01'), createData('02') ];

const PTMCard = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const [meter, setMeter] = React.useState('');

	const handleChange = (event) => {
		setMeter(event.target.value);
	};

	const [phase, setPhase] = React.useState('');

	const handleChangePhase = (event) => {
		setPhase(event.target.value);
	};

	const [value, setValue] = React.useState(null);

	const [country, setCountry] = useState(null);
	const [lang, setLang] = useState(null);
	const [langList, setLangList] = useState([]);



	// handle change event of the country dropdown
	const handleCategoryChange = (obj) => {
		setCountry(obj);
		setLangList(obj.languages);
		setLang(null);
	};
	// handle change event of the language dropdown
	const handlePhaseChange = (obj) => {
		setLang(obj);
	};

	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};


	// generate the link when both dropdowns are selected

	return (
		<Box sx={{ display: 'flex', p: 1, m: 2, bgcolor: 'background.paper', flexDirection: 'column' }}>
			<div align="left">
				<Button variant="contained" onClick={handleOpen}>Add Parameter</Button>
				<Modal
					hideBackdrop
					open={open}
					onClose={handleClose}
					aria-labelledby="child-modal-title"
					aria-describedby="child-modal-description"
				>
					<Box sx={style}>
						<Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
							<Grid item xs={6}>
								<Typography variant='h6' >Add New Parameter</Typography>
							</Grid>
							<Grid item xs={4}>

							</Grid>
							<Grid item xs={2}>
								<Button onClick={handleClose}><CloseIcon /></Button>
							</Grid>
							<Grid item xs={6}>
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
							</Grid>
							<Grid item xs={6}>
								<Box sx={{ minWidth: 120 }}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Meter Phase</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="outlined-required"
											label="Meter Phase"
											value={phase}
											variant="outlined"
											onChange={handleChangePhase}
										>
											<MenuItem value={10}>1 Ph</MenuItem>
											<MenuItem value={20}>2 Ph</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<TextField id="outlined-basic" label="Parameter Name" variant="outlined" />
							</Grid>
							<Grid item xs={6}>
								<TextField id="outlined-basic" label="User Name" variant="outlined" />
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Minimum(Value)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Maximum(Value)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Minimum(%)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Maximum(%)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Effective Date"
										value={value}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={6}>
							</Grid>
							<Grid item xs={3}>

							</Grid>
							<Grid item xs={3}>
								<Stack spacing={2} direction="row">
									<Button variant="contained">Submit</Button>
								</Stack>
							</Grid>
							<Grid item xs={3}>
								<Stack spacing={2} direction="row">
									<Button variant="contained">Clear</Button>
								</Stack>
							</Grid>
							<Grid item xs={3}>

							</Grid>

						</Grid>

					</Box>
				</Modal>
			</div>
			<Typography variant="h6" align="left" sx={{ pt: 2, m: 0 }}>
				Please Select:
			</Typography>

			<Grid container direction="row" sx={{ flexGrow: 1, p: 1, m: 0 }} spacing={2}>
				<form>
					<Grid item xs={12}>
						<Box sx={style1}>
							<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={6}>
									<b>Meter Subcategory</b>
									<Select
										placeholder="Select Category"
										value={country}
										options={data}
										onChange={handleCategoryChange}
										getOptionLabel={x => x.region}
										getOptionValue={x => x.country_code}

									/>
								</Grid>
								<Grid item xs={6}>
									<b>Meter Phase</b>
									<Select
										placeholder="Select Phase"
										value={lang}
										options={langList}
										onChange={handlePhaseChange}
										getOptionLabel={x => x.name}
										getOptionValue={x => x.code}
									/>
								</Grid>

							</Grid>
						</Box>
					</Grid>
				</form>
			</Grid>
			<Grid sx={{ pt: 1, pb: 2 }}>
				<TextField id="outlined-search" label="Search..." type="search" />
			</Grid>
			<Paper sx={{ width: '100%', overflow: 'hidden' }} variant="outlined" square>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === 'number' ? (
													column.format(value)
												) : (
													value
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[ 10, 25, 100 ]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
		</Box>
	);
};

export default PTMCard;
