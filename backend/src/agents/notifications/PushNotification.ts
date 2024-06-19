import NotificationAgent from "./notificationAgent";
import { NOTIFICATION_AGENTS } from "../../constants";
import { IUser } from "../../types";

class PushNotification extends NotificationAgent {
  constructor() {
    super(NOTIFICATION_AGENTS.PUSH_NOTIFICATION);
  }

  notify(message: string, user: IUser): void {
    console.log(`Push notification sent:
      message: ${message}
      to: ${user.name}
      at: ${new Date().toISOString()}  
    `)
  }
}

export default PushNotification;
