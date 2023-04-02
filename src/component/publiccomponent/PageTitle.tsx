import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import Sharebtn from './DropdownShareButton';

type PageTitleProps = {
	post: {
		image: string;
		title: string;
		qrimageurl?: string;
	};
};

export default function PageTitle(props: PageTitleProps) {
	const { post } = props;
	const titlewidth = post.qrimageurl ? 10 : 12;

	return (
		<Paper
			sx={{
				position: 'relative',
				color: '#fff',
				mb: 4,
			}}
		>
			{/* Increase the priority of the hero background image */}
			{<img style={{ display: 'none' }} src={post.image} />}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
				}}
			/>
			<Grid container>
				<Grid
					item
					md={titlewidth}
					sx={{
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundImage: `url(${post.image})`,
					}}
				>
					<Box
						sx={{
							position: 'relative',
							p: { xs: 3, md: 6 },
							pr: { md: 0 },
							backgroundColor: 'rgba(0,0,0,.3)',
						}}
					>
						<Typography component='h1' variant='h3' color='inherit' gutterBottom>
							{post.title}
						</Typography>
					</Box>
				</Grid>

				{post.qrimageurl ? (
					<Grid item md={2}>
						{' '}
						<img width='90%' style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }} src={post.qrimageurl} /> <Sharebtn />
					</Grid>
				) : (
					''
				)}
			</Grid>
		</Paper>
	);
}
