import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityWhereInput } from "../inputs/MetActivityWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivityRelationFilter {
  @TypeGraphQL.Field(_type => MetActivityWhereInput, {
    nullable: true
  })
  is?: MetActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityWhereInput, {
    nullable: true
  })
  isNot?: MetActivityWhereInput | undefined;
}
