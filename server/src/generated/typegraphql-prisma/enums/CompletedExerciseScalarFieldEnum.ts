import * as TypeGraphQL from "type-graphql";

export enum CompletedExerciseScalarFieldEnum {
  id = "id",
  userId = "userId",
  metActivityId = "metActivityId",
  notes = "notes",
  completedAt = "completedAt"
}
TypeGraphQL.registerEnumType(CompletedExerciseScalarFieldEnum, {
  name: "CompletedExerciseScalarFieldEnum",
  description: undefined,
});
