import React from 'react';

import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Component, ComponentProps } from '../../base/fc';

interface StoryDescriptionBlockProps extends ComponentProps {
	showChooseOwnAdventure?: boolean;
	title: string;
	description: string;
	buttonName: string;
	buttonLink: string;
}

const StoryDescriptionBlock: Component<StoryDescriptionBlockProps> = (
	props
) => {
	const { showChooseOwnAdventure, title, description, buttonLink, buttonName } =
		props;

	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Grid
			container
			spacing={2}
			columns={12}
			direction={'column'}
			justifyContent={'space-between'}
			alignItems={'center'}
			style={{
				zIndex: 1,
				opacity: 1,
			}}
		>
			<Grid item xs={3}>
				<p
					style={{
						visibility: showChooseOwnAdventure
							? 'visible'
							: isMdOrMore
							? 'hidden'
							: 'visible',
						display: showChooseOwnAdventure
							? 'block'
							: isMdOrMore
							? 'block'
							: 'none',
						paddingTop: '50px',
						paddingBottom: '30px',
						fontFamily: 'Beaufort',
						fontWeight: '700',
						fontSize: '24px',
						textAlign: 'center',
						color: '#13D8F6',
						margin: 0,
					}}
				>
					ELIGE TU PROPIA HISTORIA
				</p>
			</Grid>
			<Grid item xs={6}>
				<p
					style={{
						paddingTop: !showChooseOwnAdventure && !isMdOrMore ? '40px' : '0px',
						paddingBottom: '20px',
						fontFamily: 'Beaufort',
						fontWeight: '700',
						fontSize: '24px',
						textAlign: 'center',
						lineHeight: 1,
						color: '#D0A85C',
						margin: 0,
					}}
				>
					{title}
				</p>
				<p
					style={{
						paddingLeft: '15%',
						paddingRight: '15%',
						fontFamily: 'Beaufort',
						fontWeight: '500',
						fontSize: '24px',
						textAlign: 'center',
						lineHeight: 1.5,
						color: '#F0E6D2',
					}}
				>
					{description}
				</p>
			</Grid>
			<Grid item xs={3} style={{ paddingBottom: '50px' }}>
				<Button
					variant={'outlined'}
					size={'large'}
					href={buttonLink}
					sx={{
						backgroundColor: '#1E2328',
						fontFamily: 'Beaufort',
						fontWeight: '700',
						fontSize: '16px',
						color: '#ACF0FB',
						letterSpacing: '2px',
						border: '4px double #0BC4E2',
						':hover': {
							border: '4px double #0BC4E2',
						},
					}}
				>
					{buttonName}
				</Button>
			</Grid>
		</Grid>
	);
};

export const ChooseYourStory: Component = () => {
	return (
		<Grid
			container
			spacing={2}
			columns={{ xs: 12, lg: 12 }}
			direction={{ xs: 'column', lg: 'row' }}
			justifyContent={'space-between'}
			alignItems={'stretch'}
		>
			<Grid
				item
				xs={3}
				lg={3}
				// height={'100%'}
				width={'100%'}
				position={'relative'}
				bgcolor={'#000'}
			>
				<img
					src={'/static/piltover_scenery.webp'}
					alt={'Scenery'}
					style={{
						position: 'absolute',
						width: '95%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
						opacity: 0.5,
					}}
				/>
				<Box
					style={{
						zIndex: 1,
						position: 'relative',
					}}
				>
					<StoryDescriptionBlock
						title={'Personajes canon'}
						description={
							'Puedes encarnar a cualquier personaje "canon" del ' +
							'universo de League of Legends, el cual puedes adap' +
							'tar a tu gusto siempre dentro de los límites de lo' +
							' razonable'
						}
						buttonName={'Personajes'}
						buttonLink={
							'https://www.guilded.gg/ToR/groups/Edxr06G3/channels/0571edb5-11bc-47db-a03f-419d6d888cb7/list'
						}
					/>
				</Box>
			</Grid>
			<Grid
				item
				xs={6}
				lg={6}
				// height={'100%'}
				width={'100%'}
				position={'relative'}
				bgcolor={'#000'}
			>
				<video
					src='/static/choose_story_video.mp4'
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
						opacity: 0.5,
					}}
					autoPlay
					playsInline
					muted
					loop
				/>
				<Box
					style={{
						zIndex: 1,
						position: 'relative',
					}}
				>
					<StoryDescriptionBlock
						showChooseOwnAdventure
						title={'Tú tienes el control de tu camino'}
						description={
							'Para interactuar con la historia que tratamos de es' +
							'cribir en Tales of Runeterra hay miles de opciones.' +
							' Puedes empezar tu aventura con un personaje "canon' +
							'", es decir, ya perteneciente al universo de League' +
							', como campeones o personajes oficiales. También te' +
							' puedes crear tu propio personaje desde cero, y esc' +
							'ribir tu propia historia, pero tendrás que adecuart' +
							'e a los contenidos canon ya creados por Riot Games.'
						}
						buttonName={'Normativa'}
						buttonLink={'/rules'}
					/>
				</Box>
			</Grid>
			<Grid
				item
				xs={3}
				lg={3}
				// width={'100%'}
				// position={'relative'}

				bgcolor={'#000'}
			>
				<img
					src={'/static/scenery.webp'}
					alt={'Scenery'}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
						opacity: 0.5,
					}}
				/>
				<Box
					style={{
						zIndex: 1,
						position: 'relative',
					}}
				>
					<StoryDescriptionBlock
						title={'Personajes originales'}
						description={
							'También puedes crear tu propio personaje desde cero ' +
							'e integrarlo dentro del mundo de League of Legends, ' +
							'pero recuerda que no podrás pisar ningun personaje o' +
							' historia oficial del universo de League'
						}
						buttonName={'Solicitar'}
						buttonLink={'/request'}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
