import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWeightArgs {
  @TypeGraphQL.Field(_type => WeightWhereInput, {
    nullable: true
  })
  where?: WeightWhereInput | undefined;
}
