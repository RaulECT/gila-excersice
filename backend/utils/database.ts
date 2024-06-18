require('dotenv').config();

import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
}
}

export default connectToDB;
