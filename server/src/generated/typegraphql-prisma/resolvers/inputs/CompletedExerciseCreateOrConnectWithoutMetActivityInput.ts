import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateWithoutMetActivityInput } from "../inputs/CompletedExerciseCreateWithoutMetActivityInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseCreateOrConnectWithoutMetActivityInput {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: CompletedExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompletedExerciseCreateWithoutMetActivityInput, {
    nullable: false
  })
  create!: CompletedExerciseCreateWithoutMetActivityInput;
}
