import * as TypeGraphQL from "type-graphql";
import { UpdateManyCompletedExerciseArgs } from "./args/UpdateManyCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class UpdateManyCompletedExerciseResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompletedExerciseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).completedExercise.updateMany(args);
  }
}
