import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { GridSize } from '@mui/material/Grid';
import { Campaign } from 'src/models';
import { Storage } from 'aws-amplify';
import { Link } from 'react-router-dom';

type GRID_SIZES = 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface SingleCardProps {
	post: Campaign;
	cardinraw: number;
}

export default function SingleCard(props: SingleCardProps) {
	const mdvalue = 12 / props.cardinraw;
	const post = props.post;
	// const [img,setImg]=React.useState('')
	// const imgload= async ()=>{
	// 	setImg(await Storage.get(post.link_thumbnail, { level: 'public' }))
	// }
	// React.useEffect(()=>{
	// 	imgload()
	// 	// setImg(image)
	// },[])

	return (
		<Grid item xs={12} md={Number(mdvalue) as GridSize}>
			<Card sx={{ display: 'flex' }}>
				<Link style={{ textDecoration: 'none', color: 'black' }} to={'/campaign/' + post.id}>
					<CardActionArea component='a'>
						<CardMedia component='img' height='140' image={post.link_thumbnail} />
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{post.name}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{post.short_description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</Grid>
	);
}
