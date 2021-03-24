import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutConsumedFoodInput } from "../inputs/UserCreateOrConnectWithoutConsumedFoodInput";
import { UserCreateWithoutConsumedFoodInput } from "../inputs/UserCreateWithoutConsumedFoodInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutConsumedFoodInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutConsumedFoodInput, {
    nullable: true
  })
  create?: UserCreateWithoutConsumedFoodInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutConsumedFoodInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutConsumedFoodInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
