import * as TypeGraphQL from "type-graphql";
import { FindFirstWeightArgs } from "./args/FindFirstWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class FindFirstWeightResolver {
  @TypeGraphQL.Query(_returns => Weight, {
    nullable: true
  })
  async findFirstWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstWeightArgs): Promise<Weight | null> {
    return getPrismaFromContext(ctx).weight.findFirst(args);
  }
}
