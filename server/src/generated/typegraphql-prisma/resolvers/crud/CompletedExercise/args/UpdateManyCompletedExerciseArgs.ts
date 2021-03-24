import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseUpdateManyMutationInput } from "../../../inputs/CompletedExerciseUpdateManyMutationInput";
import { CompletedExerciseWhereInput } from "../../../inputs/CompletedExerciseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseUpdateManyMutationInput, {
    nullable: false
  })
  data!: CompletedExerciseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CompletedExerciseWhereInput, {
    nullable: true
  })
  where?: CompletedExerciseWhereInput | undefined;
}
