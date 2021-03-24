import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateConsumedFoodArgs } from "./args/AggregateConsumedFoodArgs";
import { CreateConsumedFoodArgs } from "./args/CreateConsumedFoodArgs";
import { DeleteConsumedFoodArgs } from "./args/DeleteConsumedFoodArgs";
import { DeleteManyConsumedFoodArgs } from "./args/DeleteManyConsumedFoodArgs";
import { FindFirstConsumedFoodArgs } from "./args/FindFirstConsumedFoodArgs";
import { FindManyConsumedFoodArgs } from "./args/FindManyConsumedFoodArgs";
import { FindUniqueConsumedFoodArgs } from "./args/FindUniqueConsumedFoodArgs";
import { UpdateConsumedFoodArgs } from "./args/UpdateConsumedFoodArgs";
import { UpdateManyConsumedFoodArgs } from "./args/UpdateManyConsumedFoodArgs";
import { UpsertConsumedFoodArgs } from "./args/UpsertConsumedFoodArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateConsumedFood } from "../../outputs/AggregateConsumedFood";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class ConsumedFoodCrudResolver {
  @TypeGraphQL.Query(_returns => ConsumedFood, {
    nullable: true
  })
  async consumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => ConsumedFood, {
    nullable: true
  })
  async findFirstConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [ConsumedFood], {
    nullable: false
  })
  async consumedFoods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyConsumedFoodArgs): Promise<ConsumedFood[]> {
    return getPrismaFromContext(ctx).consumedFood.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: false
  })
  async createConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateConsumedFoodArgs): Promise<ConsumedFood> {
    return getPrismaFromContext(ctx).consumedFood.create(args);
  }

  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: true
  })
  async deleteConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: true
  })
  async updateConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyConsumedFoodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).consumedFood.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyConsumedFoodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).consumedFood.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: false
  })
  async upsertConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertConsumedFoodArgs): Promise<ConsumedFood> {
    return getPrismaFromContext(ctx).consumedFood.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateConsumedFood, {
    nullable: false
  })
  async aggregateConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateConsumedFoodArgs): Promise<AggregateConsumedFood> {
    return getPrismaFromContext(ctx).consumedFood.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
