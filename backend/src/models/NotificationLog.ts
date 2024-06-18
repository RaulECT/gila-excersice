import mongoose, { Schema } from 'mongoose';
import { INotificationLog } from '../types';

const NotificationLogSchema: Schema = new Schema({
  sent_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  message_category: { type: mongoose.Schema.Types.ObjectId, ref: 'MessageCategory', required: true},
  notification_type: { type: mongoose.Schema.Types.ObjectId, ref: 'NotificationType', required: true},
  message: String
}, { timestamps: true });

export const NotificationLog = mongoose.model<INotificationLog>('NotificationLog', NotificationLogSchema);
