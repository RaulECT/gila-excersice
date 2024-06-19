import { Types } from 'mongoose';
import { NOTIFICATION_AGENTS, MESSAGE_CATEGORIES } from '../../src/constants';

export const INITIAL_MESSAGE_CATEGORIES = [
	{ _id: '666fb268bc47888ece317b2b', category: MESSAGE_CATEGORIES.SPORTS },
	{ _id: '666fb28970cec8af78d15959', category: MESSAGE_CATEGORIES.FINANCE },
	{ _id: '666fb29fa3e2aab6be72b7c1', category: MESSAGE_CATEGORIES.MOVIES },
];

export const INITIAL_NOTIFICATION_TYPES = [
	{ _id: '6670f0d2fc7cc75443ddd663', type: NOTIFICATION_AGENTS.SMS },
	{ _id: '6670f0d738c325c82077b8b5', type: NOTIFICATION_AGENTS.EMAIL },
	{ _id: '6670f0dcb20c9fc0a7a131ee', type: NOTIFICATION_AGENTS.PUSH_NOTIFICATION },
]

export const INITIAL_USERS = [
  {
    name: 'John Doe',
    email: 'john.doe@mongo.com',
    phone_number: '+529992178985',
    message_category: [new Types.ObjectId('666fb268bc47888ece317b2b'), new Types.ObjectId('666fb28970cec8af78d15959')],
    notification_type: [new Types.ObjectId('6670f0dcb20c9fc0a7a131ee')]
  }
]
