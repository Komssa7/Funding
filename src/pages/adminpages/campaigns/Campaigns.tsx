import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { API, graphqlOperation } from 'aws-amplify';
import { listCampaigns } from 'src/mygraphql/queries';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function Campaigns(props: any) {
	const [campaigns, setCampaigns] = React.useState([]);
	async function getCampaigns() {
		const data: any = await API.graphql(graphqlOperation(listCampaigns));
		if (data.data.listCampaigns.items !== undefined) {
			setCampaigns(data.data.listCampaigns.items);
		}
	}
	React.useEffect(() => {
		getCampaigns();
	}, []);
	return (
		<React.Fragment>
			<Box
				m={1}
				//margin
				display='flex'
				justifyContent='flex-end'
				alignItems='flex-end'
			>
				<Button variant='contained' color='primary' sx={{ height: 40 }}>
					<Link to='../createcampaign'> Start New Campaign</Link>
				</Button>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='right'>Description</TableCell>
							<TableCell align='right'>Duration</TableCell>
							<TableCell align='right'>Fund Goal</TableCell>
							<TableCell align='right'>Donation Received</TableCell>
							<TableCell align='right'># of Donor</TableCell>
							<TableCell align='right'># of Member</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{campaigns.length
							? campaigns.map((row: any) => (
									<TableRow
										key={row.id}
										sx={{
											'&:last-child td, &:last-child th': {
												border: 0,
											},
										}}
									>
										<TableCell component='th' scope='row'>
											<Link to={'../viewcampaign/' + row.id}> {row.name}</Link>
										</TableCell>
										<TableCell align='right'>{row.short_description}</TableCell>
										<TableCell align='right'>
											{new Date(row.start_at).toLocaleDateString('en-US') + ' to ' + new Date(row.end_at).toLocaleDateString('en-US')}
										</TableCell>
										<TableCell align='right'>{'$' + row.fund_goal}</TableCell>
										<TableCell align='right'>{row.donation_received}</TableCell>
										<TableCell align='right'>{row.donor_count}</TableCell>
										<TableCell align='right'>{row.donor_count}</TableCell>
									</TableRow>
							  ))
							: null}
					</TableBody>
				</Table>
			</TableContainer>
		</React.Fragment>
	);
}
