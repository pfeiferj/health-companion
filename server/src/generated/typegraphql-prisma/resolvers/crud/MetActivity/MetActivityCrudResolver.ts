import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMetActivityArgs } from "./args/AggregateMetActivityArgs";
import { CreateMetActivityArgs } from "./args/CreateMetActivityArgs";
import { DeleteManyMetActivityArgs } from "./args/DeleteManyMetActivityArgs";
import { DeleteMetActivityArgs } from "./args/DeleteMetActivityArgs";
import { FindFirstMetActivityArgs } from "./args/FindFirstMetActivityArgs";
import { FindManyMetActivityArgs } from "./args/FindManyMetActivityArgs";
import { FindUniqueMetActivityArgs } from "./args/FindUniqueMetActivityArgs";
import { UpdateManyMetActivityArgs } from "./args/UpdateManyMetActivityArgs";
import { UpdateMetActivityArgs } from "./args/UpdateMetActivityArgs";
import { UpsertMetActivityArgs } from "./args/UpsertMetActivityArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { MetActivity } from "../../../models/MetActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetActivity } from "../../outputs/AggregateMetActivity";

@TypeGraphQL.Resolver(_of => MetActivity)
export class MetActivityCrudResolver {
  @TypeGraphQL.Query(_returns => MetActivity, {
    nullable: true
  })
  async metActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => MetActivity, {
    nullable: true
  })
  async findFirstMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [MetActivity], {
    nullable: false
  })
  async metActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMetActivityArgs): Promise<MetActivity[]> {
    return getPrismaFromContext(ctx).metActivity.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: false
  })
  async createMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMetActivityArgs): Promise<MetActivity> {
    return getPrismaFromContext(ctx).metActivity.create(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: true
  })
  async deleteMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: true
  })
  async updateMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMetActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivity.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMetActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivity.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: false
  })
  async upsertMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMetActivityArgs): Promise<MetActivity> {
    return getPrismaFromContext(ctx).metActivity.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateMetActivity, {
    nullable: false
  })
  async aggregateMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMetActivityArgs): Promise<AggregateMetActivity> {
    return getPrismaFromContext(ctx).metActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
