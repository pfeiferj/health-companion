import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeightOrderByInput } from "../../../inputs/WeightOrderByInput";
import { WeightWhereInput } from "../../../inputs/WeightWhereInput";
import { WeightWhereUniqueInput } from "../../../inputs/WeightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWeightArgs {
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
}
