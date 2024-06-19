import path from 'path';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';
import loglevel from 'loglevel';

import connectToDB from '../utils/database';
import resolvers from './resolvers';
import { DEFAULT_CONFIG } from './constants';

const typesArray = loadFilesSync(path.join(__dirname, './GQL/*.gql'));
const typeDefs = mergeTypeDefs(typesArray);
const PORT = process.env.PORT ? parseInt(process.env.PORT) : DEFAULT_CONFIG.PORT;

const run = async () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });
  
  const logger = loglevel.getLogger('apollo-server');
  logger.setLevel(loglevel.levels.INFO);

  const server = new ApolloServer({
    logger,
    schema,
    includeStacktraceInErrorResponses: true
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  
  console.log(`🚀 Notification server running at: ${url}`);
}

connectToDB();
run();
