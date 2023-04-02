// import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import {
	Paper,
	FormControl,
	TextField,
	Stack,
	Button,
	Typography,
	Box,
	FormLabel,
	RadioGroup,
	Radio,
	FormControlLabel,
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getCampaign } from 'src/mygraphql/queries';
import { Campaign, Rewardcategory } from 'src/models';
import { API } from 'aws-amplify';

interface CampaignDescPostProps {
	post: {
		title: string;
		description: string;
		start_at: string;
		end_at: string;
		image: string;
		imageLabel: string;
		fund_goal: string | number;
		donation_received: string | number | null | undefined;
		CRewardcategories: { items: (Rewardcategory | null)[] } | null | undefined;
	};
}

export default function DescFeaturedPost(props: CampaignDescPostProps) {
	const navigate = useNavigate();
	let paramdata = useParams();

	const { post } = props;
	let start_date = new Date(post.start_at);
	let end_date = new Date(post.end_at);
	let items: any = post.CRewardcategories?.items;

	const [selectReward, setRewardID] = React.useState('');
	const [total, setTotal] = React.useState('');
	//  console.log(total)
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (selectReward != '') {
			navigate('../admin/checkout/' + paramdata.campaignID + '/' + selectReward + '/' + total);
		}
	};
	// to get amount
	function searchFor(id: string) {
		var results = items;
		// toSearch = trimString(toSearch); // trim it
		for (var i = 0; i < items.length; i++) {
			for (var key in items[i]) {
				if (items[i]['id'] == id) {
					return items[i]['minimum_amount'];
				}
			}
		}
		// return results;
	}

	const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRewardID(event.target.value);
		setTotal(searchFor(event.target.value));
	};
	return (
		<Grid item xs={30} md={30}>
			{/* <CardActionArea > */}
			<Card sx={{ display: 'flex' }}>
				<CardContent sx={{ flex: 1 }}>
					<Typography component='h2' variant='h3' align='center' paddingBottom='25px'>
						Campaign Info
					</Typography>
					<Typography variant='h5' paragraph paddingBottom='25px'>
						{post.description}
					</Typography>
					<Typography variant='h6' color='text.third' paddingBottom='5px'>
						Campaign Duration : {start_date.toDateString()} to {end_date.toDateString()}
					</Typography>
					<Typography variant='h6' color='text.third' paddingBottom='15px'>
						Funding Goal: $ {post.fund_goal}
					</Typography>
					<Typography variant='h6' color='text.secondary' paddingBottom='25px'>
						Total Fund Received: $ 0{post.donation_received}
					</Typography>
					<form onSubmit={submitHandler}>
						<FormControl>
							<FormLabel id='demo-controlled-radio-buttons-group'>
								<Typography variant='h4'> Select your reward</Typography>
							</FormLabel>

							<RadioGroup aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group'>
								{items?.map((allreward: any) => (
									<FormControlLabel
										value={allreward.id}
										control={<Radio onChange={radioHandler} />}
										label={'Pledge:' + allreward.minimum_amount + ', ' + allreward.description}
									/>
								))}
							</RadioGroup>
							<Button type='submit' variant='contained' sx={{ mt: 5, mb: 3 }}>
								Donate
							</Button>
						</FormControl>
					</form>
				</CardContent>
				<CardMedia component='img' sx={{ width: 350, display: { xs: 'none', sm: 'block' } }} image={post.image} alt={post.imageLabel} />
			</Card>

			{/* </CardActionArea> */}
		</Grid>
	);
}
