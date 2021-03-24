import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWeightInput } from "../inputs/UserCreateWithoutWeightInput";
import { UserUpdateWithoutWeightInput } from "../inputs/UserUpdateWithoutWeightInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutWeightInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWeightInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWeightInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWeightInput, {
    nullable: false
  })
  create!: UserCreateWithoutWeightInput;
}
