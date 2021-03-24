import * as TypeGraphQL from "type-graphql";
import { UpsertCompletedExerciseArgs } from "./args/UpsertCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class UpsertCompletedExerciseResolver {
  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: false
  })
  async upsertCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCompletedExerciseArgs): Promise<CompletedExercise> {
    return getPrismaFromContext(ctx).completedExercise.upsert(args);
  }
}
