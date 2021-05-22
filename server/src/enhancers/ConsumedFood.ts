import { ResolversEnhanceMap, applyResolversEnhanceMap } from '../generated/typegraphql-prisma';
import { Authorized, UseMiddleware } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  ConsumedFood: {
    createConsumedFood: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    deleteConsumedFood: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    updateConsumedFood: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.data.userId = data.context.req.user.id;
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    deleteManyConsumedFood: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    updateManyConsumedFood: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    upsertConsumedFood: [
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
