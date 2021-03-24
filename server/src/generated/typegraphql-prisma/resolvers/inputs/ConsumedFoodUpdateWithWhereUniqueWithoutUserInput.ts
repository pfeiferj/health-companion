import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodUpdateWithoutUserInput } from "../inputs/ConsumedFoodUpdateWithoutUserInput";
import { ConsumedFoodWhereUniqueInput } from "../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereUniqueInput, {
    nullable: false
  })
  where!: ConsumedFoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsumedFoodUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ConsumedFoodUpdateWithoutUserInput;
}
