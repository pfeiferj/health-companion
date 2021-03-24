import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivitiesCreateNestedOneWithoutCompletedExerciseInput } from "../inputs/MetActivitiesCreateNestedOneWithoutCompletedExerciseInput";
import { UserCreateNestedOneWithoutCompletedExerciseInput } from "../inputs/UserCreateNestedOneWithoutCompletedExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCompletedExerciseInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutCompletedExerciseInput;

  @TypeGraphQL.Field(_type => MetActivitiesCreateNestedOneWithoutCompletedExerciseInput, {
    nullable: true
  })
  MetActivity?: MetActivitiesCreateNestedOneWithoutCompletedExerciseInput | undefined;
}
