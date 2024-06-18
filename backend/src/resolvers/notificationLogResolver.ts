import { NotificationLog, User, MessageCategory } from '../models';
import { notifyUsers } from '../services/notifications';  

interface SendNotificationProps {
  messageCategoryId: string,
  message: string
}

const notificationLogResolver = {
  Query: {},
  Mutation: {
    sendNotification: async (_:any, { messageCategoryId, message }: SendNotificationProps) => {
      const messageCategory = await MessageCategory.findById(messageCategoryId);
      const usersByMessageCategory = await User
        .find({message_category: messageCategoryId})
        .populate('notification_type')
        .populate('message_category')

      await notifyUsers(usersByMessageCategory, messageCategory, message);

      return !!usersByMessageCategory;
    }
  },
}

export default notificationLogResolver;
