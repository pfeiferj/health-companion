import * as TypeGraphQL from "type-graphql";
import { DeleteManyMetActivityArgs } from "./args/DeleteManyMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class DeleteManyMetActivityResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMetActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivity.deleteMany(args);
  }
}
