import mongoose from 'mongoose';
import { GraphQLError } from 'graphql';
import { User, MessageCategory } from '../models';
import { notifyUsers } from '../services/notifications';
import { ERROR_MESSAGES } from '../constants';

interface SendNotificationProps {
  messageCategoryId: string,
  message: string
}

const notificationLogResolver = {
  Query: {},
  Mutation: {
    sendNotification: async (_: any, { messageCategoryId, message }: SendNotificationProps) => {
      if (!mongoose.Types.ObjectId.isValid(messageCategoryId)) throw new GraphQLError(ERROR_MESSAGES.INVALID_MESSAGE_ID)

      const messageCategory = await MessageCategory.findById(messageCategoryId);

      if (!messageCategory) throw new GraphQLError(ERROR_MESSAGES.MESSAGE_CATEGORY_NOT_FOUND);

      const usersByMessageCategory = await User
        .find({ message_category: messageCategoryId })
        .populate('notification_type')
        .populate('message_category')

      await notifyUsers(usersByMessageCategory, messageCategory, message);

      return !!usersByMessageCategory;
    }
  },
}

export default notificationLogResolver;
