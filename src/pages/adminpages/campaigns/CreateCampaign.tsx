import { Paper, FormControl, TextField, Stack, Button, CardMedia } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';

import { createCampaign, updateCampaign } from 'src/mygraphql/mutations';

import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { Campaign } from 'src/models';
import { useNavigate } from 'react-router-dom';
import config from 'src/aws-exports';
import { v4 as uuidv4 } from 'uuid';
const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = config;

export function CreateCampaign(props: any) {
	const navigate = useNavigate();
	const [name, setName] = React.useState('');
	const [short_description, setShort_description] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [link_video, setLink_video] = React.useState('');
	const [image, setImage] = React.useState('');
	const [link_thumbnail, setLink_thumbnail] = React.useState('');
	const [qrimageurl, setQrimageurl] = React.useState('');
	const [fund_goal, setFund_goal] = React.useState(0.0);

	const [startstamp, setStartstamp] = React.useState<Date | null>(new Date());
	const [endstamp, setEndstamp] = React.useState<Date | null>(new Date());
	const [managerID, setManagerID] = React.useState('');

	async function createNewCampaign(campaign: Campaign) {
		// Create Campaign Code start here... Insert Campaign to AWS
		const newcampaigndata: any = await API.graphql({
			query: createCampaign,
			variables: { input: campaign },
		});
		const campaignid = newcampaigndata.data.createCampaign.id;
		//Create QR code using QR Tiger API start here . .........................
		const urlforqr = 'http://localhost:3000/campaign/' + campaignid;
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: 'Bearer 7ae537d0-8e6b-11ec-a67d-d3b57b01f9ad' },
			body: JSON.stringify({
				qr: {
					size: 500,
					colorDark: 'rgb(5,64,128)',
					logo: '',
					eye_outer: 'eyeOuter2',
					eye_inner: 'eyeInner1',
					qrData: 'pattern0',
					backgroundColor: 'rgb(255,255,255)',
					transparentBkg: false,
					qrCategory: 'url',
					text: urlforqr,
				},
				qrUrl: urlforqr,
				qrType: 'qr2',
				qrCategory: 'url',
			}),
		};
		const response = await fetch('https://qrtiger.com/api/campaign/', requestOptions);
		const data = await response.json();
		// console.log(data.data.qrImage);
		//Here we get the QR Image url so we are starting UPDATE campaign record from here.......
		const updateCampDetail = {
			id: campaignid,
			qrimageurl: data.data.qrImage,
		};
		const updateQRimageurl = await API.graphql({ query: updateCampaign, variables: { input: updateCampDetail } });
		navigate('../viewcampaign/' + campaignid);
	}
	useEffect(() => {
		// Need ***** to put it somewhere else (In redux or as a context)
		Auth.currentAuthenticatedUser({
			bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		})
			.then((user) => {
				setManagerID(user.signInUserSession.accessToken.payload.username);
			})
			.catch((err) => console.log(err));
	}, []);
	const handleImageUpload = async (e: React.ChangeEvent) => {
		e.preventDefault();
		const target = e.target as HTMLInputElement;
		const files: FileList = target.files!;
		const file: File = files[0];
		const extension = file.name.split('.')[1];
		const name = file.name.split('.')[0];
		const key = `images/${uuidv4()}${name}.${extension}`;
		const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
		try {
			// Upload the file to s3 with public access level.
			await Storage.put(key, file, {
				level: 'public',
				contentType: file.type,
			});
			// Retrieve the uploaded file to display
			const image = await Storage.get(key, { level: 'public' });
			setImage(image);
			setLink_thumbnail(url);
		} catch (err) {
			console.log(err);
		}
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let oldDateFormat: any = startstamp && startstamp.toString();
		let startstamp2 = new Date(oldDateFormat).toISOString();
		let oldDateFormat2: any = endstamp && endstamp.toString();
		let endstamp2 = new Date(oldDateFormat2).toISOString();

		const campaign: Campaign = {
			name,
			short_description,
			description,
			link_video,
			fund_goal,
			managerID,
			qrimageurl,
			start_at: startstamp2,
			end_at: endstamp2,
			link_thumbnail: link_thumbnail,
		};
		createNewCampaign(campaign);
	};
	return (
		<form onSubmit={submitHandler}>
			<FormControl fullWidth={true} component={Paper}>
				<Stack spacing={2} ml={3} mr={3} mb={3}>
					<h2>Start New Campaign</h2>
					<Stack direction='row' spacing={3}>
						<TextField id='link_thumbnail' type='file' onChange={(e) => handleImageUpload(e)} />
						{image && <CardMedia sx={{ maxWidth: 240, maxHeight: 140 }} component='img' image={image} />}
					</Stack>
					<TextField
						id='name'
						value={name}
						onChange={(newValue) => setName(newValue.target.value)}
						label='Campaign Name'
						variant='filled'
					/>
					<TextField
						id='short_description'
						value={short_description}
						onChange={(newValue) => setShort_description(newValue.target.value)}
						label='Short Description'
						variant='filled'
					/>
					<TextField
						id='description'
						value={description}
						onChange={(newValue) => setDescription(newValue.target.value)}
						label='Description'
						variant='filled'
					/>
					<Stack direction='row' spacing={3}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label='Start Date & Time'
								value={startstamp}
								onChange={(newValue) => {
									setStartstamp(newValue);
								}}
							/>
						</LocalizationProvider>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label='End Date & Time'
								value={endstamp}
								onChange={(newValue) => {
									setEndstamp(newValue);
								}}
							/>
						</LocalizationProvider>
					</Stack>

					<TextField
						id='fund_goal'
						value={fund_goal}
						onChange={(newValue) => setFund_goal(Number(newValue.target.value))}
						label='Fund Goal'
						type='number'
						variant='filled'
					/>
					<TextField
						id='link_video'
						value={link_video}
						onChange={(newValue) => setLink_video(newValue.target.value)}
						label='Link for Video'
						variant='filled'
					/>
					<Button variant='contained' type='submit'>
						Submit
					</Button>
				</Stack>
			</FormControl>
		</form>
	);
}
