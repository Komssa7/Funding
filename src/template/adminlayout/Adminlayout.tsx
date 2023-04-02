import React from 'react';
import { Outlet } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Adminfooter from './Adminfooter';
import Adminheader from './Adminheader';
import Adminsidebar from './Adminsidebar';

function Adminlayout(props: any) {
	const mdTheme = createTheme();
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		console.log(open);
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<Adminheader open={open} toggleDrawer={toggleDrawer} />
				<Adminsidebar open={open} toggleDrawer={toggleDrawer} />
				<Box
					component='main'
					sx={{
						backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<Container maxWidth='lg' style={{ height: '80vh' }} sx={{ mt: 4, mb: 4 }}>
						<Outlet />
					</Container>
					<Adminfooter />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default withAuthenticator(Adminlayout);
