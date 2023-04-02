import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutContent() {
	return (
		<Box
			sx={{
				width: '100%',
				axWidth: 500,
				background: '#e6f8ff',
				borderRadius: 0.5,
				fontSize: 20,
			}}
		>
			<Typography variant='h3' gutterBottom component='div'>
				Overview
			</Typography>
			{/* <Typography variant="body1" gutterBottom> */}
			RacerX is an eCommerce Marketplace like Amazon to incorporate everything motorsports worldwide in 1 site. This includes equipment (new
			and used) and support services designed to serve racers, teams, mfgrs, suppliers, professional svcs thru revenue generators like
			classified /display ads, RaceMoney, RacerLink, RideBoard, Job Board etc.
			<br />
			<br />
			{/* </Typography> */}
			{/* <Typography variant="body1" gutterBottom> */}
			Our clients are racers and their suppliers like Chevy Racing, Ford, Toyota TRD, Porsche, Ferrari, Goodyear etc, down to small
			suppliers who rebuild engines, sell oil, down to grass roots racers at a local dirt or gokart track. Motorsports = cars, bikes, boats,
			planes, eRacing, drones and more. Race Stuff!
			<br />
			<br />
			{/* </Typography> */}
		</Box>
	);
}
