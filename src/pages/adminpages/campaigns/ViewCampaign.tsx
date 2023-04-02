import React, { useEffect, useState } from 'react';
import { Paper, FormControl, TextField, Stack, Button, Typography, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import { getCampaign } from 'src/mygraphql/queries';
import { Campaign } from 'src/models';
import { API } from 'aws-amplify';
import { Memberlistincampaign } from '../members';
import { Rewardlistincampaign } from '../rewardcategories';
import { Donationlistcampaign } from '../Donationrecords/Donationlistcampaign';

export const ViewCampaign: React.FC = (props) => {
	let paramdata = useParams();
	const [onecampaign, setOnecampaign] = useState<Campaign>();
	async function viewgetcampaign(id: any) {
		const data: any = await API.graphql({
			query: getCampaign,
			variables: { id },
		});
		setOnecampaign(data.data.getCampaign);
		console.log(onecampaign);
	}
	useEffect(() => {
		viewgetcampaign(paramdata.campaignID);
	}, []);
	return (
		<FormControl fullWidth={true} component={Paper}>
			<Box
				m={1}
				//margin
				display='flex'
				justifyContent='flex-end'
				alignItems='flex-end'
			>
				<Button variant='contained' color='primary' sx={{ height: 40 }}>
					<Link to={'../createmember/' + onecampaign?.id}> Add New Member</Link>
				</Button>
				<Button variant='contained' color='primary' sx={{ height: 40 }}>
					<Link to={'../createrewardcategory/' + onecampaign?.id}> Add New Reward Category</Link>
				</Button>
			</Box>
			<Stack spacing={2} ml={3} mr={3} mb={3}>
				<h2>View Campaign</h2>
				<Typography variant='body1'>Campaign ID : {onecampaign?.id}</Typography>
				<Typography variant='body1'>Name : {onecampaign?.name}</Typography>
				<Typography variant='body1'>Short Description : {onecampaign?.short_description}</Typography>
				<Typography variant='body1'>Description : {onecampaign?.description}</Typography>
				<Typography variant='body1'>Start Date Time : {onecampaign?.start_at}</Typography>
				<Typography variant='body1'>End Date Time : {onecampaign?.end_at}</Typography>
				<Typography variant='body1'>Fund Goal : {onecampaign?.fund_goal}</Typography>
				<Typography variant='body1'>Fund Received: {onecampaign?.donation_received}</Typography>
			</Stack>

			<Stack spacing={2} ml={3} mr={3} mb={3}>
				<Memberlistincampaign Membersdata={onecampaign?.CCampaignmembers} />
				<Rewardlistincampaign Rewardsdata={onecampaign?.CRewardcategories} />
				<Donationlistcampaign DonationData={onecampaign?.CDonationrecords} />
			</Stack>
		</FormControl>
	);
};
