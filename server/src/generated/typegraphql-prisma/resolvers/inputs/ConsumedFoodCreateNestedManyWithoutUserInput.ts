import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodCreateOrConnectWithoutUserInput } from "../inputs/ConsumedFoodCreateOrConnectWithoutUserInput";
import { ConsumedFoodCreateWithoutUserInput } from "../inputs/ConsumedFoodCreateWithoutUserInput";
import { ConsumedFoodWhereUniqueInput } from "../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ConsumedFoodCreateWithoutUserInput], {
    nullable: true
  })
  create?: ConsumedFoodCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ConsumedFoodCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsumedFoodWhereUniqueInput[] | undefined;
}
