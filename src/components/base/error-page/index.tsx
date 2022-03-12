import React, { useState } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';

import { Component, ComponentProps } from '../fc';

interface ErrorFallBackProps extends ComponentProps {
	error: Error;
	resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallBack: Component<ErrorFallBackProps> = (props) => {
	const { error, resetErrorBoundary } = props;

	const [isOpen, setIsOpen] = useState(true);

	return (
		<Dialog
			open={isOpen}
			onClose={() => {
				if (resetErrorBoundary) resetErrorBoundary();
				setIsOpen(false);
			}}
		>
			<DialogTitle
				sx={{
					fontSize: 'lg',
					fontWeight: 'bold',
				}}
			>
				Something went wrong:
			</DialogTitle>
			<DialogContent>{error.message}</DialogContent>
			{resetErrorBoundary && (
				<DialogActions>
					<Button
						onClick={() => {
							resetErrorBoundary();
							setIsOpen(false);
						}}
					>
						Try again
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};

export default ErrorFallBack;
