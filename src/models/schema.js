export const schema = {
	models: {
		Donationrecord: {
			name: 'Donationrecord',
			fields: {
				id: {
					name: 'id',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: [],
				},
				donorI: {
					name: 'donorI',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: [],
				},
				amount: {
					name: 'amount',
					isArray: false,
					type: 'Float',
					isRequired: false,
					attributes: [],
				},
				donation_date: {
					name: 'donation_date',
					isArray: false,
					type: 'AWSDate',
					isRequired: false,
					attributes: [],
				},
				status: {
					name: 'status',
					isArray: false,
					type: 'Int',
					isRequired: false,
					attributes: [],
				},
				createdAt: {
					name: 'createdAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
				},
				campaign: {
					name: 'campaign',
					isArray: false,
					type: {
						model: 'Campaign',
					},
					isRequired: false,
					attributes: [],
					association: {
						connectionType: 'BELONGS_TO',
						targetName: 'campaignID',
					},
				},
				rewardcategory: {
					name: 'rewardcategory',
					isArray: false,
					type: {
						model: 'Rewardcategory',
					},
					isRequired: false,
					attributes: [],
					association: {
						connectionType: 'BELONGS_TO',
						targetName: 'rewardcategoryID',
					},
				},
				updatedAt: {
					name: 'updatedAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
					isReadOnly: true,
				},
			},
			syncable: true,
			pluralName: 'Donationrecords',
			attributes: [
				{
					type: 'model',
					properties: {},
				},
				{
					type: 'key',
					properties: {
						name: 'byCampaignDR',
						fields: ['campaignID'],
					},
				},
				{
					type: 'key',
					properties: {
						name: 'byRewardcategory',
						fields: ['rewardcategoryID'],
					},
				},
				{
					type: 'auth',
					properties: {
						rules: [
							{
								groupClaim: 'cognito:groups',
								provider: 'userPools',
								allow: 'groups',
								groups: ['Admin'],
								operations: ['create', 'update', 'delete', 'read'],
							},
							{
								groupClaim: 'cognito:groups',
								provider: 'userPools',
								allow: 'groups',
								groups: ['Manager'],
								operations: ['read'],
							},
							{
								allow: 'public',
								operations: ['create', 'read'],
							},
						],
					},
				},
			],
		},
		Campaign: {
			name: 'Campaign',
			fields: {
				id: {
					name: 'id',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: [],
				},
				managerID: {
					name: 'managerID',
					isArray: false,
					type: 'ID',
					isRequired: false,
					attributes: [],
				},
				name: {
					name: 'name',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				link_thumbnail: {
					name: 'link_thumbnail',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				description: {
					name: 'description',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				short_description: {
					name: 'short_description',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				start_at: {
					name: 'start_at',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: true,
					attributes: [],
				},
				end_at: {
					name: 'end_at',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: true,
					attributes: [],
				},
				fund_goal: {
					name: 'fund_goal',
					isArray: false,
					type: 'Float',
					isRequired: true,
					attributes: [],
				},
				donation_received: {
					name: 'donation_received',
					isArray: false,
					type: 'Float',
					isRequired: false,
					attributes: [],
				},
				link_video: {
					name: 'link_video',
					isArray: false,
					type: 'AWSURL',
					isRequired: false,
					attributes: [],
				},
				donor_count: {
					name: 'donor_count',
					isArray: false,
					type: 'Int',
					isRequired: false,
					attributes: [],
				},
				createdAt: {
					name: 'createdAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
				},
				CDonationrecords: {
					name: 'CDonationrecords',
					isArray: true,
					type: {
						model: 'Donationrecord',
					},
					isRequired: false,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: 'HAS_MANY',
						associatedWith: 'campaign',
					},
				},
				CCampaignmembers: {
					name: 'CCampaignmembers',
					isArray: true,
					type: {
						model: 'Campaignmember',
					},
					isRequired: false,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: 'HAS_MANY',
						associatedWith: 'campaign',
					},
				},
				CRewardcategories: {
					name: 'CRewardcategories',
					isArray: true,
					type: {
						model: 'Rewardcategory',
					},
					isRequired: false,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: 'HAS_MANY',
						associatedWith: 'campaign',
					},
				},
				updatedAt: {
					name: 'updatedAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
					isReadOnly: true,
				},
			},
			syncable: true,
			pluralName: 'Campaigns',
			attributes: [
				{
					type: 'model',
					properties: {},
				},
				{
					type: 'auth',
					properties: {
						rules: [
							{
								groupClaim: 'cognito:groups',
								provider: 'userPools',
								allow: 'groups',
								groups: ['Admin'],
								operations: ['create', 'update', 'delete', 'read'],
							},
							{
								provider: 'userPools',
								ownerField: 'owner',
								allow: 'owner',
								operations: ['create', 'read', 'update'],
								identityClaim: 'cognito:username',
							},
							{
								allow: 'public',
								operations: ['read'],
							},
						],
					},
				},
			],
		},
		Campaignmember: {
			name: 'Campaignmember',
			fields: {
				id: {
					name: 'id',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: [],
				},
				donorID: {
					name: 'donorID',
					isArray: false,
					type: 'ID',
					isRequired: false,
					attributes: [],
				},
				first_name: {
					name: 'first_name',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				last_name: {
					name: 'last_name',
					isArray: false,
					type: 'String',
					isRequired: false,
					attributes: [],
				},
				email_address: {
					name: 'email_address',
					isArray: false,
					type: 'AWSEmail',
					isRequired: false,
					attributes: [],
				},
				phone_number: {
					name: 'phone_number',
					isArray: false,
					type: 'AWSPhone',
					isRequired: false,
					attributes: [],
				},
				createdAt: {
					name: 'createdAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
				},
				campaign: {
					name: 'campaign',
					isArray: false,
					type: {
						model: 'Campaign',
					},
					isRequired: false,
					attributes: [],
					association: {
						connectionType: 'BELONGS_TO',
						targetName: 'campaignID',
					},
				},
				updatedAt: {
					name: 'updatedAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
					isReadOnly: true,
				},
			},
			syncable: true,
			pluralName: 'Campaignmembers',
			attributes: [
				{
					type: 'model',
					properties: {},
				},
				{
					type: 'key',
					properties: {
						name: 'byCampaignCM',
						fields: ['campaignID'],
					},
				},
				{
					type: 'auth',
					properties: {
						rules: [
							{
								groupClaim: 'cognito:groups',
								provider: 'userPools',
								allow: 'groups',
								groups: ['Admin'],
								operations: ['create', 'update', 'delete', 'read'],
							},
							{
								provider: 'userPools',
								ownerField: 'owner',
								allow: 'owner',
								identityClaim: 'cognito:username',
								operations: ['create', 'update', 'delete', 'read'],
							},
						],
					},
				},
			],
		},
		Rewardcategory: {
			name: 'Rewardcategory',
			fields: {
				id: {
					name: 'id',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: [],
				},
				minimum_amount: {
					name: 'minimum_amount',
					isArray: false,
					type: 'Float',
					isRequired: true,
					attributes: [],
				},
				title: {
					name: 'title',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				description: {
					name: 'description',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: [],
				},
				estimate_delivery: {
					name: 'estimate_delivery',
					isArray: false,
					type: 'AWSDate',
					isRequired: false,
					attributes: [],
				},
				ship_to: {
					name: 'ship_to',
					isArray: false,
					type: 'String',
					isRequired: false,
					attributes: [],
				},
				sequence_order: {
					name: 'sequence_order',
					isArray: false,
					type: 'Float',
					isRequired: false,
					attributes: [],
				},
				is_available: {
					name: 'is_available',
					isArray: false,
					type: 'Boolean',
					isRequired: false,
					attributes: [],
				},
				createdAt: {
					name: 'createdAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
				},
				RCDonationrecords: {
					name: 'RCDonationrecords',
					isArray: true,
					type: {
						model: 'Donationrecord',
					},
					isRequired: false,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: 'HAS_MANY',
						associatedWith: 'rewardcategory',
					},
				},
				campaign: {
					name: 'campaign',
					isArray: false,
					type: {
						model: 'Campaign',
					},
					isRequired: false,
					attributes: [],
					association: {
						connectionType: 'BELONGS_TO',
						targetName: 'campaignID',
					},
				},
				updatedAt: {
					name: 'updatedAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
					isReadOnly: true,
				},
			},
			syncable: true,
			pluralName: 'Rewardcategories',
			attributes: [
				{
					type: 'model',
					properties: {},
				},
				{
					type: 'key',
					properties: {
						name: 'byCampaignRC',
						fields: ['campaignID'],
					},
				},
				{
					type: 'auth',
					properties: {
						rules: [
							{
								groupClaim: 'cognito:groups',
								provider: 'userPools',
								allow: 'groups',
								groups: ['Admin'],
								operations: ['create', 'update', 'delete', 'read'],
							},
							{
								provider: 'userPools',
								ownerField: 'owner',
								allow: 'owner',
								operations: ['create', 'read', 'update'],
								identityClaim: 'cognito:username',
							},
							{
								allow: 'public',
								operations: ['read'],
							},
						],
					},
				},
			],
		},
	},
	enums: {},
	nonModels: {},
	version: '5543697b3cda34bc0a6db65b7600981b',
};
