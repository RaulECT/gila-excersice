import { Document, ObjectId } from 'mongoose';

export interface IUser extends Document {
  name: string;
    email: string;
    phone_number: string;
    subscribed:  ObjectId[];
    channels: ObjectId [];
}
