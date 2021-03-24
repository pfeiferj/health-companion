import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateOrConnectWithoutMetActivityInput } from "../inputs/CompletedExerciseCreateOrConnectWithoutMetActivityInput";
import { CompletedExerciseCreateWithoutMetActivityInput } from "../inputs/CompletedExerciseCreateWithoutMetActivityInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseCreateNestedManyWithoutMetActivityInput {
  @TypeGraphQL.Field(_type => [CompletedExerciseCreateWithoutMetActivityInput], {
    nullable: true
  })
  create?: CompletedExerciseCreateWithoutMetActivityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseCreateOrConnectWithoutMetActivityInput], {
    nullable: true
  })
  connectOrCreate?: CompletedExerciseCreateOrConnectWithoutMetActivityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: CompletedExerciseWhereUniqueInput[] | undefined;
}
