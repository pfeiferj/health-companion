import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodWhereUniqueInput } from "../../../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereUniqueInput, {
    nullable: false
  })
  where!: ConsumedFoodWhereUniqueInput;
}
