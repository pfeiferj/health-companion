import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteWeightArgs {
  @TypeGraphQL.Field(_type => WeightWhereUniqueInput, {
    nullable: false
  })
  where!: WeightWhereUniqueInput;
}
