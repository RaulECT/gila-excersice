import { mergeSchemas } from '@graphql-tools/schema';
import { messageCategoryGQLSchema } from './MessageCategory';

export { MessageCategory } from './MessageCategory';
export { NotificationType } from './NotificationType';
export { User } from './User';

export const GQLSchema = mergeSchemas({
  schemas: [messageCategoryGQLSchema]
});
