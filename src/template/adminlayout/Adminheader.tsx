import React from 'react';

import { styled } from '@mui/material/styles';
import { Badge, IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Auth } from 'aws-amplify';

function Adminheader(props: any) {
	const drawerWidth: number = 240;

	interface AppBarProps extends MuiAppBarProps {
		open?: boolean;
	}

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})<AppBarProps>(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(props.open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	async function onSignOutClick() {
		await Auth.signOut()
			.then((data) => window.location.reload())
			.catch((err) => console.log(err));
	}

	return (
		<AppBar>
			<Toolbar
				sx={{
					pr: '24px', // keep right padding when drawer closed
				}}
			>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={props.toggleDrawer}
					sx={{
						marginRight: '36px',
						...(props.open && { display: 'none' }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
					Dashboard
				</Typography>
				{/* <IconButton color='inherit'>
                    <Badge badgeContent={4} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton> */}

				<IconButton color='inherit' onClick={onSignOutClick}>
					<LogoutIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Adminheader;
