import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCompletedExerciseInput } from "../inputs/UserCreateWithoutCompletedExerciseInput";
import { UserUpdateWithoutCompletedExerciseInput } from "../inputs/UserUpdateWithoutCompletedExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCompletedExerciseInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCompletedExerciseInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCompletedExerciseInput, {
    nullable: false
  })
  create!: UserCreateWithoutCompletedExerciseInput;
}
