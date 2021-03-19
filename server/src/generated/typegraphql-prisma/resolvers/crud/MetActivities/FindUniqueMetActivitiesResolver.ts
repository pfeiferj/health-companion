import * as TypeGraphQL from "type-graphql";
import { FindUniqueMetActivitiesArgs } from "./args/FindUniqueMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class FindUniqueMetActivitiesResolver {
  @TypeGraphQL.Query(_returns => MetActivities, {
    nullable: true
  })
  async findUniqueMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.findUnique(args);
  }
}
