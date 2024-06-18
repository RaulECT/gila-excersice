const path = require('path');
import connectToDB from '../utils/database';
import { startStandaloneServer } from '@apollo/server/standalone';

const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { makeExecutableSchema } = require('@graphql-tools/schema');
import resolvers from './resolvers';
import { ApolloServer } from '@apollo/server';

const typesArray = loadFilesSync(path.join(__dirname, './GQL/*.gql'));
const typeDefs = mergeTypeDefs(typesArray);

connectToDB();

const run = async () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });
  
  const server = new ApolloServer({ schema });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
}

run();
