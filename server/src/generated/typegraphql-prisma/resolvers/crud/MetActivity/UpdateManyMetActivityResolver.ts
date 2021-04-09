import * as TypeGraphQL from "type-graphql";
import { UpdateManyMetActivityArgs } from "./args/UpdateManyMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class UpdateManyMetActivityResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMetActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivity.updateMany(args);
  }
}
