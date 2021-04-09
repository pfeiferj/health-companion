import bcrypt from 'bcrypt';
import { UseMiddleware } from 'type-graphql';
import { ResolversEnhanceMap, applyResolversEnhanceMap } from '../generated/typegraphql-prisma';
import { Authorized } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    createUser: [
      UseMiddleware(async (data, next) => {
        if (data.args.data.password) {
          data.args.data.password = await bcrypt.hash(data.args.data.password, 10);
        }
        return next();
      }),
    ],
    user: [
      Authorized(),
      UseMiddleware(async (data, next) => {
        data.args.where.id = data.context.req.user.id;
        return next();
      }),
    ],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);
