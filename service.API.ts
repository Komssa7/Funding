/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ProcessOrderInput = {
	id: string;
	total: number;
	token: string;
	address?: string | null;
};

export enum OrderStatus {
	SUCCESS = 'SUCCESS',
	FAILED = 'FAILED',
}

export type UpdateDonationrecordInput = {
	id: string;
	campaignID?: string | null;
	donorI?: string | null;
	rewardcategoryID?: string | null;
	amount?: number | null;
	donation_date?: string | null;
	status?: number | null;
	createdAt?: string | null;
};

export type ModelDonationrecordConditionInput = {
	campaignID?: ModelIDInput | null;
	donorI?: ModelIDInput | null;
	rewardcategoryID?: ModelIDInput | null;
	amount?: ModelFloatInput | null;
	donation_date?: ModelStringInput | null;
	status?: ModelIntInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelDonationrecordConditionInput | null> | null;
	or?: Array<ModelDonationrecordConditionInput | null> | null;
	not?: ModelDonationrecordConditionInput | null;
};

export type ModelIDInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
	binary = 'binary',
	binarySet = 'binarySet',
	bool = 'bool',
	list = 'list',
	map = 'map',
	number = 'number',
	numberSet = 'numberSet',
	string = 'string',
	stringSet = 'stringSet',
	_null = '_null',
}

export type ModelSizeInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
};

export type ModelFloatInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
};

export type ModelStringInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export type ModelIntInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
};

export type Donationrecord = {
	__typename: 'Donationrecord';
	id: string;
	campaignID: string;
	donorI: string;
	rewardcategoryID: string;
	amount?: number | null;
	donation_date?: string | null;
	status?: number | null;
	createdAt?: string | null;
	campaign?: Campaign | null;
	rewardcategory?: Rewardcategory | null;
	updatedAt: string;
};

export type Campaign = {
	__typename: 'Campaign';
	id: string;
	managerID?: string | null;
	name: string;
	qrimageurl: string;
	link_thumbnail: string;
	description: string;
	short_description: string;
	start_at: string;
	end_at: string;
	fund_goal: number;
	donation_received?: number | null;
	link_video?: string | null;
	donor_count?: number | null;
	createdAt?: string | null;
	CDonationrecords?: ModelDonationrecordConnection | null;
	CCampaignmembers?: ModelCampaignmemberConnection | null;
	CRewardcategories?: ModelRewardcategoryConnection | null;
	updatedAt: string;
	owner?: string | null;
};

export type ModelDonationrecordConnection = {
	__typename: 'ModelDonationrecordConnection';
	items: Array<Donationrecord | null>;
	nextToken?: string | null;
};

export type ModelCampaignmemberConnection = {
	__typename: 'ModelCampaignmemberConnection';
	items: Array<Campaignmember | null>;
	nextToken?: string | null;
};

export type Campaignmember = {
	__typename: 'Campaignmember';
	id: string;
	campaignID: string;
	donorID?: string | null;
	first_name: string;
	last_name?: string | null;
	email_address?: string | null;
	phone_number?: string | null;
	createdAt?: string | null;
	campaign?: Campaign | null;
	updatedAt: string;
	owner?: string | null;
};

export type ModelRewardcategoryConnection = {
	__typename: 'ModelRewardcategoryConnection';
	items: Array<Rewardcategory | null>;
	nextToken?: string | null;
};

export type Rewardcategory = {
	__typename: 'Rewardcategory';
	id: string;
	campaignID: string;
	minimum_amount: number;
	title: string;
	description: string;
	estimate_delivery?: string | null;
	ship_to?: string | null;
	sequence_order?: number | null;
	is_available?: boolean | null;
	createdAt?: string | null;
	RCDonationrecords?: ModelDonationrecordConnection | null;
	campaign?: Campaign | null;
	updatedAt: string;
	owner?: string | null;
};

export type DeleteDonationrecordInput = {
	id: string;
};

export type CreateCampaignmemberInput = {
	id?: string | null;
	campaignID: string;
	donorID?: string | null;
	first_name: string;
	last_name?: string | null;
	email_address?: string | null;
	phone_number?: string | null;
	createdAt?: string | null;
};

