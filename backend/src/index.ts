import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT} 🚀`)
});