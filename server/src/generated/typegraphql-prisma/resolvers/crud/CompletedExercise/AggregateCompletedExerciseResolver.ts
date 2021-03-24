import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCompletedExerciseArgs } from "./args/AggregateCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { AggregateCompletedExercise } from "../../outputs/AggregateCompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class AggregateCompletedExerciseResolver {
  @TypeGraphQL.Query(_returns => AggregateCompletedExercise, {
    nullable: false
  })
  async aggregateCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCompletedExerciseArgs): Promise<AggregateCompletedExercise> {
    return getPrismaFromContext(ctx).completedExercise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
