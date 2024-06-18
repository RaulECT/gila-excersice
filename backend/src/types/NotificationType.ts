import mongoose, { Document } from 'mongoose';

export interface INotificationType extends Document {
  _id: mongoose.Types.ObjectId;
  type: string;
}