import * as TypeGraphQL from "type-graphql";
import { DeleteConsumedFoodArgs } from "./args/DeleteConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class DeleteConsumedFoodResolver {
  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: true
  })
  async deleteConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteConsumedFoodArgs): Promise<ConsumedFood | null> {
    return getPrismaFromContext(ctx).consumedFood.delete(args);
  }
}
