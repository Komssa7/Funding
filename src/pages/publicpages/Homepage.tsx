import * as React from 'react';

import MainFeaturedPost from 'src/component/publiccomponent/MainFeaturePost';

import Grid from '@mui/material/Grid';
import FeaturedPost from 'src/component/publiccomponent/FeaturePost';
import RecommendedPost from 'src/component/publiccomponent/RecommendedPost';
import NewArrivalPost from 'src/component/publiccomponent/NewArrivalPost';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fontFamily } from '@mui/system';
function Homepage() {
	const backgrd = require('./campaign1.jpg');
	const mainFeaturedPost = {
		title: 'Lets Race Today ',
		description: 'Donate Big, Win Big.',
		image: backgrd,
		imageText: 'main image description',
	};

	const featuredPosts = [
		{
			title: 'Fresh Favorite',
			date: 'Jul 12',
			description: 'Get list of most viewed campaign and the feature of those campaign.',
			image:
				'https://media.istockphoto.com/photos/leading-the-race-picture-id181054095?k=20&m=181054095&s=612x612&w=0&h=E_5XCsebwJKAQmLC31DcSKD7r_L3rM7ikNIGXQZme9Q=',
			imageLabel: 'Image Text',
		},
		{
			title: 'Recommended for You',
			date: 'Jun 11',
			description: 'List of recommended campaign for you with the help of history of donation record in your account',
			image: 'https://porschecarshistory.com/wp-content/old/allin2/22/01.jpg',
			imageLabel: 'Image Text',
		},
	];
	return (
		<>
			<Box
				sx={{
					p: 0.5,
					m: 2,
					borderRadius: 2,
					textAlign: 'center',
					fontSize: '2.5rem',
					fontWeight: '700',
					fontFamily: 'inherit',
				}}
			>
				FundRacer
			</Box>

			<MainFeaturedPost post={mainFeaturedPost} />

			<Grid container spacing={4}>
				{featuredPosts.map((post) => (
					<FeaturedPost key={post.title} post={post} />
				))}
			</Grid>

			{/* <Grid sx={{ mt: 5 }}>
				<RecommendedPost />
			</Grid> */}
			<Grid sx={{ mt: 5 }}>
				<NewArrivalPost />
			</Grid>
		</>
	);
}

export default Homepage;
