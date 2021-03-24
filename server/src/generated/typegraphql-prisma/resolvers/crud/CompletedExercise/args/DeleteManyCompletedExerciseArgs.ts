import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseWhereInput } from "../../../inputs/CompletedExerciseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereInput, {
    nullable: true
  })
  where?: CompletedExerciseWhereInput | undefined;
}
