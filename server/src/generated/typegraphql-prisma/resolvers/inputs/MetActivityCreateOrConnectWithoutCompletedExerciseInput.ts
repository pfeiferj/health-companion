import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityCreateWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateWithoutCompletedExerciseInput";
import { MetActivityWhereUniqueInput } from "../inputs/MetActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivityCreateOrConnectWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivityWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => MetActivityCreateWithoutCompletedExerciseInput, {
    nullable: false
  })
  create!: MetActivityCreateWithoutCompletedExerciseInput;
}
