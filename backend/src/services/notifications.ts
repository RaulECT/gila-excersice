import mongoose from 'mongoose';
import { IUser, IMessageCategory, INotificationType } from '../types';

type INotificationToSend = {
  messageType: IMessageCategory | null;
  notificationsAgent: INotificationType;
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
      notificationsAgent: notificationType
    }));

    return [...previousUsers, ...notifications];
  }, []);

  console.log('[notificationsToSend]', notificationsToSend)
}