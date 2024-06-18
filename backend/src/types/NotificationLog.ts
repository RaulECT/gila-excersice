import { Document, ObjectId } from 'mongoose';

export interface INotificationLog extends Document {
  sent_to: ObjectId,
  message_category: ObjectId,
  notification_type: ObjectId,
  message: String
}
