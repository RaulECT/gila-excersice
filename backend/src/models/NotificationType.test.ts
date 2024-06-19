import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
import { NotificationType } from "./NotificationType";

let mongoTestServer: MongoMemoryServer;

beforeAll(async () => {
  mongoTestServer = await MongoMemoryServer.create();
  const urlTestServer = mongoTestServer.getUri();

  await mongoose.connect(urlTestServer);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoTestServer.stop();
});

describe('NotificationType model', () => {
  it('should create a new notification type', async () => {
    const type = 'Phone call';
    const notificationType = new NotificationType({
      type
    });

    const notificationTypeSaved =  await notificationType.save();

    expect(notificationTypeSaved.type).toBe(type)
  });
});
