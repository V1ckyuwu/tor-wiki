import React from 'react';

import { Twitter } from '@mui/icons-material';
import { Box, Container, Link, Stack } from '@mui/material';

import { Component } from '../fc';

const Footer: Component = () => {
	return (
		<Box
			marginTop={4}
			sx={{
				borderTop: 'solid',
				borderTopWidth: '1px',
			}}
		>
			<Container sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
				<div
					style={{
						fontFamily: 'Lato',
						fontSize: '22px',
						marginBottom: '10px',
					}}
				>
					¡Toda difusión y participación es bienvenida de buena gana! Aportando
					cada uno nuestro pequeño granito de arena podemos ir haciendo que poco
					a poco esto vaya creciendo a algo mayor, y cada vez con mayor
					dedicación y participación. ¡Gracias por tenerlo en cuenta!
				</div>
				<Stack
					direction={'row'}
					justifyContent={'center'}
					alignItems={'center'}
					spacing={2}
				>
					<Link href={'https://twitter.com/peeposhy'}>
						<Twitter fontSize={'large'} />
					</Link>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
