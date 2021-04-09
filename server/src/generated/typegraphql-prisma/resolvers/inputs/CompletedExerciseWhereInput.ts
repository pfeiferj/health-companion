import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MetActivityRelationFilter } from "../inputs/MetActivityRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseWhereInput {
  @TypeGraphQL.Field(_type => [CompletedExerciseWhereInput], {
    nullable: true
  })
  AND?: CompletedExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereInput], {
    nullable: true
  })
  OR?: CompletedExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereInput], {
    nullable: true
  })
  NOT?: CompletedExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MetActivityRelationFilter, {
    nullable: true
  })
  MetActivity?: MetActivityRelationFilter | undefined;

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
