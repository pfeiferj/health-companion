import * as TypeGraphQL from "type-graphql";
import { UpsertWeightArgs } from "./args/UpsertWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class UpsertWeightResolver {
  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: false
  })
  async upsertWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertWeightArgs): Promise<Weight> {
    return getPrismaFromContext(ctx).weight.upsert(args);
  }
}
