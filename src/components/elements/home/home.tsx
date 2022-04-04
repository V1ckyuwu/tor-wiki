import React from 'react';

import { Component } from '../../base/fc';
import RootContainer from '../../base/root-components/container';
import { AboutUs } from './aboutUs';
import { AdventureStart } from './adventureStart';
import { ChooseYourStory } from './chooseStory';
import { JoinUs } from './joinUs';
// import { ModeratorCarousel } from './moderatorCarousel';
import { HomeStats } from './stats';

export const Home: Component = () => {
	return (
		<RootContainer>
			<AdventureStart />
			<ChooseYourStory />
			<HomeStats />
			<AboutUs />
			{/* <ModeratorCarousel /> */}
			<JoinUs />
		</RootContainer>
	);
};
