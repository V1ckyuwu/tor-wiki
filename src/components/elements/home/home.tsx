import React from 'react';

import { Component } from '../../base/fc';
import RootContainer from '../../base/root-components/container';
import { AdventureStart } from './adventureStart';
import { ChooseYourStory } from './chooseStory';

export const Home: Component = () => {
	return (
		<RootContainer>
			<AdventureStart />
			<ChooseYourStory />
		</RootContainer>
	);
};
