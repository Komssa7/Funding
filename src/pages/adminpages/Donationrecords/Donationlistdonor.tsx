import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { listDonationUser } from 'src/mygraphql/queries';

export function Donationlistdonor(props: any) {
	const [donations, setDonations] = React.useState([]);
	const [donorI, setDonorI] = React.useState('');
	async function getDonations() {
		const data: any = await API.graphql({
			query: listDonationUser,
			variables: { filter: { donorI: { eq: donorI } } },

			authMode: 'API_KEY',
		});
		if (data.data.listDonationrecords.items !== undefined) {
			setDonations(data.data.listDonationrecords.items);
		}
	}
	React.useEffect(() => {
		Auth.currentAuthenticatedUser({
			bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		})
			.then((user) => {
				setDonorI(user.signInUserSession.accessToken.payload.sub);
			})
			.catch((err) => console.log(err));

		getDonations();
	}, [donorI]);

	return (
		<TableContainer component={Paper}>
			<h2>Donation Received</h2>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Amount</TableCell>
						<TableCell align='right'>Campaign Name</TableCell>
						<TableCell align='right'>Reward Category </TableCell>
						<TableCell align='right'>Created At</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{donations.length ? (
						donations.map((row: any) => (
							<TableRow
								key={row.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{row.amount}
								</TableCell>
								<TableCell align='right'>{row.campaign.name}</TableCell>
								<TableCell align='right'>{row.rewardcategory.description}</TableCell>
								<TableCell align='right'>{row.createdAt}</TableCell>
							</TableRow>
						))
					) : (
						<TableRow
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}
						>
							Not Found
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
