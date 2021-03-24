import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightCreateInput } from "../../../inputs/WeightCreateInput";
import { WeightUpdateInput } from "../../../inputs/WeightUpdateInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertWeightArgs {
  @TypeGraphQL.Field(_type => WeightWhereUniqueInput, {
    nullable: false
  })
  where!: WeightWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeightCreateInput, {
    nullable: false
  })
  create!: WeightCreateInput;

  @TypeGraphQL.Field(_type => WeightUpdateInput, {
    nullable: false
  })
  update!: WeightUpdateInput;
}
