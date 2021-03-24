import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightCreateInput } from "../../../inputs/WeightCreateInput";

@TypeGraphQL.ArgsType()
export class CreateWeightArgs {
  @TypeGraphQL.Field(_type => WeightCreateInput, {
    nullable: false
  })
  data!: WeightCreateInput;
}
