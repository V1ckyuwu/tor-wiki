import React from 'react';

import { Box, useTheme, useMediaQuery, SvgIcon } from '@mui/material';

import { Component } from '../../base/fc';

// interface ModeratorType {
// 	name: string;
// 	role: string;
// 	description: string;
// }

export const ModeratorCarousel: Component = () => {
	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));

	const moderatorList = [
		{
			name: 'Destiny',
			role: 'Administrador principal',
			description:
				'Testigos afirman que lo han visto montado sobre Aurelion con un martillo en la mano',
		},
		{
			name: 'Rafa',
			role: 'siuu principal',
			description: 'Testigos afirm',
		},
	];
	return (
		<Box bgcolor={'#000'} position={'relative'} height={'100%'}>
			{/* <Carousel
				autoPlay
				indicators
				swipe
				cycleNavigation
				navButtonsAlwaysVisible
				fullHeightHover={false}
				animation={'slide'}
				duration={900}
				navButtonsProps={{
					style: {
						paddingLeft: '25px',
						paddingRight: '25px',
						backgroundColor: 'black',
						overflow: 'visible',
					},
				}}
				navButtonsWrapperProps={{
					style: {
						bottom: '0',
						top: 'unset',
					},
				}}
				PrevIcon={
					<SvgIcon>
						<path d={'M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z'} />
					</SvgIcon>
				}
				NextIcon={
					<SvgIcon style={{ transform: 'scaleX(-1)' }}>
						<path d={'M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z'} />
					</SvgIcon>
				}
			>
				{moderatorList.map((item, key) => {
					return (
						<Box key={key}>
							<p
								style={{
									fontFamily: 'Beaufort',
									fontWeight: '700',
									fontSize: '16px',
									textAlign: 'center',
									color: '#13D8F6',
									padding: '40px',
									paddingTop: '60px',
									// marginBottom: '20px',
									margin: 0,
								}}
							>
								GOBERNADORES DE NUESTRO IMPERIO
							</p>
							<Box
								position={'relative'}
								height={'100%'}
								width={{ xs: '75%', md: '70%', lg: '60%', xl: '50%' }}
								left={{ xs: '12.5%', md: '15%', lg: '20%', xl: '25%' }}
							>
								<p
									style={{
										fontFamily: 'Beaufort',
										fontWeight: '700',
										fontSize: isMdOrMore ? '52px' : '32px',
										textAlign: 'center',
										color: '#D0A85C',
										marginBottom: isMdOrMore ? '40px' : '30px',
										margin: 0,
									}}
								>
									{item.description}
								</p>
								<p
									style={{
										fontFamily: 'Beaufort',
										fontWeight: '500',
										fontSize: '18px',
										textAlign: 'center',
										color: '#937349',
										marginBottom: '20px',
										margin: 0,
									}}
								>
									{item.name}
								</p>
								<p
									style={{
										fontFamily: 'Beaufort',
										fontWeight: '500',
										fontSize: '18px',
										textAlign: 'center',
										color: '#F0E6D2',
										marginBottom: '20px',
										margin: 0,
									}}
								>
									{item.role}
								</p>
							</Box>
						</Box>
					);
				})}
			</Carousel> */}
		</Box>
	);
};
