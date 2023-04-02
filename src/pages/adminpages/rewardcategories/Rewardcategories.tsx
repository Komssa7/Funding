import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { listRewardcategories } from 'src/mygraphql/queries';

import { API, graphqlOperation } from 'aws-amplify';
export function Rewardcategories(props: any) {
	const [rewardcategories, setRewardcategories] = React.useState([]);

	async function getlistrewardcategories() {
		const mydata: any = await API.graphql(
			graphqlOperation(listRewardcategories, {
				filter: { campaignID: { eq: props.CampaignID } },
			})
		);
		setRewardcategories(mydata.data.listRewardcategories.items);
	}
	useEffect(() => {
		getlistrewardcategories();
	}, [rewardcategories]);
	return (
		<TableContainer component={Paper}>
			<h2>List of Rewards Added</h2>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell align='right'>Description</TableCell>
						<TableCell align='right'>Minimum Amount</TableCell>
						<TableCell align='right'>Display Order by</TableCell>
						<TableCell align='right'>Estimate Delivery</TableCell>
						<TableCell align='right'>Ship To</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rewardcategories.length &&
						rewardcategories.map((row: any) => (
							<TableRow
								key={row.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{row.title}
								</TableCell>
								<TableCell align='right'>{row.description}</TableCell>
								<TableCell align='right'>{row.minimum_amount}</TableCell>
								<TableCell align='right'>{row.sequence_order}</TableCell>
								<TableCell align='right'>{row.estimate_delivery}</TableCell>
								<TableCell align='right'>{row.ship_to}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
