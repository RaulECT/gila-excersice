import mongoose, { Document } from 'mongoose';
import { IMessageCategory } from './MessageCategory';
import { INotificationType } from './NotificationType';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone_number: string;
  message_category: IMessageCategory[];
  notification_type: INotificationType[];
}
