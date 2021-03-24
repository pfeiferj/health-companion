import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightCreateWithoutUserInput } from "../inputs/WeightCreateWithoutUserInput";
import { WeightUpdateWithoutUserInput } from "../inputs/WeightUpdateWithoutUserInput";
import { WeightWhereUniqueInput } from "../inputs/WeightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WeightWhereUniqueInput, {
    nullable: false
  })
  where!: WeightWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeightUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WeightUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WeightCreateWithoutUserInput, {
    nullable: false
  })
  create!: WeightCreateWithoutUserInput;
}
