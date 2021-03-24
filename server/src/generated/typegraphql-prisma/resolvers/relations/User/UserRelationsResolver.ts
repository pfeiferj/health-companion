import * as TypeGraphQL from "type-graphql";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { User } from "../../../models/User";
import { Weight } from "../../../models/Weight";
import { UserCompletedExerciseArgs } from "./args/UserCompletedExerciseArgs";
import { UserConsumedFoodArgs } from "./args/UserConsumedFoodArgs";
import { UserWeightArgs } from "./args/UserWeightArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CompletedExercise], {
    nullable: false
  })
  async CompletedExercise(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCompletedExerciseArgs): Promise<CompletedExercise[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).CompletedExercise(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Weight], {
    nullable: false
  })
  async Weight(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserWeightArgs): Promise<Weight[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Weight(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ConsumedFood], {
    nullable: false
  })
  async ConsumedFood(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserConsumedFoodArgs): Promise<ConsumedFood[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ConsumedFood(args);
  }
}
