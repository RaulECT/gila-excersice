import NotificationAgent from "./notificationAgent";
import { NOTIFICATION_AGENTS } from "../../constants";
import { IUser } from "../../types";

class Email extends NotificationAgent {
  constructor() {
    super(NOTIFICATION_AGENTS.EMAIL);
  }

  notify(message: string, user: IUser): void {
    console.log(`E-mail notification sent:
      message: ${message}
      to: ${user.name}
      at: ${new Date().toISOString()}  
    `)
  }
}

export default Email
