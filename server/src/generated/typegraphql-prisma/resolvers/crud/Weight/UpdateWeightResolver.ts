import * as TypeGraphQL from "type-graphql";
import { UpdateWeightArgs } from "./args/UpdateWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class UpdateWeightResolver {
  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: true
  })
  async updateWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.update(args);
  }
}
