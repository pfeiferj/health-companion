import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightOrderByInput } from "../../../inputs/WeightOrderByInput";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";
import { WeightScalarFieldEnum } from "../../../../enums/WeightScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWeightArgs {
  @TypeGraphQL.Field(_type => WeightWhereInput, {
    nullable: true
  })
  where?: WeightWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WeightOrderByInput], {
    nullable: true
  })
  orderBy?: WeightOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => WeightWhereUniqueInput, {
    nullable: true
  })
  cursor?: WeightWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WeightScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "weight" | "loggedAt" | "time"> | undefined;
}
