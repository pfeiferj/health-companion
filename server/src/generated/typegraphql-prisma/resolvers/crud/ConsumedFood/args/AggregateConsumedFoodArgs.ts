import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsumedFoodOrderByInput } from "../../../inputs/ConsumedFoodOrderByInput";
import { ConsumedFoodWhereInput } from "../../../inputs/ConsumedFoodWhereInput";
import { ConsumedFoodWhereUniqueInput } from "../../../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateConsumedFoodArgs {
  @TypeGraphQL.Field(_type => ConsumedFoodWhereInput, {
    nullable: true
  })
  where?: ConsumedFoodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodOrderByInput], {
    nullable: true
  })
  orderBy?: ConsumedFoodOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsumedFoodWhereUniqueInput, {
    nullable: true
  })
  cursor?: ConsumedFoodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
