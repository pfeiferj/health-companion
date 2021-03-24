import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightUpdateManyMutationInput } from "../../../inputs/WeightUpdateManyMutationInput";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWeightArgs {
  @TypeGraphQL.Field(_type => WeightUpdateManyMutationInput, {
    nullable: false
  })
  data!: WeightUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WeightWhereInput, {
    nullable: true
  })
  where?: WeightWhereInput | undefined;
}
