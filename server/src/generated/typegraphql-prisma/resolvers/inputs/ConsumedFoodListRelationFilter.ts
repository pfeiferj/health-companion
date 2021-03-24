import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodWhereInput } from "../inputs/ConsumedFoodWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodListRelationFilter {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereInput, {
    nullable: true
  })
  every?: ConsumedFoodWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsumedFoodWhereInput, {
    nullable: true
  })
  some?: ConsumedFoodWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsumedFoodWhereInput, {
    nullable: true
  })
  none?: ConsumedFoodWhereInput | undefined;
}
