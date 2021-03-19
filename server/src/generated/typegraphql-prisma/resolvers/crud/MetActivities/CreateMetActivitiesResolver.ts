import * as TypeGraphQL from "type-graphql";
import { CreateMetActivitiesArgs } from "./args/CreateMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class CreateMetActivitiesResolver {
  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: false
  })
  async createMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMetActivitiesArgs): Promise<MetActivities> {
    return getPrismaFromContext(ctx).metActivities.create(args);
  }
}
