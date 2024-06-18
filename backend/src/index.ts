import path from 'path';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';

import connectToDB from '../utils/database';
import resolvers from './resolvers';

const typesArray = loadFilesSync(path.join(__dirname, './GQL/*.gql'));
const typeDefs = mergeTypeDefs(typesArray);

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

connectToDB();
run();
