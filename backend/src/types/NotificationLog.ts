import mongoose, { Document } from 'mongoose';
import { IUser } from './User'
import { IMessageCategory } from './MessageCategory'
import { INotificationType } from './NotificationType'

export interface INotificationLog extends Document {
  _id: mongoose.Types.ObjectId;
  sent_to: IUser;
  message_category: IMessageCategory;
  notification_type: INotificationType;
  message: String;
}
