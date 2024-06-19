import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MessageCategory } from "./MessageCategory";

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

describe('MessageCategory model', () => {
  it('should create a new message category', async () => {
    const category = 'Technology'
    const messageCategory = new MessageCategory({ category });

    const messageCategorySaved = await messageCategory.save();
    expect(messageCategorySaved.category).toBe(category);
  });
});
