import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseScalarWhereInput } from "../inputs/CompletedExerciseScalarWhereInput";
import { CompletedExerciseUpdateManyMutationInput } from "../inputs/CompletedExerciseUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseUpdateManyWithWhereWithoutMetActivityInput {
  @TypeGraphQL.Field(_type => CompletedExerciseScalarWhereInput, {
    nullable: false
  })
  where!: CompletedExerciseScalarWhereInput;

  @TypeGraphQL.Field(_type => CompletedExerciseUpdateManyMutationInput, {
    nullable: false
  })
  data!: CompletedExerciseUpdateManyMutationInput;
}
