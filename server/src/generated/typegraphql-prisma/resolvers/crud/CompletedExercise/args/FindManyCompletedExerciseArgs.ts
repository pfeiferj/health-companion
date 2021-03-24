import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompletedExerciseOrderByInput } from "../../../inputs/CompletedExerciseOrderByInput";
import { CompletedExerciseWhereInput } from "../../../inputs/CompletedExerciseWhereInput";
import { CompletedExerciseWhereUniqueInput } from "../../../inputs/CompletedExerciseWhereUniqueInput";
import { CompletedExerciseScalarFieldEnum } from "../../../../enums/CompletedExerciseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCompletedExerciseArgs {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereInput, {
    nullable: true
  })
  where?: CompletedExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseOrderByInput], {
    nullable: true
  })
  orderBy?: CompletedExerciseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CompletedExerciseWhereUniqueInput, {
    nullable: true
  })
  cursor?: CompletedExerciseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "metActivityId" | "notes" | "completedAt"> | undefined;
}
