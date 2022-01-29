import { React } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { dropdowns, Circle, Division, SubDivision, Section, SubStation, Feeder } from './Dropdowns';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';

const MeterMaster = () => {//Main Meter Master Component
	
	const dispatch = useDispatch();// useDispatch()	hook is used to dispatching search event and new meter event(buttons)
	return (
		<Card elevation={8} >
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 2, width: '25ch' }
				}}
				noValidate
				autoComplete="off"
			>
				<CssBaseline />
				<NavBar />

				<Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row' }} />

				<div>
					<Grid container direction="row" justifyContent="center" alignContent="center">
						<TextField
							id="outlined-select-currency-native"
							required
							label="Discom:"
							defaultValue="TSSCPDL"
						/>

						<TextField
							id="outlined-select-currency-native"
							select
							required
							label="Region: "
							SelectProps={{
								native: true
							}}
						>
							{dropdowns.map((item) => (
								<option key={item.label} value={item.label}>
									{item.label}
								</option>
							))}
						</TextField>
					</Grid>
				</div>
				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Circle:"
						SelectProps={{
							native: true
						}}
					>
						{Circle.map((item) => (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						))}
					</TextField>

					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Division:"
						SelectProps={{
							native: true
						}}
					>
						{Division.map((item) => (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						))}
					</TextField>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="SubDivision:"
						SelectProps={{
							native: true
						}}
					>
						{SubDivision.map((item) => (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						))}
					</TextField>
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Section:"
						SelectProps={{
							native: true
						}}
					>
						{Section.map((item) => (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						))}
					</TextField>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="SubStation:"
						SelectProps={{
							native: true
						}}
					>
						{SubStation.map((item) => (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						))}
					</TextField>

					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Feeder:"
						SelectProps={{
							native: true
						}}
					>
						{Feeder.map((item) => (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						))}
					</TextField>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<div>
						<TextField id="outlined-select-currency-native" required label="DTR: " />
						<TextField id="outlined-select-currency-native" required label="Meter No: " />
					</div>
				</Grid>
				<Grid container direction="row" justifyContent="center" alignContent="center">
					<div>
						<TextField id="outlined-select-currency-native" required label="Service No: " />
						<TextField id="outlined-select-currency-native" required label="ConsumerName: " />
					</div>
				</Grid>
			</Box>

			<Stack paddingTop={2} spacing={3} direction="row" justifyContent="center">
				<Button variant="contained" onClick={() => dispatch({ type: 'search' })} style={{ cursor: 'pointer' }}>
					SEARCH
				</Button>
				<Button variant="contained">CLEAR</Button>
				<Button
					variant="contained"
					onClick={() => dispatch({ type: 'new-meter' })}
					style={{ cursor: 'pointer' }}
				>
					NEW METER
				</Button>
			</Stack>
			<br />
		</Card>
	);
};
export default MeterMaster;
