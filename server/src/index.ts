import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { createContext } from './context';
import { resolvers } from './generated/typegraphql-prisma';
import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import passport from 'passport';
import type { User } from '@prisma/client';

import { Strategy as LocalStrategy } from 'passport-local';

const SESSION_SECRECT = 'bad secret';

const PORT = 4000;
const app = express();

passport.serializeUser((user: unknown, done) => {
  done(null, (user as User).id);
});

passport.deserializeUser((id, done) => {
  done(null, { id });
});

app.use(
  session({
    genid: () => uuidv4(),
    secret: SESSION_SECRECT,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

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

  passport.use(
    new LocalStrategy(async function (username, password, done) {
      console.log(username, password);
      const user = await context.prisma.user.findUnique({ where: { username } });
      console.log(user);

      return done(null, user);
    }),
  );

  app.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/blah',
      failureFlash: false,
    }),
  );

  const server = new ApolloServer({ schema, context });
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

main();
