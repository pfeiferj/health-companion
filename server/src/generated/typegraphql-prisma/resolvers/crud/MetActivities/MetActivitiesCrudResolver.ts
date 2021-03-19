import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMetActivitiesArgs } from "./args/AggregateMetActivitiesArgs";
import { CreateMetActivitiesArgs } from "./args/CreateMetActivitiesArgs";
import { DeleteManyMetActivitiesArgs } from "./args/DeleteManyMetActivitiesArgs";
import { DeleteMetActivitiesArgs } from "./args/DeleteMetActivitiesArgs";
import { FindFirstMetActivitiesArgs } from "./args/FindFirstMetActivitiesArgs";
import { FindManyMetActivitiesArgs } from "./args/FindManyMetActivitiesArgs";
import { FindUniqueMetActivitiesArgs } from "./args/FindUniqueMetActivitiesArgs";
import { UpdateManyMetActivitiesArgs } from "./args/UpdateManyMetActivitiesArgs";
import { UpdateMetActivitiesArgs } from "./args/UpdateMetActivitiesArgs";
import { UpsertMetActivitiesArgs } from "./args/UpsertMetActivitiesArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { MetActivities } from "../../../models/MetActivities";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetActivities } from "../../outputs/AggregateMetActivities";

@TypeGraphQL.Resolver(_of => MetActivities)
export class MetActivitiesCrudResolver {
  @TypeGraphQL.Query(_returns => MetActivities, {
    nullable: true
  })
  async findUniqueMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => MetActivities, {
    nullable: true
  })
  async findFirstMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [MetActivities], {
    nullable: false
  })
  async findManyMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMetActivitiesArgs): Promise<MetActivities[]> {
    return getPrismaFromContext(ctx).metActivities.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: false
  })
  async createMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMetActivitiesArgs): Promise<MetActivities> {
    return getPrismaFromContext(ctx).metActivities.create(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: true
  })
  async deleteMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: true
  })
  async updateMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMetActivitiesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivities.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMetActivitiesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivities.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: false
  })
  async upsertMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMetActivitiesArgs): Promise<MetActivities> {
    return getPrismaFromContext(ctx).metActivities.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateMetActivities, {
    nullable: false
  })
  async aggregateMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMetActivitiesArgs): Promise<AggregateMetActivities> {
    return getPrismaFromContext(ctx).metActivities.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
