import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodWhereInput } from "../../../inputs/ConsumedFoodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereInput, {
    nullable: true
  })
  where?: ConsumedFoodWhereInput | undefined;
}
