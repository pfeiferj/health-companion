import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseListRelationFilter } from "../inputs/CompletedExerciseListRelationFilter";
import { ConsumedFoodListRelationFilter } from "../inputs/ConsumedFoodListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WeightListRelationFilter } from "../inputs/WeightListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  units?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CompletedExerciseListRelationFilter, {
    nullable: true
  })
  CompletedExercise?: CompletedExerciseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WeightListRelationFilter, {
    nullable: true
  })
  Weight?: WeightListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsumedFoodListRelationFilter, {
    nullable: true
  })
  ConsumedFood?: ConsumedFoodListRelationFilter | undefined;
}
