import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivitiesCreateWithoutCompletedExerciseInput } from "../inputs/MetActivitiesCreateWithoutCompletedExerciseInput";
import { MetActivitiesWhereUniqueInput } from "../inputs/MetActivitiesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivitiesCreateOrConnectWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivitiesWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MetActivitiesCreateWithoutCompletedExerciseInput, {
    nullable: false
  })
  create!: MetActivitiesCreateWithoutCompletedExerciseInput;
}
