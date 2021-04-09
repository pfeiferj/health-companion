import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityCreateWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateWithoutCompletedExerciseInput";
import { MetActivityUpdateWithoutCompletedExerciseInput } from "../inputs/MetActivityUpdateWithoutCompletedExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivityUpsertWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivityUpdateWithoutCompletedExerciseInput, {
    nullable: false
  })
  update!: MetActivityUpdateWithoutCompletedExerciseInput;

  @TypeGraphQL.Field(_type => MetActivityCreateWithoutCompletedExerciseInput, {
    nullable: false
  })
  create!: MetActivityCreateWithoutCompletedExerciseInput;
}
