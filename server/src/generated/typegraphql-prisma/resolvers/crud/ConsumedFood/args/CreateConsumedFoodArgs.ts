import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodCreateInput } from "../../../inputs/ConsumedFoodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodCreateInput, {
    nullable: false
  })
  data!: ConsumedFoodCreateInput;
}
