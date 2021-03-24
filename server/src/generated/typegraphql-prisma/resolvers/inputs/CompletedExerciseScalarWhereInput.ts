import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseScalarWhereInput {
  @TypeGraphQL.Field(_type => [CompletedExerciseScalarWhereInput], {
    nullable: true
  })
  AND?: CompletedExerciseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseScalarWhereInput], {
    nullable: true
  })
  OR?: CompletedExerciseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseScalarWhereInput], {
    nullable: true
  })
  NOT?: CompletedExerciseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  metActivityId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  completedAt?: DateTimeFilter | undefined;
}
