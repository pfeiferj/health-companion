import { PrismaClient } from '@prisma/client';
import { buildContext } from 'graphql-passport';
import { Context as PassportContext } from 'graphql-passport/src/buildContext';
import { User } from '@prisma/client';

const prisma = new PrismaClient();

export interface BaseContext {
  prisma: PrismaClient;
  req: any;
  res: any;
}

export type ContextReturn = PassportContext<User> & BaseContext;

export interface Context {
  (data: { req: any; res: any }): ContextReturn;
}

export function createContext(): Context {
  return ({ req, res }) => {
    return buildContext<User, BaseContext>({ req, res, prisma }) as ContextReturn;
  };
}
