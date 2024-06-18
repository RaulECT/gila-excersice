import { NotificationLog } from '../models';

interface SendNotificationProps {
  messageCategoryId: String,
  message: String
}

const notificationLogResolver = {
  Query: {},
  Mutation: {
    sendNotification: async (_:any, { messageCategoryId, message }: SendNotificationProps) => {
      const notificationLog = new NotificationLog({ sent_to: '6670fcaeb7d254cc135ae0f1', message_category: messageCategoryId, notification_type: '6670f0d2fc7cc75443ddd663', message })
      await notificationLog.save();

      return true;
    }
  },
}

export default notificationLogResolver;
