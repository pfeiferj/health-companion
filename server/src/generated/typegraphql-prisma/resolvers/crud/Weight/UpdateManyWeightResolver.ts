import * as TypeGraphQL from "type-graphql";
import { UpdateManyWeightArgs } from "./args/UpdateManyWeightArgs";
import { Weight } from "../../../models/Weight";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class UpdateManyWeightResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyWeightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).weight.updateMany(args);
  }
}
