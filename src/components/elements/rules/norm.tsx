import React from 'react';

import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Component } from '../../base/fc';

export const NormRules: Component = () => {
	const theme = useTheme();
	const isMdOrMore = useMediaQuery(theme.breakpoints.up('md'));

	const renderInBlue = (text: string) => (
		<span
			style={{
				color: '#12D8F6',
			}}
		>
			{text}
		</span>
	);

	return (
		<Container>
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
					Normativa
				</p>
			</Box>
			<Box
				fontFamily={'Beaufort'}
				fontWeight={500}
				fontSize={'20px'}
				textAlign={'justify'}
				color={'#F0E6D2'}
				paddingX={isMdOrMore ? 0 : 4}
				paddingBottom={12}
			>
				<p style={{ marginTop: 0, marginBottom: 0 }}>
					Normativa Los principios de nuestra comunidad están muy bien, pero
					seguro que quieres saber bien cuál es nuestra normativa, bajo que
					reglamento queremos desarrollar la comunidad... Aquí la tienes.
					Sabemos que es un texto largo, que parece que son muchas, pero te
					prometemos que, como te hemos contado antes, todas se basan en el
					sentido común. Queremos construir una comunidad lo más libre posible,
					pero asegurándonos de que todos los usuarios van a poder desarrollar
					su historia de manera justa, divertida y segura. Las siguientes normas
					son de obligado cumplimiento, ya que todo reino, por pequeño que sea,
					siempre requiere unas medidas básicas para que todo vaya como la seda.
					En nuestro caso, todas ellas se rigen por una base de respeto mutuo y
					convivencia, que nos permita disfrutar de las diversas partes de la
					comunidad sin tener que estar sujetos a estrictas reglas que limiten
					nuestro tiempo libre y la forma en la que usamos este. Queremos ir un
					paso más allá en todos los aspectos relacionados tanto con el roleplay
					como con sus participantes.
				</p>
				<Box paddingTop={4}>
					<p style={{ marginTop: 0, marginBottom: 0 }}>
						Las sanciones en nuestro caso, aunque solo en casos excepcionales y
						exagerados se han aplicado, pueden ir desde una restricción de
						acceso a futuros eventos hasta la expulsión directa del usuario.
					</p>
				</Box>
				<Stack spacing={1} marginLeft={4} sx={{ paddingY: 0 }}>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§1.- La {renderInBlue('cordialidad')} y el{' '}
							{renderInBlue('respeto')} entre usuarios será vital. No se exige
							que todos nos llevemos bien y seamos amigos, pero sí que{' '}
							{renderInBlue(
								'seamos capaces de soportarnos los unos a los otros y disfrutar de los diversos eventos e interacciones'
							)}{' '}
							que puedan surgir, dejando lo personal en la puerta antes de
							entrar, tanto en roleplay como en voz o en los diversos
							videojuegos.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Por nuestro lado,{' '}
							{renderInBlue(
								'ponemos siempre a disposición de los miembros nuestra atención y contacto desde la Administración de la comunidad en caso de que sea requerido'
							)}
							, para que podamos tomar parte y velar por ambas partes si es
							requerido. Faltar a este principio puede conllevar la expulsión.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§2.- La comunidad es semi-cerrada, lo cual{' '}
							{renderInBlue(
								'implica que seguir a todos los miembros de la misma es estrictamente obligatorio'
							)}
							. Para ello, se facilitarán una serie de listas desde la cuenta
							Administradora que estarán plenamente actualizadas.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Sin embargo, que la comunidad también sea semi-cerrada implica que{' '}
							{renderInBlue(
								'no se limitan las posibilidades de rolear con miembros de otras comunidades y/o fandoms'
							)}
							.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§3.-{' '}
							{renderInBlue(
								'No se permite formar parte de varias comunidades al mismo tiempo con la misma cuenta de rol'
							)}
							. Será requerido que esta cuente siempre con la expresión "ToR" o
							"TR" en el @ de la cuenta.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Así pues, será requerido eliminar está expresión también cuando se
							abandone la comunidad, notificando previamente a la administración
							para poder realizar las operaciones pertinentes.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§4.- Está terminantemente{' '}
							{renderInBlue(
								'prohibido tanto el uso de "metarol" como del "godmode"'
							)}
							. Explicamos a continuación los mismos:
							<ul style={{ marginTop: 0, marginBottom: 0 }}>
								<li>
									El "metarol" se basa en hacer que nuestro personaje sepa cosas
									respecto a otros que no podría saber por si mismo. También
									incluye el rolear de manera que en un "fightrol" siempre
									acierte los golpes que lanza, o que no de margen al otro
									personaje a moverse.
								</li>
								<li>
									El "godmode" se basa en hacer que nuestro personaje sea
									prácticamente invencible esté contra quien esté, o básicamente
									dejar al resto de personajes por debajo de él.
								</li>
							</ul>
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Estamos aquí para divertirnos con el resto, no para hacer que
							nuestro personaje sea el mejor sin necesidad de ello.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§5.- Toma mucho peso, en nuestro caso, el{' '}
							{renderInBlue(
								'evitar ignorar a otros miembros de la comunidad en cualquiera de los ámbitos'
							)}
							. Hacemos referencia y nos apoyamos en la norma §1 para esto.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							No es requerido tener un trato de usuario a usuario forzadamente,
							pero{' '}
							{renderInBlue(
								'interactuad siempre que os sea posible con cualquier otro miembro, ya sea de la comunidad o externo'
							)}
							, a nivel de rol. Esto siempre brindará un ambiente mucho más
							agradable y acogedor para todos.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Con esto{' '}
							{renderInBlue(
								'se busca limitar lo máximo posible la división entre usuarios dentro de la comunidad'
							)}
							. Queremos que haya el máximo de posibilidades y comodidad para
							todos, por tanto, es el deber de todos los participantes velar por
							este hecho.{' '}
							{renderInBlue(
								'Si alguien se siente ignorado o desplazado, puede contactar con la Administración para que podamos ayudar'
							)}{' '}
							y o dar los avisos pertinentes.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Infligir esta norma puede suponer el veto de participación en
							futuros eventos, incluso la expulsión de la comunidad.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§6.- Se realizarán{' '}
							{renderInBlue('revisiones de actividad mensualmente')}. Sin
							embargo, la comunidad está pensada para que ningún miembro se
							sienta atado u obligado a participar en esta de forma forzada.
							Siendo así, se siguen las pautas indicadas a continuación:
						</p>
						<ul style={{ marginTop: 0, marginBottom: 0 }}>
							<li>
								Si la cuenta lleva inactiva{' '}
								{renderInBlue('un mes, esta recibirá un aviso')} de inactividad.
							</li>
							<li>
								(Solo para personajes canon) Si la cuenta lleva inactiva{' '}
								{renderInBlue(
									'dos meses, el personaje relacionado con la cuenta pertinente pasará a ser solicitable'
								)}
								.
							</li>
							<li>
								(Solo para OC) Si la cuenta lleva inactiva tres meses, será
								expulsada de la comunidad.
							</li>
						</ul>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Siendo este el caso, los personajes canon nunca será expulsados de
							la comunidad. Solo quedará establecidos como "solicitables".{' '}
							{renderInBlue(
								'Que un personaje esté solicitable implica que, mientras nadie reclame el mismo, este permanece en la comunidad'
							)}
							. Pero si alguien lo solicita, será reemplazado por el nuevo
							miembro.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Los personajes del equipo de Administración no están sujetos a
							esta normativa.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§7.- Los{' '}
							{renderInBlue(
								'personajes canon debe ser ocupados a nivel original'
							)}
							, es decir, el personaje real.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Posteriormente al acceso, se puede hacer uso de pequeños "eventos
							alternativos" en los que temporalmente pasen a formar parte de una
							temática (KDA, Modern AU, Genderbend, etc.).
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							La participación en eventos siempre será con el personaje
							original, a no ser que se indique lo contrario desde la
							Administración.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§8.- Está{' '}
							{renderInBlue('prohibido hacer "SexRol" en la Timeline')}. Aunque
							está permitido a nivel de "Menciones" o "Mensaje directo".
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Se permite el uso de ilustraciones explícitas (que no sean
							violaciones, humillaciones o de carácter sensible) en las cuentas
							de rol, siempre y cuando se haga uso de la opción que Twitter pone
							a disposición para censurar estas a no ser que el usuario desee
							verlas.
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Queda{' '}
							{renderInBlue(
								'prohibido, sin embargo, la carga de pornografía real en las cuentas de rol.'
							)}
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Sin embargo, también es requerido respetar al resto de usuarios si
							comprobáis que están manteniendo un SexRol por menciones. En caso
							de que no sea de vuestro agrado, sencillamente no opinéis al
							respecto ni leáis el mismo, pues no es necesario.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§9.- Las charlas entre usuarios en la Timeline, por supuesto,
							están permitidas. Sin embargo,{' '}
							{renderInBlue(
								'si hay un exceso de estas, se podrá dar algún aviso para que toda la línea de Twitter no sea charla entre usuarios.'
							)}
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							No debéis preocuparos, a este nivel somos permisivos. Solo
							daríamos avisos si es algo notoriamente excesivo.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§10.- Los eventos de la comunidad están sujetos a la
							disponibilidad del equipo de Administración para crearlos y
							organizarlos, {renderInBlue('¡nuestro tiempo no es infinito!')}
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Se harán siempre que sea posible, y estos pueden ser tanto a nivel
							de "RolePlay" como a nivel de juegos en comunidad (torneos de TFT
							o cualquier otro videojuego que surja).
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							Sin embargo, si se decide asistir a uno de estos, se ruega siempre
							la mayor participación y proactividad posible para que así sea
							todo más activo y dinámico,{' '}
							{renderInBlue(
								'recordad que la mayor forma de premiar a los organizadores de los eventos es asistiendo a los mismos'
							)}
							. Si tenéis alguna sugerencia o solicitud de evento, puedes
							contactar con nosotros, siempre estamos abiertos a escuchar nuevas
							sugerencias e ideas.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§11.- Para acceder a la comunidad{' '}
							{renderInBlue('es necesario superar una prueba de acceso')}. Para
							pasar esta, será requerido que os pongáis en contacto por "Mensaje
							directo" con la cuenta Administradora principal
							(@RuneterraTales_).
						</p>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							La prueba{' '}
							{renderInBlue(
								'consiste en un auto-rol donde se comprobará si el personaje que se desea ocupar es fiel a la historia del mismo'
							)}
							, si la ortografía es correcta y si el nivel de interacción del
							usuario es apto. En el caso de los personajes OC, se solicitará
							una ficha del personaje de forma adicional. Podéis estar
							tranquilos, no es nada del otro mundo, es como el captcha de las
							páginas de registro.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§12.- Se puede mutar de personaje en caso de que el que se haya
							ocupado no acabe de resultar cómodo al usuario. Estas mutaciones,
							sin embargo,{' '}
							{renderInBlue(
								'quedarán limitadas a hacerse como máximo una vez cada tres meses'
							)}
							, excepto autorización específica desde la Administración.
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§13.- Se puede ocupar{' '}
							{renderInBlue('un máximo de 3 personajes canon al mismo tiempo')}.
							Sin embargo, esta ocupación será progresiva:
							<ul style={{ marginTop: 0, marginBottom: 0 }}>
								<li>Siempre se podrá empezar solo con un personaje canon.</li>
								<li>
									Si la participación es suficiente, tras la revisión mensual se
									puede solicitar ocupar un personaje canon adicional.
								</li>
								<li>
									Si se ocupa un segundo personaje canon, de igual forma se ha
									de superar un umbral de participación para ocupar el
									siguiente.
								</li>
							</ul>
						</p>
					</Box>
					<Box paddingTop={4}>
						<p style={{ marginTop: 0, marginBottom: 0 }}>
							§14.- No está permitida la difusión directa de otras comunidades
							mediante RT's ni ningún mensaje como usuario.{' '}
							{renderInBlue(
								'Siempre que se desee hacer, será requerido solicitarlo a la Administración'
							)}{' '}
							para que, desde nuestro lado, organicemos dicha difusión de manera
							equitativa para ambas partes, saliendo así todos beneficiados.
						</p>
					</Box>
				</Stack>
				<Box paddingTop={4}>
					<p style={{ marginTop: 0, marginBottom: 0 }}>
						Por último, y cuando se contacte con la Administración de la
						comunidad, se indicará un número de norma (del 1 al 14) y el usuario
						tendrá que indicar esta. Asegurando así la lectura de estas normas.
					</p>
				</Box>
			</Box>
		</Container>
	);
};
