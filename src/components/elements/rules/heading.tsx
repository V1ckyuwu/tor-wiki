import React from 'react';

import { Box, Button, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Component } from '../../base/fc';

export const RulesHeading: Component = () => {
	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));
	const isLgOrMore = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box bgcolor={'#000'}>
			<Box
				position={'absolute'}
				height={'40%'}
				width={'100%'}
				top={'15%'}
				left={'5%'}
			>
				<img
					src={'/static/rules_heading_bg.webp'}
					alt={'Rules heading background'}
					style={{
						position: 'absolute',
						height: '100%',
						width: isLgOrMore ? '40%' : isMdOrMore ? '50%' : '100%',
						objectFit: 'cover',
						zIndex: 1,
						opacity: 1,
					}}
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
					<Box>
						<p
							style={{
								fontFamily: 'Beaufort',
								fontWeight: '700',
								fontSize: isMdOrMore ? '56px' : '38px',
								textAlign: isMdOrMore ? 'start' : 'center',
								lineHeight: 1,
								color: '#D0A85C',
								margin: '0',
							}}
						>
							Reglamento general
						</p>
					</Box>
					<Box>
						<p
							style={{
								fontFamily: 'Beaufort',
								fontWeight: '500',
								fontSize: '16px',
								lineHeight: 1.5,
								color: '#F0E6D2',
							}}
						>
							Todo imperio necesita su Libro de Leyes para permanecer en armonía
							y en nuestro caso no iba a ser distinto. Pero no te preocupes,
							pues todas nuestras leyes van regidas por una que dio origien al
							resto: el sentido común.
						</p>
					</Box>
					<Box>
						<Button
							variant={'outlined'}
							size={'large'}
							href={'/'}
							sx={{
								backgroundColor: '#1E2328',
								fontFamily: 'Beaufort',
								fontWeight: '700',
								fontSize: '16px',
								color: '#ACF0FB',
								paddingX: '40px',
								letterSpacing: '2px',
								border: '4px double #0BC4E2',
								':hover': {
									border: '4px double #0BC4E2',
								},
							}}
						>
							Volver
						</Button>
					</Box>
				</Stack>
			</Box>
			<Box
				position={'absolute'}
				width={'75%'}
				height={'75%'}
				top={'5%'}
				right={'5%'}
				zIndex={0}
			>
				<img
					src={'/static/shurima_base.webp'}
					alt={'Rules heading background'}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
						opacity: 1,
					}}
				/>
			</Box>
		</Box>
	);
};
