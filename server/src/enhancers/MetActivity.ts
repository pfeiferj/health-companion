import { ResolversEnhanceMap, applyResolversEnhanceMap } from '../generated/typegraphql-prisma';
import { Authorized } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  MetActivity: {
    createMetActivity: [Authorized(['ADMIN'])],
    deleteMetActivity: [Authorized(['ADMIN'])],
    updateMetActivity: [Authorized(['ADMIN'])],
    deleteManyMetActivity: [Authorized(['ADMIN'])],
    updateManyMetActivity: [Authorized(['ADMIN'])],
    upsertMetActivity: [Authorized(['ADMIN'])],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);
