import * as TypeGraphQL from "type-graphql";
import { FindFirstConsumedFoodArgs } from "./args/FindFirstConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class FindFirstConsumedFoodResolver {
  @TypeGraphQL.Query(_returns => ConsumedFood, {
    nullable: true
  })
  async findFirstConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.findFirst(args);
  }
}
