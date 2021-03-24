import * as TypeGraphQL from "type-graphql";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { MetActivities } from "../../../models/MetActivities";
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

  @TypeGraphQL.FieldResolver(_type => MetActivities, {
    nullable: true
  })
  async MetActivity(@TypeGraphQL.Root() completedExercise: CompletedExercise, @TypeGraphQL.Ctx() ctx: any): Promise<MetActivities | null> {
    return getPrismaFromContext(ctx).completedExercise.findUnique({
      where: {
        id: completedExercise.id,
      },
    }).MetActivity({});
  }
}
