import messageCategoryResolver from "./messageCategoryResolver";
import notificationLogResolver from "./notificationLogResolver";

const resolvers = {
  Query: {
    ...messageCategoryResolver.Query,
    ...notificationLogResolver.Query
  },
  Mutation: {
    ...messageCategoryResolver.Mutation,
    ...notificationLogResolver.Mutation
  }
}

export default resolvers;
