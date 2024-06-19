import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
import { NotificationLog } from "./NotificationLog";

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

describe('NotificationLog model', () => {
  it('should create a new notification log', async () => {
    const data = {
      sent_to: '66725e0d8e40c5eafd06f3d1',
      message_category: '66725e1b9fc71154ec0c8532',
      notification_type: '66725e2ae2facf2b881fe809',
      message: 'Hi!'
    };
    const notificationLog = new NotificationLog(data);

    const notificationLogSaved = await notificationLog.save();

    expect(notificationLogSaved.message).toBe(data.message)
  })
});
