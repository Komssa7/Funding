import React, { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, FormControl, TextField, Stack, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { API } from 'aws-amplify';

import { createRewardcategory } from 'src/mygraphql/mutations';

import { Rewardcategory } from 'src/models';
import { DatePicker } from '@mui/x-date-pickers';
export function CreateRewardcategory() {
	let paramdata: any = useParams();
	const navigate = useNavigate();
	const campaignID = paramdata.campaignID;
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [minimum_amount, setMinimum_amount] = React.useState(2.2);
	const [ship_to, setShip_to] = React.useState('');
	const [sequence_order, setSequence_order] = React.useState(1.0);
	const [is_available, setIs_available] = React.useState(true);
	const [estimate_delivery, setEstimate_delivery] = React.useState<Date | null>(new Date());
	async function createNewRewardcategory(rewardcategory: Rewardcategory) {
		const newCampaign = await API.graphql({
			query: createRewardcategory,
			variables: { input: rewardcategory },
		});
		navigate('../viewcampaign/' + campaignID);
	}
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// let oldDateFormat: any = estimate_delivery && estimate_delivery.toString()
		// let startstamp2 = new Date(estimate_delivery?.toString())
		const rewardcategory: Rewardcategory = {
			campaignID: campaignID,
			title,
			description,
			minimum_amount,
			ship_to,
			sequence_order,
			is_available,
			// estimate_delivery: startstamp2.toString(),
		};
		createNewRewardcategory(rewardcategory);
	};

	return (
		<form onSubmit={submitHandler}>
			<FormControl fullWidth={true} component={Paper}>
				<Stack spacing={2} ml={3} mr={3} mb={3}>
					<h2>Add Reward Category</h2>
					<TextField id='title' value={title} onChange={(newValue) => setTitle(newValue.target.value)} label='Title' variant='filled' />
					<TextField
						id='description'
						value={description}
						onChange={(newValue) => setDescription(newValue.target.value)}
						label='Description'
						variant='filled'
					/>
					<TextField
						id='minimum_amount'
						value={minimum_amount}
						onChange={(newValue) => setMinimum_amount(Number(newValue.target.value))}
						label='Minimum Amount'
						variant='filled'
					/>
					<TextField
						id='ship_to'
						value={ship_to}
						onChange={(newValue) => setShip_to(newValue.target.value)}
						label='Ship to (All country/USA/Canada)'
						variant='filled'
					/>

					<TextField
						id='sequence_order'
						value={sequence_order}
						onChange={(newValue) => setSequence_order(Number(newValue.target.value))}
						label='Display Rank (on web page)'
						variant='filled'
					/>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label='Estimated Delivery'
							value={estimate_delivery}
							onChange={(newValue) => {
								setEstimate_delivery(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<Button variant='contained' type='submit'>
						Submit
					</Button>
				</Stack>
			</FormControl>
		</form>
	);
}
