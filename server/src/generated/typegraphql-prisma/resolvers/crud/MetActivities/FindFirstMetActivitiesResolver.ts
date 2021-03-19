import * as TypeGraphQL from "type-graphql";
import { FindFirstMetActivitiesArgs } from "./args/FindFirstMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class FindFirstMetActivitiesResolver {
  @TypeGraphQL.Query(_returns => MetActivities, {
    nullable: true
  })
  async findFirstMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.findFirst(args);
  }
}
