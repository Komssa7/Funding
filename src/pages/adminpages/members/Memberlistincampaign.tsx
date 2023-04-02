import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Memberlistincampaign(props: any) {
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
					{props?.Membersdata?.items.length &&
						props?.Membersdata?.items.map((row: any) => (
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

export default Memberlistincampaign;
