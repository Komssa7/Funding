import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import UserStatus from './Userstatus';
import { Auth } from 'aws-amplify';

//import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';

//import logo from './racerXlogo.jpg';

const pages = ['Home', 'Campaigns', 'About', 'Contact'];
const settings = ['Dashboard', 'Logout'];

const Header = () => {
	//check logged in or not
	const userStatus = UserStatus();

	const isLoggedIn = null !== userStatus;

	const logo = require('./racerXlogo.jpg');
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	async function onSignOutClick() {
		await Auth.signOut()
			.then((data) => window.location.reload())
			.catch((err) => console.log(err));
	}
	const customTheme = createTheme({
		palette: {
			primary: {
				light: '#112233',
				main: '#44b0d4',
				dark: '#778899',
				contrastText: '#fff',
			},
			secondary: {
				light: '#f0e6e6',
				main: '#c93434',
				dark: '#3c3c3c',
				contrastText: '#000',
			},
		},
	});

	return (
		<AppBar position='static' style={{ background: '#aaddfa' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
						<img src={logo} alt='Logo' />
					</Box>
					{/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
					<Typography
						// variant='h6'
						// noWrap
						// component='a'
						//href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '',
							// color: 'red',
							textDecoration: 'none',
						}}
					>
						{/* FundRacer */}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '',
								color: '',
								textDecoration: 'none',
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Link style={{ textDecoration: 'none', color: 'black' }} to={'/' + page.toLowerCase()}>
										{' '}
										{page}{' '}
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
					<Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
						<img src={logo} alt='Logo' />
					</Box>
					<Typography
						// variant='h5'
						// noWrap
						// component='a'
						// href=''
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						{/* FundRacer */}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', underline: 'hover', display: 'block' }}>
								<Link style={{ textDecoration: 'none', color: 'black' }} to={'/' + page.toLowerCase()}>
									{' '}
									{page}{' '}
								</Link>
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						{!isLoggedIn ? (
							<Button variant='outlined' size='small'>
								<Link style={{ textDecoration: 'none', color: 'black' }} to='/admin'>
									{' '}
									Login{' '}
								</Link>
							</Button>
						) : (
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									{/* <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' /> */}
									<Avatar>J</Avatar>
								</IconButton>
							</Tooltip>
						)}
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<Button variant='outlined' size='small'>
								<Link style={{ textDecoration: 'none', color: 'black' }} to='/admin'>
									Dashboard
								</Link>
							</Button>
							<MenuItem onClick={onSignOutClick}>
								<Typography textAlign='center'>Logout</Typography>
							</MenuItem>
							{/* {settings.map((setting) => ( */}
							{/* <MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem> */}
							{/* ))} */}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
