import * as TypeGraphQL from "type-graphql";
import { UpdateCompletedExerciseArgs } from "./args/UpdateCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class UpdateCompletedExerciseResolver {
  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: true
  })
  async updateCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.update(args);
  }
}
