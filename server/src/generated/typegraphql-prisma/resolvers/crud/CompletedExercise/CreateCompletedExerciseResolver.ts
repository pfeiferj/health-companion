import * as TypeGraphQL from "type-graphql";
import { CreateCompletedExerciseArgs } from "./args/CreateCompletedExerciseArgs";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class CreateCompletedExerciseResolver {
  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: false
  })
  async createCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCompletedExerciseArgs): Promise<CompletedExercise> {
    return getPrismaFromContext(ctx).completedExercise.create(args);
  }
}
