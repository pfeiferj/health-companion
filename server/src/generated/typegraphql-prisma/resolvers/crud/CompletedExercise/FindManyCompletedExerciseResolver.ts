import * as TypeGraphQL from "type-graphql";
import { FindManyCompletedExerciseArgs } from "./args/FindManyCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class FindManyCompletedExerciseResolver {
  @TypeGraphQL.Query(_returns => [CompletedExercise], {
    nullable: false
  })
  async completedExercises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompletedExerciseArgs): Promise<CompletedExercise[]> {
    return getPrismaFromContext(ctx).completedExercise.findMany(args);
  }
}
