import * as TypeGraphQL from "type-graphql";
import { FindUniqueConsumedFoodArgs } from "./args/FindUniqueConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class FindUniqueConsumedFoodResolver {
  @TypeGraphQL.Query(_returns => ConsumedFood, {
    nullable: true
  })
  async consumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.findUnique(args);
  }
}
