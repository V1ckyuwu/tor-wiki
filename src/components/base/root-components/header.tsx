import React, { useContext, useState } from 'react';

import { Brightness4, Brightness7 } from '@mui/icons-material';
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
import useDocumentScrollThrottled from '../../../hooks/useDocumentScrollThrottled';

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

	const [anchorEl, setAnchorEl] = useState(null);

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
				sx={{
					borderWidth: '8px',
					borderColor: 'red',
					cursor: 'pointer',
				}}
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
							<MenuItem
								onClick={handleClose}
								style={{ fontFamily: 'Montserrat' }}
							>
								{item.name}
							</MenuItem>
						</Link>
					);
				})}
			</Menu>
		</div>
	);
};

const Header: Component = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	const [shouldHideHeader, setShouldHideHeader] = useState(false);
	const [shouldShowShadow, setShouldShowShadow] = useState(false);

	useDocumentScrollThrottled((callbackData: any) => {
		const MINIMUM_SCROLL = 80;
		const TIMEOUT_DELAY = 0;

		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

		setShouldShowShadow(currentScrollTop > 2);

		setTimeout(() => {
			setShouldHideHeader(isScrolledDown && isMinimumScrolled);
		}, TIMEOUT_DELAY);
	});

	const isLightMode = theme.palette.mode === 'light';

	const renderHeaderItem = (name: string, url: string) => (
		<Box border={'medium'} sx={{ borderWidth: '8px', borderColor: 'red' }}>
			<Link href={url} underline={'none'} color={'inherit'}>
				{name}
			</Link>
		</Box>
	);

	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				height: '86px',
				backgroundColor: '#fff',
				color: '#333',
				transform: 'translateY(0)',
				transition: 'transform 0.3s ease',
				boxShadow: shouldShowShadow ? '0 9px 9px -9px rgba(0, 0, 0, 0.13)' : '',
				visibility: shouldHideHeader ? 'hidden' : 'visible',
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
							href={''}
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
	);
};

export default Header;
