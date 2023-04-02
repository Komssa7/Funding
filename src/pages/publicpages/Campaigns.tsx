import { API } from 'aws-amplify';
import * as React from 'react';
import CardPost from 'src/component/publiccomponent/CardPost';

import PageTitle from 'src/component/publiccomponent/PageTitle';
import { listCampaignspublic } from 'src/mygraphql/queries';

function Campaigns() {
	const backgrd = require('./campaign1.jpg');
	const allcampaignpagetit = {
		title: 'Campaigns',
		image: 'https://source.unsplash.com/random',
	};

	const cardinraw: number = 4; // values will be divided by 12 to get # card in raw
	const title = 'On Going';
	// Getting last campaigns.
	const [campaigns, setCampaigns] = React.useState([]);
	async function getCampaigns() {
		const data: any = await API.graphql({ query: listCampaignspublic, authMode: 'API_KEY' });
		if (data.data.listCampaigns.items !== undefined) {
			setCampaigns(data.data.listCampaigns.items);
		}
	}

	React.useEffect(() => {
		getCampaigns();
	}, []);
	return (
		<>
			<PageTitle post={allcampaignpagetit} />
			<CardPost title={title} cardinraw={cardinraw} posts={campaigns} />
		</>
	);
}

export default Campaigns;
