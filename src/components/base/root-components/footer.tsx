import React from 'react';

import { Twitter } from '@mui/icons-material';
import { Box, Container, Link, Stack } from '@mui/material';

import { Component } from '../fc';

const Footer: Component = () => {
	return (
		<Box
			sx={{
				borderTop: 'solid',
				borderTopWidth: '1px',
			}}
		>
			<Container sx={{ paddingTop: '18px', paddingBottom: '14px' }}>
				<Stack
					direction={'row'}
					justifyContent={'center'}
					alignItems={'center'}
					spacing={2}
				>
					<div
						style={{
							fontFamily: 'Beaufort',
							fontWeight: 500,
							fontSize: '16px',
							marginBottom: '10px',
						}}
					>
						© 2022 Tales of Runeterra -- @RunaterraRP_
					</div>

					<Link href={'https://twitter.com/RunaterraRP_'}>
						<Twitter fontSize={'medium'} />
					</Link>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
