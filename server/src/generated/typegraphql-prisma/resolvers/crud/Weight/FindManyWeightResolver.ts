import * as TypeGraphQL from "type-graphql";
import { FindManyWeightArgs } from "./args/FindManyWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class FindManyWeightResolver {
  @TypeGraphQL.Query(_returns => [Weight], {
    nullable: false
  })
  async weights(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyWeightArgs): Promise<Weight[]> {
    return getPrismaFromContext(ctx).weight.findMany(args);
  }
}
