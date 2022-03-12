import './assets/fonts/fonts.css';

import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import {
	CircularProgress,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';

import ErrorFallBack from './components/base/error-page';
import AllRoutes from './routes';
import { useMediaQuery } from '@mui/material';

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

// const MyApp = () => {
// 	const theme = useTheme();
// 	const colorMode = React.useContext(ColorModeContext);
// 	return (
// 		<Box
// 			sx={{
// 				display: 'flex',
// 				width: '100%',
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 				bgcolor: 'background.default',
// 				color: 'text.primary',
// 				borderRadius: 1,
// 				p: 3,
// 			}}
// 		>
// 			{theme.palette.mode} mode
// 			<IconButton
// 				sx={{ ml: 1 }}
// 				onClick={colorMode.toggleColorMode}
// 				color='inherit'
// 			>
// 				{theme.palette.mode === 'dark' ? (
// 					<Brightness7Icon />
// 				) : (
// 					<Brightness4Icon />
// 				)}
// 			</IconButton>
// 		</Box>
// 	);
// };

export const App = () => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const [mode, setMode] = React.useState<'light' | 'dark'>(
		prefersDarkMode ? 'dark' : 'light'
	);

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<ErrorBoundary FallbackComponent={ErrorFallBack}>
					<BrowserRouter>
						<Suspense fallback={<CircularProgress />}>
							<CssBaseline />
							<AllRoutes />
						</Suspense>
					</BrowserRouter>
				</ErrorBoundary>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
