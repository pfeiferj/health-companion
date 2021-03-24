import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateNestedManyWithoutMetActivityInput } from "../inputs/CompletedExerciseCreateNestedManyWithoutMetActivityInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivitiesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  metId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  mets!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CompletedExerciseCreateNestedManyWithoutMetActivityInput, {
    nullable: true
  })
  CompletedExercise?: CompletedExerciseCreateNestedManyWithoutMetActivityInput | undefined;
}
