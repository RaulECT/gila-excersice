import mongoose, { Schema } from 'mongoose';
import { IMessageCategory } from '../types';
import { buildSchema } from 'graphql';

const MessageCategorySchema: Schema = new Schema({
  category: { type: String, required: true }
});

export const MessageCategory = mongoose.model<IMessageCategory>('MessageCategory', MessageCategorySchema);
