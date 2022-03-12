import React from 'react';

import { Brightness4, Brightness7, Twitter } from '@mui/icons-material';
import {
	Box,
	Container,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
	useTheme,
} from '@mui/material';

import { ColorModeContext } from '../../../app';
import { Component, ComponentProps } from '../fc';

interface SubListProps {
	name: string;
	url: string;
}

interface HeaderListItemProps extends ComponentProps {
	title: string;
	list: SubListProps[];
}

const HeaderListItem: Component<HeaderListItemProps> = (props) => {
	const { title, list } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event: any) => {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget);
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Box
				border={'medium'}
				sx={{ borderWidth: '8px', borderColor: 'red', cursor: 'pointer' }}
				onClick={handleClick}
			>
				{title}
			</Box>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
			>
				{list.map((item, id) => {
					return (
						<Link
							key={`menu_${id}`}
							href={item.url}
							underline={'none'}
							color={'inherit'}
						>
							<MenuItem onClick={handleClose}>{item.name}</MenuItem>
						</Link>
					);
				})}
			</Menu>
		</div>
	);
};

const RootContainer: Component = (props) => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	const isLightMode = theme.palette.mode === 'light';

	const renderHeaderItem = (name: string, url: string) => (
		<Box border={'medium'} sx={{ borderWidth: '8px', borderColor: 'red' }}>
			<Link href={url} underline={'none'} color={'inherit'}>
				{name}
			</Link>
		</Box>
	);

	return (
		<>
			<Box
				sx={{
					borderBottom: 'solid',
					borderBottomWidth: '1px',
				}}
			>
				<Container>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						alignItems={'center'}
						fontFamily={'Montserrat'}
						maxWidth={'1440px'}
					>
						<Box paddingY={2}>
							<Link
								href={'#'}
								underline={'none'}
								color={'inherit'}
								fontSize={'24px'}
							>
								Tales of Runeterra
							</Link>
						</Box>
						<Box paddingY={4}>
							<Stack
								direction={'row'}
								justifyContent={'center'}
								alignItems={'center'}
								spacing={6}
							>
								{renderHeaderItem('QUIÉNES SOMOS', '/info')}
								<HeaderListItem
									title={'PRIMEROS PASOS'}
									list={[
										{
											name: 'NOCIONES BÁSICAS',
											url: '/first_steps/basic_knowledge',
										},
										{ name: 'CONSEJOS', url: '/first_steps/tips' },
										{ name: 'NORMAS', url: '/first_steps/rules' },
										{ name: 'MEMBRESÍA', url: '/first_steps/membership' },
									]}
								/>
								<HeaderListItem
									title={'PERSONAJES'}
									list={[
										{
											name: 'OCUPACIÓN DE PERSONAJES',
											url: '/characters/vacancies',
										},
										{ name: 'CREACIÓN DE OC', url: '/characters/creation' },
									]}
								/>
								{renderHeaderItem('CONTACTO', '/info')}
							</Stack>
						</Box>
						<Box
							alignItems={'center'}
							justifyContent={'center'}
							color={'text.primary'}
							borderRadius={1}
							padding={3}
						>
							<IconButton onClick={colorMode.toggleColorMode} color={'inherit'}>
								{isLightMode ? <Brightness4 /> : <Brightness7 />}
							</IconButton>
						</Box>
					</Stack>
				</Container>
			</Box>
			<Container sx={{ marginTop: 4 }}>{props.children}</Container>
			<Box
				marginTop={4}
				sx={{
					borderTop: 'solid',
					borderTopWidth: '1px',
				}}
			>
				<Container sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
					<div
						style={{
							fontFamily: 'Lato',
							fontSize: '22px',
							marginBottom: '10px',
						}}
					>
						¡Toda difusión y participación es bienvenida de buena gana!
						Aportando cada uno nuestro pequeño granito de arena podemos ir
						haciendo que poco a poco esto vaya creciendo a algo mayor, y cada
						vez con mayor dedicación y participación. ¡Gracias por tenerlo en
						cuenta!
					</div>
					<Stack
						direction={'row'}
						justifyContent={'center'}
						alignItems={'center'}
						spacing={2}
					>
						<Link href={'https://twitter.com/peeposhy'}>
							<Twitter fontSize={'large'} />
						</Link>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default RootContainer;
