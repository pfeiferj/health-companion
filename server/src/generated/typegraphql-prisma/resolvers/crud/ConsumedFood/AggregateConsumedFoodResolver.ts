import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateConsumedFoodArgs } from "./args/AggregateConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { AggregateConsumedFood } from "../../outputs/AggregateConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class AggregateConsumedFoodResolver {
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
