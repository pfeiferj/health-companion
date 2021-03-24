import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWeightInput } from "../inputs/UserCreateOrConnectWithoutWeightInput";
import { UserCreateWithoutWeightInput } from "../inputs/UserCreateWithoutWeightInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutWeightInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWeightInput, {
    nullable: true
  })
  create?: UserCreateWithoutWeightInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWeightInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWeightInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
