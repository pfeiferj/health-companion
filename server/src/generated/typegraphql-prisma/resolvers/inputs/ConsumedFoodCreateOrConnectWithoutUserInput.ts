import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodCreateWithoutUserInput } from "../inputs/ConsumedFoodCreateWithoutUserInput";
import { ConsumedFoodWhereUniqueInput } from "../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereUniqueInput, {
    nullable: false
  })
  where!: ConsumedFoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsumedFoodCreateWithoutUserInput, {
    nullable: false
  })
  create!: ConsumedFoodCreateWithoutUserInput;
}
