import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseCreateInput } from "../../../inputs/CompletedExerciseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseCreateInput, {
    nullable: false
  })
  data!: CompletedExerciseCreateInput;
}
