/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaignmember = /* GraphQL */ `
	subscription OnCreateCampaignmember($owner: String) {
		onCreateCampaignmember(owner: $owner) {
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
export const onUpdateCampaignmember = /* GraphQL */ `
	subscription OnUpdateCampaignmember($owner: String) {
		onUpdateCampaignmember(owner: $owner) {
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
export const onDeleteCampaignmember = /* GraphQL */ `
	subscription OnDeleteCampaignmember($owner: String) {
		onDeleteCampaignmember(owner: $owner) {
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
export const onCreateDonationrecord = /* GraphQL */ `
	subscription OnCreateDonationrecord {
		onCreateDonationrecord {
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
export const onUpdateDonationrecord = /* GraphQL */ `
	subscription OnUpdateDonationrecord {
		onUpdateDonationrecord {
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
export const onDeleteDonationrecord = /* GraphQL */ `
	subscription OnDeleteDonationrecord {
		onDeleteDonationrecord {
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
export const onCreateRewardcategory = /* GraphQL */ `
	subscription OnCreateRewardcategory($owner: String) {
		onCreateRewardcategory(owner: $owner) {
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
export const onUpdateRewardcategory = /* GraphQL */ `
	subscription OnUpdateRewardcategory($owner: String) {
		onUpdateRewardcategory(owner: $owner) {
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
export const onDeleteRewardcategory = /* GraphQL */ `
	subscription OnDeleteRewardcategory($owner: String) {
		onDeleteRewardcategory(owner: $owner) {
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
export const onCreateCampaign = /* GraphQL */ `
	subscription OnCreateCampaign($owner: String) {
		onCreateCampaign(owner: $owner) {
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
export const onUpdateCampaign = /* GraphQL */ `
	subscription OnUpdateCampaign($owner: String) {
		onUpdateCampaign(owner: $owner) {
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
export const onDeleteCampaign = /* GraphQL */ `
	subscription OnDeleteCampaign($owner: String) {
		onDeleteCampaign(owner: $owner) {
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
