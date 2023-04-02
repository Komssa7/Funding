import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SingleCard from './SingleCard';
import { Campaign } from 'src/models';

interface MainProps {
	// 	posts: ReadonlyArray<string>;
	title: string;
	cardinraw: number;
	posts: Campaign[];
}

export default function CardPost(props: MainProps) {
	const { title, cardinraw, posts } = props;
	// console.log(posts[0])
	// const alldata=
	return (
		<>
			<Typography variant='h5' gutterBottom>
				{title}
			</Typography>
			<Divider />
			<Grid container spacing={4} sx={{ mt: 0.1 }}>
				<>
					{/* <SingleCard cardinraw={cardinraw} post={posts[0]} />  */}
					{posts.map((p) => {
						return <SingleCard key={p.id} cardinraw={cardinraw} post={p} />;
					})}
				</>
			</Grid>
		</>
	);
}
