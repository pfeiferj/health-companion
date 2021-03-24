import * as TypeGraphQL from "type-graphql";
import { FindUniqueCompletedExerciseArgs } from "./args/FindUniqueCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class FindUniqueCompletedExerciseResolver {
  @TypeGraphQL.Query(_returns => CompletedExercise, {
    nullable: true
  })
  async completedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.findUnique(args);
  }
}
