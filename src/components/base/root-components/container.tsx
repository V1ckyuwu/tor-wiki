import { Box } from '@mui/material';
import React from 'react';

import { Component } from '../fc';

const RootContainer: Component = (props) => {
	return (
		<>
			<Box sx={{ marginTop: '0px' }}>{props.children}</Box>
		</>
	);
};

export default RootContainer;
