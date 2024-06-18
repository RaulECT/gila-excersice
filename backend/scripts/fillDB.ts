import connectToDB from '../utils/database';
import { NotificationType, MessageCategory, User } from '../src/schemas';
import { INITIAL_MESSAGE_CATEGORIES, INITIAL_NOTIFICATION_TYPES, INITIAL_USERS } from './mocks/database';
import mongoose from 'mongoose';

const fillDatabase = async () => {
  try {
    console.log('🎯 Filling database in proccess...');

    await fillNotificationTypes();
    await fillMessageCategories();
    await fillUsers();

  } catch (error) {
    throw error;
  }
}

const fillNotificationTypes = async () => {
  try {
    console.log('[1/3] 🖊️ Filling notification types...');

    await NotificationType.insertMany(INITIAL_NOTIFICATION_TYPES);

    console.log('[1/3] ✅ Notification types filled...');
  } catch (error) {
    throw error;
  }
}

const fillMessageCategories = async () => {
  try {
    console.log('[2/3] 🖊️ Filling Message categories...');

    await MessageCategory.insertMany(INITIAL_MESSAGE_CATEGORIES);

    console.log('[2/3] ✅ Message categories filled...');
  } catch (error) {
    throw error;
  }
}

const fillUsers = async () => {
  try {
    console.log('[3/3] 🖊️ Filling Users...');

    await User.insertMany(INITIAL_USERS)

    console.log('[3/3] ✅ Users filled...');
  } catch (error) {
    throw error;
  }
}

const run = async () => {
  try {
    await connectToDB();
    await fillDatabase();

    mongoose.connection.close();
    process.exit(1);
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
}

run();
