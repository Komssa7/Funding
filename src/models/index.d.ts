import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore';

type DonationrecordMetaData = {
	readOnlyFields: 'updatedAt';
};

type CampaignMetaData = {
	readOnlyFields: 'updatedAt';
};

type CampaignmemberMetaData = {
	readOnlyFields: 'updatedAt';
};

type RewardcategoryMetaData = {
	readOnlyFields: 'updatedAt';
};

export declare class Donationrecord {
	readonly id: string;
	readonly donorI: string;
	readonly amount?: number | null;
	readonly donation_date?: string | null;
	readonly status?: number | null;
	readonly createdAt?: string | null;
	readonly campaign?: Campaign | null;
	readonly rewardcategory?: Rewardcategory | null;
	readonly updatedAt?: string | null;
	constructor(init: ModelInit<Donationrecord, DonationrecordMetaData>);
	static copyOf(
		source: Donationrecord,
		mutator: (draft: MutableModel<Donationrecord, DonationrecordMetaData>) => MutableModel<Donationrecord, DonationrecordMetaData> | void
	): Donationrecord;
}

export declare class Campaign {
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
	readonly CDonationrecords?: (Donationrecord | null)[] | null;
	readonly CCampaignmembers?: (Campaignmember | null)[] | null;
	readonly CRewardcategories?: (Rewardcategory | null)[] | null;
	readonly updatedAt?: string | null;
	constructor(init: ModelInit<Campaign, CampaignMetaData>);
	static copyOf(
		source: Campaign,
		mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void
	): Campaign;
}

export declare class Campaignmember {
	readonly id?: string;
	readonly campaignID?: string | null;
	readonly donorID?: string | null;
	readonly first_name: string;
	readonly last_name?: string | null;
	readonly email_address?: string | null;
	readonly phone_number?: string | null;
	readonly createdAt?: string | null;
	readonly campaign?: Campaign | null;
	readonly updatedAt?: string | null;
	constructor(init: ModelInit<Campaignmember, CampaignmemberMetaData>);
	static copyOf(
		source: Campaignmember,
		mutator: (draft: MutableModel<Campaignmember, CampaignmemberMetaData>) => MutableModel<Campaignmember, CampaignmemberMetaData> | void
	): Campaignmember;
}

export declare class Rewardcategory {
	readonly id?: string;
	readonly campaignID?: string | null;
	readonly minimum_amount: number;
	readonly title: string;
	readonly description: string;
	readonly estimate_delivery?: string | null;
	readonly ship_to?: string | null;
	readonly sequence_order?: number | null;
	readonly is_available?: boolean | null;
	readonly createdAt?: string | null;
	readonly RCDonationrecords?: (Donationrecord | null)[] | null;
	readonly campaign?: Campaign | null;
	readonly updatedAt?: string | null;
	constructor(init: ModelInit<Rewardcategory, RewardcategoryMetaData>);
	static copyOf(
		source: Rewardcategory,
		mutator: (draft: MutableModel<Rewardcategory, RewardcategoryMetaData>) => MutableModel<Rewardcategory, RewardcategoryMetaData> | void
	): Rewardcategory;
}
