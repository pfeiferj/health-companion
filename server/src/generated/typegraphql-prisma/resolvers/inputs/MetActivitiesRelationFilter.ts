import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivitiesWhereInput } from "../inputs/MetActivitiesWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivitiesRelationFilter {
  @TypeGraphQL.Field(_type => MetActivitiesWhereInput, {
    nullable: true
  })
  is?: MetActivitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MetActivitiesWhereInput, {
    nullable: true
  })
  isNot?: MetActivitiesWhereInput | undefined;
}
