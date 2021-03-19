import * as TypeGraphQL from "type-graphql";
import { UpdateMetActivitiesArgs } from "./args/UpdateMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class UpdateMetActivitiesResolver {
  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: true
  })
  async updateMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.update(args);
  }
}
