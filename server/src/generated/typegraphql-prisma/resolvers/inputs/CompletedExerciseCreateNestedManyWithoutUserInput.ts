import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateOrConnectWithoutUserInput } from "../inputs/CompletedExerciseCreateOrConnectWithoutUserInput";
import { CompletedExerciseCreateWithoutUserInput } from "../inputs/CompletedExerciseCreateWithoutUserInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CompletedExerciseCreateWithoutUserInput], {
    nullable: true
  })
  create?: CompletedExerciseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CompletedExerciseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: CompletedExerciseWhereUniqueInput[] | undefined;
}
