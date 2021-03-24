import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodUpdateInput } from "../../../inputs/ConsumedFoodUpdateInput";
import { ConsumedFoodWhereUniqueInput } from "../../../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodUpdateInput, {
    nullable: false
  })
  data!: ConsumedFoodUpdateInput;

  @TypeGraphQL.Field(_type => ConsumedFoodWhereUniqueInput, {
    nullable: false
  })
  where!: ConsumedFoodWhereUniqueInput;
}
