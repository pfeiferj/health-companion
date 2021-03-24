import * as TypeGraphQL from "type-graphql";
import { CreateWeightArgs } from "./args/CreateWeightArgs";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class CreateWeightResolver {
  @TypeGraphQL.Mutation(_returns => Weight, {
    nullable: false
  })
  async createWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateWeightArgs): Promise<Weight> {
    return getPrismaFromContext(ctx).weight.create(args);
  }
}
