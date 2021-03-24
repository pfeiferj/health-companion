import * as TypeGraphQL from "type-graphql";
import { FindFirstCompletedExerciseArgs } from "./args/FindFirstCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class FindFirstCompletedExerciseResolver {
  @TypeGraphQL.Query(_returns => CompletedExercise, {
    nullable: true
  })
  async findFirstCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.findFirst(args);
  }
}
