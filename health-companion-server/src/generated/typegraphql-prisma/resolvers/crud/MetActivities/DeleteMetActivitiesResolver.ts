import * as TypeGraphQL from "type-graphql";
import { DeleteMetActivitiesArgs } from "./args/DeleteMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class DeleteMetActivitiesResolver {
  @TypeGraphQL.Mutation(_returns => MetActivities, {
    nullable: true
  })
  async deleteMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMetActivitiesArgs): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).metActivities.delete(args);
  }
}
