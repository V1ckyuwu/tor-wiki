import React from 'react';

import { Box, Grid } from '@mui/material';

import { Component } from '../../base/fc';

export const AboutUs: Component = () => {
	const aboutUsDescription = [
		'Sea bienvenido, Guerrero, a la página de la comunidad de RolePlay conocida como "Tales of Runeterra". Es todo un placer contar su con su presencia en nuestra morada.',
		'Si ha llegado a esta web, es porque desea saber más de nuestro proyecto. Bien ha de saber que para entrar en estas tierras se ha de ser lo suficiente perspicaz y habilidoso para comprender su historia, relaciones y más profundos secretos. Desde esta misma página, podrá saciar toda su sed de conocimientos respecto a nosotros.',
		'No somos una comunidad de RolePlay más, pues esta es solo una de nuestras muchas facetas y ámbitos. Esperamos hacer de este lugar un hogar para todos aquellos que disfrutan tanto de una buena taza de café acompañada de algo de escritura, como para aquellos que prefieren una cerveza y una buena sesión de gaming. Aquí, cualquier individuo es bienvenido, independientemente de su condición.',
		'Pese a ser una comunidad, entendemos que todo lo mencionado no deja de ser un hobby, y por tanto se tomará en cuenta como tal. De manera que siempre se priorice un ambiente agradable y laxo al que se pueda acudir siempre que sea deseado.',
		'Nuestra intención no es agrupar a todos los miembros bajo un mismo nombre en lo que a rol respecta, sino que buscamos proporcionar esos medios y herramientas para que todos se sientan incluidos en agradables y diversos eventos propios. Así como regular y hacer de mediadores a nivel administrativo siempre que un usuario lo solicite o sea necesario.',
		'Dicho esto, y sin mayor dilación...',
		'¿Estás listo para formar parte de nuestro mundo? Todo aquí, en Tales of Runeterra.',
	];

	return (
		<Grid
			container
			direction={{ xs: 'column', lg: 'row' }}
			height={'100%'}
			width={'100%'}
			position={'relative'}
		>
			<img
				src={'/static/runeterra_map.webp'}
				alt={"Runeterra's map"}
				style={{
					position: 'absolute',
					width: '50%',
					height: '100%',
					left: '50%',
					objectFit: 'cover',
					zIndex: 0,
					opacity: 1,
				}}
			/>
			<Grid
				item
				xs={12}
				lg={6}
				height={'100%'}
				width={'100%'}
				position={'relative'}
				bgcolor={'#000'}
			>
				<img
					src={'/static/about_us_background.webp'}
					alt={'Scenery'}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
						opacity: 1,
					}}
				/>

				<Box
					position={'relative'}
					zIndex={1}
					justifyContent={'space-between'}
					alignItems={'center'}
					paddingTop={8}
					paddingBottom={3}
					paddingX={'15%'}
				>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '700',
							fontSize: '16px',
							textAlign: 'start',
							color: '#13D8F6',
							marginBottom: '20px',
							margin: 0,
						}}
					>
						QUIÉNES SOMOS
					</p>
					<p
						style={{
							fontFamily: 'Beaufort',
							fontWeight: '700',
							fontSize: '32px',
							textAlign: 'start',
							color: '#D0A85C',
							marginBottom: '40px',
							margin: 0,
						}}
					>
						¿Quieres saber más de nosotros?
					</p>
					{aboutUsDescription.map((item, key) => {
						return (
							<p
								key={key}
								style={{
									fontFamily: 'Beaufort',
									fontWeight: '500',
									fontSize: '18px',
									textAlign: 'start',
									lineHeight: 1.5,
									color: '#F0E6D2',
								}}
							>
								{item}
							</p>
						);
					})}
				</Box>
			</Grid>
		</Grid>
	);
};
