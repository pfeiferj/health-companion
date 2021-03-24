import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutWeightInput } from "../inputs/UserCreateNestedOneWithoutWeightInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weight!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  loggedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  time?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWeightInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutWeightInput;
}
