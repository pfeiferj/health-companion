import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseUpdateWithoutUserInput } from "../inputs/CompletedExerciseUpdateWithoutUserInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: CompletedExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompletedExerciseUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CompletedExerciseUpdateWithoutUserInput;
}
