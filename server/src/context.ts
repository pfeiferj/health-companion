import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ContextReturn {
  prisma: PrismaClient;
  req: any;
}

export interface Context {
  (data: { req: any }): ContextReturn;
}

export function createContext(): Context {
  return ({ req }) => {
    return { req, prisma };
  };
}
