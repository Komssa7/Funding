/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampaignmember = /* GraphQL */ `
	query GetCampaignmember($id: ID!) {
		getCampaignmember(id: $id) {
			id
			campaignID
			donorID
			first_name
			last_name
			email_address
			phone_number
			createdAt
			campaign {
				id
				managerID
				name
				qrimageurl
				link_thumbnail
				description
				short_description
				start_at
				end_at
				fund_goal
				donation_received
				link_video
				donor_count
				createdAt
				CDonationrecords {
					nextToken
				}
				CCampaignmembers {
					nextToken
				}
				CRewardcategories {
					nextToken
				}
				updatedAt
				owner
			}
			updatedAt
			owner
		}
	}
`;
export const listCampaignmembers = /* GraphQL */ `
	query ListCampaignmembers($filter: ModelCampaignmemberFilterInput, $limit: Int, $nextToken: String) {
		listCampaignmembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				campaignID
				donorID
				first_name
				last_name
				email_address
				phone_number
				createdAt
				campaign {
					id
					managerID
					name
					qrimageurl
					link_thumbnail
					description
					short_description
					start_at
					end_at
					fund_goal
					donation_received
					link_video
					donor_count
					createdAt
					updatedAt
					owner
				}
				updatedAt
				owner
			}
			nextToken
		}
	}
`;
export const getDonationrecord = /* GraphQL */ `
	query GetDonationrecord($id: ID!) {
		getDonationrecord(id: $id) {
			id
			campaignID
			donorI
			rewardcategoryID
			amount
			donation_date
			status
			createdAt
			campaign {
				id
				managerID
				name
				qrimageurl
				link_thumbnail
				description
				short_description
				start_at
				end_at
				fund_goal
				donation_received
				link_video
				donor_count
				createdAt
				CDonationrecords {
					nextToken
				}
				CCampaignmembers {
					nextToken
				}
				CRewardcategories {
					nextToken
				}
				updatedAt
				owner
			}
			rewardcategory {
				id
				campaignID
				minimum_amount
				title
				description
				estimate_delivery
				ship_to
				sequence_order
				is_available
				createdAt
				RCDonationrecords {
					nextToken
				}
				campaign {
					id
					managerID
					name
					qrimageurl
					link_thumbnail
					description
					short_description
					start_at
					end_at
					fund_goal
					donation_received
					link_video
					donor_count
					createdAt
					updatedAt
					owner
				}
				updatedAt
				owner
			}
			updatedAt
		}
	}
`;
export const listDonationrecords = /* GraphQL */ `
	query ListDonationrecords($filter: ModelDonationrecordFilterInput, $limit: Int, $nextToken: String) {
		listDonationrecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				campaignID
				donorI
				rewardcategoryID
				amount
				donation_date
				status
				createdAt
				campaign {
					id
					managerID
					name
					qrimageurl
					link_thumbnail
					description
					short_description
					start_at
					end_at
					fund_goal
					donation_received
					link_video
					donor_count
					createdAt
					updatedAt
					owner
				}
				rewardcategory {
					id
					campaignID
					minimum_amount
					title
					description
					estimate_delivery
					ship_to
					sequence_order
					is_available
					createdAt
					updatedAt
					owner
				}
				updatedAt
			}
			nextToken
		}
	}
`;
export const getRewardcategory = /* GraphQL */ `
	query GetRewardcategory($id: ID!) {
		getRewardcategory(id: $id) {
			id
			campaignID
			minimum_amount
			title
			description
			estimate_delivery
			ship_to
			sequence_order
			is_available
			createdAt
			RCDonationrecords {
				items {
					id
					campaignID
					donorI
					rewardcategoryID
					amount
					donation_date
					status
					createdAt
					updatedAt
				}
				nextToken
			}
			campaign {
				id
				managerID
				name
				qrimageurl
				link_thumbnail
				description
				short_description
				start_at
				end_at
				fund_goal
				donation_received
				link_video
				donor_count
				createdAt
				CDonationrecords {
					nextToken
				}
				CCampaignmembers {
					nextToken
				}
				CRewardcategories {
					nextToken
				}
				updatedAt
				owner
			}
			updatedAt
			owner
		}
	}
`;
export const listRewardcategories = /* GraphQL */ `
	query ListRewardcategories($filter: ModelRewardcategoryFilterInput, $limit: Int, $nextToken: String) {
		listRewardcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				campaignID
				minimum_amount
				title
				description
				estimate_delivery
				ship_to
				sequence_order
				is_available
				createdAt
				RCDonationrecords {
					nextToken
				}
				campaign {
					id
					managerID
					name
					qrimageurl
					link_thumbnail
					description
					short_description
					start_at
					end_at
					fund_goal
					donation_received
					link_video
					donor_count
					createdAt
					updatedAt
					owner
				}
				updatedAt
				owner
			}
			nextToken
		}
	}
`;
export const getCampaign = /* GraphQL */ `
	query GetCampaign($id: ID!) {
		getCampaign(id: $id) {
			id
			managerID
			name
			qrimageurl
			link_thumbnail
			description
			short_description
			start_at
			end_at
			fund_goal
			donation_received
			link_video
			donor_count
			createdAt
			CDonationrecords {
				items {
					id
					campaignID
					donorI
					rewardcategoryID
					amount
					donation_date
					status
					createdAt
					updatedAt
				}
				nextToken
			}
			CCampaignmembers {
				items {
					id
					campaignID
					donorID
					first_name
					last_name
					email_address
					phone_number
					createdAt
					updatedAt
					owner
				}
				nextToken
			}
			CRewardcategories {
				items {
					id
					campaignID
					minimum_amount
					title
					description
					estimate_delivery
					ship_to
					sequence_order
					is_available
					createdAt
					updatedAt
					owner
				}
				nextToken
			}
			updatedAt
			owner
		}
	}
`;
export const listCampaigns = /* GraphQL */ `
	query ListCampaigns($filter: ModelCampaignFilterInput, $limit: Int, $nextToken: String) {
		listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				managerID
				name
				qrimageurl
				link_thumbnail
				description
				short_description
				start_at
				end_at
				fund_goal
				donation_received
				link_video
				donor_count
				createdAt
				CDonationrecords {
					nextToken
				}
				CCampaignmembers {
					nextToken
				}
				CRewardcategories {
					nextToken
				}
				updatedAt
				owner
			}
			nextToken
		}
	}
`;
// Customized query apart from Auto generated starts from here
export const getCampaignpublic = /* GraphQL */ `
	query GetCampaign($id: ID!) {
		getCampaign(id: $id) {
			id
			managerID
			name
			qrimageurl
			link_thumbnail
			description
			short_description
			start_at
			end_at
			fund_goal
			donation_received
			link_video
			donor_count
			createdAt
			CRewardcategories {
				items {
					id
					campaignID
					minimum_amount
					title
					description
					estimate_delivery
					ship_to
					sequence_order
					is_available
					createdAt
					updatedAt
					owner
				}
				nextToken
			}
			updatedAt
			owner
		}
	}
`;

export const listCampaignspublic = /* GraphQL */ `
	query ListCampaigns($filter: ModelCampaignFilterInput, $limit: Int, $nextToken: String) {
		listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				managerID
				name
				qrimageurl
				link_thumbnail
				description
				short_description
				start_at
				end_at
				fund_goal
				donation_received
				link_video
				donor_count
				createdAt

				updatedAt
				owner
			}
			nextToken
		}
	}
`;

export const listDonationUser = /* GraphQL */ `
	query ListDonationrecords($filter: ModelDonationrecordFilterInput) {
		listDonationrecords(filter: $filter) {
			items {
				id
				campaignID
				donorI
				rewardcategoryID
				amount
				donation_date
				status
				createdAt
				campaign {
					id
					managerID
					name
					qrimageurl
					link_thumbnail
					description
					short_description
					start_at
					end_at
					fund_goal
					donation_received
					link_video
					donor_count
					createdAt
					updatedAt
					owner
				}
				rewardcategory {
					id
					campaignID
					minimum_amount
					title
					description
					estimate_delivery
					ship_to
					sequence_order
					is_available
					createdAt
					updatedAt
					owner
				}
				updatedAt
			}
		}
	}
`;
