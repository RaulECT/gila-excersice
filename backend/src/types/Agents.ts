import { IUser } from './User';

export type INotificationAgent = {
  type: string;
  notify(message: string, user: IUser): void
}
