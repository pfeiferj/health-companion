import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivitiesWhereInput {
  @TypeGraphQL.Field(_type => [MetActivitiesWhereInput], {
    nullable: true
  })
  AND?: MetActivitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MetActivitiesWhereInput], {
    nullable: true
  })
  OR?: MetActivitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MetActivitiesWhereInput], {
    nullable: true
  })
  NOT?: MetActivitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  metId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  mets?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
