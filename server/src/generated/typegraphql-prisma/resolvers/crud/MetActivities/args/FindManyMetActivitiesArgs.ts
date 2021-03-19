import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesOrderByInput } from "../../../inputs/MetActivitiesOrderByInput";
import { MetActivitiesWhereInput } from "../../../inputs/MetActivitiesWhereInput";
import { MetActivitiesWhereUniqueInput } from "../../../inputs/MetActivitiesWhereUniqueInput";
import { MetActivitiesScalarFieldEnum } from "../../../../enums/MetActivitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesWhereInput, {
    nullable: true
  })
  where?: MetActivitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MetActivitiesOrderByInput], {
    nullable: true
  })
  orderBy?: MetActivitiesOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MetActivitiesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MetActivitiesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MetActivitiesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "metId" | "mets" | "type" | "name"> | undefined;
}
