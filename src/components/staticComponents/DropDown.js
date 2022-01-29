import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


// used to display the constant accordian
//to style the accordian
const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0
	},
	'&:before': {
		display: 'none'
	}
}));
//pointing the accordian main component labels by styling them and adding background
const AccordionSummary = styled((props) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color:'white' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(63, 116, 191, 0.87)',
	color: 'white',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)'
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1)
	}
}));
// specifying the sub components' labels
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(1),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	background: 'white',
	
	
}));
//main function to add UI
export default function CustomizedAccordions() {
	//useState() to store and set the data to open panel0 accordian details initially
	const [ expanded, setExpanded ] = useState('panel0');
	const dispatch = useDispatch();// useDispatch() to dispatch an action by clicking the text(label)

	//handleChange is to open panel accordian details, which is set to display the expanded accordian 
	const handleChange = (panel) => (event, newExpanded) => {//
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
				<AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
					<Typography sx={{ fontWeight: 'bold' }}>Dashboards</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'meter-communication' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Communication
					</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'tampers-events' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Tampers and Events
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography sx={{ fontWeight: 'bold' }}>Asset Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'meter-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Master
					</Typography>
					</AccordionDetails>
					<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'dcu-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						DCU Master
					</Typography>
					</AccordionDetails>
					<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'sim-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						SIM Master
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography sx={{ fontWeight: 'bold' }}>Master Data Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'billing-determinants' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Determinants
					</Typography>
					</AccordionDetails>
					<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'pt-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Parameter Threshold Master
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography sx={{ fontWeight: 'bold' }}>Reports</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'am-summary' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Summary
					</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'am-installed' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Installed
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'am-communicated' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Communicated
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'am-commissioned' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Commissioned
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'load-profile-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Load Profile Report
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'power-factor-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Power Factor Report
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'billing-demand-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Demand Report
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'billing-energy-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Energy Report
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'billing-consumption-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Consumption Report
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						
						onClick={() => {
							dispatch({ type: 'event-summary-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Event Summary Report
					</Typography>
					</AccordionDetails>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'event-individual-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Event Individual Report
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
					<Typography sx={{ fontWeight: 'bold' }}>Configurables</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'meter-parameter' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Parameters
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
