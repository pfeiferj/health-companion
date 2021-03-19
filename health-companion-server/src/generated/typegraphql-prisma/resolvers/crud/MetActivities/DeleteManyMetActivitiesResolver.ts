import * as TypeGraphQL from "type-graphql";
import { DeleteManyMetActivitiesArgs } from "./args/DeleteManyMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class DeleteManyMetActivitiesResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMetActivitiesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivities.deleteMany(args);
  }
}
