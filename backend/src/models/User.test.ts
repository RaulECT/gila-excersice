import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
import { User } from "./User";

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

describe('User model', () => {
  it('should create a new user', async () => {
    const data = {
      name: 'Doe',
      email: 'email@email.com',
      phone_number: '+529991243576',
      message_category: [],
      notification_type: []
    }
    const user = new User(data);

    const userSaved = await user.save();

    expect(userSaved.name).toBe(data.name);
  });
});
