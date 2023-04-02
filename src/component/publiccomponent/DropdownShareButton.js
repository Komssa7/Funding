import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FaRegShareSquare } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';

export default function DropdownShareButton() {
	const handleShare = (e) => {
		e.preventDefault();

		const ahref = window.location.href;
		// const ahref = "https://www.google.com/"
		const encodedAhref = encodeURIComponent(ahref);
		var link;

		switch (e.currentTarget.id) {
			case 'facebook':
				link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
				open(link);
				break;

			case 'twitter':
				link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
				open(link);
				break;

			case 'instagram':
				link = `https://www.instagram.com/?url=${encodedAhref}`;
				open(link);
				break;

			default:
				break;
		}
	};

	const open = (socialLink) => {
		window.open(socialLink, '_blank');
	};

	return (
		<div
			style={{
				height: '4vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'rgba(255,255,255,0.9)',
				backgroundColor: '#26a27b',
			}}
		>
			<PopupState variant='popper' popupId='demo-popup-popper'>
				{(popupState) => (
					<div>
						<Button
							// className={classes.btn}
							color='inherit'
							{...bindToggle(popupState)}
						>
							<FaRegShareSquare
								size={20}
								style={{ marginRight: '.52575em', marginTop: '-.22em', backgroundColor: '#26a27b', color: 'rgba(255,255,255,0.9)' }}
							/>
							Share QR
						</Button>
						<Popper {...bindPopper(popupState)} transition>
							{({ TransitionProps }) => (
								<Fade {...TransitionProps} timeout={350}>
									<Paper>
										{/* className={classes.paper} */}
										<List dense={true}>
											<ListItem button style={{ paddingTop: '.75em' }} id='facebook' onClick={handleShare}>
												<ListItemIcon>
													<FacebookIcon />
												</ListItemIcon>
												<ListItemText primary='Facebook' />
											</ListItem>
											<ListItem button style={{ paddingTop: '.75em' }} id='twitter' onClick={handleShare}>
												<ListItemIcon>
													<TwitterIcon />
												</ListItemIcon>
												<ListItemText primary='Twitter' />
											</ListItem>
											<ListItem button style={{ paddingTop: '.75em' }} id='instagram' onClick={handleShare}>
												<ListItemIcon>
													<Instagram />
												</ListItemIcon>
												<ListItemText primary='Instagram' />
											</ListItem>
										</List>
									</Paper>
								</Fade>
							)}
						</Popper>
					</div>
				)}
			</PopupState>
		</div>
	);
}
