import * as TypeGraphQL from "type-graphql";
import { UpsertConsumedFoodArgs } from "./args/UpsertConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class UpsertConsumedFoodResolver {
  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: false
  })
  async upsertConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertConsumedFoodArgs): Promise<ConsumedFood> {
    return getPrismaFromContext(ctx).consumedFood.upsert(args);
  }
}
