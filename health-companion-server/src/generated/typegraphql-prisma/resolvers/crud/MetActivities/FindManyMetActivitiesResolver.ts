import * as TypeGraphQL from "type-graphql";
import { FindManyMetActivitiesArgs } from "./args/FindManyMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class FindManyMetActivitiesResolver {
  @TypeGraphQL.Query(_returns => [MetActivities], {
    nullable: false
  })
  async findManyMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMetActivitiesArgs): Promise<MetActivities[]> {
    return getPrismaFromContext(ctx).metActivities.findMany(args);
  }
}
