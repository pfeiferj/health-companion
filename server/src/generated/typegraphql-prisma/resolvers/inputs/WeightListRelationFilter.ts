import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightWhereInput } from "../inputs/WeightWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightListRelationFilter {
  @TypeGraphQL.Field(_type => WeightWhereInput, {
    nullable: true
  })
  every?: WeightWhereInput | undefined;

  @TypeGraphQL.Field(_type => WeightWhereInput, {
    nullable: true
  })
  some?: WeightWhereInput | undefined;

  @TypeGraphQL.Field(_type => WeightWhereInput, {
    nullable: true
  })
  none?: WeightWhereInput | undefined;
}
