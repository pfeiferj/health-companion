import * as TypeGraphQL from "type-graphql";
import { FindUniqueWeightArgs } from "./args/FindUniqueWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class FindUniqueWeightResolver {
  @TypeGraphQL.Query(_returns => Weight, {
    nullable: true
  })
  async weight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.findUnique(args);
  }
}
