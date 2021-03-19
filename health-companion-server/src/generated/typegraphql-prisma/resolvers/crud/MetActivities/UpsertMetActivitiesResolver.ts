import * as TypeGraphQL from "type-graphql";
import { UpsertMetActivitiesArgs } from "./args/UpsertMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class UpsertMetActivitiesResolver {
  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: false
  })
  async upsertMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMetActivitiesArgs): Promise<MetActivities> {
    return getPrismaFromContext(ctx).metActivities.upsert(args);
  }
}
