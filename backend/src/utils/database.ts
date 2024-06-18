import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

function connectToDB() {
  mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB 🧳'))
  .catch(err => console.error(err));
}

export default connectToDB;
