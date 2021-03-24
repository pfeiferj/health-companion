import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivitiesCreateOrConnectWithoutCompletedExerciseInput } from "../inputs/MetActivitiesCreateOrConnectWithoutCompletedExerciseInput";
import { MetActivitiesCreateWithoutCompletedExerciseInput } from "../inputs/MetActivitiesCreateWithoutCompletedExerciseInput";
import { MetActivitiesWhereUniqueInput } from "../inputs/MetActivitiesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivitiesCreateNestedOneWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivitiesCreateWithoutCompletedExerciseInput, {
    nullable: true
  })
  create?: MetActivitiesCreateWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivitiesCreateOrConnectWithoutCompletedExerciseInput, {
    nullable: true
  })
  connectOrCreate?: MetActivitiesCreateOrConnectWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivitiesWhereUniqueInput, {
    nullable: true
  })
  connect?: MetActivitiesWhereUniqueInput | undefined;
}
