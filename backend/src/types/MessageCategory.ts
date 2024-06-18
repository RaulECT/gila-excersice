import mongoose, { Document } from 'mongoose';

export interface IMessageCategory extends Document {
  _id: mongoose.Types.ObjectId;
  category: string;
}
