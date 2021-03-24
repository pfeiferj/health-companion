import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseUpdateInput } from "../../../inputs/CompletedExerciseUpdateInput";
import { CompletedExerciseWhereUniqueInput } from "../../../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseUpdateInput, {
    nullable: false
  })
  data!: CompletedExerciseUpdateInput;

  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: CompletedExerciseWhereUniqueInput;
}
