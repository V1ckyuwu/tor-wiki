import React from 'react';

import { Box, Button, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Component, ComponentProps } from '../../base/fc';

interface CommunitySpiritBoxProps extends ComponentProps {
	title: string;
	text: string;
}

const CommunitySpiritBox: Component<CommunitySpiritBoxProps> = (props) => {
	const { title, text } = props;

	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));
	const isLgOrMore = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box
			paddingY={4}
			width={isLgOrMore ? '20%' : isMdOrMore ? '60%' : '80%'}
			minHeight={isLgOrMore ? '350px' : 'inherit'}
			border={'groove'}
			borderColor={'#D0A85C'}
			sx={{ borderWidth: '1px' }}
		>
			<Box marginTop={6}>
				<p
					style={{
						fontFamily: 'Beaufort',
						fontWeight: '700',
						fontSize: isMdOrMore ? '26px' : '26px',
						textAlign: 'center',
						lineHeight: 1,
						color: '#D0A85C',
						marginBottom: '26px',
					}}
				>
					{title}
				</p>
			</Box>
			<Box marginBottom={6}>
				<p
					style={{
						fontFamily: 'Beaufort',
						fontWeight: '500',
						fontSize: isLgOrMore ? '15px' : '18px',
						textAlign: 'center',
						lineHeight: 1.5,
						color: '#F0E6D2',
						paddingLeft: '24px',
						paddingRight: '24px',
					}}
				>
					{text}
				</p>
			</Box>
		</Box>
	);
};

export const CommunitySpirit: Component = () => {
	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));
	const isLgOrMore = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box>
			<Box paddingY={8}>
				<p
					style={{
						fontFamily: 'Beaufort',
						fontWeight: '700',
						fontSize: isMdOrMore ? '44px' : '38px',
						textAlign: 'center',
						lineHeight: 1,
						color: '#D0A85C',
						margin: '0',
					}}
				>
					El espíritu de esta comunidad
				</p>
			</Box>
			<Stack
				direction={isLgOrMore ? 'row' : 'column'}
				justifyContent='center'
				alignItems='center'
				spacing={isLgOrMore ? 8 : 4}
			>
				<CommunitySpiritBox
					title={'Interactúa'}
					text={
						'Intenta interactuar con la mayor cantidad de gente posible. Desarrolla tu ' +
						'personaje con los demás integrantes de la comunidad y con gente del exteri' +
						'or también. Deja volar tu imaginación e invita a todo aquél que te encuent' +
						'res a formar parte de tu historia.'
					}
				/>
				<CommunitySpiritBox
					title={'Diviértete'}
					text={
						'Es lo más importante, no podemos tener una comunidad como la que queremos ' +
						'construir si no hay diversión. Sal a TL y no tengas miedo a interactuar, a' +
						' desarrollar tu personaje o a buscar tramas que rolear. Si tienes cualquie' +
						'r idea para la comunidad, nunca dudes en hablar con nosotros.'
					}
				/>
				<CommunitySpiritBox
					title={'Respeta'}
					text={
						'Queremos ser una enorme familia, pero sabemos que siempre habrá confrontac' +
						'iones en el tiempo. Os animamos a siempre sentaros a hablar y a contactar ' +
						'con un moderador si creéis que no podréis llegar a un acuerdo. El bienesta' +
						'r de la comunidad es trabajo de todos.'
					}
				/>
			</Stack>
		</Box>
	);
};
