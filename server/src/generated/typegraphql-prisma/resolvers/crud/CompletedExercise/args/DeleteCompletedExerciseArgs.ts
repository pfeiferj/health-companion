import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseWhereUniqueInput } from "../../../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: CompletedExerciseWhereUniqueInput;
}