export type ModelCampaignmemberConditionInput = {
	campaignID?: ModelIDInput | null;
	donorID?: ModelIDInput | null;
	first_name?: ModelStringInput | null;
	last_name?: ModelStringInput | null;
	email_address?: ModelStringInput | null;
	phone_number?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelCampaignmemberConditionInput | null> | null;
	or?: Array<ModelCampaignmemberConditionInput | null> | null;
	not?: ModelCampaignmemberConditionInput | null;
};

export type UpdateCampaignmemberInput = {
	id: string;
	campaignID?: string | null;
	donorID?: string | null;
	first_name?: string | null;
	last_name?: string | null;
	email_address?: string | null;
	phone_number?: string | null;
	createdAt?: string | null;
};

export type DeleteCampaignmemberInput = {
	id: string;
};

export type CreateRewardcategoryInput = {
	id?: string | null;
	campaignID: string;
	minimum_amount: number;
	title: string;
	description: string;
	estimate_delivery?: string | null;
	ship_to?: string | null;
	sequence_order?: number | null;
	is_available?: boolean | null;
	createdAt?: string | null;
};

export type ModelRewardcategoryConditionInput = {
	campaignID?: ModelIDInput | null;
	minimum_amount?: ModelFloatInput | null;
	title?: ModelStringInput | null;
	description?: ModelStringInput | null;
	estimate_delivery?: ModelStringInput | null;
	ship_to?: ModelStringInput | null;
	sequence_order?: ModelFloatInput | null;
	is_available?: ModelBooleanInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelRewardcategoryConditionInput | null> | null;
	or?: Array<ModelRewardcategoryConditionInput | null> | null;
	not?: ModelRewardcategoryConditionInput | null;
};

export type ModelBooleanInput = {
	ne?: boolean | null;
	eq?: boolean | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
};

export type UpdateRewardcategoryInput = {
	id: string;
	campaignID?: string | null;
	minimum_amount?: number | null;
	title?: string | null;
	description?: string | null;
	estimate_delivery?: string | null;
	ship_to?: string | null;
	sequence_order?: number | null;
	is_available?: boolean | null;
	createdAt?: string | null;
};

export type DeleteRewardcategoryInput = {
	id: string;
};

export type CreateCampaignInput = {
	id?: string | null;
	managerID?: string | null;
	name: string;
	qrimageurl: string;
	link_thumbnail: string;
	description: string;
	short_description: string;
	start_at: string;
	end_at: string;
	fund_goal: number;
	donation_received?: number | null;
	link_video?: string | null;
	donor_count?: number | null;
	createdAt?: string | null;
};

export type ModelCampaignConditionInput = {
	managerID?: ModelIDInput | null;
	name?: ModelStringInput | null;
	qrimageurl?: ModelStringInput | null;
	link_thumbnail?: ModelStringInput | null;
	description?: ModelStringInput | null;
	short_description?: ModelStringInput | null;
	start_at?: ModelStringInput | null;
	end_at?: ModelStringInput | null;
	fund_goal?: ModelFloatInput | null;
	donation_received?: ModelFloatInput | null;
	link_video?: ModelStringInput | null;
	donor_count?: ModelIntInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelCampaignConditionInput | null> | null;
	or?: Array<ModelCampaignConditionInput | null> | null;
	not?: ModelCampaignConditionInput | null;
};

export type UpdateCampaignInput = {
	id: string;
	managerID?: string | null;
	name?: string | null;
	qrimageurl?: string | null;
	link_thumbnail?: string | null;
	description?: string | null;
	short_description?: string | null;
	start_at?: string | null;
	end_at?: string | null;
	fund_goal?: number | null;
	donation_received?: number | null;
	link_video?: string | null;
	donor_count?: number | null;
	createdAt?: string | null;
};

export type DeleteCampaignInput = {
	id: string;
};

export type CreateDonationrecordInput = {
	id?: string | null;
	campaignID: string;
	donorI: string;
	rewardcategoryID: string;
	amount?: number | null;
	donation_date?: string | null;
	status?: number | null;
	createdAt?: string | null;
};

export type ModelCampaignmemberFilterInput = {
	id?: ModelIDInput | null;
	campaignID?: ModelIDInput | null;
	donorID?: ModelIDInput | null;
	first_name?: ModelStringInput | null;
	last_name?: ModelStringInput | null;
	email_address?: ModelStringInput | null;
	phone_number?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelCampaignmemberFilterInput | null> | null;
	or?: Array<ModelCampaignmemberFilterInput | null> | null;
	not?: ModelCampaignmemberFilterInput | null;
};

