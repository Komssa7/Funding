import React, { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, FormControl, TextField, Stack, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import { createCampaignmember } from 'src/mygraphql/mutations';

import { Campaignmember } from 'src/models';

export function CreateMember() {
	let paramdata: any = useParams();
	const navigate = useNavigate();
	const campaignID = paramdata.campaignID;
	const [first_name, setFirst_name] = React.useState('');
	const [last_name, setLast_name] = React.useState('');
	const [email_address, setEmail_address] = React.useState('');
	const [phone_number, setPhone_number] = React.useState('');
	async function createNewCampaignmember(campaignmember: Campaignmember) {
		const newCampaign = await API.graphql({
			query: createCampaignmember,
			variables: { input: campaignmember },
		});
		navigate('../viewcampaign/' + campaignID);
	}
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const campaignmember: Campaignmember = {
			campaignID: campaignID,
			first_name,
			last_name,
			email_address,
			// phone_number,
		};
		console.log(typeof phone_number);
		createNewCampaignmember(campaignmember);
	};
	return (
		<form onSubmit={submitHandler}>
			<FormControl fullWidth={true} component={Paper}>
				<Stack spacing={2} ml={3} mr={3} mb={3}>
					<h2>Add New Member</h2>
					<TextField
						id='first_name'
						value={first_name}
						onChange={(newValue) => setFirst_name(newValue.target.value)}
						label='First Name'
						variant='filled'
					/>
					<TextField
						id='last_name'
						value={last_name}
						onChange={(newValue) => setLast_name(newValue.target.value)}
						label='Last Name'
						variant='filled'
					/>
					<TextField
						id='email_address'
						value={email_address}
						onChange={(newValue) => setEmail_address(newValue.target.value)}
						label='Email Address'
						variant='filled'
					/>
					<TextField
						id='phone_number'
						value={phone_number}
						onChange={(newValue) => setPhone_number(newValue.target.value)}
						label='Phone Number'
						variant='filled'
					/>

					<Button variant='contained' type='submit'>
						Submit
					</Button>
				</Stack>
			</FormControl>
		</form>
	);
}
