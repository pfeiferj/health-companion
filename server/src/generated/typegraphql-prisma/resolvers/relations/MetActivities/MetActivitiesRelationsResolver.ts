import * as TypeGraphQL from "type-graphql";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { MetActivities } from "../../../models/MetActivities";
import { MetActivitiesCompletedExerciseArgs } from "./args/MetActivitiesCompletedExerciseArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivities)
export class MetActivitiesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CompletedExercise], {
    nullable: false
  })
  async CompletedExercise(@TypeGraphQL.Root() metActivities: MetActivities, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MetActivitiesCompletedExerciseArgs): Promise<CompletedExercise[]> {
    return getPrismaFromContext(ctx).metActivities.findUnique({
      where: {
        id: metActivities.id,
      },
    }).CompletedExercise(args);
  }
}
