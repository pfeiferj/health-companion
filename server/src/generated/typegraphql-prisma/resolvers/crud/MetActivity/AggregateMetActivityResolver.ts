import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMetActivityArgs } from "./args/AggregateMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { AggregateMetActivity } from "../../outputs/AggregateMetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class AggregateMetActivityResolver {
  @TypeGraphQL.Query(_returns => AggregateMetActivity, {
    nullable: false
  })
  async aggregateMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMetActivityArgs): Promise<AggregateMetActivity> {
    return getPrismaFromContext(ctx).metActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
