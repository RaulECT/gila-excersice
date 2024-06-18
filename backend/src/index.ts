import express from 'express';
import morgan from 'morgan';
import connectToDB from '../utils/database';

const app = express();
const PORT = process.env.PORT || 4000;

connectToDB();

app.use(morgan('combined'));

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT} 🚀`)
});