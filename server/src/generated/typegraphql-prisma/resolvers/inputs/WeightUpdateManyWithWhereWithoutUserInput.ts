import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightScalarWhereInput } from "../inputs/WeightScalarWhereInput";
import { WeightUpdateManyMutationInput } from "../inputs/WeightUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => WeightScalarWhereInput, {
    nullable: false
  })
  where!: WeightScalarWhereInput;

  @TypeGraphQL.Field(_type => WeightUpdateManyMutationInput, {
    nullable: false
  })
  data!: WeightUpdateManyMutationInput;
}
