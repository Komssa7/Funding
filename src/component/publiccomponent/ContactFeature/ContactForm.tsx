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

export default function ContactForm() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
		});
	};

	return (
		<Grid item xs={12} md={6}>
			<Typography component='h1' variant='h5'>
				For More Info
			</Typography>
			<Box
				component='form'
				noValidate
				onSubmit={handleSubmit}
				sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField autoComplete='given-name' name='firstName' required fullWidth id='firstName' label='First Name' autoFocus />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required fullWidth id='lastName' label='Last Name' name='lastName' autoComplete='family-name' />
					</Grid>
					<Grid item xs={12}>
						<TextField required fullWidth id='email' label='Email Address' name='email' autoComplete='email' />
					</Grid>
					<Grid item xs={20} sm={20}>
						<TextField fullWidth name='Ask us' label='Ask us' id='Ask us' />
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox value='allowExtraEmails' color='primary' />}
							label='I want to receive inspiration, marketing promotions and updates via email.'
						/>
					</Grid>
				</Grid>
				<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
					Submit
				</Button>
			</Box>
		</Grid>
	);
}