export type ModelDonationrecordFilterInput = {
	id?: ModelIDInput | null;
	campaignID?: ModelIDInput | null;
	donorI?: ModelIDInput | null;
	rewardcategoryID?: ModelIDInput | null;
	amount?: ModelFloatInput | null;
	donation_date?: ModelStringInput | null;
	status?: ModelIntInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelDonationrecordFilterInput | null> | null;
	or?: Array<ModelDonationrecordFilterInput | null> | null;
	not?: ModelDonationrecordFilterInput | null;
};

export type ModelRewardcategoryFilterInput = {
	id?: ModelIDInput | null;
	campaignID?: ModelIDInput | null;
	minimum_amount?: ModelFloatInput | null;
	title?: ModelStringInput | null;
	description?: ModelStringInput | null;
	estimate_delivery?: ModelStringInput | null;
	ship_to?: ModelStringInput | null;
	sequence_order?: ModelFloatInput | null;
	is_available?: ModelBooleanInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelRewardcategoryFilterInput | null> | null;
	or?: Array<ModelRewardcategoryFilterInput | null> | null;
	not?: ModelRewardcategoryFilterInput | null;
};

export type ModelCampaignFilterInput = {
	id?: ModelIDInput | null;
	managerID?: ModelIDInput | null;
	name?: ModelStringInput | null;
	qrimageurl?: ModelStringInput | null;
	link_thumbnail?: ModelStringInput | null;
	description?: ModelStringInput | null;
	short_description?: ModelStringInput | null;
	start_at?: ModelStringInput | null;
	end_at?: ModelStringInput | null;
	fund_goal?: ModelFloatInput | null;
	donation_received?: ModelFloatInput | null;
	link_video?: ModelStringInput | null;
	donor_count?: ModelIntInput | null;
	createdAt?: ModelStringInput | null;
	and?: Array<ModelCampaignFilterInput | null> | null;
	or?: Array<ModelCampaignFilterInput | null> | null;
	not?: ModelCampaignFilterInput | null;
};

export type ModelCampaignConnection = {
	__typename: 'ModelCampaignConnection';
	items: Array<Campaign | null>;
	nextToken?: string | null;
};

export type ProcessOrderMutationVariables = {
	input: ProcessOrderInput;
};

export type ProcessOrderMutation = {
	processOrder?: OrderStatus | null;
};

export type UpdateDonationrecordMutationVariables = {
	input: UpdateDonationrecordInput;
	condition?: ModelDonationrecordConditionInput | null;
};

