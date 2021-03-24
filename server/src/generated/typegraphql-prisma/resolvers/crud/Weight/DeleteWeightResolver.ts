import * as TypeGraphQL from "type-graphql";
import { DeleteWeightArgs } from "./args/DeleteWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class DeleteWeightResolver {
  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: true
  })
  async deleteWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.delete(args);
  }
}
