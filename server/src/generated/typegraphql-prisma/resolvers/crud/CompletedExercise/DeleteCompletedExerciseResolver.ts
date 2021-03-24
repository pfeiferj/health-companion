import * as TypeGraphQL from "type-graphql";
import { DeleteCompletedExerciseArgs } from "./args/DeleteCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class DeleteCompletedExerciseResolver {
  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: true
  })
  async deleteCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.delete(args);
  }
}