export type UpdateDonationrecordMutation = {
	updateDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type DeleteDonationrecordMutationVariables = {
	input: DeleteDonationrecordInput;
	condition?: ModelDonationrecordConditionInput | null;
};

export type DeleteDonationrecordMutation = {
	deleteDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type CreateCampaignmemberMutationVariables = {
	input: CreateCampaignmemberInput;
	condition?: ModelCampaignmemberConditionInput | null;
};

export type CreateCampaignmemberMutation = {
	createCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type UpdateCampaignmemberMutationVariables = {
	input: UpdateCampaignmemberInput;
	condition?: ModelCampaignmemberConditionInput | null;
};

export type UpdateCampaignmemberMutation = {
	updateCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type DeleteCampaignmemberMutationVariables = {
	input: DeleteCampaignmemberInput;
	condition?: ModelCampaignmemberConditionInput | null;
};

export type DeleteCampaignmemberMutation = {
	deleteCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type CreateRewardcategoryMutationVariables = {
	input: CreateRewardcategoryInput;
	condition?: ModelRewardcategoryConditionInput | null;
};

export type CreateRewardcategoryMutation = {
	createRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type UpdateRewardcategoryMutationVariables = {
	input: UpdateRewardcategoryInput;
	condition?: ModelRewardcategoryConditionInput | null;
};

export type UpdateRewardcategoryMutation = {
	updateRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type DeleteRewardcategoryMutationVariables = {
	input: DeleteRewardcategoryInput;
	condition?: ModelRewardcategoryConditionInput | null;
};

export type DeleteRewardcategoryMutation = {
	deleteRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type CreateCampaignMutationVariables = {
	input: CreateCampaignInput;
	condition?: ModelCampaignConditionInput | null;
};

export type CreateCampaignMutation = {
	createCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type UpdateCampaignMutationVariables = {
	input: UpdateCampaignInput;
	condition?: ModelCampaignConditionInput | null;
};

export type UpdateCampaignMutation = {
	updateCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type DeleteCampaignMutationVariables = {
	input: DeleteCampaignInput;
	condition?: ModelCampaignConditionInput | null;
};

export type DeleteCampaignMutation = {
	deleteCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type CreateDonationrecordMutationVariables = {
	input: CreateDonationrecordInput;
	condition?: ModelDonationrecordConditionInput | null;
};

export type CreateDonationrecordMutation = {
	createDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type GetCampaignmemberQueryVariables = {
	id: string;
};

export type GetCampaignmemberQuery = {
	getCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type ListCampaignmembersQueryVariables = {
	filter?: ModelCampaignmemberFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListCampaignmembersQuery = {
	listCampaignmembers?: {
		__typename: 'ModelCampaignmemberConnection';
		items: Array<{
			__typename: 'Campaignmember';
			id: string;
			campaignID: string;
			donorID?: string | null;
			first_name: string;
			last_name?: string | null;
			email_address?: string | null;
			phone_number?: string | null;
			createdAt?: string | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null>;
		nextToken?: string | null;
	} | null;
};

export type GetDonationrecordQueryVariables = {
	id: string;
};

export type GetDonationrecordQuery = {
	getDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type ListDonationrecordsQueryVariables = {
	filter?: ModelDonationrecordFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListDonationrecordsQuery = {
	listDonationrecords?: {
		__typename: 'ModelDonationrecordConnection';
		items: Array<{
			__typename: 'Donationrecord';
			id: string;
			campaignID: string;
			donorI: string;
			rewardcategoryID: string;
			amount?: number | null;
			donation_date?: string | null;
			status?: number | null;
			createdAt?: string | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			rewardcategory?: {
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
		} | null>;
		nextToken?: string | null;
	} | null;
};

export type GetRewardcategoryQueryVariables = {
	id: string;
};

export type GetRewardcategoryQuery = {
	getRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type ListRewardcategoriesQueryVariables = {
	filter?: ModelRewardcategoryFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListRewardcategoriesQuery = {
	listRewardcategories?: {
		__typename: 'ModelRewardcategoryConnection';
		items: Array<{
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null>;
		nextToken?: string | null;
	} | null;
};

export type GetCampaignQueryVariables = {
	id: string;
};

export type GetCampaignQuery = {
	getCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type ListCampaignsQueryVariables = {
	filter?: ModelCampaignFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListCampaignsQuery = {
	listCampaigns?: {
		__typename: 'ModelCampaignConnection';
		items: Array<{
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null>;
		nextToken?: string | null;
	} | null;
};

export type OnCreateCampaignmemberSubscriptionVariables = {
	owner?: string | null;
};

export type OnCreateCampaignmemberSubscription = {
	onCreateCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnUpdateCampaignmemberSubscriptionVariables = {
	owner?: string | null;
};

export type OnUpdateCampaignmemberSubscription = {
	onUpdateCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnDeleteCampaignmemberSubscriptionVariables = {
	owner?: string | null;
};

export type OnDeleteCampaignmemberSubscription = {
	onDeleteCampaignmember?: {
		__typename: 'Campaignmember';
		id: string;
		campaignID: string;
		donorID?: string | null;
		first_name: string;
		last_name?: string | null;
		email_address?: string | null;
		phone_number?: string | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnCreateDonationrecordSubscription = {
	onCreateDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type OnUpdateDonationrecordSubscription = {
	onUpdateDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type OnDeleteDonationrecordSubscription = {
	onDeleteDonationrecord?: {
		__typename: 'Donationrecord';
		id: string;
		campaignID: string;
		donorI: string;
		rewardcategoryID: string;
		amount?: number | null;
		donation_date?: string | null;
		status?: number | null;
		createdAt?: string | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		rewardcategory?: {
			__typename: 'Rewardcategory';
			id: string;
			campaignID: string;
			minimum_amount: number;
			title: string;
			description: string;
			estimate_delivery?: string | null;
			ship_to?: string | null;
			sequence_order?: number | null;
			is_available?: boolean | null;
			createdAt?: string | null;
			RCDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			campaign?: {
				__typename: 'Campaign';
				id: string;
				managerID?: string | null;
				name: string;
				qrimageurl: string;
				link_thumbnail: string;
				description: string;
				short_description: string;
				start_at: string;
				end_at: string;
				fund_goal: number;
				donation_received?: number | null;
				link_video?: string | null;
				donor_count?: number | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
	} | null;
};

export type OnCreateRewardcategorySubscriptionVariables = {
	owner?: string | null;
};

export type OnCreateRewardcategorySubscription = {
	onCreateRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnUpdateRewardcategorySubscriptionVariables = {
	owner?: string | null;
};

export type OnUpdateRewardcategorySubscription = {
	onUpdateRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnDeleteRewardcategorySubscriptionVariables = {
	owner?: string | null;
};

export type OnDeleteRewardcategorySubscription = {
	onDeleteRewardcategory?: {
		__typename: 'Rewardcategory';
		id: string;
		campaignID: string;
		minimum_amount: number;
		title: string;
		description: string;
		estimate_delivery?: string | null;
		ship_to?: string | null;
		sequence_order?: number | null;
		is_available?: boolean | null;
		createdAt?: string | null;
		RCDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		campaign?: {
			__typename: 'Campaign';
			id: string;
			managerID?: string | null;
			name: string;
			qrimageurl: string;
			link_thumbnail: string;
			description: string;
			short_description: string;
			start_at: string;
			end_at: string;
			fund_goal: number;
			donation_received?: number | null;
			link_video?: string | null;
			donor_count?: number | null;
			createdAt?: string | null;
			CDonationrecords?: {
				__typename: 'ModelDonationrecordConnection';
				nextToken?: string | null;
			} | null;
			CCampaignmembers?: {
				__typename: 'ModelCampaignmemberConnection';
				nextToken?: string | null;
			} | null;
			CRewardcategories?: {
				__typename: 'ModelRewardcategoryConnection';
				nextToken?: string | null;
			} | null;
			updatedAt: string;
			owner?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnCreateCampaignSubscriptionVariables = {
	owner?: string | null;
};

export type OnCreateCampaignSubscription = {
	onCreateCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnUpdateCampaignSubscriptionVariables = {
	owner?: string | null;
};

export type OnUpdateCampaignSubscription = {
	onUpdateCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};

export type OnDeleteCampaignSubscriptionVariables = {
	owner?: string | null;
};

export type OnDeleteCampaignSubscription = {
	onDeleteCampaign?: {
		__typename: 'Campaign';
		id: string;
		managerID?: string | null;
		name: string;
		qrimageurl: string;
		link_thumbnail: string;
		description: string;
		short_description: string;
		start_at: string;
		end_at: string;
		fund_goal: number;
		donation_received?: number | null;
		link_video?: string | null;
		donor_count?: number | null;
		createdAt?: string | null;
		CDonationrecords?: {
			__typename: 'ModelDonationrecordConnection';
			items: Array<{
				__typename: 'Donationrecord';
				id: string;
				campaignID: string;
				donorI: string;
				rewardcategoryID: string;
				amount?: number | null;
				donation_date?: string | null;
				status?: number | null;
				createdAt?: string | null;
				updatedAt: string;
			} | null>;
			nextToken?: string | null;
		} | null;
		CCampaignmembers?: {
			__typename: 'ModelCampaignmemberConnection';
			items: Array<{
				__typename: 'Campaignmember';
				id: string;
				campaignID: string;
				donorID?: string | null;
				first_name: string;
				last_name?: string | null;
				email_address?: string | null;
				phone_number?: string | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		CRewardcategories?: {
			__typename: 'ModelRewardcategoryConnection';
			items: Array<{
				__typename: 'Rewardcategory';
				id: string;
				campaignID: string;
				minimum_amount: number;
				title: string;
				description: string;
				estimate_delivery?: string | null;
				ship_to?: string | null;
				sequence_order?: number | null;
				is_available?: boolean | null;
				createdAt?: string | null;
				updatedAt: string;
				owner?: string | null;
			} | null>;
			nextToken?: string | null;
		} | null;
		updatedAt: string;
		owner?: string | null;
	} | null;
};
