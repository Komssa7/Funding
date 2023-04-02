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

export function Donorcampaigns(props: any) {
	const [campaigns, setCampaigns] = React.useState([]);
	let linkdata = '';
	async function getCampaigns() {
		const data: any = await API.graphql(graphqlOperation(listCampaigns));
		if (data.data.listCampaigns.items !== undefined) {
			setCampaigns(data.data.listCampaigns.items);
			console.log(data.data.listCampaigns.items);
		}
	}
	React.useEffect(() => {
		getCampaigns();
	}, []);
	return (
		<React.Fragment>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='right'>Description</TableCell>
							<TableCell align='right'>Duration</TableCell>
							<TableCell align='right'>% Goal Achieve </TableCell>
							<TableCell align='right'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{campaigns.length &&
							campaigns.map((row: any) => (
								<TableRow
									key={row.id}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}
								>
									<TableCell component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell align='right'>{row.short_description}</TableCell>
									<TableCell align='right'>
										{new Date(row.start_at).toLocaleDateString('en-US') + ' to ' + new Date(row.end_at).toLocaleDateString('en-US')}
									</TableCell>
									<TableCell align='right'>{Math.round((50 * 100) / row.fund_goal).toString() + '%'}</TableCell>
									<TableCell align='right'>
										<Link to={'/' + row.id}> Donate Now </Link>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</React.Fragment>
	);
}
