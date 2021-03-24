import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCompletedExerciseInput } from "../inputs/UserCreateOrConnectWithoutCompletedExerciseInput";
import { UserCreateWithoutCompletedExerciseInput } from "../inputs/UserCreateWithoutCompletedExerciseInput";
import { UserUpdateWithoutCompletedExerciseInput } from "../inputs/UserUpdateWithoutCompletedExerciseInput";
import { UserUpsertWithoutCompletedExerciseInput } from "../inputs/UserUpsertWithoutCompletedExerciseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCompletedExerciseInput, {
    nullable: true
  })
  create?: UserCreateWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCompletedExerciseInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCompletedExerciseInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCompletedExerciseInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCompletedExerciseInput | undefined;
}
