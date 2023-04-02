//import * as React from 'react';
//import Paper from '@mui/material/Paper';
//import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
//import Box from '@mui/material/Box';

import React, { useEffect, useState } from 'react';
import { Paper, FormControl, TextField, Stack, Button, Typography, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import { getCampaign } from 'src/mygraphql/queries';
import { Campaign } from 'src/models';
import { API } from 'aws-amplify';

// import { Memberlistincampaign } from '../members';
// import { Rewardlistincampaign } from '../rewardcategories';

// interface CampaignFeaturedPostProps {
// 	post: {
// 		title: string;
// 	};
// }
// props: CampaignFeaturedPostProps
// export default function MainFeaturedPost(props: CampaignFeaturedPostProps) {
export default function MainFeaturedPost() {
	// const { post } = props;
	let paramdata = useParams();
	const [onecampaign, setOnecampaign] = useState<Campaign>();
	async function viewgetcampaign(id: '09e18adb-e9a5-4aa2-acaa-92b5d85fedc0') {
		const data: any = await API.graphql({
			query: getCampaign,
			variables: { id },
		});
		setOnecampaign(data.data.getCampaign);
		console.log(onecampaign);
	}
	useEffect(() => {
		viewgetcampaign('09e18adb-e9a5-4aa2-acaa-92b5d85fedc0');
	}, []);

	return (
		<Paper
			sx={{
				position: 'relative',
				backgroundColor: 'grey.800',
				color: '#fff',
				mb: 4,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				// backgroundImage: `url(${post.image})`,
			}}
		>
			{/* Increase the priority of the hero background image */}
			{/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
					backgroundColor: 'rgba(0,0,0,.3)',
				}}
			/>
			<Grid container>
				<Grid item md={6}>
					<Box
						sx={{
							position: 'relative',
							p: { xs: 3, md: 6 },
							pr: { md: 0 },
						}}
					>
						<Typography component='h1' variant='h3' color='inherit' gutterBottom>
							{onecampaign?.name}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}
