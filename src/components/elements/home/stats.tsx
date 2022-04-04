import React from 'react';

import { Box, Stack } from '@mui/material';

import { Component, ComponentProps } from '../../base/fc';

interface HomeStatEntryProps extends ComponentProps {
	statValue: string;
	statName: string;
}

const HomeStatSeparator: Component = () => (
	<Box
		textAlign={'center'}
		alignSelf={{ xs: 'center', md: 'start' }}
		paddingTop={{ xs: 0, md: '15px' }}
		paddingBottom={5}
	>
		<p
			style={{
				fontFamily: 'Beaufort',
				fontWeight: '700',
				fontSize: '48px',
				lineHeight: 0.1,
				color: '#F0E6D2',
				margin: 0,
			}}
		>
			·
		</p>
	</Box>
);

const HomeStatEntry: Component<HomeStatEntryProps> = (props) => (
	<Box textAlign={'center'}>
		<p
			style={{
				fontFamily: 'Beaufort',
				fontWeight: '700',
				fontSize: '48px',
				lineHeight: 1,
				color: '#F0E6D2',
				margin: 0,
			}}
		>
			{props.statValue}
		</p>
		<p
			style={{
				fontFamily: 'Beaufort',
				fontWeight: '500',
				fontSize: '16px',
				lineHeight: 1.5,
				color: '#D0A85C',
			}}
		>
			{props.statName}
		</p>
	</Box>
);

export const HomeStats: Component = () => {
	return (
		<Box height={'100%'} width={'100%'} position={'relative'} bgcolor={'#000'}>
			<img
				src={'/static/stat_background.webp'}
				alt={"League's champions in gray"}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					zIndex: 0,
					opacity: 0.3,
				}}
			/>
			<Box position={'relative'} zIndex={1} textAlign={'center'} paddingY={8}>
				<p
					style={{
						fontFamily: 'Beaufort',
						fontWeight: '700',
						fontSize: '42px',
						lineHeight: 0.1,
						color: '#D0A85C',
						margin: 0,
					}}
				>
					¿No te decides?
				</p>
			</Box>
			<Stack
				position={'relative'}
				zIndex={1}
				direction={{ xs: 'column', md: 'row' }}
				justifyContent={'center'}
				alignItems={'center'}
				spacing={{ xs: 3, md: 12 }}
				paddingBottom={6}
			>
				<HomeStatEntry statName={'Regiones'} statValue={'13'} />
				<HomeStatSeparator />
				<HomeStatEntry statName={'Campeones'} statValue={'159'} />
				<HomeStatSeparator />
				<HomeStatEntry
					statName={'Historias que contar'}
					statValue={'Infinitas'}
				/>
			</Stack>
		</Box>
	);
};
