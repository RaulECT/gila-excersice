import express from 'express';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import connectToDB from '../utils/database';
import { GQLSchema } from './schemas';
import messageCategoryResolver from './resolvers/messageCategoryResolver';
import notificationLogResolver from './resolvers/notificationLogResolver';

const app = express();
const PORT = process.env.PORT || 4000;

connectToDB();

const resolvers = {
  ...messageCategoryResolver,
  ...notificationLogResolver
}

app.use(morgan('combined'));

app.use('/graphql', graphqlHTTP({
  schema: GQLSchema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT} 🚀`)
});