// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Donationrecord, Campaign, Campaignmember, Rewardcategory } = initSchema(schema);

export { Donationrecord, Campaign, Campaignmember, Rewardcategory };
