import * as TypeGraphQL from "type-graphql";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { MetActivity } from "../../../models/MetActivity";
import { MetActivityCompletedExerciseArgs } from "./args/MetActivityCompletedExerciseArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class MetActivityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CompletedExercise], {
    nullable: false
  })
  async CompletedExercise(@TypeGraphQL.Root() metActivity: MetActivity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MetActivityCompletedExerciseArgs): Promise<CompletedExercise[]> {
    return getPrismaFromContext(ctx).metActivity.findUnique({
      where: {
        id: metActivity.id,
      },
    }).CompletedExercise(args);
  }
}
