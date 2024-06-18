import { mergeSchemas } from '@graphql-tools/schema';
import { messageCategoryGQLSchema } from './MessageCategory';
import { notificationLogGQLSchema } from './NotificationLog';

export { MessageCategory } from './MessageCategory';
export { NotificationType } from './NotificationType';
export { User } from './User';
export { NotificationLog } from './NotificationLog';

export const GQLSchema = mergeSchemas({
  schemas: [messageCategoryGQLSchema, notificationLogGQLSchema]
});
