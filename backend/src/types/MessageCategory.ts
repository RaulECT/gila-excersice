import { Document } from 'mongoose';

export interface IMessageCategory extends Document {
  category: string;
}
