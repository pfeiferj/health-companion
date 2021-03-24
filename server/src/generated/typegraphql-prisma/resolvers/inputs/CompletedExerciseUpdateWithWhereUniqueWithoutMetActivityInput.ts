import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseUpdateWithoutMetActivityInput } from "../inputs/CompletedExerciseUpdateWithoutMetActivityInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseUpdateWithWhereUniqueWithoutMetActivityInput {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: CompletedExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompletedExerciseUpdateWithoutMetActivityInput, {
    nullable: false
  })
  data!: CompletedExerciseUpdateWithoutMetActivityInput;
}
