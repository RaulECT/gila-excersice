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
      console.log('usersByMessageCategory', usersByMessageCategory)
      await notifyUsers(usersByMessageCategory, messageCategory, message);
      const notificationLog = new NotificationLog({ sent_to: '6670fcaeb7d254cc135ae0f1', message_category: messageCategoryId, notification_type: '6670f0d2fc7cc75443ddd663', message })
      await notificationLog.save();

      return !!usersByMessageCategory;
    }
  },
}

export default notificationLogResolver;
