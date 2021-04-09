import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { createContext } from './context';
import { resolvers } from './generated/typegraphql-prisma';
import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import registerAuth from './auth';
import config from './config';

const app = express();

app.use(
  session({
    genid: () => uuidv4(),
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);

const main = async () => {
  const schema = await tq.buildSchema({
    resolvers,
  });

  const context = createContext();

  registerAuth(app, context);

  const server = new ApolloServer({ schema, context });
  server.applyMiddleware({ app });

  app.listen({ port: config.PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${config.PORT + server.graphqlPath}`);
  });
};

main();
