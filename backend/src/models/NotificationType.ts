import mongoose, { Schema } from 'mongoose';
import { INotificationType } from '../types';

const NotificationTypeSchema: Schema = new Schema({
  type: { type: String, required: true }
});

export const NotificationType = mongoose.model<INotificationType>('NotificationType', NotificationTypeSchema);
