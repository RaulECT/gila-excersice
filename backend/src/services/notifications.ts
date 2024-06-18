import mongoose, { Document } from 'mongoose';
import { IUser, IMessageCategory, INotificationType, INotificationLog } from '../types';
import { NotificationLog } from '../models'

type INotificationToSend = {
  messageType: IMessageCategory | null;
  notificationAgent: INotificationType;
  message: String;
  user: {
    _id: mongoose.Types.ObjectId;
    name: string;
  };
}

export const notifyUsers = async (usersToNotify: IUser[], messageCategory: IMessageCategory | null, message: string) => {
  const notificationsToSend: INotificationToSend[] = usersToNotify.reduce((previousUsers: INotificationToSend[], currentUser: IUser): INotificationToSend[] => {
    const user = {
      _id: currentUser._id,
      name: currentUser.name
    }
    const notifications = currentUser.notification_type.map(notificationType => ({
      user,
      message,
      messageType: messageCategory,
      notificationAgent: notificationType
    }));

    return [...previousUsers, ...notifications];
  }, []);

  await sendNotifications(notificationsToSend);
}

const sendNotifications = async (notifications: INotificationToSend[]) => {
  const logs: Promise<INotificationLog>[] = []

  notifications.forEach(async ({ user, messageType, notificationAgent, message }) => {
    const log = new NotificationLog({
      sent_to: user._id,
      message_category: messageType?._id,
      notification_type: notificationAgent._id,
      message
    })
    logs.push(log.save as unknown as Promise<INotificationLog>)

    console.log(`Notification sent: ${message} and used ${notificationAgent.type} as notification agent`)
  });

  await Promise.all(logs)
}


