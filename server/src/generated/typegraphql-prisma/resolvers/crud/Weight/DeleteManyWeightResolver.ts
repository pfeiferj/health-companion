import * as TypeGraphQL from "type-graphql";
import { DeleteManyWeightArgs } from "./args/DeleteManyWeightArgs";
import { Weight } from "../../../models/Weight";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class DeleteManyWeightResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyWeightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).weight.deleteMany(args);
  }
}
