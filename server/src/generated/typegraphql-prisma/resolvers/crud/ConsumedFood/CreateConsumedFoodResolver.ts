import * as TypeGraphQL from "type-graphql";
import { CreateConsumedFoodArgs } from "./args/CreateConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class CreateConsumedFoodResolver {
  @TypeGraphQL.Mutation(_returns => ConsumedFood, {
    nullable: false
  })
  async createConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateConsumedFoodArgs): Promise<ConsumedFood> {
    return getPrismaFromContext(ctx).consumedFood.create(args);
  }
}
