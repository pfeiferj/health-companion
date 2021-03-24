import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutConsumedFoodInput } from "../inputs/UserCreateNestedOneWithoutConsumedFoodInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  calories?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  protien?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fat?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  carbs?: number | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutConsumedFoodInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutConsumedFoodInput;
}
