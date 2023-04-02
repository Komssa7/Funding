/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
	mutation ProcessOrder($input: ProcessOrderInput!) {
		processOrder(input: $input)
	}
`;

export const updateDonationrecord = /* GraphQL */ `
	mutation UpdateDonationrecord($input: UpdateDonationrecordInput!, $condition: ModelDonationrecordConditionInput) {
		updateDonationrecord(input: $input, condition: $condition) {
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
export const deleteDonationrecord = /* GraphQL */ `
	mutation DeleteDonationrecord($input: DeleteDonationrecordInput!, $condition: ModelDonationrecordConditionInput) {
		deleteDonationrecord(input: $input, condition: $condition) {
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
export const createCampaignmember = /* GraphQL */ `
	mutation CreateCampaignmember($input: CreateCampaignmemberInput!, $condition: ModelCampaignmemberConditionInput) {
		createCampaignmember(input: $input, condition: $condition) {
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
export const updateCampaignmember = /* GraphQL */ `
	mutation UpdateCampaignmember($input: UpdateCampaignmemberInput!, $condition: ModelCampaignmemberConditionInput) {
		updateCampaignmember(input: $input, condition: $condition) {
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
export const deleteCampaignmember = /* GraphQL */ `
	mutation DeleteCampaignmember($input: DeleteCampaignmemberInput!, $condition: ModelCampaignmemberConditionInput) {
		deleteCampaignmember(input: $input, condition: $condition) {
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
export const createRewardcategory = /* GraphQL */ `
	mutation CreateRewardcategory($input: CreateRewardcategoryInput!, $condition: ModelRewardcategoryConditionInput) {
		createRewardcategory(input: $input, condition: $condition) {
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
export const updateRewardcategory = /* GraphQL */ `
	mutation UpdateRewardcategory($input: UpdateRewardcategoryInput!, $condition: ModelRewardcategoryConditionInput) {
		updateRewardcategory(input: $input, condition: $condition) {
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
export const deleteRewardcategory = /* GraphQL */ `
	mutation DeleteRewardcategory($input: DeleteRewardcategoryInput!, $condition: ModelRewardcategoryConditionInput) {
		deleteRewardcategory(input: $input, condition: $condition) {
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
export const createCampaign = /* GraphQL */ `
	mutation CreateCampaign($input: CreateCampaignInput!, $condition: ModelCampaignConditionInput) {
		createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
	mutation UpdateCampaign($input: UpdateCampaignInput!, $condition: ModelCampaignConditionInput) {
		updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
	mutation DeleteCampaign($input: DeleteCampaignInput!, $condition: ModelCampaignConditionInput) {
		deleteCampaign(input: $input, condition: $condition) {
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
export const createDonationrecord = /* GraphQL */ `
	mutation CreateDonationrecord($input: CreateDonationrecordInput!, $condition: ModelDonationrecordConditionInput) {
		createDonationrecord(input: $input, condition: $condition) {
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
