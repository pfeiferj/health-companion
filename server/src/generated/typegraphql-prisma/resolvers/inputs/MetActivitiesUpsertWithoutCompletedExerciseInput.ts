import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivitiesCreateWithoutCompletedExerciseInput } from "../inputs/MetActivitiesCreateWithoutCompletedExerciseInput";
import { MetActivitiesUpdateWithoutCompletedExerciseInput } from "../inputs/MetActivitiesUpdateWithoutCompletedExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivitiesUpsertWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivitiesUpdateWithoutCompletedExerciseInput, {
    nullable: false
  })
  update!: MetActivitiesUpdateWithoutCompletedExerciseInput;

  @TypeGraphQL.Field(_type => MetActivitiesCreateWithoutCompletedExerciseInput, {
    nullable: false
  })
  create!: MetActivitiesCreateWithoutCompletedExerciseInput;
}
