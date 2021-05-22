import { ResolversEnhanceMap, applyResolversEnhanceMap } from '../generated/typegraphql-prisma';
import { Authorized, UseMiddleware } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  Weight: {
    createWeight: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    deleteWeight: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    updateWeight: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    deleteManyWeight: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    updateManyWeight: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    upsertWeight: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);
