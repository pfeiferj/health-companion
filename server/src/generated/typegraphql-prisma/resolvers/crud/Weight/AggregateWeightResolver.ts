import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWeightArgs } from "./args/AggregateWeightArgs";
import { Weight } from "../../../models/Weight";
import { AggregateWeight } from "../../outputs/AggregateWeight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class AggregateWeightResolver {
  @TypeGraphQL.Query(_returns => AggregateWeight, {
    nullable: false
  })
  async aggregateWeight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWeightArgs): Promise<AggregateWeight> {
    return getPrismaFromContext(ctx).weight.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
