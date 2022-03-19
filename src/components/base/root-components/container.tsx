import { Box } from '@mui/material';
import React from 'react';

import { Component } from '../fc';
// import Footer from './footer';
// import Header from './header';

const RootContainer: Component = (props) => {
	return (
		<>
			{/* <Header /> */}
			<Box sx={{ marginTop: '0px' }}>{props.children}</Box>
			{/* <Footer /> */}
		</>
	);
};

export default RootContainer;
