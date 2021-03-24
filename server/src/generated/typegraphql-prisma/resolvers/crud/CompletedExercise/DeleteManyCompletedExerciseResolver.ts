import * as TypeGraphQL from "type-graphql";
import { DeleteManyCompletedExerciseArgs } from "./args/DeleteManyCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class DeleteManyCompletedExerciseResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompletedExerciseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).completedExercise.deleteMany(args);
  }
}
