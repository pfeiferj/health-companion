import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodScalarWhereInput } from "../inputs/ConsumedFoodScalarWhereInput";
import { ConsumedFoodUpdateManyMutationInput } from "../inputs/ConsumedFoodUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ConsumedFoodScalarWhereInput, {
    nullable: false
  })
  where!: ConsumedFoodScalarWhereInput;

  @TypeGraphQL.Field(_type => ConsumedFoodUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsumedFoodUpdateManyMutationInput;
}
