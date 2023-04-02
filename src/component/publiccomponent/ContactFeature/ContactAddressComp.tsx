import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ContactAddressProps {
	description: string;
	address: string;
	email: string;
}

export default function ContactAddressComp(props: ContactAddressProps) {
	// const { post } = props;

	return (
		<Grid item xs={12} md={6}>
			<CardActionArea component='a' href='#'>
				<Card sx={{ display: 'flex' }}>
					<CardContent sx={{ flex: 1 }}>
						<Typography component='h2' variant='h5'>
							{props.address}
						</Typography>
						<Typography variant='subtitle1' color='text.secondary'>
							{props.email}
						</Typography>
						<Typography variant='subtitle1' paragraph>
							{props.description}
						</Typography>
						{/* <Typography variant='subtitle1' color='primary'>
							Continue reading...
						</Typography> */}
					</CardContent>
					{/* <CardMedia component='img' sx={{ width: 160, display: { xs: 'none', sm: 'block' } }} image={post.image} alt={post.imageLabel} /> */}
				</Card>
			</CardActionArea>
		</Grid>
	);
}
