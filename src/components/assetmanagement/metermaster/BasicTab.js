import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Grid, CssBaseline } from '@mui/material';
import Metermaster from './newmeter/Metermaster';
import Category from './newmeter/Category';
import Make from './newmeter/Type';
import Type from './newmeter/Type';
import ClassofAccuracy from './newmeter/ClassOfAccuracy';
import Status from './newmeter/Status';
import Change from './newmeter/Change';

function TabPanel(props) {//changing the tabs by clicking the respective tabs
	const { children, value, index, ...other } = props;//respective props 

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {// using proptypes to specify the data type and to pass the data
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {//returning the specific id, respective clicks on the tab
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

export default function BasicTabs() {//used to provide dynamicness to tabs 
	const [ value, setValue ] = React.useState(0);// State to store value from the input field

	const handleChange = (event, newValue) => {//function to change the tab content when we click on the respective tab
		setValue(newValue);
	};

	return (
		<>
		<CssBaseline/>
		<Grid container direction="column" alignItems="center" justify="center">
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Meter Master" {...a11yProps(0)} />
						<Tab label="Category" {...a11yProps(1)} />
						<Tab label="Make" {...a11yProps(2)} />
						<Tab label="Type" {...a11yProps(3)} />
						<Tab label="Class Of Accuracy" {...a11yProps(4)} />
						<Tab label="Status" {...a11yProps(5)} />
						<Tab label="Change" {...a11yProps(6)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<Metermaster />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Category />
				</TabPanel>

				<TabPanel value={value} index={2}>
					<Make />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Type />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<ClassofAccuracy />
				</TabPanel>

				<TabPanel value={value} index={5}>
					<Status />
				</TabPanel>
				<TabPanel value={value} index={6}>
					<Change />
				</TabPanel>
			</Box>
		</Grid>
		</>
	);
}
