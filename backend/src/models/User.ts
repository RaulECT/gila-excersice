import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  message_category: [{ type: mongoose.Schema.Types.ObjectId, ref: ' MessageCategory' }],
  notification_type: [{ type: mongoose.Schema.Types.ObjectId, ref: ' NotificationType' }],
});

export const User = mongoose.model<IUser>('User', UserSchema);
