import { API, graphqlOperation } from 'aws-amplify';
import React from 'react';
import { listCampaignspublic } from 'src/mygraphql/queries';
import CardPost from './CardPost';

function NewArrivalPost() {
	const cardinraw: number = 4; // values will be divided by 12 to get # card in raw
	const title = 'Newly Launched';
	// Getting last campaigns.
	const [campaigns, setCampaigns] = React.useState([]);
	async function getCampaigns() {
		const data: any = await API.graphql({ query: listCampaignspublic, variables: { limit: 4 }, authMode: 'API_KEY' });
		if (data.data.listCampaigns.items !== undefined) {
			setCampaigns(data.data.listCampaigns.items);
		}
	}

	React.useEffect(() => {
		getCampaigns();
	}, []);
	return (
		<>
			<CardPost title={title} cardinraw={cardinraw} posts={campaigns} />
		</>
	);
}

export default NewArrivalPost;
