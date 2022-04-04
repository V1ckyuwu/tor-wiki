import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Component } from '../../base/fc';
import { GuildedInviteWidget } from './guildedInviteWidget';

export const JoinUs: Component = () => {
	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Box height={'100%'} width={'100%'} position={'relative'} bgcolor={'#000'}>
			<img
				src={'/static/shurima_markets.webp'}
				alt={"Shurima's markets"}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					zIndex: 0,
				}}
			/>
			<Grid
				position={'relative'}
				zIndex={1}
				container
				direction={{ xs: 'column', md: 'row' }}
				width={{ xs: '70%', lg: '60%', xl: '60%' }}
				left={{ xs: '15%', lg: '20%', xl: '20%' }}
				justifyContent={'space-between'}
				alignItems={'start'}
				paddingY={'100px'}
			>
				<Grid item xs={6}>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '700',
							fontSize: '16px',
							textAlign: isMdOrMore ? 'start' : 'center',
							color: '#13D8F6',
							paddingBottom: '10px',
							margin: 0,
						}}
					>
						ÚNETE A LA COMUNIDAD
					</p>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '700',
							fontSize: '36px',
							textAlign: 'start',
							color: '#D0A85C',
							marginBottom: '25px',
							margin: 0,
						}}
					>
						Entra en nuestro servidor de Guilded
					</p>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '500',
							fontSize: '18px',
							textAlign: 'start',
							color: '#F0E6D2',
							marginBottom: '35px',
							margin: 0,
						}}
					>
						Aprende más sobre el mundo de League of Legends, sobre nuestra
						comunidad y forma parte de todas las actividades que organizamos
						tanto de Roleplay como de videojuegos.
					</p>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '500',
							fontSize: '18px',
							textAlign: 'start',
							color: '#F0E6D2',
							margin: 0,
						}}
					>
						¡Te aseguramos que lo pasarás en grande!
					</p>
				</Grid>
				<Grid
					item
					xs={4}
					alignSelf={'center'}
					paddingTop={isMdOrMore ? '0px' : '65px'}
				>
					<GuildedInviteWidget />
				</Grid>
			</Grid>
		</Box>
	);
};
