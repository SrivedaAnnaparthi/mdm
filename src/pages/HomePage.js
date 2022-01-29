import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/staticComponents/Header';
//import SideBar from '../components/staticComponents/SideBar';
import { useSelector } from 'react-redux';
import SelectedComponent from './SelectedComponent';
import DummyComponent from '../components/DummyComponent';
//import { useEffect, useRef } from 'react';
import CustomizedAccordions from '../components/staticComponents/DropDown';

const HomePage = () => {// a constant component
	//useSelector() is a hook to extract data from state
	const component = useSelector((state) => state.componentChange.component);
	//const scrolllRef = useRef(null);
	
	
	return (
		<div>
			<Grid container rowSpacing={8} spacing={0}>
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={3}>
					<CustomizedAccordions />
				</Grid>
				<Grid item xs={9}>
					{component ? <SelectedComponent component={component} /> : <DummyComponent />}
				</Grid>
			</Grid>
		</div>
	);
};

export default HomePage;
