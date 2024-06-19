import { INotificationAgent, IUser } from '../../types';

class NotificationAgent implements INotificationAgent {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  notify(message: string, user: IUser): void {
    console.log(`Defaul notification agent has sent:
      message: ${message}
      to: ${user.name}
      at: ${new Date().toISOString()}
    `)
  }
}

export default NotificationAgent
