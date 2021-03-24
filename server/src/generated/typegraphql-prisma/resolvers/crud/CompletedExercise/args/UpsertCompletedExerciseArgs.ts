import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseCreateInput } from "../../../inputs/CompletedExerciseCreateInput";
import { CompletedExerciseUpdateInput } from "../../../inputs/CompletedExerciseUpdateInput";
import { CompletedExerciseWhereUniqueInput } from "../../../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: CompletedExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompletedExerciseCreateInput, {
    nullable: false
  })
  create!: CompletedExerciseCreateInput;

  @TypeGraphQL.Field(_type => CompletedExerciseUpdateInput, {
    nullable: false
  })
  update!: CompletedExerciseUpdateInput;
}
