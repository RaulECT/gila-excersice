import { IUser, IMessageCategory, INotificationType, INotificationLog, INotificationAgent } from '../types';
import { NotificationLog } from '../models';
import { NotificationAgent, SMS, Email, PushNotification } from '../agents/notifications';
import { DICTIONARY, NOTIFICATION_AGENTS } from '../constants';

type INotificationToSend = {
  messageType: IMessageCategory | null;
  notificationAgent: INotificationType;
  message: string;
  user: IUser;
}

type INotificationAgentFactory = {
  [key in NOTIFICATION_AGENTS]: INotificationAgent;
};

const NotificationAgentFactory: INotificationAgentFactory = {
  [NOTIFICATION_AGENTS.SMS]: new SMS(),
  [NOTIFICATION_AGENTS.EMAIL]: new Email(),
  [NOTIFICATION_AGENTS.PUSH_NOTIFICATION]: new PushNotification()
}

export const notifyUsers = async (usersToNotify: IUser[], messageCategory: IMessageCategory | null, message: string) => {
  const notificationsToSend: INotificationToSend[] = usersToNotify.reduce((previousUsers: INotificationToSend[], currentUser: IUser): INotificationToSend[] => {
    const notifications = currentUser.notification_type.map(notificationType => ({
      message,
      user: currentUser,
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
    logs.push(log.save as unknown as Promise<INotificationLog>);

    const agent: INotificationAgent = NotificationAgentFactory[notificationAgent.type as NOTIFICATION_AGENTS] || new NotificationAgent(DICTIONARY.DEFAULT);
    agent.notify(message, user);
  });

  await Promise.all(logs)
}


