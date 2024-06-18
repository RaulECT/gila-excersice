import { MessageCategory } from '../schemas';

const messageCategoryResolver = {
  getAllMessageCategories: async () => {
    return await MessageCategory.find()
  }
}

export default messageCategoryResolver;
