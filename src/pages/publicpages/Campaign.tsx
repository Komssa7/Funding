//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import MainFeaturedPost from 'src/component/publiccomponent/MainFeaturePost';
import CampaignFeaturePost from 'src/component/publiccomponent/CampaignFeatures/CampaignFeature';
import DescFeaturePost from 'src/component/publiccomponent/CampaignFeatures/DescFeature';

import Grid from '@mui/material/Grid';
import FeaturedPost from 'src/component/publiccomponent/FeaturePost';
import RecommendedPost from 'src/component/publiccomponent/RecommendedPost';
import NewArrivalPost from 'src/component/publiccomponent/NewArrivalPost';

import { getCampaignpublic } from 'src/mygraphql/queries';
import { Campaign, Rewardcategory } from 'src/models';
import { API } from 'aws-amplify';
import { Link, useParams } from 'react-router-dom';
import PageTitle from 'src/component/publiccomponent/PageTitle';

interface CampaignLocal {
	readonly id?: string;
	readonly managerID?: string | null;
	readonly name: string;
	readonly qrimageurl: string;
	readonly link_thumbnail: string;
	readonly description: string;
	readonly short_description: string;
	readonly start_at: string;
	readonly end_at: string;
	readonly fund_goal: number;
	readonly donation_received?: number | null;
	readonly link_video?: string | null;
	readonly donor_count?: number | null;
	readonly createdAt?: string | null;
	readonly CRewardcategories?: { items: (Rewardcategory | null)[] } | null | undefined;
	readonly updatedAt?: string | null;
	// constructor(init: ModelInit<Campaign, CampaignMetaData>);
	// static copyOf(
	// 	source: Campaign,
	// 	mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void
	// ): Campaign;
}

function CampaignPage() {
	let paramdata = useParams();
	const [onecampaign, setOnecampaign] = useState<CampaignLocal>();
	async function viewgetcampaign(id: any) {
		const data: any = await API.graphql({
			query: getCampaignpublic,
			variables: { id },
			authMode: 'API_KEY',
		});
		setOnecampaign(data.data.getCampaign);
	}
	useEffect(() => {
		viewgetcampaign(paramdata.campaignID);
	}, [paramdata.campaignID]);
	const descFeaturedPost = {
		title: 'Campaign Info',
		description: onecampaign ? onecampaign.description : 'Loading.....',
		start_at: onecampaign ? onecampaign.start_at : 'Loading.....',
		end_at: onecampaign ? onecampaign.end_at : 'Loading.....',
		image: onecampaign ? onecampaign.link_thumbnail : 'Loading.....',
		imageLabel: onecampaign ? onecampaign.name : 'Loading.....',
		fund_goal: onecampaign ? onecampaign.fund_goal : 'Loading.....',
		donation_received: onecampaign ? onecampaign.donation_received : 'Loading.....',
		CRewardcategories: onecampaign ? onecampaign.CRewardcategories : null,
	};
	const campaignTitle = {
		title: onecampaign ? onecampaign.name : 'Loading.....',
		image: onecampaign ? onecampaign.link_thumbnail : 'Loading.....',
		qrimageurl: onecampaign ? onecampaign.qrimageurl : 'Loading.....',
	};
	return (
		<>
			<PageTitle post={campaignTitle} />
			{/* //post={campaignFeaturePost} /> */}
			<DescFeaturePost post={descFeaturedPost} />
			<Grid sx={{ mt: 5 }}>
				<RecommendedPost />
			</Grid>
			<Grid sx={{ mt: 5 }}>
				<NewArrivalPost />
			</Grid>
		</>
	);
}

export default CampaignPage;
