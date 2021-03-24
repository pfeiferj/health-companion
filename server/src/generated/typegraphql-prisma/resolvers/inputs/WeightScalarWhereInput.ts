import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightScalarWhereInput {
  @TypeGraphQL.Field(_type => [WeightScalarWhereInput], {
    nullable: true
  })
  AND?: WeightScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightScalarWhereInput], {
    nullable: true
  })
  OR?: WeightScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightScalarWhereInput], {
    nullable: true
  })
  NOT?: WeightScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  weight?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  loggedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  time?: DateTimeFilter | undefined;
}
