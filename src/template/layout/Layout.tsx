import React from 'react';

import { Box, createTheme, CssBaseline, Divider, ThemeProvider } from '@mui/material';
import Header from './Header';
import MainFeaturedPost from 'src/component/publiccomponent/MainFeaturePost';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedPost from 'src/component/publiccomponent/FeaturePost';
import Footer from './Footer';
import SingleCard from 'src/component/publiccomponent/SingleCard';
import RecommendedPost from 'src/component/publiccomponent/RecommendedPost';
import { Outlet } from 'react-router';

function Layout() {
	const mdTheme = createTheme();
	return (
		<ThemeProvider theme={mdTheme}>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Header />
				<Outlet />
				<Footer title='FundRacer' description='Something here to give the footer a purpose!' />
			</Container>
		</ThemeProvider>
	);
}

export default Layout;
