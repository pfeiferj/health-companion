import * as TypeGraphQL from "type-graphql";
import { UpdateConsumedFoodArgs } from "./args/UpdateConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class UpdateConsumedFoodResolver {
  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: true
  })
  async updateConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.update(args);
  }
}
