import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWeightArgs } from "./args/AggregateWeightArgs";
import { CreateWeightArgs } from "./args/CreateWeightArgs";
import { DeleteManyWeightArgs } from "./args/DeleteManyWeightArgs";
import { DeleteWeightArgs } from "./args/DeleteWeightArgs";
import { FindFirstWeightArgs } from "./args/FindFirstWeightArgs";
import { FindManyWeightArgs } from "./args/FindManyWeightArgs";
import { FindUniqueWeightArgs } from "./args/FindUniqueWeightArgs";
import { UpdateManyWeightArgs } from "./args/UpdateManyWeightArgs";
import { UpdateWeightArgs } from "./args/UpdateWeightArgs";
import { UpsertWeightArgs } from "./args/UpsertWeightArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Weight } from "../../../models/Weight";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWeight } from "../../outputs/AggregateWeight";

@TypeGraphQL.Resolver(_of => Weight)
export class WeightCrudResolver {
  @TypeGraphQL.Query(_returns => Weight, {
    nullable: true
  })
  async weight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Weight, {
    nullable: true
  })
  async findFirstWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Weight], {
    nullable: false
  })
  async weights(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyWeightArgs): Promise<Weight[]> {
    return getPrismaFromContext(ctx).weight.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: false
  })
  async createWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateWeightArgs): Promise<Weight> {
    return getPrismaFromContext(ctx).weight.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: true
  })
  async deleteWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: true
  })
  async updateWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyWeightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).weight.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyWeightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).weight.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: false
  })
  async upsertWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertWeightArgs): Promise<Weight> {
    return getPrismaFromContext(ctx).weight.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateWeight, {
    nullable: false
  })
  async aggregateWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWeightArgs): Promise<AggregateWeight> {
    return getPrismaFromContext(ctx).weight.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
