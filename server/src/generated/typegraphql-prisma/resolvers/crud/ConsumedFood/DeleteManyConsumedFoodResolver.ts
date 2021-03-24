import * as TypeGraphQL from "type-graphql";
import { DeleteManyConsumedFoodArgs } from "./args/DeleteManyConsumedFoodArgs";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class DeleteManyConsumedFoodResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyConsumedFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyConsumedFoodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).consumedFood.deleteMany(args);
  }
}
