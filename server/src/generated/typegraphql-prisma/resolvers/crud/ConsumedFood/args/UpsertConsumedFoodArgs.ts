import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodCreateInput } from "../../../inputs/ConsumedFoodCreateInput";
import { ConsumedFoodUpdateInput } from "../../../inputs/ConsumedFoodUpdateInput";
import { ConsumedFoodWhereUniqueInput } from "../../../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereUniqueInput, {
    nullable: false
  })
  where!: ConsumedFoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsumedFoodCreateInput, {
    nullable: false
  })
  create!: ConsumedFoodCreateInput;

  @TypeGraphQL.Field(_type => ConsumedFoodUpdateInput, {
    nullable: false
  })
  update!: ConsumedFoodUpdateInput;
}
