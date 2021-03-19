import * as TypeGraphQL from "type-graphql";
import { UpdateManyMetActivitiesArgs } from "./args/UpdateManyMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class UpdateManyMetActivitiesResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMetActivitiesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metActivities.updateMany(args);
  }
}
