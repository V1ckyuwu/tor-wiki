import React from 'react';

import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Component } from '../../base/fc';

export const AdventureStart: Component = () => {
	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Box height={'100%'} width={'100%'} position={'relative'} bgcolor={'#000'}>
			<video
				src='/static/landing.mp4'
				style={{
					position: 'absolute',
					top: '0px',
					left: 0,
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
					zIndex: 1,
				}}
				autoPlay
				playsInline
				muted
				loop
			/>
			<Stack
				zIndex={2}
				position={'relative'}
				direction={'column'}
				justifyContent={'space-evenly'}
				alignItems={'flex-start'}
				spacing={isMdOrMore ? 4 : 0}
				sx={{
					height: '100vh',
					width: isMdOrMore ? '50%' : '100%',
					paddingY: isMdOrMore ? '10%' : '20px',
					paddingX: isMdOrMore ? '5%' : '10%',
				}}
			>
				<Box textAlign={'center'}>
					<img
						src={'/static/logo.webp'}
						alt={"ToR's Logo"}
						style={{ width: isMdOrMore ? '60vh' : '90%' }}
					/>
				</Box>
				<Box>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '700',
							fontSize: isMdOrMore ? '90px' : '72px',
							textAlign: isMdOrMore ? 'start' : 'center',
							lineHeight: 1,
							color: '#D0A85C',
							margin: '0',
						}}
					>
						Aquí empieza tu aventura
					</p>
				</Box>
				<Box>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '500',
							fontSize: '24px',
							lineHeight: 1.5,
							color: '#F0E6D2',
						}}
					>
						Tanto si tienes experiencia, como si es la primera vez que tienes
						contacto con el mundo del Roleplay, estamos totalmente abiertos para
						que formes parte de la comunidad.
					</p>
				</Box>
			</Stack>
		</Box>
	);
};
