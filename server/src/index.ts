import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { createContext } from './context';
import { resolvers } from './generated/typegraphql-prisma';
import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import { registerAuth, authChecker, AuthResolver } from './auth';
import config from './config';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import './enhancers/register';

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use(
  session({
    genid: () => uuidv4(),
    cookie: {
      sameSite: 'none',
      httpOnly: true,
      secure: false,
      maxAge: 60000,
    },
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);

const main = async () => {
  const schema = await tq.buildSchema({
    resolvers: [...resolvers, AuthResolver],
    authChecker,
    validate: false,
  });

  const context = createContext();

  registerAuth(app, context);

  const server = new ApolloServer({ schema, context });
  server.start();
  server.applyMiddleware({ app, cors: corsOptions });

  app.listen({ port: config.PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${config.PORT + server.graphqlPath}`);
  });
};

main();
