import React from 'react';

import { Box } from '@mui/material';

import { Component } from '../base/fc';
import RootContainer from '../base/root-components/container';

export const Home: Component = () => {
	return (
		<RootContainer>
			<Box>
				<div
					style={{
						fontFamily: 'Lato',
						fontSize: '28px',
						paddingBottom: '24px',
					}}
				>
					"Saludos, Invocador. Sea bienvenido a "Crónicas de Runaterra", una
					comunidad de Rol basada en el videojuego "League of Legends" donde
					encarnar a su personaje favorito es sólo la base de todo.
				</div>
				<div
					style={{
						fontFamily: 'Lato',
						fontSize: '28px',
						paddingBottom: '24px',
					}}
				>
					No somos una comunidad más. No nos limitamos a agrupar a usuarios bajo
					un mismo nombre. Queremos que se sienta tan parte de este proyecto
					como lo somos sus Administradores, Moderadores y Colaboradores.{' '}
				</div>
				<div
					style={{
						fontFamily: 'Lato',
						fontSize: '28px',
						paddingBottom: '24px',
					}}
				>
					Disponemos de una historia propia que cada poco tiempo vamos
					desempeñando con los diferentes personajes que componen este mundo.
					También contamos con actividades mensuales que se irán desarrollando
					para que, pase lo que pase, nunca sufran de aburrimiento en sus
					cronologías.
				</div>
				<div
					style={{
						fontFamily: 'Lato',
						fontSize: '28px',
						paddingBottom: '24px',
					}}
				>
					Si ha llegado hasta aquí es porque algo ha despertado su interés, y si
					quiere comenzar a formar parte de la comunidad sólo tendrá que
					contactar con algún administrador o moderador para iniciar el proceso
					de unión a formar parte de esto que consideramos nuestra familia.
				</div>
				<div
					style={{
						fontFamily: 'Lato',
						fontSize: '28px',
						paddingBottom: '24px',
					}}
				>
					Esperamos con ilusión que lo pase de miedo roleando con nosotros, y le
					deseamos la mayor de las suertes en los campos de la Justicia."
				</div>
			</Box>
		</RootContainer>
	);
};
