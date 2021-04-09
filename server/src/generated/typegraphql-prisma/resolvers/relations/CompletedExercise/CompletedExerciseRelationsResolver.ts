import * as TypeGraphQL from "type-graphql";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { MetActivity } from "../../../models/MetActivity";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class CompletedExerciseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() completedExercise: CompletedExercise, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).completedExercise.findUnique({
      where: {
        id: completedExercise.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => MetActivity, {
    nullable: true
  })
  async MetActivity(@TypeGraphQL.Root() completedExercise: CompletedExercise, @TypeGraphQL.Ctx() ctx: any): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).completedExercise.findUnique({
      where: {
        id: completedExercise.id,
      },
    }).MetActivity({});
  }
}
