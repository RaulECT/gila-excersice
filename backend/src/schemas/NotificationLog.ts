import mongoose, { Schema } from 'mongoose';
import { INotificationLog } from '../types';
import { buildSchema } from 'graphql';

const NotificationLogSchema: Schema = new Schema({
  sent_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  message_category: { type: mongoose.Schema.Types.ObjectId, ref: 'MessageCategory', required: true},
  notification_type: { type: mongoose.Schema.Types.ObjectId, ref: 'NotificationType', required: true},
  message: String
}, { timestamps: true });

export const NotificationLog = mongoose.model<INotificationLog>('NotificationLog', NotificationLogSchema);

export const notificationLogGQLSchema = buildSchema(`
  type NotificationLog {
    sent_to: User!
    message_category: MessageCategory!
    notification_type: NotificationType!
    created_at: Date!
    message: String
  }

  type Mutation {
    sendNotification(messageCategoryId: ID!, message: String!): Boolean
  }
`)
