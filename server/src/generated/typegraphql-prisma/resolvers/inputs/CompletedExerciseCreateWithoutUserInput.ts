import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityCreateNestedOneWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateNestedOneWithoutCompletedExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MetActivityCreateNestedOneWithoutCompletedExerciseInput, {
    nullable: true
  })
  MetActivity?: MetActivityCreateNestedOneWithoutCompletedExerciseInput | undefined;
}
