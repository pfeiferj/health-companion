import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMetActivitiesArgs } from "./args/AggregateMetActivitiesArgs";
import { MetActivities } from "../../../models/MetActivities";
import { AggregateMetActivities } from "../../outputs/AggregateMetActivities";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class AggregateMetActivitiesResolver {
  @TypeGraphQL.Query(_returns => AggregateMetActivities, {
    nullable: false
  })
  async aggregateMetActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMetActivitiesArgs): Promise<AggregateMetActivities> {
    return getPrismaFromContext(ctx).metActivities.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
