import NotificationAgent from "./notificationAgent";
import { NOTIFICATION_AGENTS } from "../../constants";
import { IUser } from "../../types";

class SMS extends NotificationAgent {
  constructor() {
    super(NOTIFICATION_AGENTS.SMS);
  }

  notify(message: string, user: IUser): void {
    console.log(`💬 SMS notification sent:
      message: ${message}
      to: ${user.name}
      at: ${new Date().toISOString()}  
    `)
  }
}

export default SMS
