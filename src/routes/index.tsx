import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Component } from '../components/base/fc';

const HomePage = lazy(() => import('../pages/home'));
const RulePage = lazy(() => import('../pages/rules'));

const AllRoutes: Component = () => {
	return (
		<Routes>
			<Route path={'/'} element={<HomePage />} />
			<Route path={'/normativa'} element={<RulePage />} />
		</Routes>
	);
};

export default AllRoutes;
