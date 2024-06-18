import { MessageCategory } from '../models';

const messageCategoryResolver = {
  Query: {
    getAllMessageCategories: async () => {
      return await MessageCategory.find()
    }
  },
  Mutation: {},
}

export default messageCategoryResolver;
