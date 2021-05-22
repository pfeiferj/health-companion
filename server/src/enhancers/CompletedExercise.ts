import { ResolversEnhanceMap, applyResolversEnhanceMap } from '../generated/typegraphql-prisma';
import { Authorized, UseMiddleware } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  CompletedExercise: {
    createCompletedExercise: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    deleteCompletedExercise: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    updateCompletedExercise: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    deleteManyCompletedExercise: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    updateManyCompletedExercise: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        if (data.context.req.user.role !== 'ADMIN') {
          data.args.where.userId = data.context.req.user.id;
          data.args.data.userId = data.context.req.user.id;
        }
        return next();
      }),
    ],
    upsertCompletedExercise: [
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
