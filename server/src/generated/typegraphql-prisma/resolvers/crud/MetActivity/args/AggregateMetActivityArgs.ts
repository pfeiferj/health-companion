import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivityOrderByInput } from "../../../inputs/MetActivityOrderByInput";
import { MetActivityWhereInput } from "../../../inputs/MetActivityWhereInput";
import { MetActivityWhereUniqueInput } from "../../../inputs/MetActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMetActivityArgs {
  @TypeGraphQL.Field(_type => MetActivityWhereInput, {
    nullable: true
  })
  where?: MetActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MetActivityOrderByInput], {
    nullable: true
  })
  orderBy?: MetActivityOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MetActivityWhereUniqueInput, {
    nullable: true
  })
  cursor?: MetActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
