import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { adminMenuListItems, managerMenuListItems, donorMenuItems } from './sidebaritem';
import { Auth } from 'aws-amplify';

function Adminsidebar(props: any) {
	const drawerWidth: number = 240;
	const [groupname, setGroupname] = useState('');
	useEffect(() => {
		Auth.currentAuthenticatedUser({
			bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		})
			.then((user) => {
				setGroupname(user.signInUserSession.accessToken.payload['cognito:groups'][0]);
			})
			.catch((err) => console.log(err));
	}, []);
	let sidebar;
	if (groupname == 'Admin') {
		sidebar = adminMenuListItems;
	} else if (groupname == 'Manager') {
		sidebar = managerMenuListItems;
	} else if (groupname == 'Donor' || groupname.includes('Facebook') || groupname.includes('Google')) {
		sidebar = donorMenuItems;
	}

	const Drawer = styled(MuiDrawer, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!props.open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}));
	return (
		<Drawer variant='permanent' open={props.open}>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					px: [1],
				}}
			>
				<IconButton onClick={props.toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component='nav'>{sidebar}</List>
		</Drawer>
	);
}

export default Adminsidebar;
