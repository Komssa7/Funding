import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { API, graphqlOperation } from 'aws-amplify';
import { listCampaignmembers } from 'src/mygraphql/queries';

export function Members(props: any) {
	const [members, setMembers] = React.useState([]);

	async function getlistmembers() {
		const memberData: any = await API.graphql(
			graphqlOperation(listCampaignmembers, {
				filter: { campaignID: { eq: props.CampaignID } },
			})
		);
		setMembers(memberData.data.listCampaignmembers.items);
	}
	React.useEffect(() => {
		getlistmembers();
	}, [members]);

	return (
		<TableContainer component={Paper}>
			<h2>List Members</h2>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>First Name</TableCell>
						<TableCell align='right'>Last Name</TableCell>
						<TableCell align='right'>Email </TableCell>
						<TableCell align='right'>Phone Number</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{members.length &&
						members.map((row: any) => (
							<TableRow
								key={row.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{row.first_name}
								</TableCell>
								<TableCell align='right'>{row.last_name}</TableCell>
								<TableCell align='right'>{row.email_address}</TableCell>
								<TableCell align='right'>{row.phone_number}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
