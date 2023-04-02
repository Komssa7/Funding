import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				FundRacer
			</Link>
			{new Date().getFullYear()}
		</Typography>
	);
}

interface FooterProps {
	description: string;
	title: string;
}

export default function Footer(props: FooterProps) {
	const { description, title } = props;
	const logo = require('./racerXlogo.jpg');

	return (
		<Box sx={{ bgcolor: '#aaddfa', py: 3, border: 0.5, marginTop: 3 }}>
			<Container maxWidth='lg'>
				<Typography variant='h5' align='center' gutterBottom>
					<Box sx={{ mr: 1, align: 'center' }}>
						<img src={logo} alt='Logo' />
					</Box>
					{title}
				</Typography>
				<Typography variant='subtitle1' align='center' color='text.secondary'>
					<Link href='https://www.facebook.com'>
						<FacebookIcon style={{ color: 'Blue', margin: 5, width: 40, height: 40 }} />
					</Link>
					<Link href='https://www.instagram.com'>
						<InstagramIcon style={{ color: 'red', margin: 5, width: 40, height: 40 }} />
					</Link>

					{/* {description} */}
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
