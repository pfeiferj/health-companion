import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightUpdateInput } from "../../../inputs/WeightUpdateInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateWeightArgs {
  @TypeGraphQL.Field(_type => WeightUpdateInput, {
    nullable: false
  })
  data!: WeightUpdateInput;

  @TypeGraphQL.Field(_type => WeightWhereUniqueInput, {
    nullable: false
  })
  where!: WeightWhereUniqueInput;
}
