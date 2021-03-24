import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightCreateWithoutUserInput } from "../inputs/WeightCreateWithoutUserInput";
import { WeightWhereUniqueInput } from "../inputs/WeightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => WeightWhereUniqueInput, {
    nullable: false
  })
  where!: WeightWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeightCreateWithoutUserInput, {
    nullable: false
  })
  create!: WeightCreateWithoutUserInput;
}
