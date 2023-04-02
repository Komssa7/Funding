import * as React from 'react';

import Grid from '@mui/material/Grid';
import FeaturedPost from 'src/component/publiccomponent/FeaturePost';
import RecommendedPost from 'src/component/publiccomponent/RecommendedPost';
import NewArrivalPost from 'src/component/publiccomponent/NewArrivalPost';
import PageTitle from 'src/component/publiccomponent/PageTitle';
import AboutContent from 'src/component/publiccomponent/AboutFeature/AboutUsContent';

function About() {
	const backgrd = require('./campaign1.jpg');
	const aboutFeature = {
		title: 'Our Goal',
		image: 'https://source.unsplash.com/random',
	};

	return (
		<>
			<PageTitle post={aboutFeature} />
			<AboutContent />

			{/* <Grid sx={{ mt: 5 }}>
				<RecommendedPost />
			</Grid>
			<Grid sx={{ mt: 5 }}>
				<NewArrivalPost />
			</Grid> */}
		</>
	);
}

export default About;
