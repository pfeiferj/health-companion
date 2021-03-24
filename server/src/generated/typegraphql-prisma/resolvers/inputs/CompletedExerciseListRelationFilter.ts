import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseWhereInput } from "../inputs/CompletedExerciseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseListRelationFilter {
  @TypeGraphQL.Field(_type => CompletedExerciseWhereInput, {
    nullable: true
  })
  every?: CompletedExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompletedExerciseWhereInput, {
    nullable: true
  })
  some?: CompletedExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompletedExerciseWhereInput, {
    nullable: true
  })
  none?: CompletedExerciseWhereInput | undefined;
}
