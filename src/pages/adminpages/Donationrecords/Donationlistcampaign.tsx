import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Donationlistcampaign(props: any) {
	return (
		<TableContainer component={Paper}>
			<h2>Donation Received</h2>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Amount</TableCell>
						<TableCell align='right'>Donor ID</TableCell>
						<TableCell align='right'>Reward Selected</TableCell>
						<TableCell align='right'>Created At</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props?.DonationData?.items.length &&
						props?.DonationData?.items.map((row: any) => (
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
								<TableCell align='right'>{row.donorI}</TableCell>
								<TableCell align='right'>{row.rewardcategoryID}</TableCell>
								<TableCell align='right'>{row.createdAt}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
