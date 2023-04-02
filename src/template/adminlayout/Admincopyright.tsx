import { Typography, Link } from '@mui/material';
import React from 'react';

function Admincopyright(props: any) {
	return (
		<Typography variant='body2' color='text.secondary' align='center' {...props}>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				FundRacer
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Admincopyright;
