import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutConsumedFoodInput } from "../inputs/UserCreateWithoutConsumedFoodInput";
import { UserUpdateWithoutConsumedFoodInput } from "../inputs/UserUpdateWithoutConsumedFoodInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutConsumedFoodInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutConsumedFoodInput, {
    nullable: false
  })
  update!: UserUpdateWithoutConsumedFoodInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutConsumedFoodInput, {
    nullable: false
  })
  create!: UserCreateWithoutConsumedFoodInput;
}
