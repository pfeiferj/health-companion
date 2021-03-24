import * as TypeGraphQL from "type-graphql";
import { UpdateManyConsumedFoodArgs } from "./args/UpdateManyConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class UpdateManyConsumedFoodResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyConsumedFoodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).consumedFood.updateMany(args);
  }
}
