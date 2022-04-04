import React from 'react';

import { Component } from '../../base/fc';
import RootContainer from '../../base/root-components/container';
import { RulesHeading } from './heading';
import { CommunitySpirit } from './communitySpirit';
import { Box } from '@mui/material';
import { NormRules } from './norm';
import { url } from 'inspector';
import { Parallax } from 'react-parallax';

export const Rules: Component = () => {
	return (
		<RootContainer>
			<Parallax bgImage='/static/rules_bg.webp' strength={10} disabled={true}>
				{/* <RulesHeading /> */}
				<CommunitySpirit />
				<NormRules />
			</Parallax>
		</RootContainer>
	);
};
