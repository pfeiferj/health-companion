import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodUpdateManyMutationInput } from "../../../inputs/ConsumedFoodUpdateManyMutationInput";
import { ConsumedFoodWhereInput } from "../../../inputs/ConsumedFoodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsumedFoodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ConsumedFoodWhereInput, {
    nullable: true
  })
  where?: ConsumedFoodWhereInput | undefined;
}
