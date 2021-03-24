import * as TypeGraphQL from "type-graphql";
import { FindManyConsumedFoodArgs } from "./args/FindManyConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class FindManyConsumedFoodResolver {
  @TypeGraphQL.Query(_returns => [ConsumedFood], {
    nullable: false
  })
  async consumedFoods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyConsumedFoodArgs): Promise<ConsumedFood[]> {
    return getPrismaFromContext(ctx).consumedFood.findMany(args);
  }
}
