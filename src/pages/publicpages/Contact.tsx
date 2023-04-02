import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PageTitle from 'src/component/publiccomponent/PageTitle';
import ContactAddressComp from 'src/component/publiccomponent/ContactFeature/ContactAddressComp';
import ContactForm from 'src/component/publiccomponent/ContactFeature/ContactForm';

const theme = createTheme();

export default function Contact() {
	const pageTitle = {
		title: 'Contact Us',
		//description: 'Donate Big, Win Big.',
		image: 'https://source.unsplash.com/random',
		//imageText: 'main image description',
		//linkText: 'Continue reading…',
	};
	const addressDetail = {
		address: 'Address',
		description: '1234 main st, City, State, Country, zipcode',
		email: 'racerx@gmail.com',
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PageTitle post={pageTitle} />

			<Grid container spacing={4}>
				{/* First Address Part */}
				<ContactAddressComp address={addressDetail.address} description={addressDetail.description} email={addressDetail.email} />
				<ContactForm />
			</Grid>
		</ThemeProvider>
	);
}
